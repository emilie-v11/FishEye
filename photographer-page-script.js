'use strict';
/* 
**  DOM ELEMENTS
*/
// Form contact
const btnOpenFormEl = document.querySelector('.contact-btn');
const btnCloseFormEl = document.querySelector('.close-form');
const overlayFormEl = document.querySelector('.overlay-form');
// Lightbox
const overlayLightboxEl = document.querySelector('.overlay-lightbox');
const btnCloseLightboxEl = document.querySelector('.close-lightbox');
// Dropdown
const btnDropdownEl = document.querySelector('.dropdown-btn');
const dropdownListEl = document.querySelector('.dropdown');
// Jumbotron photographer
const photogarpherJumbotronEl = document.querySelector('.photographer');
const tagsListEl = document.querySelector('.photographers__tags');
// Photographer work
const workImageEl = document.querySelectorAll('.work__image');


// URL JSON
const URL = '/FishEyeDataFR.json';

fetch(URL)
	.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			return Promise.reject('something went wrong!');
		}
	})
	// .then((data) => renderPhotographers(data))
	.then((data) => renderPhotographerJT(data))
	.catch((error) => console.log('error is', error));

const renderPhotographerJT = (data) => {
	let newPhotographerJT = '';
	let photographer = data['photographers'];
	data['photographers'].forEach((photographers) => {
		// Render Photographers' Tag list
		let newLiTags = '';
		let tagsList = photographers['tags'];
		for (let i = 0; i < tagsList.length; i++) {
			newLiTags += `
                <li class="photographers__tags__item">#${tagsList[i]}</li>
                `;
		}
		// Render Each Photographer' jumbotron
		newPhotographerJT += `
        <div class="photographer-content">
            <h1 class="photographer__heading">${photographers['name']}</h1>
            <p class="photographer__infos">
                <span class="photographer__infos--place">${photographers['city']}, ${photographers['country']}</span>
                <span class="photographer__infos--tagline">${photographers['tagline']}</span>
            </p>
            <ul class="photographers__tags">
            ${newLiTags}
            </ul>
        </div>
        <button class="contact-btn btn">Contactez-moi</button>
        <div class="photographers__portrait small MK">
            <!-- photo by css background-image(url) -->
        </div>
        `;
	});
	photogarpherJumbotronEl.innerHTML = newPhotographerJT;
};


/*
 ** function and events for Open & Close form contact :
 */

const openCloseForm = function () {
	overlayFormEl.classList.toggle('hidden');
};
// TODO réactiver l'évènement ci-dessous qd recréer dynamiquement
// btnOpenFormEl.addEventListener('click', openCloseForm); // TODO activer
btnCloseFormEl.addEventListener('click', openCloseForm);

/*
 ** function and events for Open & Close sorting dropdown :
 */
const openDropdown = function () {
	btnDropdownEl.classList.add('hidden');
	dropdownListEl.classList.remove('hidden');
};

const closeDropdown = function () {
	dropdownListEl.classList.add('hidden');
	btnDropdownEl.classList.remove('hidden');
	// btnDropdownEl.textContent = 'YES!';

	// console.log(btnDropdownEl.textContent);
	// btnDropdownEl.textContent = 'YES!';
	// console.log(btnDropdownEl.textContent);
};

btnDropdownEl.addEventListener('click', openDropdown);
dropdownListEl.addEventListener('click', closeDropdown);

/*
 ** function and events for Open & Close lightboxes :
 */
const openCloseLightbox = function () {
	overlayLightboxEl.classList.toggle('hidden');
};

for (let i = 0; i < workImageEl.length; i++) {
	workImageEl[i].addEventListener('click', openCloseLightbox);
}
// workImageEl.addEventListener('click', openCloseLightbox);
btnCloseLightboxEl.addEventListener('click', openCloseLightbox);

