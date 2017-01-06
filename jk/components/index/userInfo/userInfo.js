import './userInfo.scss';

import user from '../../../images/images/user.jpg';
import userLeft from '../../../images/images/user-left.jpg';
import userRight from '../../../images/images/user-right.jpg';

export default function() {
  let module = '';
  module += '<div class="userInfo">';
  module += '<div class="userInfo-left">';
  module += '<img class="user" src="'+user+'" />';
  module += '<img class="userRight" src="'+userLeft+'" />';
  module += '<img class="userRight" src="'+userRight+'" />';
  module += '</div>';
  module += '</div>';
  return module;
}