'use strict';
/**
 *  JUMBOTRON & ASIDE
 */
//==================================================================================================
//DOM ELEMENTS
//==================================================================================================// Jumbotron photographer
const containerJumbotronEl = document.querySelector('.container-jumbotron');
const photographerPriceAsideEl = document.querySelector('.photographer-price');
// const tags = document.querySelectorAll('.tags');

//==================================================================================================
// FETCH JSON
//==================================================================================================

let ID = Utils.getIdByUrl();
// console.log(ID);

// URL JSON
let URL = './FishEyeDataFR.json';

const datasPhotographerJumbotron = Utils.getAllDatas(URL).then(data =>
	renderJumbotron(data)
);

//==================================================================================================
//  Render Photographer Jumbotron
//==================================================================================================
let allPhotographersProfiles;

const renderJumbotron = data => {
	// console.log(data);
	allPhotographersProfiles = data['photographers'];
	console.log(allPhotographersProfiles);

	let photographer = allPhotographersProfiles.find(
		photograph => photograph.id == ID
	);
	console.log(photographer);

	let media = data.media;
	console.log(media);

	let tagsMedia = media.tags;
	console.log(tagsMedia);

	workById = media.filter(media => media['photographerId'] == ID);
	console.log(workById);

	//========================= JUMBOTRON ==========================================================
	// Render Photographers' Tag list
	let newLiTags = '';
	let tagsList = photographer['tags'];
	for (let i = 0; i < tagsList.length; i++) {
		newLiTags += `
        <li class="navigation__item nav-card">
            <a href="#" class="photographers__tags__item tags tags-card">#${tagsList[i]}</a>
            <span class="sr-only">${tagsList[i]}</span>
        </li>   
        `;
	}
	// Render Each Photographer' Jumbotron
	let newJumbotron = '';
	newJumbotron = `
        <section class="jumbotron">
            <h1 class="jumbotron__heading">${photographer.name}</h1>
            <p class="jumbotron__infos">
                <span class="jumbotron__infos--place">${photographer.city}, ${photographer.country}</span>
                <span class="jumbotron__infos--tagline">${photographer.tagline}</span>
            </p>
            <ul class="photographers__tags">
                ${newLiTags}
            </ul>
            <div class="photographers__portrait small">
                <img class="photographers__portrait small ${photographer.id}" src='./img/photos/PhotographersIDPhotos/${photographer.portrait}' alt="${photographer.name}" aria-label=""/>
            </div>
        </section>
	    `;
	containerJumbotronEl.innerHTML = newJumbotron;

	// Render photographer price in aside
	photographerPriceAsideEl.innerHTML = `${photographer.price}`;

	filterBytagsJumbotron();
};

function filterBytagsJumbotron() {
	let tagsCard = document.querySelectorAll('.tags');
	console.log(tagsCard);
	let tagsCardArray = Array.from(tagsCard);
	console.log(tagsCardArray);

	tagsCardArray.forEach(tag => {
		tag.addEventListener('click', function () {
			location.href = `./index.html?tag=${tag.innerHTML
				.substr(1)
				.toLowerCase()}`;
			// location.href = `./index.html?tag=${tag.innerHTML.replace(/#/, '')}`;
		});
	});
}
// console.log(activeTag);
