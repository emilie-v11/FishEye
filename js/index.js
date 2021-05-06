'use strict';
/*
 * INDEX - HOMEPAGE
 */
//==================================================================================================
// DOM ELEMENTS
//==================================================================================================
let containerPhotographersEl = document.querySelector(
	'.container-photographers'
);
// const tagsListEl = document.querySelector('.photographers__tags');
// navigation tags
const navEl = document.querySelector('.navigation');
// const navItemsEl = document.querySelectorAll('.navigation__item');
// console.log(navEl);

// NAV ITEMS TAGS
const navItemsEl = navEl.getElementsByClassName('navigation__item');
console.log(navItemsEl);

// const photographersEl = document.getElementsByClassName('.photographers');
// console.log(photographersEl);

// const photographersEl = document.querySelectorAll('.photographers');
// console.log(photographers);
// const containerPhotographersEl = document.querySelectorAll(
// 	'.container-photographers'
// );
console.log(containerPhotographersEl);

// URL JSON
const URL = './FishEyeDataFR.json';

//==================================================================================================
// FETCH JSON
//==================================================================================================

const datasHomepage = Utils.getAllDatas(URL).then(data => {
	renderPhotographers(data);
	// , renderTagsNavFilter(data)
});

//==================================================================================================
//  Render Photographers' Cards Homepage
//==================================================================================================

let allPhotographersProfiles;
let tagsList;
let photographersCards = [];
let photographersTags;
// let containerPhotographersEl;

const renderPhotographers = data => {
	// containerPhotographersEl.innerHTML = ''; // FIXME garder ???containerPhotographersEl = ''; containerPhotographers = []; ???
	allPhotographersProfiles = data['photographers']; // console.log(allPhotographersProfiles); // datas of 6 photographers

	renderPhotographersCards();

	console.log('data is', data); // all JSON datas (59 medias + 6 photographers)
	console.log('data.photographers is', data.photographers); // datas of 6 photographers
	// console.log(newLiTags); // innerHTML tags for each photographer
	console.log(tagsList); // array tags for for each photographer
	// console.log(photographers.tags);
};

//==================================================================================================
//  WORKS CARDS
//==================================================================================================
function renderPhotographersCards() {
	let newPhotographer = '';
	// Render Photographers
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

		// console.log(newPhotographer); // innerHTML cards photographers
	});
	// photographersCards.push(newPhotographer);
	// containerPhotographersEl.innerHTML = photographersCards;

	// renderPhotographers();

	containerPhotographersEl.innerHTML = newPhotographer;
	// filterIndex(activeTag); //FIXME

	console.log(containerPhotographersEl);

	filterCards(activeTag);
}

//==================================================================================================
// Filter Photographers by Tags with Navigation Tags
//==================================================================================================
const navItemsArray = Array.from(navItemsEl);
console.log(navItemsArray);

const photographersEl = document.getElementsByClassName('.photographers');
console.log(photographersEl);

let photographersArray = Array.from(photographersEl);
console.log(photographersArray);

//=============================================================
// Function render Photographers Cards filter by categories
let activeTag = ''; // FIXME current tag activeTag ???

//=============================================================
function filterCards(activeTag) {
	let filterCards = allPhotographersProfiles.filter(x =>
		x.tags.includes(activeTag)
	);
	console.log(filterCards); // TODO filtrage fonctionne mais pas apparition

	photographersArray.forEach(card => {
		card.classList.add('hidden');
		// card.style.display = 'none';

		if (filterCards.length == 0) {
			card.classList.remove('hidden');
			// card.style.display = 'block';
		} else {
			for (let i in filterCards) {
				if (filterCards[i].tagsList == activeTag || tag == '') {
					//BUG filterCards[i].id == tag.id
					card.classList.remove('hidden');
					// card.style.display = 'block';
				}
			}
		}
	});
}

// let activeTag = ''; // FIXME current tag activeTag ???

// renderPhotographers(); // FIXME garder ???
// filterCards(activeTag);

// Event for tags
navItemsArray.forEach(tag => {
	tag.addEventListener('click', function (e) {
		e.preventDefault();
		if (tag.classList.contains('active')) {
			tag.classList.remove('active');
			filterCards('');
		} else {
			navItemsArray.forEach(item => {
				item.classList.remove('active');
			});
			tag.classList.add('active');

			activeTag = tag.getAttribute('id');
			filterCards(activeTag);
		}
		console.log(activeTag); // TODO fonctionne valeur ID tag active apparait
		filterCards(activeTag);
	});
});

console.log(containerPhotographersEl);
console.log(allPhotographersProfiles); // = data['photographers']
console.log(activeTag); //

//=============================================================

// function changeActiveTag() {
// 	navItemsArray.forEach((tag, index) => {
// 		tag.addEventListener('click', function () {
// 			// e.preventDefault();
// 			if (activeTag.length > 0) {
// 				activeTag[0].classList.remove('active');
// 			}
// 			navItemsEl[index].classList.add('active');
// 		});
// 	});
// }
// changeActiveTag();

// console.log(activeTag);
console.log(photographersTags);

// containerPhotographersEl.style.display = 'block'; // all cards block
