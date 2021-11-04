//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) {}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false,
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}

function sliders_bild_callback(params) {}

//=================================================
if (document.querySelector('.main-slider__body')) {
	new Swiper('.main-slider__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		// spaceBetween: 22,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// // Dotts
		// pagination: {
		// 	el: '.controls-slider-main__dotts',
		// 	clickable: true,
		// },
		// Arrows
		navigation: {
			nextEl: '.slider-arrow__main_next',
			prevEl: '.slider-arrow__main_prev',
		},
		breakpoints: {
			320: {
				// slidesPerView: 1,
				// spaceBetween: 0,
				// autoHeight: true,
			},
			768: {
				// slidesPerView: 2,
				// spaceBetween: 20,
				// autoHeight: false,
			},
			992: {
				// slidesPerView: 3,
				// spaceBetween: 20,
			},
			1268: {
				// slidesPerView: 4,
				// spaceBetween: 30,
			},
		},
	});
}
//=================================================
if (document.querySelector('.projects__body')) {
	new Swiper('.projects__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 15,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// // Dotts
		// pagination: {
		// 	el: '.controls-slider-main__dotts',
		// 	clickable: true,
		// },
		// Arrows
		navigation: {
			nextEl: '.slider-arrow__projects_next',
			prevEl: '.slider-arrow__projects_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 15,
				// autoHeight: true,
			},
			650: {
				slidesPerView: 1,
				spaceBetween: 15,
				// autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
				// autoHeight: false,
			},
			992: {
				slidesPerView: 3,
				// spaceBetween: 20,
			},
			1268: {
				// slidesPerView: 4,
				// spaceBetween: 30,
			},
		},
	});
}
//=================================================

if (document.querySelector('.reviews-slider__body')) {
	new Swiper('.reviews-slider__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 30,
		watchOverflow: true,
		speed: 1000,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// // Dotts
		// pagination: {
		// 	el: '.controls-slider-main__dotts',
		// 	clickable: true,
		// },
		// Arrows
		navigation: {
			nextEl: '.slider-arrow__reviews_next',
			prevEl: '.slider-arrow__reviews_prev',
		},
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 15,
		// 		// autoHeight: true,
		// 	},
		// 	650: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 15,
		// 		// autoHeight: true,
		// 	},
		// 	768: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 15,
		// 		// autoHeight: false,
		// 	},
		// 	992: {
		// 		// slidesPerView: 3,
		// 		// spaceBetween: 20,
		// 	},
		// 	1268: {
		// 		// slidesPerView: 4,
		// 		// spaceBetween: 30,
		// 	},
		// },
	});
}
//=================================================
// let main_slider = new Swiper('.main-slider__body', {
// 	/*
// 	effect: 'fade',
// 	autoplay: {
// 		delay: 3000,
// 		disableOnInteraction: false,
// 	},
// 	*/
// 	observer: true,
// 	observeParents: true,
// 	slidesPerView: 1,
// 	spaceBetween: 32,
// 	autoHeight: true,
// 	speed: 800,
// 	//touchRatio: 0,
// 	//simulateTouch: false,
// 	loop: true,
// 	//preloadImages: false,
// 	//lazy: true,
// 	// Dotts
// 	//pagination: {
// 	//	el: '.slider-quality__pagging',
// 	//	clickable: true,
// 	//},
// 	// Arrows
// 	navigation: {
// 		nextEl: '.slider-arrow_next',
// 		prevEl: '.slider-arrow_prev ',
// 	},
// 	breakpoints: {
// 		320: {
// 			// slidesPerView: 1,
// 			// spaceBetween: 0,
// 			autoHeight: true,
// 		},
// 		768: {
// 			// slidesPerView: 2,
// 			// spaceBetween: 20,
// 			autoHeight: false,
// 		},
// 		// 992: {
// 		// 	slidesPerView: 3,
// 		// 	spaceBetween: 20,
// 		// },
// 		// 1268: {
// 		// 	slidesPerView: 4,
// 		// 	spaceBetween: 30,
// 		// },
// 	},
// 	on: {
// 		lazyImageReady: function () {
// 			ibg();
// 		},
// 	},
// 	// And if we need scrollbar
// 	//scrollbar: {
// 	//	el: '.swiper-scrollbar',
// 	//},
// });

//=================================================
