import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {currency} from "../common/currency"

class ConfirmOrder extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let {user,shopcar} =this.props;
    let sum=0;
    shopcar.map((item,index)=>{
      sum+=item.price*item.count
    })
    return(
      <div className='confirmOrder'>
        <div>
          <header>
            <div className="header">
              <a href="javascript:window.history.back();"><i className="icon icon-return"></i></a>
              <h1>确认订单</h1>
            </div>
          </header>
          <div id='header_b'></div>
        </div>

        <article className="orderSite">
          <Link to="/site">
            <p>收货人：{user.name}&nbsp;&nbsp;{user.phone}</p>
            <span>{user.diqu}{user.addr}</span>
            <i className="icon icon-select"></i>
          </Link>
        </article>
        
        {
          shopcar.map((item,index)=>{
            return(
              <article className="confirmOrder" key={item.id}>
                <img src={"/src/assets/images/"+item.src}/>
                <div className="product-text">
                    <span>{item.title}</span>
                    <span className="price">{currency(item.price)} <em>X{item.count}</em></span>
                </div>
              </article>
            )
          })
        }
        <nav className="navbar-fixed-bottom">
          <div className="container">
              <div className="navbar-text navbar-left pull-left m-cart-disbursement">		合计：{currency(sum)}
                  <p>商品总价{currency(sum)}</p>
              </div> 
              <a href="javascript:;" className="btn btn-warning navbar-btn pull-right" >去结算</a>
            </div>	
        </nav>
      </div>
    )
  }
}
//获取store
const mapStateToProps = (state, ownProps) => {
  return {
    user:state.user,
    shopcar:state.shopcar
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
)(ConfirmOrder);