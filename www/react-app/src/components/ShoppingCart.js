import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {currency} from '../common/currency'

import Footbar from './Footbar';

class ShoppingCart extends Component{
  constructor(props){
    super(props)
    this.state={
      sum:0
    }
    this.getShopcar=this.getShopcar.bind(this)
    this.getShopcar()
    this.clearBuyCar=this.clearBuyCar.bind(this)
  }
  getShopcar(){
    // if(this.props.user.id){
      let url=`http://localhost:3000/shopcar`;
      fetch(url,{
        credentials:'include'
      }).then((res)=>{
        res.json().then((data)=>{
          if(data.err==0){
            // console.log('接收库数据',data)
            this.props.updateShopcar(data.data)
          }else{
            this.props.router.push('/login')
          }
        })
      })
    // }else{
    //   this.props.router.push('/login')
    // }
  }
  
  removeItem(id){
    
    let url=`http://localhost:3000/del?id=${id}`;
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        if(data.err==0){
          alert(data.msg)
          this.props.removeItem(id)
        }
      })
    })
  }
  clearBuyCar(){
    
    let url=`http://localhost:3000/clear`;
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        if(data.err==0){
          alert(data.msg)
          this.props.clearBuyCar()
        }
      })
    })
  }
  jia(id){
    let url=`http://localhost:3000/jia?id=${id}`;
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        if(data.err==0){
          // alert(data.msg)
          // console.log(data)
          this.props.changeItem({
            id:id,
            count:data.count
          })
        }
      })
    })
  }
  jian(id){
    let url=`http://localhost:3000/jian?id=${id}`;
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        if(data.err==0){
          // alert(data.msg)
          // console.log(data)
          this.props.changeItem({
            id:id,
            count:data.count
          })
        }
      })
    })
  }
  render (){
    let {shopcar}=this.props;
    let sum=0;
    shopcar.map((item,index)=>{
      sum+=item.price*item.count
    })
    return (
      <div className='shoppingcart'>
        <div>
          <header>
            <div className="header">
              <a href="javascript:window.history.back();"><i className="icon icon-return"></i></a>
              <h1>购物车</h1>
              <a href="javascript:;" className="cart-edit" onClick={this.clearBuyCar}>全部删除</a>
            </div>
          </header>
          <div id='header_b'></div>
        {
          shopcar.map((item,index)=>{
            return(
              <article className="confirmOrder" key={item.id}>
                <img src={"/src/assets/images/"+item.src}/>
                <div className="product-text">
                    <span>{item.title}</span>
                    <span className="price price-cart">
                      {currency(item.price)}
                      <div className="norms-content-t norms-content-two">
                          <span className="icon norms-out" onClick={this.jia.bind(this,item.id)}></span>
                          <span>{item.count}</span>
                          <span className="icon norms-add" onClick={this.jian.bind(this,item.id)}></span>
                      </div>
                    </span>
                    <div id="del">
                    <a href="javascript:;" onClick={this.removeItem.bind(this,item.id)}>删除</a>
                    </div>
                </div>
              </article>
            )
          })
        }
        </div>
        <nav className="navbar-fixed-bottom navbar-fixed-bottom-cart">
          <div className="container container-cart">
              <div className="navbar-text navbar-left pull-left m-cart-disbursement">		合计：￥{sum}
              </div> 
              <Link to="/confirmOrder" className="btn btn-warning navbar-btn pull-right" >下单</Link>
            </div>	
        </nav>
        <Footbar/>
      </div>
    )
  }
}
//获取store
const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
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
    changeItem: (data) => {
      dispatch({
        type: 'CHANGE_ITEM',
        payload:data
      });
    },
    removeItem: (id) => {
      dispatch({
        type: 'REMOVE_ITEM',
        payload:id
      });
    },
    clearBuyCar: () => {
      dispatch({
        type: 'REMOVE_ALL'
      });
    }
  }
};
//容器组件 ->链接-> counter组件
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);