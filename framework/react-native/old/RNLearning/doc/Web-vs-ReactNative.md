- 必须分析源码或者实际测试后，才能使用好组件，例如 ActivityIndicator 是个 View 类型的组件，只看文档的话还以为就是个加载提示符；
- ...

# Image vs img

- Image 需要考虑资源是本地图片还是网络图片，该放在哪里处理
- Image 组件在本质上是个 View，图片内嵌在其中且存在缩放模式，而 img 纯粹是个图片，不需要考虑缩放 
