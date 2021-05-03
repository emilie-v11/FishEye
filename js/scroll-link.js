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
//const photographersListEl = document.querySelector('.container-photographers');

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
// 	photographersListEl.focus();
// });
// console.log(scrollLink);

// document.addEventListener('keydown', function (e) {
// 	// console.log(e.key);
// 	if (e.key === 'Enter') {
// 		scrollLink.blur();
// 		photographersListEl.focus();
// 	}
// });
// if (scrollPosition < 20 || scrollPosition > 200)
