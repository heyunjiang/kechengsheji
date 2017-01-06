//游客主页
import './structureSass/reset.scss';
import './structureSass/structure.scss';

import './main.scss';

import header from './components/header/header';
import banner2 from './components/banner2/banner2';
import footer from './components/footer/footer';

class tourist {
	constructor(){
		let app = document.querySelector(".content-top");
		$(app).append(header());
		$(app).append(banner2());
		$(app).append(this.addLoginRegister());
		$(app).append(footer());
	}
	addLoginRegister(){
		let module = '';
		module += '<div style="position: absolute;right: 200px;top: 70px;">';
		module += '<button style="background: #ca7bb2;color: white;border: none;padding: 5px;">登&nbsp;录</button>';
		module += '<button style="background: #ca7bb2;color: white;border: none;padding: 5px;margin-left: 5px;">注&nbsp;册</button>';
		module += '</div>';
		return module;
	}
}

new tourist();
