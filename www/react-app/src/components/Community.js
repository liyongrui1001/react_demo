import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from "react-redux";
import {date} from '../common/date';

import Footbar from "./Footbar"
class Community extends Component{
  constructor(props){
    super(props)
    this.getShequ=this.getShequ.bind(this)
    this.getShequ()
  }
  getShequ(){
    let url=`http://localhost:3000/shequ`;
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        // console.log(data)
        this.props.updateShequ(data)
      })
    })
  }
  render (){
    let {shequ} = this.props;
    return (
      <div className='community'>
        <div>
          <header>
            <div className="header">
              <a href='javascript:;' onClick={this.props.router.go.bind(this,-1)}><i className="icon icon-return"></i></a>
              <h1>社区</h1>
                      <Link to="/communityAdd"><i className="icon icon-addcommunity"></i></Link>
            </div>
          </header>
          <div id='header_b'></div>
        </div>
        {
            shequ.map((item,index)=>{
              return(
                <article key={item.id}>
                  <div className="community-head">
                      <img src={"/src/assets/images/"+item.src}/>
                      <span>{item.name}</span>
                      <p>{item.content}</p>
                  </div>
                  <div className="cl"></div>
                  <div className="community-foot">
                      <em>{date(item.time)}</em>
                      <i className="icon icon-share"></i>
                  </div>
                </article>
              )
            })
          }
        <Footbar/>
      </div>
    )
  }
}
//获取store
const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    shequ:state.shequ
  }
};

//转发actins
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    updateShequ:(payload)=>{
      dispatch({
        type: 'UPDATE_SHEQU',
        payload:payload
      });
    }
  }
};
//容器组件 ->链接-> counter组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Community);