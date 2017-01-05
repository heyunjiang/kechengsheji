import './banner.scss';
import siteIcon from '../../images/images/site-icon.png';
import mycar from '../../images/images/mycar.jpg';

export default function() {
  let module = '';
  module += '<div class="banner">';
  module += '<div class="banner-left">';
  module += '<div class="inline-div pointer-cursor"><a href="index.html"><img src="'+siteIcon+'" /></a></div>';
  module += '<div class="inline-div myJk"><a class="pointer-cursor">我的眷客</a></div>';
  module += '<div class="inline-div jk-title"><a class="pointer-cursor">首页</a></div>';
  module += '<div class="inline-div jk-title"><a class="pointer-cursor">帐户设置</a></div>';
  module += '<div class="inline-div jk-title"><a class="pointer-cursor">社区</a></div>';
  module += '<div class="inline-div jk-title"><a class="pointer-cursor">消息</a></div>';
  module += '</div>';

  module += '<div class="banner-right">';
  module += '<input type="text" /><div class="inline-div search-btn pointer-cursor">搜索</div>';
  module += '<div class="inline-div my-car pointer-cursor"><img src="'+mycar+'" />我的购物车<span class="goods">3</span></div>';
  module += '</div>';
  module += '</div>';
  return module;
}