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
		"BY": {
			"html": "<p><strong>Беларусь, г. Минск, ул. Донецкая, 16/2 03151</strong></p><p>телефон: <strong>+375 (56) 594-98-98</strong><br><strong>+38 (044) 492-29-29</strong></p><p>электронная почта.:  <strong>info@muk.u</strong></p>",
			"link": "#by"
		}
	}
}



class worldMap {
	constructor (worldMapConfig) {
		this.worldMapConfig = worldMapConfig;
		this.worldMapContainer = document.getElementById("worldmap");
		this.worldMapSvg = document.getElementById("worldmapsvg");
		this.paths = this.worldMapSvg.getElementsByTagName("path");
		this.countries = this.worldMapConfig.countries;
		this.showCountries();
	}
	showCountries() {
		let self = this;
		let banner = document.createElement('div');		
		banner.setAttribute('class', 'map__banner');
		banner.setAttribute('id', 'map__banner');
		
		this.worldMapContainer.appendChild(banner);		
			
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
					this.worldMapContainer.appendChild(marker);

					this.paths[n].addEventListener("mouseenter", function( event ) {
						banner.classList.add('show');
						document.getElementById('marker' + event.target.id).classList.add('selected');
						banner.innerHTML = self.countries[Object.keys(self.countries)[i]].html;
					}, false);
					
					this.paths[n].addEventListener("mouseleave", function( event ) {
						banner.classList.remove('show');
						document.getElementById('marker' + event.target.id).classList.remove('selected');
					}, false);
					
					break;
				}
			};
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
	}
}
console.time('timer1');
const myWorldMap = new worldMap(worldMapConfig);
console.timeEnd('timer1');

window.addEventListener("resize", function(){
	myWorldMap.reload();
	console.log('resized');
}, false);