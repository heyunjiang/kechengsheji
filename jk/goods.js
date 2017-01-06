//商品分类　按各种选项进行商品选择
import './structureSass/reset.scss';
import './structureSass/structure.scss';

import './main.scss';

import header from './components/header/header';
import banner2 from './components/banner2/banner2';
import cityChoose from './components/cityChoose/cityChoose';
import goodsShow from './components/goodsShow/goodsShow';
import footer from './components/footer/footer';

class goods {
	constructor(){
		let app = document.querySelector(".content-top");
		$(app).append(header());
		$(app).append(banner2());
		$(app).append(cityChoose());
		$(app).append(goodsShow('showSort'));
		$(app).append(footer());
	}
}

new goods();