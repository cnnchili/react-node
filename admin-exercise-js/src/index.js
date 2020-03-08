// 入口文件
import React from 'react'
import ReactDom from 'react-dom'

import App from './app'
// import 'antd/dist/antd.css'

// 将app组件标签渲染到index页面的div上面
ReactDom.render(<App/>, document.getElementById('root'))
