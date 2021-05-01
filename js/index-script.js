'use strict';
/**
 * INDEX - HOMEPAGE
 */
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

let tagsList;
let allPhotographersProfiles;

const renderPhotographers = data => {
	let newPhotographer = '';
	console.log(data['photographers']);
	allPhotographersProfiles = data['photographers'];
	allPhotographersProfiles.forEach(photographers => {
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
		// console.log('data is', data);
		// console.log('data.photographers is', data.photographers);
		console.log(newLiTags);
		console.log(tagsList);
	});
	photographersListEl.innerHTML = newPhotographer;
};

//==================================================================================================
//
//==================================================================================================
