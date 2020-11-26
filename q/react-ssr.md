> react提供的SSR方法有什么
- renderToString 方法渲染的时候带有 data-reactid 属性. 在浏览器访问页面的时候，main.js能识别到HTML的内容，不会执行React.createElement二次创建DOM。
- renderToStaticMarkup 则没有 data-reactid 属性，页面看上去干净点。在浏览器访问页面的时候，main.js不能识别到HTML内容，会执行main.js里面的React.createElement方法重新创建DOM。