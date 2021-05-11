'use strict';
/**
 *  LIGHTBOX
 */
//==================================================================================================
//  DOM ELEMENTS
//==================================================================================================
// Lightbox
const overlayLightboxEl = document.querySelector('.overlay-lightbox');
const lightboxEl = document.querySelector('.lightbox');
const btnCloseLightboxEl = document.querySelector('.lightbox__close');
console.log(btnCloseLightboxEl);
const lightboxHeadingEl = document.querySelector('.lightbox__heading');
// const lightboxMediaEl = document.querySelector('.lightbox__media');

class Lightbox {
	static init() {}
}

Lightbox.init();

//==================================================================================================
// Lightboxes
//  function and events for Open & Close
//==================================================================================================

// const openCloseLightbox = function () {
function closeLightbox() {
	overlayLightboxEl.classList.add('hidden');
	// lightboxEl.classList.toggle('hidden');
	// console.log(overlayLightboxEl);
}

// for (let i = 0; i < lightboxMediaEl.length; i++) {
// 	lightboxMediaEl[i].addEventListener('click', openCloseLightbox);
// }
// console.log(lightboxMediaEl);

// // workMediaEl.addEventListener('click', openCloseLightbox);
// lightboxMediaEl.addEventListener('click', openCloseLightbox);

// Close lightbox
btnCloseLightboxEl.addEventListener('click', closeLightbox);
// console.log(btnCloseLightboxEl);

document.addEventListener('keydown', function (e) {
	// console.log(e.key);
	if (e.key === 'Escape') {
		closeLightbox();
	}
});
