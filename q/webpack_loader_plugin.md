### loader
- loader是webpack用来加载和解析非js文件用的
- 采用链式调用,一步步将代码转换成需要的样子,一个loader只做一层转义

### plugin
- 完成loader无法完成的事情
- 监听webpack事件并改变输出结果