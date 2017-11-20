import React, { Component } from 'react';
import {connect} from 'react-redux';

class Pingjia extends Component{
  
  render (){
    let {pingjia}=this.props
    return(
      <li className="tab_content show">
        用户评价
        {
          pingjia.map((item,index)=>{
            return(
              <div className="evaluate" key={item.id}>
              <div className="evaluate-head">
                <img src={"/src/assets/images/"+item.src}/>
                <p>{item.name}<span>{item.sj}</span></p>
                <p><img src="/src/assets/images/xingxing.png"/></p>
              </div>
              <p>{item.py}</p>
            </div>
            )
          })
        }
      </li>
    )
  }
}
//获取store
const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    pingjia:state.pingjia
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
)(Pingjia);