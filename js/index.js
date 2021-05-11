'use strict';
/**
 * INDEX - HOMEPAGE
 */
//==================================================================================================
// DOM ELEMENTS
//==================================================================================================
const containerPhotographersEl = document.querySelector(
	'.container-photographers'
);
const photographersEl = document.getElementsByClassName('photographers');
const tagsListEl = document.querySelector('.photographers__tags');
const navEl = document.querySelector('.navigation');
const navItemsEl = document.getElementsByClassName('navigation__item');
// const tagsEl = document.getElementsByClassName('tags');
const tagsEl = document.querySelectorAll('.tags');

//==================================================================================================
// Variables
let allPhotographersProfiles;
let tagsList;
let photographersTags;
// let tagsCard;
// let activeTag;

// URL JSON
const URL = './FishEyeDataFR.json';
//==================================================================================================
// FETCH JSON
//==================================================================================================

//  Render Photographers' Cards Homepage
const datasHomepage = Utils.getAllDatas(URL).then(data => {
	allPhotographersProfiles = data['photographers'];

	// Render Photographers'cards
	renderPhotographersCards();

	let tagUrl = Utils.getTagByUrl();
	// console.log(tagUrl);
	if (tagUrl !== null) {
		activeTag = tagUrl;
		// filterByTagsNav(tagUrl);
		filterByTagsNav(activeTag);
	}

	// console.log('data is', data); // all JSON datas (59 medias + 6 photographers)
	// console.log('data.photographers is', data.photographers); // datas of 6 photographers
	// console.log(tagsList); // array tags for for each photographer
	// console.log(allPhotographersProfiles); // datas of 6 photographers
	// console.log(photographers.tags);
});

//==================================================================================================
//  WORKS CARDS
//==================================================================================================

function renderPhotographersCards() {
	// Render Photographers
	let newPhotographer = '';

	allPhotographersProfiles.forEach(photographers => {
		// Render Photographers' Tag list
		let newLiTags = '';
		tagsList = photographers['tags']; // console.log(photographers['tags'], photographers.tags); //datas tags for each photographer
		for (let i = 0; i < tagsList.length; i++) {
			newLiTags += `
            <li class="navigation__item nav-card">
                <a href="#" class="tags tags-card">#${tagsList[i]}</a>
                <span class="sr-only">${tagsList[i]}</span>
            </li>
            `;
		}

		// Render Photographers' cards
		newPhotographer += `
            <article class="photographers" id="${photographers.id}" data-id="${tagsList}">
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
	});
	containerPhotographersEl.innerHTML = newPhotographer;
	// console.log(containerPhotographersEl);

	filterBytagsCards();

	filterByTagsNav(activeTag);
	// console.log(activeTag);
}
