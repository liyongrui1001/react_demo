import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {currency} from '../common/currency'

class Merchant extends Component{
  constructor(props){
      super(props)
    // console.log(this.props.shangjia[this.props.params.aid-1])
  }
  render(){
    let {shangjia,goodslist}=this.props;
    return(
      <div className='merChant'>
        <div>
          <header>
            <div className="header">
              <a href="javascript:window.history.back();"><i className="icon icon-return"></i></a>
              <h1>商家</h1>
            </div>
          </header>
          <div id="header_b"></div>
        </div>
          <div className="merchant">
              <img src={"/src/assets/images/"+shangjia[this.props.params.aid-1].src}/>
              <p>{shangjia[this.props.params.aid-1].title}</p>
              <span className="btn">联系客服</span>
          </div>
          <div className="merchant-notice">
              <p>{shangjia[this.props.params.aid-1].content}</p>
          </div>
          <div className="commodity-box commodity-box2">
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
      </div>
    )
  }
}
//获取store
const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    return {
      shangjia:state.shangjia,
      goodslist:state.goodslist
    }
  };
  
  //转发actins
  const mapDispatchToProps = (dispatch,ownProps) => {
    return {}
  };
  //容器组件 ->链接-> counter组件
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Merchant);