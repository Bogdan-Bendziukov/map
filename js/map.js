"use strict";

const worldMapConfig = {
	"countries": {
		"UA": {
			"html": "<p><strong>Украина, г. Киев, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+38 (044) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#ua"
		},
		"RU": {
			"html": "<p><strong>Россия, г. Москва, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#ru"
		},
		"CN": {
			"html": "<p><strong>China, г. Beijing, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"IN": {
			"html": "<p><strong>India, г. Deli, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+375 (56) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#in"
		},
		"BY": {
			"html": "<p><strong>Belarus, г. Minsk, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"AM": {
			"html": "<p><strong>Armenia, г. Yerevan, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"AZ": {
			"html": "<p><strong>Azerbaijan, г. Baku, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"GE": {
			"html": "<p><strong>Georgia, г. Tbilissi, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"KZ": {
			"html": "<p><strong>Kazakhstan, г. Nur-Sultan, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"KG": {
			"html": "<p><strong>Kyrguzstan, г. Bishkek, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"MK": {
			"html": "<p><strong>Macedonia, г. Skopje, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"MD": {
			"html": "<p><strong>Moldova, г. Cishineu, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"MN": {
			"html": "<p><strong>Mongolia, г. Ulan-Bator, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"SI": {
			"html": "<p><strong>Slovenia, г. Ljubliana, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"TJ": {
			"html": "<p><strong>Tajikistan, г. Dushanbe, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"TM": {
			"html": "<p><strong>Turkmenistan, г. Ashkhabad, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		},
		"UZ": {
			"html": "<p><strong>Uzbekistan, г. Tashkent, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+7 (495) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#cn"
		}
	}
}



class worldMap {
	constructor (worldMapConfig) {
		this.worldMapConfig = worldMapConfig;
		this.worldMapContainer = document.getElementById("worldmap");
		this.worldMapSvg = document.getElementById("worldmapsvg");
		this.worldMapScroll = document.getElementById("worldmapscroll");
		this.paths = this.worldMapSvg.getElementsByTagName("path");
		this.countries = this.worldMapConfig.countries;
		this.showCountries();
		this.calcMapBgWidth();
		window.addEventListener("resize", () => {
			setTimeout(() => {
			this.reload();
			console.log('resized');
			}, 200);
		}, false);
	}
	showCountries() {
		let self = this;
		let banner = document.createElement('div');		
		banner.setAttribute('class', 'map__banner');
		banner.setAttribute('id', 'map__banner');
		let bannerLine = document.createElement('span');		
		bannerLine.setAttribute('class', 'map__banner-line');
		bannerLine.setAttribute('id', 'map__banner-line');		
		
		this.worldMapContainer.appendChild(banner);
		
		let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		svg.setAttributeNS(null, 'id', 'map__svg');
		this.worldMapContainer.appendChild(svg);
		let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		line.setAttributeNS(null, 'id', 'map__line');
		svg.appendChild(line);
		
		for (let n = 0; n < this.paths.length; n++) {
			for (let i = 0; i < Object.keys(this.countries).length; i++) {
				
				if (Object.keys(this.countries)[i] == this.paths[n].getAttribute("id")) {
					this.paths[n].setAttribute("class", "show");						
					
					let marker = document.createElement('span');
					let markerX = Math.round(this.paths[n].getBoundingClientRect().left + ((this.paths[n].getBoundingClientRect().right - this.paths[n].getBoundingClientRect().left) / 2) - this.worldMapSvg.getBoundingClientRect().left);
					let markerY = Math.round(this.paths[n].getBoundingClientRect().top + ((this.paths[n].getBoundingClientRect().bottom - this.paths[n].getBoundingClientRect().top) / 2) - this.worldMapSvg.getBoundingClientRect().top);
					
					marker.setAttribute('class', 'map__marker');
					marker.setAttribute('id', 'marker' + Object.keys(this.countries)[i]);
					marker.setAttribute('style', 'left:' + markerX + 'px; top:' + markerY + 'px;' );
					this.worldMapScroll.appendChild(marker);

					this.paths[n].addEventListener("mouseenter", function( event ) {
						if (window.matchMedia("(hover: hover)").matches) {
							banner.classList.add('show');
							document.getElementById('marker' + event.target.id).classList.add('selected');
							banner.innerHTML = self.countries[Object.keys(self.countries)[i]].html;
							banner.appendChild(bannerLine);
							
							let x1 = self.getOffset(bannerLine).left;
							let y1 = self.getOffset(bannerLine).bottom;
							let x2 = document.getElementById('marker' + event.target.id).offsetLeft;
							let y2 = document.getElementById('marker' + event.target.id).offsetTop;

							

							line.setAttribute('x1',x1);
							line.setAttribute('y1',y1);
							line.setAttribute('x2',x2);
							line.setAttribute('y2',y2);
							line.classList.add("show");
						} else {
							
						}
					}, false);
					
					this.paths[n].addEventListener("mouseleave", function( event ) {
						if (window.matchMedia("(hover: hover)").matches) {
							banner.classList.remove('show');
							document.getElementById('marker' + event.target.id).classList.remove('selected');
							line.classList.remove("show");
							
						} else {
							
						}
					}, false);
					
					this.paths[n].addEventListener("click", function( event ) {						
						if (window.matchMedia("(hover: hover)").matches) {
							window.location.href = self.countries[Object.keys(self.countries)[i]].link;
						} else {
							for (let i = 0; i < self.worldMapContainer.querySelectorAll('.map__marker').length; i += 1) {
								self.worldMapContainer.querySelectorAll('.map__marker')[i].classList.remove('selected');
							}
							banner.classList.toggle('show', true);
							document.getElementById('marker' + event.target.id).classList.toggle('selected', true);
							banner.innerHTML = self.countries[Object.keys(self.countries)[i]].html;
							banner.appendChild(bannerLine);
							
							banner.removeEventListener('click', bannerClick, false);
							banner.addEventListener("click", bannerClick, false);
						}
					}, false);
					
					let bannerClick = function(){						
						if (window.matchMedia("(hover: hover)").matches) {
							
						} else {
							window.location.href = self.countries[Object.keys(self.countries)[i]].link;
						}
					}
					
					
					break;
				}
			};
		}
		
		window.addEventListener('click', function(e){
			let clickedOutside = true;
			for (let i = 0; i < self.worldMapSvg.querySelectorAll('path').length; i += 1) {
				if (self.worldMapSvg.querySelectorAll('path')[i].contains(e.target) && e.target.classList.contains('show') || e.target.classList.contains('map__banner')){
					// Clicked in box
					clickedOutside = false;
					break;
				} else{
					// Clicked outside the box
					
					
				}
			}
			if (clickedOutside) {
				banner.classList.remove('show');
				for (let i = 0; i < self.worldMapContainer.querySelectorAll('.map__marker').length; i += 1) {
					self.worldMapContainer.querySelectorAll('.map__marker')[i].classList.remove('selected');
				}
			}
		});
		
		
		

	}
	calcMapBgWidth() {
		if (window.matchMedia("(max-width: 1300px)").matches) {
			console.log('matches');
			document.getElementById("worldmapbg").style.width = this.worldMapSvg.getBoundingClientRect().width + 'px';
		} else {
			document.getElementById("worldmapbg").style.width = '';
		}
	}
	reload(){
		for (let n = 0; n < this.paths.length; n++) {
			for (let i = 0; i < Object.keys(this.countries).length; i++) {
				
				if (Object.keys(this.countries)[i] == this.paths[n].getAttribute("id")) {
					
					let marker = document.getElementById('marker' + Object.keys(this.countries)[i]);
					let markerX = Math.round(this.paths[n].getBoundingClientRect().left + ((this.paths[n].getBoundingClientRect().right - this.paths[n].getBoundingClientRect().left) / 2) - this.worldMapSvg.getBoundingClientRect().left);
					let markerY = Math.round(this.paths[n].getBoundingClientRect().top + ((this.paths[n].getBoundingClientRect().bottom - this.paths[n].getBoundingClientRect().top) / 2) - this.worldMapSvg.getBoundingClientRect().top);
					
					marker.setAttribute('style', 'left:' + markerX + 'px; top:' + markerY + 'px;' );					
					
					break;
				}
			};
		}
		this.calcMapBgWidth();
	}
	getOffset(element){
		var bound = element.getBoundingClientRect();
		var html = document.documentElement;

		return {
			top: bound.top + window.pageYOffset - html.clientTop,
			bottom: bound.bottom + window.pageYOffset - html.clientTop,
			left: bound.left + window.pageXOffset - html.clientLeft
		};
	}
	
}
console.time('timer1');
const myWorldMap = new worldMap(worldMapConfig);
const viewer = new TouchScroll();
viewer.init({
	id: 'worldmapscroll',
	draggable: true,
	wait: false
});
console.timeEnd('timer1');

