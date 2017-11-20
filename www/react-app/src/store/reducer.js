const reducer=(state,action)=>{
  let {type,payload}=action;
  switch (type){
    case 'UPDATE_INDEX_NAV':
      return Object.assign({}, state, {
        indexnav: payload
      });
      break;
    case 'UPDATE_SHANGJIA':
      return Object.assign({}, state, {
        shangjia: payload
      });
      break;
    case 'UPDATE_GOODSLIST':
      return Object.assign({}, state, {
        goodslist: payload
      });
      break;
    case 'UPDATE_PINGJIA':
      return Object.assign({}, state, {
        pingjia: payload
      });
      break;
    case 'UPDATE_SHEQU':
      return Object.assign({}, state, {
        shequ: payload
      });
      break;
    case 'UPDATE_USER':
      return Object.assign({}, state, {
        user: payload
      });
      break;
    case 'CLEAR_USER':
      return Object.assign({}, state, {
        user: {}
      });
      break;
    case 'UPDATE_SHOPCAR':
      return Object.assign({}, state, {
        shopcar:payload
      });
      break;
    case 'CHANGE_ITEM':
      state.shopcar.forEach((item,index)=>{
        if(item.id==payload.id){
          if(item.count<1){
            item.count=1;
          }else{
            item.count=payload.count;
          }
        }
      });
      return Object.assign({},state,{
        shopcar:[...state.shopcar]
      });
      break;
    case 'REMOVE_ITEM':
      // console.log('reducer66',payload);
      state.shopcar.forEach((item,index)=>{
        if(item.id==payload){
          state.shopcar.splice(index,1);
        }
      });
      // console.log(state.buyCar);
      return Object.assign({},state,{
        shopcar:[...state.shopcar]
      });
      break;
    case 'REMOVE_ALL':
      return Object.assign({},state,{
        shopcar:[]
      });
      break;
    case 'SHOW_LOADING':
      return Object.assign({}, state, {
        bLoading: true
      });
      break;
    case 'HIDE_LOADING':
      return Object.assign({}, state, {
        bLoading: false
      });
      break;
    default:
      return state;
  }
};

export default reducer;