/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * The examples provided by Facebook are for non-commercial testing and
 * evaluation purposes only.
 *
 * Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * @providesModule UIExplorerExampleContainer
 */
'use strict';

const React = require('react');
const {
  Platform,
  View,
  TouchableWithoutFeedback,
} = require('react-native');
const UIExplorerBlock = require('./UIExplorerBlock');
const UIExplorerPage = require('./UIExplorerPage');
const UIExplorerActions = require('./UIExplorerActions');

class UIExplorerExampleContainer extends React.Component {

  constructor(props) {
    super(props);

    this.renderExample = this.renderExample.bind(this);
    this.gotoExample = this.gotoExample.bind(this);
  }

  gotoExample(index) {
    this.props.onNavigate && this.props.onNavigate(UIExplorerActions.ExampleAction(`${this.props.id}.${index}`));
  }

  renderExample(example, i) {
    // Filter platform-specific examples
    var {title, description, platform} = example;
    if (platform) {
      if (Platform.OS !== platform) {
        return null;
      }
      title += ' (' + platform + ' only)';
    }
    const isRenderable = typeof example.render === 'function';
    return (
      <TouchableWithoutFeedback
        key={i}
        onPress={() => !isRenderable && this.gotoExample(i)}
      >
        <View>
          <UIExplorerBlock
            title={title}
            description={description}
          >
            {isRenderable ? example.render() : null}
          </UIExplorerBlock>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render(): React.Element<any> {
    if (!this.props.module.examples) {
      return <this.props.module onNavigate={this.props.onNavigate} />;
    }

    return (
      <UIExplorerPage title={this.props.title}>
        {this.props.module.examples.map(this.renderExample)}
      </UIExplorerPage>
    );
  }
}

module.exports = UIExplorerExampleContainer;
