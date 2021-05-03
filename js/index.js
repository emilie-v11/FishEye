'use strict';
/*
 * INDEX - HOMEPAGE
 */
//==================================================================================================
// DOM ELEMENTS
//==================================================================================================
const photographersListEl = document.querySelector('.container-photographers');
// const tagsListEl = document.querySelector('.photographers__tags');

// navigation tags
const navEl = document.querySelector('.navigation');
// const navItemsEl = document.querySelectorAll('.navigation__item');
// console.log(navEl);

// URL JSON
const URL = './FishEyeDataFR.json';

//==================================================================================================
// FETCH JSON
//==================================================================================================

const datasHomepage = Utils.getAllDatas(URL).then(data => {
	renderPhotographers(data), renderTagsNavFilter(data);
});

//==================================================================================================
//  Render Photographers' Cards Homepage
//==================================================================================================

let allPhotographersProfiles;
let tagsList;
let photographersArray = [];
let photographersTags;

const renderPhotographers = data => {
	let newPhotographer = '';
	// console.log(data['photographers']); // datas of 6 photographers
	allPhotographersProfiles = data['photographers'];
	// console.log(allPhotographersProfiles); // datas of 6 photographers

	// Render Photographers
	allPhotographersProfiles.forEach(photographers => {
		console.log(photographers['tags']); //datas tags for each photographer
		// Render Photographers' Tag list
		let newLiTags = '';
		tagsList = photographers['tags'];
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
                        <img class="photographers__portrait ${photographers.id}" src='./img/photos/PhotographersIDPhotos/${photographers.portrait}' alt="" aria-label=""/>
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
		console.log('data is', data); // all JSON datas (59 medias + 6 photographers)
		console.log('data.photographers is', data.photographers); // datas of 6 photographers
		console.log(newLiTags); // innerHTML tags for each photographer
		console.log(tagsList); // array tags for for each photographer
		console.log(newPhotographer); // innerHTML cards photographers
	});
	photographersArray.push(newPhotographer);
	photographersListEl.innerHTML = photographersArray;

	console.log(photographersArray);
};

//==================================================================================================
// Filter Photographers by Tags with Navigation Tags
//==================================================================================================
// console.log(navItemsEl);
const navItemsEl = navEl.getElementsByClassName('navigation__item');
let tagActive = navEl.getElementsByClassName('active');

const navItemsArray = Array.from(navItemsEl);
console.log(navItemsArray);
// // function oneActiveTag() {
const oneActiveTag = navItemsArray.forEach((tag, index) => {
	tag.addEventListener('click', function () {
		// e.preventDefault();
		// let tagActive = document.getElementsByClassName('active');
		if (tagActive.length > 0) {
			tagActive[0].className = tagActive[0].className.replace(
				' active',
				''
			);
		}
		navItemsEl[index].classList.add('active');
	});
});
// oneActiveTag();
console.log(tagActive);

function sortbyTag() {
	if (!tagActive.innerHTML) {
	}
}

// Get the container element
// const navEl = document.querySelector('.navigation');
// // Get all tags with class="navigation__item" inside the container
// const navItemsEl = navEl.getElementsByClassName('navigation__item');
// let tagActive = navEl.getElementsByClassName('active');
// //Loop through the tags and add the active class to the current/clicked button
// for (let i = 0; i < navItemsEl.length; i++) {
// 	navItemsEl[i].addEventListener('click', function () {
// 		// tagActive = document.getElementsByClassName('active');
// 		// If there's no active class
// 		if (tagActive.length > 0) {
// 			// current[0].className = current[0].className.replace(' active', '');
// 			tagActive[0].classList.remove('active');
// 		}
// 		navItemsEl[i].classList.add('active');
// 	});
// 	console.log(tagActive);
// }
const renderTagsNavFilter = data => {
	console.log(allPhotographersProfiles, data['photographers']);
	// console.log(newPhotographer); // not defined
	// console.log(photographers['tags']); undefined
    console.log(tagsList);
    console.log(photographersListEl);
    allPhotographersProfiles.forEach(photographers => {
        let photographerFilterbyTag = 
		console.log(allPhotographersProfiles, photographers['tags']); //datas tags for each photographer
		// if (photographers.tags !== tagActive) {
		// 	photographersArray.slice()
		// }
	});
	console.log(tagActive);
};
