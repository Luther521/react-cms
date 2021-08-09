/*
 * @Descripttion: 
 * @version: 
 * @Author: tjl
 * @Date: 2021-08-06 16:42:39
 * @LastEditors: tjl
 * @LastEditTime: 2021-08-09 15:45:22
 */
import React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch, HashRouter } from 'react-router-dom'
import App from './App'
import './common/style/frame.less'
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/404" component={Error} />
      <Route path="/" component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
)