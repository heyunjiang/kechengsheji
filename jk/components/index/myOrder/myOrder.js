import './myOrder.scss';


export default function() {
  let module = '';
  module += '<div class="myOrder">';
  module += '<p><span class="myOrder-title-left">我的订单</span><span class="myOrder-title-right"><a href="myOrder.html">查看全部订单</a></span></p>';
  module += '</div>';
  return module;
}