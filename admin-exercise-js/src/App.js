// 应用根组件
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Button } from 'antd'

import Login from './pages/login'
import Admin from './pages/admin'

export default class App extends Component {
//   handleClick = () => {
//     console.log(111)
//   }
  render() {
    // return <div>
    //   <Button type="primary" onClick={this.handleClick}>Primary</Button>
    // </div>
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
}  
}