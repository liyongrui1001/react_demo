export const currency=(data,currency='￥',digit=0)=>{
  return currency+data.toFixed(digit);
}