import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'

class CommunityAdd extends Component{
  constructor(props){
    super(props)
    this.state={
      content:''
    }
    this.changeContent=this.changeContent.bind(this)
    this.tijiao=this.tijiao.bind(this)
    this.getUser=this.getUser.bind(this)
    this.getUser()
  }
  getUser(){
    let url=`http://localhost:3000/user`;
    fetch(url,{
      credentials:'include'
    }).then((res)=>{
      res.json().then((data)=>{
        if(data.err!=0){
          this.props.router.push('/login')
        }
      })
    })
  }
  changeContent(ev){
    this.setState({
      content:ev.target.value
    })
  }
  tijiao(){
    if(this.props.user.id){
      let url =`http://localhost:3000/shequAdd?name=${this.props.user.username}&content=${this.state.content}&time=${new Date().getTime()}&src=s_sq_01.png`;
      fetch(url).then((res)=>{
        res.json().then((data)=>{
          //  console.log(data)
          this.props.updateShequ(data)
          this.props.router.push('/community')
        })
      })
    }else{
      this.props.router.push('/login')
    }
  }
  render (){
    return(
      <div className='communityAdd'>
        <div>
          <header>
            <div className="header">
              <Link to="/community"><i className="icon icon-return"></i></Link>
              <h1>分享</h1>
            </div>
          </header>
          <div id='header_b'></div>
          <article>
            <div className="c-Publish">
              <div className="Pu-text">
                <textarea rows='4' placeholder="这一刻的想法..." value={this.state.content} onChange={this.changeContent}></textarea>  
              </div>
              
            </div>
            <div className="submit-btn">
              <a className="btn btn-max btn-forbidden" id="btn_ti" onClick={this.tijiao}>提交</a>
            </div>
        </article>
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
)(CommunityAdd);