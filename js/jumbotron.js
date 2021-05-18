'use strict';
/**
 *  JUMBOTRON & ASIDE
 */
//==================================================================================================
//DOM ELEMENTS
//==================================================================================================// Jumbotron photographer
const containerJumbotronEl = document.querySelector('.container-jumbotron');
const photographerPriceAsideEl = document.querySelector('.photographer-price');

// VARIABLE
let ID = Utils.getIdByUrl();

let allPhotographersProfiles;
//==================================================================================================
// FETCH JSON
//==================================================================================================

// URL JSON
let URL = './FishEyeDataFR.json';

const datasPhotographerJumbotron = Utils.getAllDatas(URL).then(data =>
	renderJumbotron(data)
);

//==================================================================================================
//  Render Photographer Jumbotron
//==================================================================================================

const renderJumbotron = data => {
	allPhotographersProfiles = data['photographers'];
	let photographer = allPhotographersProfiles.find(
		photograph => photograph.id == ID
	);
	let media = data.media;
	workById = media.filter(media => media['photographerId'] == ID);

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
            <div class="jumbotron__infos">
                <p class="jumbotron__infos--place">${photographer.city}, ${photographer.country}</p>
                <p class="jumbotron__infos--tagline">${photographer.tagline}</p>
            </div>
            <ul class="photographers__tags">
                ${newLiTags}
            </ul>
            <div class="photographers__portrait small">
                <img class="photographers__portrait small ${photographer.id}" src='./img/photos/PhotographersIDPhotos/${photographer.portrait}' alt="portrait de ${photographer.name}" aria-label="portrait de ${photographer.name}"/>
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
	// console.log(tagsCard);
	let tagsCardArray = Array.from(tagsCard);
	// console.log(tagsCardArray);

	tagsCardArray.forEach(tag => {
		tag.addEventListener('click', function () {
			location.href = `./index.html?tag=${tag.innerHTML
				.substr(1)
				.toLowerCase()}`;
		});
	});
}
