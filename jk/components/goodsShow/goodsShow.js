import './goodsShow.scss';

export default function() {
  let module = '';
  if(arguments[0] == 'showSort') {
    module += '<ul class="sort">';
    module += '<li>综合排序</li><li>人气</li><li>销量</li><li>价格+</li><li>价格-</li>';
    module += '</ul>';
  }
  module += '<div class="goodsShow">';
  module += '</div>';
  return module;
}