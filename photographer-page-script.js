'use strict';

const ID = Utils.getIdByUrl();
console.log(ID);

// find()
/*
 **  DOM ELEMENTS
 */

// Form contact
const btnOpenFormEl = document.querySelectorAll('.contact-btn');
const btnCloseFormEl = document.querySelectorAll('.close-form');
const overlayFormEl = document.querySelector('.overlay-form');

const formEl = document.querySelector('.form-content');
const submitBtnForm = document.querySelectorAll('#form-submit');
const firstnameInput = document.querySelectorAll('#first-name');
const lastnameInput = document.querySelectorAll('#last-name');
const emailInput = document.querySelectorAll('#email');
const messageInput = document.querySelectorAll('#message');

// Lightbox
const overlayLightboxEl = document.querySelector('.overlay-lightbox');
const btnCloseLightboxEl = document.querySelector('.close-lightbox');
// Dropdown
const btnDropdownEl = document.querySelector('.dropdown-btn');
const dropdownListEl = document.querySelector('.dropdown');
// Jumbotron photographer
const photographerJumbotronEl = document.querySelector('.photographer');
const tagsListEl = document.querySelector('.photographers__tags');
// Photographer work
const workImageEl = document.querySelectorAll('.work__image');

// URL JSON
const URL = '/FishEyeDataFR.json';

const datas = Utils.getAllPhotographers(URL).then(data =>
	renderPhotographerJT(data)
);
// fetch(URL)
// 	.then(response => {
// 		if (response.ok) {
// 			return response.json();
// 		} else {
// 			return Promise.reject('something went wrong!');
// 		}
// 	})
// 	.then(data => renderPhotographerJT(data))
// 	.catch(error => console.log('error is', error));

const renderPhotographerJT = data => {
	console.log(data);
	let newPhotographerJT = '';
	let photographers = data['photographers'];
	let photographer = photographers.find(photograph => photograph.id == ID);
	// let photographerMimi = photographer[0];
	// photographer.forEach(function (photographers) {
	console.log(photographer);

	// Render Photographers' Tag list
	let newLiTags = '';
	let tagsList = photographer['tags'];
	for (let i = 0; i < tagsList.length; i++) {
		newLiTags += `
	            <li class="photographers__tags__item">#${tagsList[i]}</li>
	            `;
	}
	// Render Each Photographer' jumbotron
	newPhotographerJT = `
	    <div class="photographer-content">
	        <h1 class="photographer__heading">${photographer.name}</h1>
	        <p class="photographer__infos">
	            <span class="photographer__infos--place">${photographer.city}, ${photographer.country}</span>
	            <span class="photographer__infos--tagline">${photographer.tagline}</span>
	        </p>
	        <ul class="photographers__tags">
	        ${newLiTags}
	        </ul>
	    </div>
	    <button class="contact-btn btn">Contactez-moi</button>
	    <div class="photographers__portrait small">
	        <img class="photographers__portrait small ${photographer.id}" src='../scss/img/photos/PhotographersIDPhotos/${photographer.portrait}' alt="" aria-label=""/>
	    </div>
	    `;
	photographerJumbotronEl.innerHTML = newPhotographerJT;
};

// /*
//  ** function and events for Open & Close form contact :
//  */

// const openCloseForm = function () {
// 	overlayFormEl.classList.toggle('hidden');
// };

// // BUG Pquoi? le bouton ne marche pas: p-ê car code au dessus le multiplie pr chaque photographe
// // donc faut forEach et querySelectorAll
// btnOpenFormEl.forEach(button => {
// 	addEventListener('click', openCloseForm);
// });

// btnCloseFormEl.forEach(button => {
// 	addEventListener('click', openCloseForm);
// });

// // Event submit form d
// submitBtnForm.forEach(button => {
// 	addEventListener('submit', function (e) {
// 		e.preventDefault();
// 		console.log(`
//             Prénom : ${firstnameInput.value}
//             Nom : ${lastnameInput.value}
//             Email : ${emailInput.value}
//             Message : ${messageInput.value}
//         `);
// 	});
// });

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
