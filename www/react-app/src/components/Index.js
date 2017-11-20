import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from "react-redux";
import Swipe from "./Swipe"
import Footbar from "./Footbar"
import {currency} from '../common/currency'

class Index extends Component{
  constructor(props){
    super(props)
    this.getIndexnav=this.getIndexnav.bind(this)
    this.getShangjia=this.getShangjia.bind(this)
    this.getGoodslist=this.getGoodslist.bind(this)
    this.getIndexnav()
    this.getShangjia()
    this.getGoodslist()
  }
  componentDidMount(){
    this.props.router.replace("/index")
  }
  getIndexnav(){
    let url=`http://localhost:3000/indexnav`;
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        // console.log(data)
        this.props.updateIndexnav(data)
      })
    })
  }
  getShangjia(){
    let url=`http://localhost:3000/shangjia`;
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        // console.log(data)
        this.props.updateShangjia(data)
      })
    })
  }
  getGoodslist(){
    let url=`http://localhost:3000/goodslist`;
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        //  console.log(data)
        this.props.updateGoodslist(data)
      })
    })
  }
  render(){
    let {indexnav,shangjia,goodslist} = this.props
    return(
      <div className='index'>
        <div>
          <header>
            <div className="header">
              <Link to="/classify"><i className="icon icon-menu"></i></Link>
              <h1>京北商城</h1>
              <i className="icon icon-soso"></i>
            </div>
          </header>
          <div id="header_b"></div>
        </div>

        <Swipe/>

        <nav>
          <div className="nav-box">
            {
              indexnav.map((item,index)=>{
                return(
                  <a href="javascript:;" key={item.id}><img src={"/src/assets/images/"+item.src}/><span>{item.title}</span></a>
                )
              })
            }
          </div>
        </nav>

        <article>
          <h1>商城客户</h1>
          <div className="client">
            {
              shangjia.map((item,index)=>{
                return(
                  <Link to={{pathname:"/merchant/"+item.id}} key={item.id}><img src={"/src/assets/images/"+item.src}/><span>{item.title}</span></Link>
                )
              })
            }
          </div>
        </article>

        <article id="jingxuan">
          <h1>精选促销</h1>
        </article>
        <div className="commodity-box">
        <ul className="commodity">
          {
            goodslist.map((item,index)=>{
              return(
                <li key={item.id}>
                <Link to={{pathname:"/productDetails/"+item.id}}>
                  <img src={"/src/assets/images/"+item.src}/>
                  <span>{item.title}</span>
                  <span className="price">{currency(item.price)} <s>{currency(item.oprice)}</s></span>
                </Link>
              </li>
              )
            })
          }
        </ul>	
        </div>
        <Footbar/>
      </div>
    )
  }
}

//获取store
const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    indexnav:state.indexnav,
    shangjia:state.shangjia,
    goodslist:state.goodslist
  }
};

//转发actins
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    showLoading: () => {
      dispatch({
        type: 'SHOW_LOADING'
      });
    },
    hideLoading: () => {
      dispatch({
        type: 'HIDE_LOADING'
      });
    },
    updateIndexnav:(payload)=>{
      dispatch({
        type: 'UPDATE_INDEX_NAV',
        payload:payload
      });
    },
    updateShangjia:(payload)=>{
      dispatch({
        type: 'UPDATE_SHANGJIA',
        payload:payload
      });
    },
    updateGoodslist:(payload)=>{
      dispatch({
        type: 'UPDATE_GOODSLIST',
        payload:payload
      });
    }
  }
};
//容器组件 ->链接-> counter组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);