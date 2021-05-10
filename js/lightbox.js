'use strict';
/*
 *  LIGHTBOX
 */
//==================================================================================================
//  DOM ELEMENTS
//==================================================================================================
// Lightbox
const overlayLightboxEl = document.querySelector('.overlay-lightbox');
const lightboxEl = document.querySelector('.lightbox');
const btnCloseLightboxEl = document.querySelector('.lightbox__close');

const lightboxHeadingEl = document.querySelector('.lightbox-modal__heading');
const lightboxMediaEl = document.querySelector('.lightbox-modal__media');

//==================================================================================================
// Lightboxes
//  function and events for Open & Close
//==================================================================================================

// const openCloseLightbox = function () {
function openCloseLightbox() {
	overlayLightboxEl.classList.toggle('hidden');
	lightboxEl.classList.toggle('hidden');
	console.log(overlayLightboxEl);
}

// for (let i = 0; i < lightboxMediaEl.length; i++) {
// 	lightboxMediaEl[i].addEventListener('click', openCloseLightbox);
// }
// console.log(lightboxMediaEl);

// workMediaEl.addEventListener('click', openCloseLightbox);
lightboxMediaEl.addEventListener('click', openCloseLightbox);

// Close lightbox
btnCloseLightboxEl.addEventListener('click', openCloseLightbox);
// console.log(btnCloseLightboxEl);
