import React, { Component } from 'react';
import {Link} from 'react-router';
import Xiangqing from "./Xiangqing"
import Pingjia from "./Pingjia"
import {connect} from 'react-redux';
import {currency} from '../common/currency'

class ProductDetails extends Component{
  constructor(props){
    super(props);
    this.state={
      item:[
        {id:1,title:'图文详情',component:<Xiangqing aid={this.props.params.aid}/>},
        {id:2,title:'用户评价',component:<Pingjia pingjia={this.props.pingjia}/>}
      ],
      now:0
    }
    this.getPingjia=this.getPingjia.bind(this)
    this.gou=this.gou.bind(this)
    this.getPingjia()
  }
  getPingjia(){
    let url=`http://localhost:3000/pingjia`;
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        // console.log(data)
        this.props.updatePingjia(data)
      })
    })
  }
  tab(index){
    this.setState({
      now:index
    })
  }
  gou(){
    // console.log(this.props.goodslist[this.props.params.aid-1])
    if(this.props.user.id){
      let glist=this.props.goodslist[this.props.params.aid-1];
      let user=this.props.user
      let url =`http://localhost:3000/jiaru?uid=${user.id}&gid=${glist.id}&title=${glist.title}&src=${glist.gsrc}&price=${glist.price}&oprice=${glist.oprice}`;
      fetch(url,{
        credentials:'include'
      }).then((res)=>{
        res.json().then((data)=>{
            console.log(data)
            this.props.updateShopcar(data)
            // alert(data.msg)
        })
      })
    }else{
      this.props.router.push('/login')
    }
  }
  render(){
    let {goodslist,shopcar}=this.props;
    let glist=goodslist[this.props.params.aid-1];
    let count=0;
    shopcar.map((item,index)=>{
      count+=item.count
    })
    return(
      <div className='productDetails'>
        <div>
          <header>
            <div className="header">
              <a href="javascript:;" onClick={this.props.router.goBack.bind(this)}><i className="icon icon-return"></i></a>
              <h1>产品详情</h1>
            </div>
          </header>
          <div id="header_b"></div>
        </div>
        <div className="product-head">
          <a href="javascript:;"><img src="/src/assets/images/fx02.png"/></a>
          <a href="javascript:;"><img src="/src/assets/images/sc02.png"/></a>
          <img src={"/src/assets/images/"+glist.src}/>
        </div>
        <article className="product-text">
            <span>{glist.title}</span>
            <span className="price">{currency(glist.price)}<s>{currency(glist.oprice)}</s></span>
          </article>
          <div className="product-content">
            <ul id="tab_btn" className="product-content-ul">
              {
                this.state.item.map((item,index)=>{
                  return(
                    <li className={this.state.now==index?"pick":""} key={index} onClick={this.tab.bind(this,index)}>
                      <span>{item.title}</span>
                    </li>
                  )
                })
              }
            </ul>
            <ul className="product-content-ul2">
              {this.state.item[this.state.now].component}
            </ul>
          </div>
          
          <div className="add-shopping">
            <a href="javascript:;" className="shopping-btn">
              <em>{count}</em>
              <i className="icon icon-car"></i>
            </a>
            {/* <a href="javascript:;" className="btn btn-red fr" onClick={this.mai}>立即购买</a> */}
            <a href="javascript:;" className="btn btn-yellow fr" onClick={this.gou}>加入购物车</a>
            <div className="cl"></div>
          </div>
      </div>
    )
  }
}
//获取store
const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    goodslist:state.goodslist,
    pingjia:state.pingjia,
    user:state.user,
    shopcar:state.shopcar
  }
};

//转发actins
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    updateShopcar:(payload)=>{
      dispatch({
        type: 'UPDATE_SHOPCAR',
        payload:payload
      });
    },
    updatePingjia:(payload)=>{
      dispatch({
        type: 'UPDATE_PINGJIA',
        payload:payload
      });
    }
  }
};
//容器组件 ->链接-> counter组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);