'use strict';
/**
 *  LIGHTBOX
 */
//==================================================================================================
//  DOM ELEMENTS
//==================================================================================================
const overlayLightboxEl = document.querySelector('.overlay-lightbox');
const lightboxEl = document.querySelector('.lightbox');
const lightboxContainerEl = document.querySelector('.lightbox__container');
const lightboxContentEl = document.querySelector('.lightbox__content');
workMediaEl = document.querySelectorAll('.work__media');
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

function mediaFactoryLightbox(lightboxMedia) {
	if (lightboxMedia.tagName == 'IMG') {
		lightboxContentEl.innerHTML = `<img class="lightbox__content__media" src="${lightboxMedia.src}" alt="${lightboxMedia.alt}, closeup view" tabindex="0">`;
		lightboxHeadingEl.innerHTML = `${lightboxMedia.alt}`;
	} else {
		lightboxContentEl.innerHTML = `<video class="lightbox__content__media" src="${lightboxMedia.src}" type="video/mp4" controls aria-label="${lightboxMedia['aria-label']}" tabindex="0"></video>`;
		lightboxHeadingEl.textContent = `${lightboxMedia.textContent}`;
	}
}

//==============================================
// SET MEDIA LIGHTBOX
//==============================================

function setActiveMedia(image) {
	lightboxMedia = image; //e.currentTarget; // e.target
	activeMedia = workMediaItemsArray.indexOf(lightboxMedia);
	mediaFactoryLightbox(lightboxMedia);
	console.log(image, activeMedia);
}

//==============================================
// NAVIGATION IN MEDIA LIGHTBOX
//==============================================

// trap the focus inside the lightbox
function trapFocusLightbox() {
	modal = document.querySelector('#lightbox__container'); // select the modal by ID
	firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
	focusableContent = modal.querySelectorAll(focusableElements);
	lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal
	trapFocus();
	console.log(firstFocusableElement, focusableContent, lastFocusableElement);
}

function nextMedia() {
	if (activeMedia === workMediaItemsArray.length - 1) {
		activeMedia = workMediaItemsArray[0];
		setActiveMedia(activeMedia);
	} else {
		activeMedia = workMediaItemsArray[(activeMedia += 1)];
		setActiveMedia(activeMedia);
	}
}

function prevMedia() {
	if (activeMedia === 0) {
		activeMedia = workMediaItemsArray[workMediaItemsArray.length - 1];
		setActiveMedia(activeMedia);
	} else {
		activeMedia = workMediaItemsArray[(activeMedia -= 1)];
		setActiveMedia(activeMedia);
	}
}

// Events for navigation inside the Lightbox
// Navigation with buttons '<' & '>'
prevBtnLightboxEl.addEventListener('click', prevMedia);
nextBtnLightboxEl.addEventListener('click', nextMedia);

// Navigation with keyboard arrow left and right
document.addEventListener('keydown', function (e) {
	if (e.key === 'ArrowRight') {
		nextMedia();
		trapFocusLightbox();
	} else if (e.key === 'ArrowLeft') {
		prevMedia();
		trapFocusLightbox();
	}
});

//==================================================================================================
// OPEN & CLOSE THE MEDIA LIGHTBOX
//==================================================================================================

function openLightbox() {
	overlayLightboxEl.classList.remove('hidden');
	headerEl.ariaHidden = 'true';
	mainEl.ariaHidden = 'true';
	overlayLightboxEl.ariaHidden = 'false';
	trapFocusLightbox();
}

function closeLightbox() {
	overlayLightboxEl.classList.add('hidden');
	headerEl.ariaHidden = 'false';
	mainEl.ariaHidden = 'false';
	overlayLightboxEl.ariaHidden = 'true';
	lightboxMedia.focus();
}

// Close with button 'X'
closeBtnLightboxEl.addEventListener('click', closeLightbox);

// Close with keyboard 'ESCAPE'
document.addEventListener('keydown', function (e) {
	// console.log(e.key);
	if (e.key === 'Escape') {
		closeLightbox();
		lightboxMedia.focus();
	}
});
