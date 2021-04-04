'use strict';

// DOM ELEMENTS
const photographersListEl = document.querySelector('.container-photographers');
const tagsListEl = document.querySelector('.photographers__tags');

const URL = '/FishEyeDataFR.json';

// Read the json
// Method: GET
fetch(URL)
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			return Promise.reject('something went wrong!');
		}
	})
	.then((data) => renderPhotographers(data))
	// .then((data) => renderPhotographerJT(data))
	.catch((error) => console.log('error is', error));

// Function render photographers' cards
const renderPhotographers = (data) => {
	let newPhotographer = '';
	data['photographers'].forEach((photographers) => {
		// Render Photographers' Tag list
		let newLiTags = '';
		let tagsList = photographers['tags'];
		for (let i = 0; i < tagsList.length; i++) {
			newLiTags += `
                <li class="photographers__tags__item">#${tagsList[i]}</li>
                `;
		}
		// Render Photographers' cards
		newPhotographer += `
            <article class="photographers" id="${photographers['id']}">
                <a href="pages/photographer-page.html">
                    <div class="photographers__portrait">
                        <img class="photographers__portrait ${photographers['id']}" src='./scss/img/photos/PhotographersIDPhotos/${photographers['portrait']}' alt="" aria-label=""/>
                    </div>
                    <h2 class="photographers__name">${photographers['name']}</h2>
                </a>
                <p class="photographers__infos">
                    <span class="photographers__infos--place">${photographers['city']}, ${photographers['country']}</span>
                    <span class="photographers__infos--tagline">${photographers['tagline']}</span>
                    <span class="photographers__infos--price">${photographers['price']}€/jour</span>
                </p>
                <ul class="photographers__tags">
                    ${newLiTags}
                </ul>
            </article>
            `;
		console.log('data is', data);
		console.log('data.photographers is', data.photographers);
		console.log(tagsList, newLiTags);
	});
	photographersListEl.innerHTML = newPhotographer;
};
