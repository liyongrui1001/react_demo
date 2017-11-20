import React from 'react';
import ReactDom from 'react-dom';

import {createStore} from "redux";
import {Provider} from "react-redux";
import state from './store/state';
import reducer from './store/reducer';
const store = createStore(reducer,state);

import {RouterConfig} from './RouterConfig'

ReactDom.render(
  <Provider store={store}>
    <RouterConfig/>
  </Provider>,
  document.querySelector('#app')
);