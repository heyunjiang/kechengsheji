//购物车
import './structureSass/reset.scss';
import './structureSass/structure.scss';

import './main.scss';

import good1 from './images/images/good1.jpg';

import header from './components/header/header';
import car from './components/car/car';
import footer from './components/footer/footer';

class mycar {
	constructor(){
		let app = document.querySelector(".content-top");
		$(app).append(header());
		$(app).append(car(this.getCarGoodsInfo()));
		$(app).append(footer());
	}
	getCarGoodsInfo(){
		return [{'img':good1,'des':'[眷客超市] 新疆特产 葡萄干 种类：原味125g','price': 10,'num': 2},
		{'img':good1,'des':'[眷客超市] 新疆特产 大芒果 种类：原味500g','price': 15,'num': 2}];
	}
}

new mycar();
