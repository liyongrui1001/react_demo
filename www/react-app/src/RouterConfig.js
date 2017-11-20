import React from 'react';
import {Router,Route,IndexRoute,hashHistory,browserHistory,Redirect} from 'react-router'

import App from './components/App'
import Index from './components/Index'
import Classify from './components/Classify'
import Community from './components/Community'
import CommunityAdd from './components/CommunityAdd'
import ShoppingCart from './components/ShoppingCart'
import User from './components/User'
import ConfirmOrder from './components/ConfirmOrder'
import Site from './components/Site'
import Merchant from './components/Merchant'
import ProductDetails from './components/ProductDetails'
import Login from './components/Login'
import Reg from './components/Reg'
import Error from './components/Error'

export const RouterConfig=()=>(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/index" component={Index}/>
      <Route path="/classify" component={Classify}/>
      <Route path="/community" component={Community}/>
      <Route path="/communityAdd" component={CommunityAdd}/>
      <Route path="/shoppingCart" component={ShoppingCart}/>
      <Route path="/user" component={User}/>
      <Route path="/confirmOrder" component={ConfirmOrder}/>
      <Route path="/site" component={Site}/>
      <Route path="/merchant" component={Merchant}>
        <Route path=":aid" component={Merchant}/>
      </Route>
      <Route path="/productDetails" component={ProductDetails}>
        <Route path=':aid' component={ProductDetails} />
      </Route>
      <Route path="/login" component={Login}/>
      <Route path="/reg" component={Reg}/>
      <Route path="*" component={Error}/>
    </Route>
    
  </Router>
)