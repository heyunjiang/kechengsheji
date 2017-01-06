//底部　组件
import './footer.scss';

import one from '../../images/images/1.jpg';
import two from '../../images/images/2.jpg';
import three from '../../images/images/3.jpg';
import four from '../../images/images/4.jpg';

export default function() {
  let module = '';
  module += '<div class="footer center">';
  module += '<img src="'+one+'" />&nbsp;品种齐全&nbsp;轻松购物&nbsp;&nbsp;&nbsp;';
  module += '<img src="'+two+'" />&nbsp;多仓直发&nbsp;极速配送&nbsp;&nbsp;&nbsp;';
  module += '<img src="'+three+'" />&nbsp;正品行货&nbsp;精致服务&nbsp;&nbsp;&nbsp;';
  module += '<img src="'+four+'" />&nbsp;天天低价&nbsp;畅选无忧&nbsp;';
  module += '</div>';
  return module;
}