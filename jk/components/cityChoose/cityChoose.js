import './cityChoose.scss';

export default function() {
  let module = '';
  module += '<div class="cityChoose">';
  module += '<ul>';
  module += '<li class="city-title">热门城市: </li><li>北京</li><li>上海</li><li>成都</li><li>重庆</li>';
  module += '</ul>';
  module += '<ul>';
  module += '<li class="city-title">省份/城市: </li><li>北京</li><li>天津</li><li>上海</li><li>重庆</li><li>河北</li><li>成都</li><li>武汉</li><li>杭州</li>';
  module += '</ul>';
  module += '</div>';
  return module;
}