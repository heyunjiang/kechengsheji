//首页左边　订单中心　关注中心　资产中心　组件
import './centerList.scss';
import siteIcon from '../../images/images/site-icon.png';
import mycar from '../../images/images/mycar.jpg';

export default function() {
  let module = '';
  module += '<div class="centerList">';
  module += '<ul>';
  module += '<li class="threecenter">订单中心</li>';
  module += '<li><a>我的订单</a></li>';
  module += '<li><a>团购订单</a></li>';
  module += '<li><a>本地生活订单</a></li>';
  module += '<li><a>我的预售</a></li>';
  module += '<li><a>评价晒单</a></li>';
  module += '<li><a>取消订单记录</a></li>';
  module += '<li><a>我的常购商品</a> <span style="color: red;">new</span></li>';
  module += '<li class="threecenter">关注重心</li>';
  module += '<li><a>关注的商品</a></li>';
  module += '<li><a>关注的店铺</a></li>';
  module += '<li><a>关注的专辑</a></li>';
  module += '<li><a>关注的品牌</a></li>';
  module += '<li><a>关注的活动</a></li>';
  module += '<li><a>浏览历史</a></li>';
  module += '<li class="threecenter">资产中心</li>';
  module += '<li><a>小金库</a></li>';
  module += '</ul>';
  module += '</div>';
  return module;
}