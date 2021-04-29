'use strict';
//==================================================================================================
// DOM ELEMENTS
//==================================================================================================

const photographersListEl = document.querySelector('.container-photographers');
// const tagsListEl = document.querySelector('.photographers__tags');

// navigation tags
const navEl = document.querySelector('.navigation');
const navItemEl = document.querySelectorAll('.navigation__item');
console.log(navEl);
console.log(navItemEl);

// URL JSON
const URL = './FishEyeDataFR.json';

//==================================================================================================
//  Render Photographers' Cards Homepage
//==================================================================================================

const datasHomepage = Utils.getAllDatas(URL).then(data =>
	renderPhotographers(data)
);

const renderPhotographers = data => {
	let newPhotographer = '';
	data['photographers'].forEach(photographers => {
		// Render Photographers' Tag list
		let newLiTags = '';
		let tagsList = photographers['tags'];
		for (let i = 0; i < tagsList.length; i++) {
			newLiTags += `
                <a href="#" class="photographers__tags__item">#${tagsList[i]}</a>
                `;
		}
		// Render Photographers' cards
		newPhotographer += `
            <article class="photographers" id="${photographers.id}">
                <a href="photographer-page.html?id=${photographers.id}">
                    <div class="photographers__portrait">
                        <img class="photographers__portrait ${photographers.id}" src='./scss/img/photos/PhotographersIDPhotos/${photographers.portrait}' alt="" aria-label=""/>
                    </div>
                    <h2 class="photographers__name">${photographers.name}</h2>
                </a>
                <p class="photographers__infos">
                    <span class="photographers__infos--place">${photographers.city}, ${photographers.country}</span>
                    <span class="photographers__infos--tagline">${photographers.tagline}</span>
                    <span class="photographers__infos--price">${photographers.price}€/jour</span>
                </p>
                <ul class="photographers__tags">
                    ${newLiTags}
                </ul>
            </article>
            `;
		// console.log('data is', data);
		// console.log('data.photographers is', data.photographers);
		// console.log(tagsList, newLiTags);
	});
	photographersListEl.innerHTML = newPhotographer;
};

// function tagsNavFilter() {
// 	if (navItemEl.classList.contains('active')) {
// 		console.log('ok');
// 	}
// }

// Change style for tag selected

// navItemEl.forEach(tag => {
// 	tag.addEventListener('click', function () {
// 		// let navItemEl = document.querySelectorAll('.navigation__item');
// 		let tagActive = tag.classList.contains('active');
// 		let tagActive1 = tag.classList.contains('1');
// 		let tagSiblings = Array.from(tag.parentNode.children);
// 		let tagSiblingsActive = tagSiblings.filter(
// 			element => tag !== tagActive
// 		);
// 		console.log(tagSiblings);
// 		console.log(tagSiblingsActive);

// 		// if (!tagActive && !tagSiblings == tagActive) {
// 		if (!tagActive) {
// 			if (tagSiblingsActive) {
// 				// Quand select 1 tag & autres non select =
// 				tag.classList.add('active');
// 				console.log("n'était pas actif & autres non plus"); // ok
// 				console.log(tagActive); // false
//                 console.log(tagSiblings); // [8 tags dt 1 avec class'active']
//                 console.log(tagSiblingsActive);
// 				// console.log(navItemEl); // [NodeList 8 tags dt 1 avec class'active']
// 			} else if (tagSiblingsActive == tagActive) {
// 				// tagSiblings.tag.remove('active');
// 				console.log('ENFIN !!!!');
// 				console.log(tagActive);
// 				console.log(tagSiblings);
// 				console.log(navItemEl);
// 			}
// 		} else if (tagActive) {
// 			// Qd select 1 tag déjà select et autres non select
// 			tag.classList.remove('active');
// 			console.log('était actif'); // ok
// 			console.log(tagActive); // true
// 			console.log(tagSiblings); // [8 tags dt 1 sans class'active']
// 			console.log(navItemEl); // [8 tags dt 1 sans class'active']
// 		}
// 	});
// });

//     .addEventListener('click', function () {
// 	for (let i = 0; i < navItemEl.length; i++) {
// 		console.log(navEl, navItemEl[i]);
// 		let tagActive = navItemEl[i].classList.contains('active');
// 		console.log(tagActive);
// 		navItemEl[i].classList.add('active');
// 	}
// });
