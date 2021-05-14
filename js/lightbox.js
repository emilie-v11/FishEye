'use strict';
/**
 *  LIGHTBOX
 */
//==================================================================================================
//  DOM ELEMENTS
//==================================================================================================
const overlayLightboxEl = document.querySelector('.overlay-lightbox');
const lightboxEl = document.querySelector('.lightbox');
const lightboxContentEl = document.querySelector('.lightbox__content');
const lightboxHeadingEl = document.querySelector('.lightbox__heading');
// Buttons
const closeBtnLightboxEl = document.querySelector('.lightbox__close');
const prevBtnLightboxEl = document.querySelector('.lightbox__prev');
const nextBtnLightboxEl = document.querySelector('.lightbox__next');

//==================================================================================================
// HANDLER THE LIGHTBOX
//==================================================================================================
//==============================================
// FACTORY MEDIA LIGHTBOX
//==============================================

function mediaFactoryLightbox() {
	if (lightboxMedia.tagName == 'IMG') {
		lightboxContentEl.innerHTML = `<img class="lightbox__content__media" src="${lightboxMedia.src}" alt="${lightboxMedia.alt}">`;
		lightboxHeadingEl.innerHTML = `${lightboxMedia.alt}`;
	} else {
		lightboxContentEl.innerHTML = `<video class="lightbox__content__media" src="${lightboxMedia.src}" type="video/mp4" controls aria-label="${lightboxMedia['aria-label']}"></video>`;
		lightboxHeadingEl.textContent = `${lightboxMedia.textContent}`;
	}
}

//==============================================
// SET MEDIA LIGHTBOX
//==============================================

function setActiveMedia(image) {
	lightboxMedia = image; //e.currentTarget; // e.target
	activeMedia = workMediaArray.indexOf(lightboxMedia);
	mediaFactoryLightbox(lightboxMedia);
	console.log(image, activeMedia);
}
//==============================================
// NAVIGATION IN MEDIA LIGHTBOX
//==============================================

function nextMedia() {
	if (activeMedia === workMediaArray.length - 1) {
		activeMedia = workMediaArray[0];
		setActiveMedia(activeMedia);
	} else {
		activeMedia = workMediaArray[(activeMedia += 1)];
		setActiveMedia(activeMedia);
	}
}

function prevMedia() {
	if (activeMedia === 0) {
		activeMedia = workMediaArray[workMediaArray.length - 1];
		setActiveMedia(activeMedia);
	} else {
		activeMedia = workMediaArray[(activeMedia -= 1)];
		setActiveMedia(activeMedia);
	}
	console.log(activeMedia);
}

// Events for navigation inside the Lightbox
// Navigation with buttons '<' & '>'
prevBtnLightboxEl.addEventListener('click', prevMedia);
nextBtnLightboxEl.addEventListener('click', nextMedia);

// Navigation with keyboard arrow left and right
document.addEventListener('keydown', function (e) {
	console.log(e.key);
	if (e.key === 'ArrowRight') {
		nextMedia();
	} else if (e.key === 'ArrowLeft') {
		prevMedia();
	}
});

//==================================================================================================
// OPEN & CLOSE THE MEDIA LIGHTBOX
//==================================================================================================

function openLightbox() {
	overlayLightboxEl.classList.remove('hidden');
}

function closeLightbox() {
	overlayLightboxEl.classList.add('hidden');
}

// Close with button 'X'
closeBtnLightboxEl.addEventListener('click', closeLightbox);

// Close with keyboard 'ESCAPE'
document.addEventListener('keydown', function (e) {
	console.log(e.key);
	if (e.key === 'Escape') {
		closeLightbox();
	}
});
