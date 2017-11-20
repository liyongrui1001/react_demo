import React, { Component } from 'react';

export default class Xiangqing extends Component{
  render(){
    return(
      <li className="tab_content show">
        <img src="/src/assets/images/xq01.png"/>
        <img src="/src/assets/images/xq02.jpg"/>
        <img src={"/src/assets/images/cp"+this.props.aid+".png"}/>
      </li>
    )
  }
}