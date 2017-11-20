import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      iptUname:'',
      iptPwd:''
    }
    this.changeUname=this.changeUname.bind(this)
    this.changePwd=this.changePwd.bind(this)
    this.login=this.login.bind(this)
  }
  changeUname(ev){
    this.setState({
      iptUname:ev.target.value
    })
  }
  changePwd(ev){
    this.setState({
      iptPwd:ev.target.value
    })
  }
  login(){
    let url=`http://localhost:3000/login?username=${this.state.iptUname}&password=${this.state.iptPwd}`;
    fetch(url,{
      credentials:'include'
    }).then((res)=>{
      res.json().then((data)=>{
        // console.log(data)
        if(data.err==0){
          alert(data.msg)
          this.props.router.push('/user')
        }else{
          alert(data.msg)
        }
      })
    })
  }
  render(){
    return(
      <div className='login'>
        <div>
          <header>
            <div className="header">
              <a href="javascript:;" onClick={this.props.router.go.bind(this,-1)}><i className="icon icon-return"></i></a>
              <h1>登陆</h1>
            </div>
          </header>
          <div id='header_b'></div>
        </div>
        
        <div className="input-row input-row2" id="ipt">
          <label>用户名</label>
          <input type="text" placeholder="请输入用户名" value={this.state.iptUname} onChange={this.changeUname}/>
        </div>
        <div className="input-row input-row2" id="ipt">
          <label>密码</label>
          <input type="password" placeholder="请输入密码" value={this.state.iptPwd} onChange={this.changePwd}/>
        </div>
        <div className="add-site" id="bot_btn">
          <a href="javascript:;" className="btn bottom-btn" onClick={this.login}>登陆</a>	
        </div>
        <div className="add-site" id="bot_btn2">
          <Link to="/reg" className="btn bottom-btn">注册</Link>	
        </div>
      </div>
    )
  }
}