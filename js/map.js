"use strict";





class worldMap {
	constructor (worldMapConfig) {
		this.worldMapConfig = worldMapConfig;
		this.worldMapContainer = document.getElementById("worldmap");
		this.worldMapSvg = document.getElementById("worldmapsvg");
		this.worldMapScroll = document.getElementById("worldmapscroll");
		this.paths = this.worldMapSvg.getElementsByTagName("path");
		this.countries = this.worldMapConfig.countries;
		this.calcMapBgWidth();
		this.showCountries();
		
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
					marker.setAttribute('style', 'left:' + markerX + 'px; top:calc(' + markerY + 'px + ' + this.worldMapConfig.offsetTop + 'vh)' );
					this.worldMapScroll.appendChild(marker);

					this.paths[n].addEventListener("mouseenter", function( event ) {
						if (window.matchMedia("(hover: hover)").matches) {
							banner.classList.add('show');
							document.getElementById('marker' + event.target.id).classList.add('selected');
							banner.innerHTML = self.countries[Object.keys(self.countries)[i]].html;
							banner.appendChild(bannerLine);
							
							let x1 = self.getOffset(bannerLine).left;
							let y1 = self.getOffset(bannerLine).bottom;
							let x2 = self.getOffset(document.getElementById('marker' + event.target.id)).left + document.getElementById('marker' + event.target.id).offsetWidth/2;
							let y2 = self.getOffset(document.getElementById('marker' + event.target.id)).top + document.getElementById('marker' + event.target.id).offsetHeight/2;

							

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
		//if (window.matchMedia("(max-width: 1300px)").matches) {
			console.log('matches');
			this.worldMapSvg.style.height = this.worldMapConfig.zoom + 'vh';
			document.getElementById("worldmapbg").style.width = this.worldMapSvg.getBoundingClientRect().width + 'px';
			//document.getElementById("worldmapbg").style.height = this.worldMapSvg.getBoundingClientRect().height + 'px';
			document.getElementById("worldmapbg").style.backgroundPosition = 'center top ' + this.worldMapConfig.offsetTop + 'vh';
			this.worldMapSvg.style.top = this.worldMapConfig.offsetTop + 'vh';
			
		//} else {
		//	document.getElementById("worldmapbg").style.width = '';
		//}
	}
	reload(){
		this.calcMapBgWidth();
		for (let n = 0; n < this.paths.length; n++) {
			for (let i = 0; i < Object.keys(this.countries).length; i++) {
				
				if (Object.keys(this.countries)[i] == this.paths[n].getAttribute("id")) {
					
					let marker = document.getElementById('marker' + Object.keys(this.countries)[i]);
					let markerX = Math.round(this.paths[n].getBoundingClientRect().left + ((this.paths[n].getBoundingClientRect().right - this.paths[n].getBoundingClientRect().left) / 2) - this.worldMapSvg.getBoundingClientRect().left);
					let markerY = Math.round(this.paths[n].getBoundingClientRect().top + ((this.paths[n].getBoundingClientRect().bottom - this.paths[n].getBoundingClientRect().top) / 2) - this.worldMapSvg.getBoundingClientRect().top);
					
					marker.setAttribute('style', 'left:' + markerX + 'px; top:calc(' + markerY + 'px + ' + this.worldMapConfig.offsetTop + 'vh)' );
									
					
					break;
				}
			};
		}
		
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

