import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Site extends Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      phone:'',
      diqu:'',
      addr:''
    }
    this.changeName=this.changeName.bind(this)
    this.changePhone=this.changePhone.bind(this)
    this.changeDiqu=this.changeDiqu.bind(this)
    this.changeAdd=this.changeAdd.bind(this)
    this.saveAdd=this.saveAdd.bind(this)
  }
  changeName(ev){
    this.setState({
      name:ev.target.value
    })
  }
  changePhone(ev){
    this.setState({
      phone:ev.target.value
    })
  }
  changeDiqu(ev){
    this.setState({
      diqu:ev.target.value
    })
  }
  changeAdd(ev){
    this.setState({
      addr:ev.target.value
    })
  }
  saveAdd(){
    let url =`http://localhost:3000/saveAdd?id=${this.props.user.id}&name=${this.state.name}&phone=${this.state.phone}&diqu=${this.state.diqu}&addr=${this.state.addr}`;
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        //  console.log(data)
        if(data.err==0){
          this.props.updateUser(data)
          this.props.router.push('/confirmOrder')
        }else{
          alert(data.msg)
        }
      })
    })
  }
  render(){
    let {user} =this.props;
    return(
      <div className='site'>
        <div>
          <header>
            <div className="header">
              <a href="javascript:window.history.back();"><i className="icon icon-return"></i></a>
              <h1>修改地址</h1>
            </div>
          </header>
          <div id='header_b'></div>
        </div>
        <article className="no-pad">
        
          <div className="input-row input-row2">
              <label>联系人</label>
              <input type="text" placeholder="请填写联系人姓名" value={this.state.name} onChange={this.changeName} />
            </div>
            <div className="input-row input-row2">
              <label>手机号</label>
              <input type="text" placeholder="请填写手机号码" value={this.state.phone} onChange={this.changePhone} />
            </div>
            <div className="input-row input-row2">
              <label>所在地区</label>
              <input type="text" value={this.state.diqu} onChange={this.changeDiqu} />
            </div>
            <div className="input-row input-row2">
              <label>详细地址</label>
              <input type="text" value={this.state.add} onChange={this.changeAdd}/>
            </div>
        
      </article>
      <div className="add-site">
        <a href="javascript:;" className="btn bottom-btn" onClick={this.saveAdd}>保存地址</a>
      </div>
      </div>
    )
  }
}
//获取store
const mapStateToProps = (state, ownProps) => {
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
    }
  }
};
//容器组件 ->链接-> counter组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Site);