import React,{Component} from 'react'
import ReactSwipe from 'react-swipe';
 
export default class Swipe extends Component {
  render() {
    const opt = {
      auto: 2500,
      callback: function (index) {
          this.setState({index: index});
      }.bind(this)
    }
    return (
        <ReactSwipe className="carousel" swipeOptions={opt}>
          <div><img src="/src/assets/images/banner1.jpg"/></div>
          <div><img src="/src/assets/images/banner2.jpg"/></div>
          <div><img src="/src/assets/images/banner3.jpg"/></div>
        </ReactSwipe>
    );
  }
}