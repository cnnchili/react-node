# react-node
创建项目的步骤<br/>
1.npm install -g create-react-app  全局安装脚手架<br/>
2.create-react-app admain-exercise 初始化项目文件<br/>
3.运行命令 npm start 打包命令 npm run build<br/>
4.本地测试运行需要 npm install -g serve<br/>
5.serve用来跑打包文件。先npm run build 再 serve build<br/>
6.在github上面创建仓库，用于保存项目  或者现在github上面创建一个项目，然后拉取到本地，在创建项目，提交<br/>
  6.1 查看git文件是否存在，不存在 git init<br/>
  6.2 提交代码 git add . 交到缓存区<br/>
  6.3 提交代码 git commit -m "init app"<br/>
  6.4 提交到github git remote add origin GitHub地址<br/>
  6.5 提交到对应分支 git push origin master<br/>
7.在src文件下创建index.js作为入口文件 创建app.js作为应用根组件<br/>
8.在index.js中引入app.js实现的组件，并渲染到index页面  方法是ReactDom('<app/>', public中index.hmtl启动页中的root id 方法是document.getElementbyId('root'))<br/>
9.引入antd   yarn add antd   引入antd包，实现按需打包    yarn add react-app-rewired customize-cra babel-plugin-import<br/>
  在代码中引用antd   import { Button } from 'antd'  在再index.js中引入antd样式(全局引入)   import 'antd/dist/antd.css'<br/>
  定义加载配置的js模块 config-overrides.js   之后就不用引入antd的样式<br/>
  再更改package.json 将scripts中的react-scripts换成react-app-rewired<br/>
10.引入less  yarn add less less-loader   修正config-overrides.js<br/>
11.引入路由 yarn add react-router-dom<br/>
12.pages文件夹下创建两个页面的主文件夹  login和admin 再映射成路由 在app.js中<br/>
   在app.js中 先引入路由  import { BrowserRouter, Route } from 'react-router-dom'<br/>
   在render中编写路由 path component<br/>
   在引入Switch 为的是  在某一个时间点只匹配一个路由<br/>
   HashRouter与BrowserRouter的区别：HashRouter的链接上面多了一个#<br/>
13.登陆页面<br/>