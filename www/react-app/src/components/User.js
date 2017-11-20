import React, { Component } from 'react';
import {Link} from 'react-router';
import Footbar from "./Footbar";
import {connect} from 'react-redux'

class User extends Component{
  constructor(props){
    super(props)
    this.getUser=this.getUser.bind(this)
    this.back=this.back.bind(this)
    this.getUser()
  }
  getUser(){
    let url=`http://localhost:3000/user`;
    fetch(url,{
      credentials:'include'
    }).then((res)=>{
      res.json().then((data)=>{
        if(data.err==0){
          // console.log('接收库数据',data)
          this.props.updateUser(data)
        }else{
          this.props.router.push('/login')
        }
      })
    })
  }
  back(){
    let url=`http://localhost:3000/tui`;
    fetch(url,{
      credentials:'include'
    }).then((res)=>{
      res.json().then((data)=>{
        if(data.err==0){
          // console.log('接收库数据',data)
          alert(data.msg)
          this.props.clearUser()
        }
      })
    })
  }
  render (){
    let {user} = this.props;
    // console.log(user)
    return(
      <div className='user'>
        <article className="user-head">
          <div className="user-bg-img">
            <img src="/src/assets/images/user_bg.png"/>
            <div className="user-img">
              <img src="/src/assets/images/user-img0.jpg"/>
              
            </div>
            <p>{user.id?<Link to="/user">{user.username}</Link>:<Link to="/login">登陆</Link>}&ensp;&ensp;&ensp;&ensp;{user.id?<a href="javascript:;" onClick={this.back}>注销</a>:<Link to="/reg">注册</Link>}</p>
          </div>
          <div className="user-order">
            <a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/indent.png"/>我的订单 	<span>查看所有订单</span>	 <i className="icon icon-select"></i></a>
          </div>
          <div className="user-nav">
            <a href="index.html">
                <i className="icon icon-f1"></i>
                待付款
              </a>
              <a href="javascript:;">
                <i className="icon icon-f2"></i>
                待收货
              </a>
              <a href="javascript:;">
                <i className="icon icon-f3"></i>
                已收货
              </a>
              <a href="javascript:;">
                <i className="icon icon-f4"></i>
                已取消
              </a>
              <a href="javascript:;">
                <i className="icon icon-f5"></i>
                售后
              </a>
          </div>
        </article>
        <article className="user-list">
          <a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/collct.png"/>我的收藏<span>{user.mark}</span>	 <i className="icon icon-select"></i></a>
          <a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/service.png"/>联系客服<i className="icon icon-select"></i></a>
          <a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/about.png"/>关于我们<i className="icon icon-select"></i></a>
          <a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/set.png"/>设置<i className="icon icon-select"></i></a>
        </article>
        <Footbar/>
      </div>
    )
  }
}
//获取store
const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    user:state.user
  }
};
//转发actins
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    updateUser:(payload)=>{
      dispatch({
        type: 'UPDATE_USER',
        payload:payload
      });
    },
    clearUser:()=>{
      dispatch({
        type: 'CLEAR_USER'
      });
    }
  }
};
//容器组件 ->链接-> counter组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);