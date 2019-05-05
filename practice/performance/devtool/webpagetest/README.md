# WebPagetest

- [官方网站](https://www.webpagetest.org)
- [官方文档](https://sites.google.com/a/webpagetest.org/docs/) / [中文文档](https://github.com/pwstrick/WebPagetest-Docs)
- https://github.com/WPO-Foundation/webpagetest

## 使用方法

### Simple Testing

简单测试：只能进行客户端和网络条件的设置

- `Test Configuration`：可以配置客户端和网络条件
- `Include Repeat View`：是否测试二次访问页面
- `Run Lighthouse Audit`：执行 Lighthouse 审查

### Advanced Testing

高阶测试：可以设置各种测试条件

- `Test Location`：测试的地理位置
- `Browser`：浏览器，不同地理位置所支持的浏览器不一致（Dulles, VA 支持的浏览器较全）
- `Test Connection`

    - `Connection`：限速

        - 56K Dial-Up (49/30 Kbps 120ms RTT)
        - Mobile Edge (240 Kbps/200 Kbps 840ms RTT)
        - 2G (280 Kbps/256 Kbps 800ms RTT)
        - 3G Slow (400 Kbps, 400ms RTT)
        - 3G (1.6 Mbps/768 Kbps 300ms RTT)
        - 3G Fast (1.6 Mbps/768 Kbps 150ms RTT)
        - 4G (9 Mbps, 170ms RTT)
        - LTE (12 Mbps/12 Mbps 70ms RTT)
        - DSL (1.5 Mbps/384 Kbps 50ms RTT)：
        - Cable (5/1 Mbps 28ms RTT)
        - FIOS (20/5 Mbps 4ms RTT)
        - Native Connection (No Traffic Shaping)
        - Custom

    - `Number of Tests to Run`：运行多少组测试
    - `Repeat View`：是否测试二次访问
    - `Capture Video`：是否录制视频

- `Advanced`：客户端配置，例如：是否启动 JS，定制 User Agent 等
- `Chromium`：Chrome 特有的一些配置，如：Light House，Timeline 等
- `Auth`：权限
- `Script`：脚本
- `Block`：阻塞请求
- `SPOF`：模拟指定域名的错误
- `Custom`：定制指标和关键元素

### Visual Compare

视图对比：对比两个不同网页的性能

### Traceroute

跟踪路由

## 结果分析

- Grade

    - Lighthouse：使用 Google Chrome 的 LightHouse 测试得到的评分
    - First Byte Time：首字节时间
    - Keep-alive Enabled：是否开启了 HTTP Keep Alive
    - Compress Transfer：是否开启了 HTTP 压缩
    - Compress Images：是否压缩了图片
    - Cache static content：静态资源是否支持缓存
    - Effective use of CDN：CDN 是否有效

    ps：每个审查项都可以点击查看明细

- Summary：

    - 多轮测试的首次和二次访问平均加载时间
    - 各轮测试的首次和二次访问测试总结

        - `Timeline`：Chrome 开发者工具的 `Performance` 记录
        - `Processing Breakdown`：JavaScript 处理细分
        - `Trace`：追踪日志
        - `Waterfall`：瀑布流，类似于 Chrome 开发者工具的 `Network`
        - `Filmstrip View`：幻灯片视图，以幻灯片的形式显示各个时间点的屏幕截图
        - `Watch Video`：观看视频，实际的录制视频

- Details：请求瀑布流，类似于 Chrome 开发者工具的 `Network`，默认是多轮测试的首次访问平均值，在 Summary 那边可以选定查询某轮测试的 Details

    - Load Time：加载时间
    - Waterfall View：瀑布流视图
    - Connection View：连接视图
    - Request Details：请求明细

- Performance Review：性能指标审查

    - First Byte Time
    - Keep-Alive
    - GZIP Text
    - Compress Images
    - Use Progressive JPEGs
    - Cache Static
    - Use A CDN

- Content BreakDown：内容请求明细，按 MIME 类型分析请求数，内容大小和请求时间
- Domains：域名请求明细，按域名分析请求数，内容大小和请求时间
- Progress Breakdown：主线程的处理明细

    - 按执行类型分析时间：Scripting，Layout，Painting，Loading，
    - 按事件类型分析时间：Layout，EvaluateScript，FunctionCall，UpdateLayoutTree，EventDispatch，MinorGC，Paint，v8.compile，UpdateLayerTree，ParseHTML，ParseAuthorStyleSheet，PlatformResourceSendRequest，BlinkGC.AtomicPhase，MarkLoad，MarkDOMContent，CommitLoad，ResourceChangePriority，TimerFire

- ScreenShot：最终加载截图
- Image Analysis：图片分析，调用了 webspeedtest.cloudinary.com 提供的图片分析服务，可以分析首屏图片的大小是否压缩
- Request Map：请求链路图，调用了 requestmap.herokuapp.com 提供的网页请求链路图

ps：下面是结果分析中的一些术语

- `First View`：首次视图，会把浏览器的缓存和 Cookie 清除，表示访问者第一次访问该网页将体验到的情况。
- `Repeat View`：二次打开视图，会在首次视图测试后立即执行，不会清除任何内容，浏览器窗口在 `First View` 测试后关闭，然后启动新浏览器以执行 `Repeat View`测试，模拟的是用户离开页面后，马上再进入此页面的场景。
- `Load Time`：加载时间，从初始化请求到 `window.onload` 事件触发的时间；
- `First Byte`：首字节时间，从初始化请求到收到服务器响应的第一个节点所需的时间；
- `Start Render`：首次绘制时间，即白屏时间
- `Speed Index`：速度指数，参数 [Speed Index](https://sites.google.com/a/webpagetest.org/docs/using-webpagetest/metrics/speed-index)
- `Last Painted Hero`：最后一个关键元素绘制时间
- `First Interactive`：首次可交互时间
- `Document Complete`：文档加载完毕，即 `window.onload` 事件触发的时间；
- `Fully Loaded`：从初始化请求，到 `Document Complete` 后，2 秒内没有网络活动的时间，这包括在主网页加载后由`JavaScript` 触发的任何活动。
- `Requests`：浏览器针对页面上的内容发出的请求数；
- `Bytes In`：浏览器加载页面下载的数据量；
- `DOM Elements`：在测试结束时测试页面上的 DOM 元素的计数。
- `Visually Complete`：？
- `Time to First Byte`：TTFB，服务端响应时间

    不同于 `First Byte`，`Time to First Byte` 是指已经和服务端建立起 TCP 连接后开始请求到收到响应这段时间。

## 进阶用法

### 搭建私有服务器

- [Private Instances](https://github.com/WPO-Foundation/webpagetest-docs/blob/master/user/Private%20Instances/README.md)
- [WPO-Foundation/webpagetest](https://github.com/WPO-Foundation/webpagetest/tree/master/docker/local)
- [Local WebPagetest Using Docker](https://medium.com/@francis.john/local-webpagetest-using-docker-90441d7c2513)
- [Performance/WebPageTest/Run locally](https://wikitech.wikimedia.org/wiki/Performance/WebPageTest/Run_locally)
- [Web性能优化工具WebPageTest（三）——本地部署（Windows 7版本）](http://www.cnblogs.com/strick/p/6634637.html)
- [WebPageTest本地部署（Mac版本）](https://www.jianshu.com/p/7b67962aeef3)
- [WebPageTest部署到本地](https://blog.csdn.net/qq_24373725/article/details/80091532)
- [搭建 WebPageTest Private Instance](http://www.jeffxue.cn/2017/05/15/%E6%90%AD%E5%BB%BA-WebPageTest-Private-Instance/)
- [页面性能测量监控系统应用](https://hzxiaosheng.bitbucket.io/project/2014/07/25/web-page-performance-monitor/)
- [基于docker搭建webpagetest服务](https://cpselvis.github.io/2018/11/%E5%9F%BA%E4%BA%8EDocker%E6%90%AD%E5%BB%BAWebpagetest%E6%9C%8D%E5%8A%A1/)
- https://github.com/NicoPennec/vagrant-webpagetest

## 教程

- [WebPagetest：新手一眼看懂使用教程](https://cloud.tencent.com/developer/article/1361742)

## 其他

- [webpagetest-api](https://github.com/marcelduran/webpagetest-api)