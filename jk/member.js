//会员主页
import './structureSass/reset.scss';
import './structureSass/structure.scss';

import './main.scss';

import header from './components/header/header';
import banner2 from './components/banner2/banner2';
import goodsShow from './components/goodsShow/goodsShow';
import footer from './components/footer/footer';

class member {
	constructor(){
		let app = document.querySelector(".content-top");
		$(app).append(header());
		$(app).append(banner2());
		$(app).append(goodsShow());
		$(app).append(footer());
	}
}

new member();
