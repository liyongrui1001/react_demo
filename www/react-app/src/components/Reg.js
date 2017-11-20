import React, { Component } from 'react';
import {Link,hashHistory} from 'react-router';

export default class Reg extends Component{
  constructor(){
    super()
    this.state={
      iptUname:'',
      iptPwd:'',
      iptPwd2:''
    }
    this.changeUname=this.changeUname.bind(this)
    this.changePwd=this.changePwd.bind(this)
    this.changePwd2=this.changePwd2.bind(this)
    this.reg=this.reg.bind(this)
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
  changePwd2(ev){
    this.setState({
      iptPwd2:ev.target.value
    })
  }
  reg(){
    let url=`http://localhost:3000/reg?username=${this.state.iptUname}&password=${this.state.iptPwd}`;
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        if(data.err==0){
          alert(data.msg)
          this.props.router.push('/login')
        }else{
          alert(data.msg)
        }
      })
    })
  }
  render(){
    return(
      <div className='reg'>
        <div>
          <header>
            <div className="header">
              <a href="javascript:;" onClick={hashHistory.goBack}><i className="icon icon-return"></i></a>
              <h1>注册</h1>
            </div>
          </header>
          <div id='header_b'></div>
        </div>
        <div className="input-row input-row2" id="ipt">
          <label>用户名</label>
          <input type="text" placeholder="请输入用户名" value={this.state.iptUname} onChange={this.changeUname} />
        </div>
        <div className="input-row input-row2" id="ipt">
          <label>密码</label>
          <input type="password" placeholder="请输入密码" value={this.state.iptPwd} onChange={this.changePwd}/>
        </div>
        <div className="input-row input-row2" id="ipt">
          <label>确认密码</label>
          <input type="password" placeholder="请再次输入密码" value={this.state.iptPwd2} onChange={this.changePwd2}/>
        </div>
        <div className="add-site" id="bot_btn">
        <a href="javascript:;" className="btn bottom-btn" onClick={this.reg}>注册</a>	
      </div>
      <div className="add-site" id="bot_btn2">
        <Link to="/login" className="btn bottom-btn">登陆</Link>	
      </div>
      </div>
    )
  }
}