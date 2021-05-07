'use strict';
/*
 * INDEX - HOMEPAGE
 */
//==================================================================================================
// DOM ELEMENTS
//==================================================================================================
const containerPhotographersEl = document.querySelector(
	'.container-photographers'
);
const photographersEl = document.getElementsByClassName('.photographers');
const tagsListEl = document.querySelector('.photographers__tags');
const navEl = document.querySelector('.navigation');
const navItemsEl = navEl.getElementsByClassName('navigation__item');

// Variables
let allPhotographersProfiles;
let tagsList;
let photographersTags;
let activeTag;

// URL JSON
const URL = './FishEyeDataFR.json';

//==================================================================================================
// FETCH JSON
//==================================================================================================

//  Render Photographers' Cards Homepage
const datasHomepage = Utils.getAllDatas(URL).then(data => {
	allPhotographersProfiles = data['photographers'];

	renderPhotographersCards();

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
                <a href="#" class="photographers__tags__item">#${tagsList[i]}</a>
                `;
		}
		// Render Photographers' cards
		newPhotographer += `
            <article class="photographers" id="${photographers.id}" data-tags="${tagsList}">
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

	filterPhotographersCards(activeTag);
	// console.log(activeTag);
}

//==================================================================================================
// FUNCTION FILTER PHOTOGRAPHERS CARDS BY CATEGORIES WITH NAVIGATION'S TAGS
//==================================================================================================

function filterPhotographersCards(activeTag) {
	let filterCards = allPhotographersProfiles.filter(item =>
		item.tags.includes(activeTag)
	);
	let photographersEl = document.getElementsByClassName('photographers');
	let photographersArray = Array.from(photographersEl);
	let tagToCompare = '#' + activeTag;

	photographersArray.forEach(card => {
		let tags = Array.from(
			card.querySelectorAll('.photographers__tags__item')
		);
		let tagsText = [];

		tags.forEach(tag => {
			let tagText = tag.textContent;
			tagsText.push(tagText);
		});
		// console.log(tagsText);
		// console.log(tagToCompare);

		for (let i = 0; i < filterCards.length; i++) {
			if (tagsText.includes(tagToCompare)) {
				card.style.display = 'block';
			} else if (!activeTag) {
				card.style.display = 'block';
			} else {
				card.style.display = 'none';
			}
		}
	});
}

//==================================================================================================
//  EVENT FOR FILTER PHOTOGRAPHERS' CARDS
//==================================================================================================
let navItemsArray = Array.from(navItemsEl);

const photographersCardsSortByTags = navItemsArray.forEach(tag => {
	tag.addEventListener('click', function () {
		// e.preventDefault(); // function (e)
		if (tag.classList.contains('active')) {
			tag.classList.remove('active');
			window.location.reload();
		} else {
			navItemsArray.forEach(item => {
				item.classList.remove('active');
			});
			tag.classList.add('active');
			activeTag = tag.getAttribute('id');
			filterPhotographersCards(activeTag);
		}
		console.log(activeTag);
		renderPhotographersCards();
	});
});
