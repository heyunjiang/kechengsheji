import './banner2.scss';
import siteIcon2 from '../../images/images/site-icon2.png';

export default function() {
  let module = '';
  module += '<div class="banner2">';
  module += '<div class="banner2-left">';
  module += '<div class="inline-div pointer-cursor"><a href="index.html"><img src="'+siteIcon2+'" /></a></div>';
  module += '</div>';

  module += '<div class="banner2-right">';
  module += '<input type="text" placeholder="请输入关键字" /><div class="inline-div search-btn pointer-cursor">搜索</div>';
  module += '</div>';
  module += '<div class="banner2-bottom">热门搜索：自贡冷吃兔 自贡冷吃鸡 自贡冷吃鸭 自贡冷吃鱼';
  module += '</div>';
  module += '</div>';
  return module;
}