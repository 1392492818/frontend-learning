/* eslint-disable no-restricted-syntax */
import pluginFactory from './pluginFactory';
import dispatchPlugin from './plugins/dispatch';
import effectsPlugin from './plugins/effects';
import createRedux from './redux';
import validate from './utils/validate';

const corePlugins = [dispatchPlugin, effectsPlugin];

/**
 * Rematch class
 *
 * an instance of Rematch generated by "init"
 */
export default class Rematch {
  config = undefined;
  models = undefined;
  plugins = [];
  pluginFactory = pluginFactory();

  constructor(config) {
    this.config = config;
    for (const plugin of corePlugins.concat(this.config.plugins)) {
      this.plugins.push(this.pluginFactory.create(plugin));
    }
    // preStore: middleware, model hooks
    this.forEachPlugin('middleware', (middleware) => {
      this.config.redux.middlewares.push(middleware);
    });
  }

  forEachPlugin(method, fn) {
    for (const plugin of this.plugins) {
      if (plugin[method]) {
        fn(plugin[method]);
      }
    }
  }

  getModels(models) {
    return Object.keys(models).map(name => ({
      name,
      ...models[name],
    }));
  }

  addModel(model) {
    validate([
      [!model, 'model config is required'],
      [typeof model.name !== 'string', 'model "name" [string] is required'],
      [model.state === undefined, 'model "state" is required'],
    ]);
    // run plugin model subscriptions
    this.forEachPlugin('onModel', onModel => onModel(model));
  }

  init() {
    // collect all models
    this.models = this.getModels(this.config.models);
    for (const model of this.models) {
      this.addModel(model);
    }
    // create a redux store with initialState
    // merge in additional extra reducers
    const redux = createRedux({
      redux: this.config.redux,
      models: this.models,
    });

    const rematchStore = {
      ...redux.store,
      // dynamic loading of models with `replaceReducer`
      model: (model) => {
        this.addModel(model);
        redux.mergeReducers(redux.createModelReducer(model));
        redux.store.replaceReducer(
          redux.createRootReducer(this.config.redux.rootReducers),
        );
      },
    };

    this.forEachPlugin('onStoreCreated', onStoreCreated =>
      onStoreCreated(rematchStore),
    );

    rematchStore.dispatch = this.pluginFactory.dispatch;

    return rematchStore;
  }
}
