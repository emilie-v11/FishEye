'use strict';
/**
 * SCROLL-LINK - HOMEPAGE
 */
//==================================================================================================
// DOM ELEMENTS
//==================================================================================================
// scroll Link top of homepage
const scrollLink = document.querySelector('.scroll-link');
const mainEl = document.querySelector('#main-homepage');

//==================================================================================================
// Scroll Link top of homepage
//==================================================================================================
window.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY;

	if (scrollPosition < 10 || scrollPosition > 80) {
		scrollLink.style.display = 'none';
	} else {
		scrollLink.style.display = 'block';
		scrollLink.focus(); // remove ?
	}
});
