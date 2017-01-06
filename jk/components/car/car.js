import './car.scss';
import car from '../../images/images/car.jpg';

export default function() {
  let module = '';
  module += '<div class="car-banner">';
  module += '<div class="pointer-cursor"><a href="index.html"><img src="'+car+'" /></a></div>';
  module += '<div class="car-title">全部商品</div>';
  module += '</div>';
  module += '<div class="goods-content">';
  module += '<div class="container-fluid">';
  module += '<div class="row">';
  module += '<div class="col-md-1"><input type="checkbox">&nbsp;全选</div><div class="col-md-4">商品信息</div><div class="col-md-1">单价</div><div class="col-md-2">数量</div><div class="col-md-1">金额</div><div class="col-md-3">操作</div>';
  module += '</div>';
  for(let good of arguments[0]){
    module += '<div class="row">';
    module += '<div class="col-md-1"><input type="checkbox"></div><div class="col-md-4"><img src="'+good['img']+'" />&nbsp;'+good['des']+'</div><div class="col-md-1">'+good['price']+'</div><div class="col-md-2">'+good['num']+'</div><div class="col-md-1">'+good['price']*good['num']+'</div><div class="col-md-3"><button class="btn btn-info">移动到我的关注</button>&nbsp;<button class="btn btn-danger">删除</button></div>';
    module += '</div>';
  }
  module += '<div class="row">';
  module += '<div class="col-md-2"><button class="btn btn-warning">删除选中商品</button></div><div class="col-md-2"><button class="btn btn-info">移动到我的关注</button></div><div class="col-md-3">已选中的商品<span>0</span>件</div><div class="col-md-3">总价(不含运费)：</div><div class="col-md-1"><button class="btn btn-danger">结算</button></div>';
  module += '</div>';
  module += '</div>';
  module += '</div>';
  return module;
}