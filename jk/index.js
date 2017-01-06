//个人中心
import './structureSass/reset.scss';
import './structureSass/structure.scss';

import './main.scss';

import header from './components/header/header';
import banner from './components/banner/banner';
import centerList from './components/centerList/centerList';
import userInfo from './components/index/userInfo/userInfo';
import myOrder from './components/index/myOrder/myOrder';
import recommend from './components/index/recommend/recommend';
import footer from './components/footer/footer';

class index {
	constructor(){
		let app = document.querySelector(".content-top");
		$(app).append(header());
		$(app).append(banner());
		$(app).append(centerList());
		$(app).append(userInfo());
		$(app).append(myOrder());
		$(app).append(recommend());
		$(app).append(footer());
	}
}

new index();
