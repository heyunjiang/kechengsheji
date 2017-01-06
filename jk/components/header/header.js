import './header.scss';

export default function() {
  let module = '';
  module += '<div class="header">';
  module += '<div class="header-left">';
  module += '<span class="glyphicon glyphicon-cloud"></span>';
  module += '<a href="index.html">眷客首页</a>';
  module += '</div>';
  module += '<div class="header-right">';
  module += '<div class="inline-div pointer-cursor"><a>尊敬的用户</a></div>';
  module += '<div class="inline-div pointer-cursor"><a>我的订单</a></div>';
  module += '<div class="inline-div pointer-cursor"><a href="index.html">我的眷客</a></div>';
  module += '<div class="inline-div pointer-cursor"><a>眷可会员</a></div>';
  module += '<div class="inline-div pointer-cursor"><a>企业采购</a></div>';
  module += '<div class="inline-div pointer-cursor"><a>手机眷客</a></div>';
  module += '<div class="inline-div pointer-cursor"><a>关注眷客</a></div>';
  module += '<div class="inline-div pointer-cursor"><a>客户服务</a></div>';
  module += '<div class="inline-div pointer-cursor"><a>网站导航</a></div>';
  module += '</div>';
  module += '</div>';
  return module;
}