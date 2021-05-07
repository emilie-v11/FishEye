'use strict';
/*
 * SCROLL-LINK - HOMEPAGE
 */
//==================================================================================================
// DOM ELEMENTS
//==================================================================================================
// scroll Link top of homepage
const scrollLink = document.querySelector('.scroll-link');
const mainEl = document.querySelector('#main-homepage');
//const containerPhotographersEl = document.querySelector('.container-photographers');

//==================================================================================================
// Scroll Link top of homepage
//==================================================================================================
window.addEventListener('scroll', () => {
	const scrollPosition = window.scrollY;

	if (scrollPosition < 10 || scrollPosition > 100) {
		scrollLink.style.display = 'none';
	} else {
		scrollLink.style.display = 'block';
		// scrollLink.focus();
	}
});

// scrollLink.addEventListener('click', () => {
// 	scrollLink.blur();
// 	containerPhotographersEl.focus();
// });
// console.log(scrollLink);

// document.addEventListener('keydown', function (e) {
// 	// console.log(e.key);
// 	if (e.key === 'Enter') {
// 		scrollLink.blur();
// 		containerPhotographersEl.focus();
// 	}
// });
// if (scrollPosition < 10 || scrollPosition > 100) // 20 - 200
