//个人中心
import './structureSass/reset.scss';
import './structureSass/structure.scss';

import './main.scss';

import header from './components/header/header';
import banner from './components/banner/banner';

class index {
	constructor(){
		let app = document.querySelector(".content-top");
		$(app).append(header());
		$(app).append(banner());
	}
}

new index();
