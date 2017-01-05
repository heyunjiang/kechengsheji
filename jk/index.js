import './structureSass/reset.scss';
import './structureSass/structure.scss';

import './main.scss';

import header from './components/header/header';

class index {
	constructor(){
		this.header();
	}
	header(){
		let app = document.querySelector(".content-top");
		$(app).append(header());
	}
}

new index();
