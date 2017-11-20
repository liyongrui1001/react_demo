import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Footbar extends Component{
  render (){
    return(
      <footer>
        <Link to='/index' activeClassName="pick">
          <i className="icon icon-f1"></i>
          首页
        </Link>
        <Link to='/community' activeClassName="pick">
          <i className="icon icon-f2"></i>
          社区
        </Link>
        <Link to="/shoppingCart" activeClassName="pick">
          <i className="icon icon-f3"></i>
          购物车
        </Link>
        <Link to="/user" activeClassName="pick">
          <i className="icon icon-f4"></i>
          我
        </Link>
      </footer>
    )
  }
}