import React, { Component } from 'react';
import {Link} from "react-router";

import {ClassifyItem} from "./ClassifyItem";

export default class Classify extends Component{
  constructor(props){
    super(props);
    this.state={
      item:[
        {id:1,title:"潮流女装",component:<ClassifyItem/>},
        {id:2,title:"潮流男装",component:<ClassifyItem/>},
        {id:3,title:"居家小商品",component:<ClassifyItem/>},
        {id:4,title:"品牌鞋类",component:<ClassifyItem/>},
        {id:5,title:"皮具箱包",component:<ClassifyItem/>},
        {id:6,title:"内衣针织",component:<ClassifyItem/>},
        {id:7,title:"儿童玩具",component:<ClassifyItem/>},
        {id:8,title:"母婴用品",component:<ClassifyItem/>},
        {id:9,title:"电子数码",component:<ClassifyItem/>},
        {id:10,title:"办公用品",component:<ClassifyItem/>},
        {id:11,title:"体育用品",component:<ClassifyItem/>}
      ],
      now:0
    }
  }
  tab(index){
    this.setState({
      now:index
    })
  }
  render(){
    return(
      <div className='classify'>
        <div>
          <header>
            <div className="header">
              <Link to="/index"><i className="icon icon-return"></i></Link>
              <h1>分类</h1>
            </div>
          </header>
          <div id="header_b"></div>
        </div>

        <article className="classify-box">
          <div className="classify-left fl">
            <ul id="tab_btn">
              {
                this.state.item.map((item,index)=>{
                  return(
                    <li className={this.state.now==index?"pick":""} key={index} onClick={this.tab.bind(this,index)}><a href="javascript:;">{item.title}</a></li>
                  )
                })
              }
              
            </ul>
          </div>
          <div className="classify-right">
            <ul>
              <li className="tab_content show">{this.state.item[this.state.now].component}</li>
            </ul>
          </div>
        </article>
      </div>
    )
  }
}