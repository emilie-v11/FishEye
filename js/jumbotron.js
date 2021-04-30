'use strict';
//==================================================================================================
//DOM ELEMENTS
//==================================================================================================// Jumbotron photographer
const jumbotronEl = document.querySelector('.jumbotron');
const photographerPriceAsideEl = document.querySelector('.photographer-price');
// const tagsListEl = document.querySelector('.photographers__tags');

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

const renderJumbotron = data => {
	// console.log(data);
	let photographer = data['photographers'].find(
		photograph => photograph.id == ID
	);
	// console.log(photographer);

	//========================= JUMBOTRON ==========================================================
	// Render Photographers' Tag list
	let newLiTags = '';
	let tagsList = photographer['tags'];
	for (let i = 0; i < tagsList.length; i++) {
		newLiTags += `
            <a href="#" class="photographers__tags__item">#${tagsList[i]}</a>
        `;
	}
	// Render Each Photographer' Jumbotron
	let newJumbotron = '';
	newJumbotron = `
	    <div class="jumbotron-content">
	        <h1 class="jumbotron__heading">${photographer.name}</h1>
	        <p class="jumbotron__infos">
	            <span class="jumbotron__infos--place">${photographer.city}, ${photographer.country}</span>
	            <span class="jumbotron__infos--tagline">${photographer.tagline}</span>
	        </p>
	        <nav class="photographers__tags">
	            ${newLiTags}
	        </nav>
	    </div>
	    <div class="photographers__portrait small">
	        <img class="photographers__portrait small ${photographer.id}" src='./scss/img/photos/PhotographersIDPhotos/${photographer.portrait}' alt="photo de ${photographer.name}" aria-label=""/>
	    </div>
	    `;
	jumbotronEl.innerHTML = newJumbotron;

	// Render photographer price in aside
	photographerPriceAsideEl.innerHTML = `${photographer.price}`;
};
