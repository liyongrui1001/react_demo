import {fillzero} from './fillzero';
export const date=(time)=>{
  let d = new Date();
  d.setTime(time);
  return d.getFullYear()+'年'+(d.getMonth()+1)+'月'+fillzero(d.getDate())+'日 '+fillzero(d.getHours())+":"+fillzero(d.getMinutes())+":"+fillzero(d.getSeconds());
};