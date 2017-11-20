import React, { Component } from 'react';
import Footbar from './Footbar'

export default class Login extends Component{
  render(){
    return(
      <div className='login'>
        <div>
          <header>
            <div className="header">
              <a href="javascript:window.history.back();"><i className="icon icon-return"></i></a>
              <h1>404</h1>
            </div>
          </header>
          <div id='header_b'></div>
        </div>
        <p id='err'>您所访问的页面不存在</p>
       <Footbar/>
      </div>
    )
  }
}