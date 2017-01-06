//会员推荐
import './recommend.scss';

import recommend from '../../../images/images/recommend.jpg';

export default function() {
  let module = '';
  module += '<div class="recommend">';
  module += '<img src="'+recommend+'" />';
  module += '</div>';
  return module;
}