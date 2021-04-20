'use strict';

//DOM ELEMENTS
// Main
const mainEl = document.querySelector('.photographer-page');

// Jumbotron photographer
const jumbotronEl = document.querySelector('.jumbotron');
const tagsListEl = document.querySelector('.photographers__tags');

// Photographer work
const containerWorksEl = document.querySelector('.container-works');
const btnLikeEl = document.querySelector('.btn-like');

// Form contact
const btnOpenFormEl = document.querySelector('.btn-contact');
const btnCloseFormEl = document.querySelector('.close-form');
const btnXCloseSuccessEl = document.querySelector('.close-success');
const btnSuccessMessageEl = document.querySelector('.btn-success');
const overlayFormEl = document.querySelector('.overlay-form');
const modalBg = document.querySelector('.modal-bg');
const modalSuccessEl = document.querySelector('.modal-success');
const modalFormEl = document.querySelector('.modal-form');
const photographerNameEl = document.querySelector('.photographer-name');
const btnSubmitFormEl = document.querySelector('.btn-submit');

const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const messageTextarea = document.querySelector('#message');
const errorFirst = document.querySelector('.error-first');
const errorLast = document.querySelector('.error-last');
const errorEmail = document.querySelector('.error-email');
const errorMessage = document.querySelector('.error-message');

// Lightbox
const overlayLightboxEl = document.querySelector('.overlay-lightbox');
const lightboxEl = document.querySelector('.lightbox');
const btnCloseLightboxEl = document.querySelector('.close-lightbox');

const lightboxHeadingEl = document.querySelector('.lightbox-modal__heading');
const lightboxMediaEl = document.querySelector('.lightbox-modal__media');

// Dropdown
const dropdownBtnEl = document.querySelector('.dropdown__item.btn');
const dropdownExtendEl = document.querySelector('.dropdown-extend');
const dropdownItemEl = document.querySelectorAll('.dropdown__item');
const chevronIconEl = document.querySelector('.chevron-icon');
console.log(dropdownItemEl);

//==================================================================================================
const ID = Utils.getIdByUrl();
console.log(ID);

// URL JSON
const URL = './FishEyeDataFR.json';

const datasPhotographerPage = Utils.getAllPhotographers(URL).then(data => {
	renderJumbotron(data), renderPhotographerWorks(data);
});

//==================================================================================================
//  Render Photographer Jumbotron
//==================================================================================================

const renderJumbotron = data => {
	// console.log(data);
	let photographers = data['photographers'];
	let photographer = photographers.find(photograph => photograph.id == ID);
	console.log(photographer);

	/*
	    ASIDE : photographer's total like & price per day
	 */
	// Total Likes by each photographer for all works likes
	let media = data.media;
	const dataByID = media.filter(media => media['photographerId'] == ID);
	console.log(dataByID); // works photographers [10]

	// Create an array with all likes of current photographer (ID)
	let likesByIDList = dataByID.map(likesByID => likesByID.likes);
	console.log(likesByIDList);

	// Calcul the total of the likes' array
	let totalLikesList = likesByIDList.reduce(
		(total, likes) => total + likes,
		0
	);
	console.log(totalLikesList);
	let totalLikes = totalLikesList;

	/*
	    JUMBOTRON :
	 */
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
	        <img class="photographers__portrait small ${photographer.id}" src='./scss/img/photos/PhotographersIDPhotos/${photographer.portrait}' alt="" aria-label=""/>
	    </div>

        <aside class="aside">
            <div class= "aside-content">
                <p>
                    <span class='total-likes'>${totalLikes}</span>
                    <i class='fas fa-heart aside'></i>
                </p>
                <p class='price-day'>
                    ${photographer.price}€ / jour
                </p>
            </div>
        </aside>
	    `;
	jumbotronEl.innerHTML = newJumbotron;

	// Render photographer name in form modal
	photographerNameEl.innerHTML = `${photographer.name}`;
};

//==================================================================================================
//  Render Photographer Works
//==================================================================================================

// const datasWorks = Utils.getAllPhotographers(URL).then(data =>
// 	renderPhotographerWorks(data)
// );

// Function render photographers' works
const renderPhotographerWorks = data => {
	let newWorkCard = '';

	let media = data.media;
	const workById = media.filter(media => media['photographerId'] == ID);
	console.log(media); // ==> Array with 59 medias
	console.log(ID); // ==> id of photographer in URL
	console.log(workById); // ==> array 10 work for Mimi

	let likesByIDList = workById.map(likesByID => likesByID.likes);
	console.log(likesByIDList);

	// Calcul the total of the likes' array
	let totalLikes = likesByIDList.reduce((total, likes) => total + likes, 0);
	console.log(totalLikes);

	console.log(likesByIDList);

	workById.forEach(work => {
		// TODO NE PAS EFFACER CETTE LIGNE ' workById.forEach(work => { '
		console.log(work.likes);
		console.log(work.image);

		let newMedia = '';
		newMedia +=
			work.image !== undefined
				? (newMedia = `<img class="work__media image" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt-text']}" aria-label=""/>`)
				: (newMedia = `<video class="work__media video" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt-text']}"></video>`);

		// Lightbox infos
		lightboxHeadingEl.innerHTML = `${work['alt-text']}`;
		lightboxMediaEl.innerHTML = `${newMedia}`;

		const workMediaEl = document.querySelector('lightbox-modal__media');
		for (let i = 0; i < lightboxMediaEl.length; i++) {
			lightboxMediaEl[i].addEventListener('click', openCloseLightbox);
		}
		console.log(lightboxMediaEl);
		lightboxMediaEl.addEventListener('click', openCloseLightbox);

		//=============================================================

		// Works Cards (Image - name - price - numb of like & heart icon)
		newWorkCard += `
            <article class="work">
                <a href="#">
                    <div class="work__media">
                        ${newMedia}
                    </div>
                </a>
                <div class="work__infos">
                    <h3 class="work__infos__name">${work['alt-text']}</h3>
                    <p>
                        <span class="work__infos__price">${work.price}€</span>
                        <span class="work__infos__likes">
                            <span>${work.likes}</span>
                            <button class="btn-like" aria-label="click for like it">
                                <i class="far fa-heart "></i>
                                <i class="fas fa-heart liked"></i>
                            </button>
                        </span>
                    </p>
                </div>
            </article>
        `;
	});
	containerWorksEl.innerHTML = newWorkCard;
	/*

        <img class="work__media image" src='./scss/img/photos/${ID}/${work.image}' alt="" aria-label=""/>
        <video class="work__media video" src="./scss/img/photos/${ID}/${work.video}"></video>
    
        <div class="overlay-lightbox image hidden">
            </div>
            <div class="lightbox image hidden">
                <div class="lightbox-modal">
                    ${newMedia}
                    <h3>${work['alt-text']}</h3>
                    <span class="close-lightbox fas fa-times"></span>
                    <span class="previous fas fa-chevron-left"></span>
                    <span class="next fas fa-chevron-right"></span>
                </div>
            </div>
    */

	//==================================================================================================
	//  Function & Events for like  each Works & total likes
	//==================================================================================================
	let btnLikeEl = Array.from(document.querySelectorAll('.btn-like'));
	console.log(btnLikeEl);
	console.log(totalLikes);

	btnLikeEl.forEach(btn => {
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			if (!btn.classList.contains('liked')) {
				btn.previousElementSibling.innerHTML++;
				btn.classList.add('liked');
				totalLikes++;
			} else {
				btn.previousElementSibling.innerHTML--;
				btn.classList.remove('liked');
				totalLikes--;
			}
			document.querySelector('.total-likes').innerHTML = totalLikes;
			console.log(totalLikes);
		});
	});
};

//==================================================================================================
//  FORM CONTACT
//==================================================================================================
// OPEN & CLOSE FORM
//====================

// Function for Open & Close
const openForm = function () {
	overlayFormEl.classList.remove('hidden');
	modalBg.classList.remove('hidden');
};

const closeForm = function () {
	overlayFormEl.classList.add('hidden');
	modalBg.classList.add('hidden');
};

const closemodalSuccess = function () {
	closeForm();
	modalSuccessEl.style.display = 'none';
	modalFormEl.reset();
};

//====================
// VALIDATION FORM
//====================
// Regex
const nameRegExp = /^([A-ZÀ-Ÿa-z-']{2,20})$/;
const emailRegExp = /^([a-zA-Z0-9.]{2,})+@([a-zA-Z0-9.]{2,})+[.]+([a-zA-Z0-9-]{2,20})$/;
const messageRegExp = /^([A-ZÀ-Ÿa-z0-9.']{10,200})$/; //TODO vérifier

//FIXME penser à changer aria-hidden=false pour visible lecteur
function checkFirstName() {
	const isFirstNameValid = nameRegExp.test(firstNameInput.value);

	if (isFirstNameValid) {
		errorFirst.style.display = 'none';
		firstNameInput.style.border = 'none';
	} else {
		errorFirst.style.display = 'block';
		firstNameInput.style.border = 'red 2px solid';
	}

	return isFirstNameValid;
}

function checkLastName() {
	const isLastNameValid = nameRegExp.test(lastNameInput.value);

	if (isLastNameValid) {
		errorLast.style.display = 'none';
		lastNameInput.style.border = 'none';
	} else {
		errorLast.style.display = 'block';
		lastNameInput.style.border = 'red 2px solid';
	}

	return isLastNameValid;
}

function checkEmail() {
	const isEmailValid = emailRegExp.test(emailInput.value);

	if (isEmailValid) {
		errorEmail.style.display = 'none';
		emailInput.style.border = 'none';
	} else {
		errorEmail.style.display = 'block';
		emailInput.style.border = 'red 2px solid';
	}

	return isEmailValid;
}

function checkMessage() {
	const isMessageValid = emailRegExp.test(messageTextarea.value);

	if (isMessageValid) {
		errorMessage.style.display = 'none';
		messageTextarea.style.border = 'none';
	} else {
		errorMessage.style.display = 'block';
		messageTextarea.style.border = 'red 2px solid';
	}

	return isMessageValid;
}

//====================
// EVENTS FORM
//====================

// Events for Open & Close Form without validation
btnOpenFormEl.addEventListener('click', openForm);
btnCloseFormEl.addEventListener('click', closeForm);

// Events for Close the success modal
// with 'X' Button Icon
btnXCloseSuccessEl.addEventListener('click', closemodalSuccess);
// with Button 'Fermer'
btnSuccessMessageEl.addEventListener('click', closemodalSuccess);

//====================
// SUBMIT FORM
//====================

modalFormEl.addEventListener('submit', function (e) {
    console.log(submit);

	e.preventDefault();
	const isFormValid =
		checkFirstName() && checkLastName() && checkEmail() && checkMessage();

	checkFirstName();
	checkLastName();
	checkEmail();
	checkMessage();

	if (isFormValid) {
		modalSuccess.style.display = 'block';
	}
});

// function validate(e) {
//     e.preventDefault();
//     let formValid = true;
//     // let firstName = document.getElementById("first");
// };

// btnSubmitFormEl.addEventListener("click",validate(e));

//==================================================================================================
//  DROPDOWN
//==================================================================================================

// functions for Open & Close Dropdown
const openCloseDropdown = function () {
	if (dropdownBtnEl.classList.contains('active')) {
		dropdownBtnEl.classList.remove('active');
		dropdownExtendEl.classList.remove('hidden');
		swapchevronIcon();
	} else {
		dropdownExtendEl.classList.add('hidden');
		dropdownBtnEl.classList.add('active');
		swapchevronIcon();
	}
};

// const closeDropdown = function () {
// 	dropdownExtendEl.classList.add('hidden');
// 	dropdownBtnEl.classList.add('active');
// 	swapchevronIcon();
// };

// function for swap chevron icon 'down' or 'up'
const swapchevronIcon = function () {
	if (!dropdownBtnEl.classList.contains('active')) {
		chevronIconEl.classList.replace('fa-chevron-down', 'fa-chevron-up');
	} else {
		chevronIconEl.classList.replace('fa-chevron-up', 'fa-chevron-down');
	}
};

// Events for Open & Close Dropdown
// dropdownBtnEl.addEventListener('click', openDropdown);
// dropdownExtendEl.addEventListener('click', closeDropdown);
chevronIconEl.addEventListener('click', openCloseDropdown);

// function Dropdown filter
let dropdownItemArray = Array.from(
	document.querySelectorAll('.dropdown__item')
);
//Array.from(document.querySelectorAll('.dropdown__item'));
console.log(dropdownItemArray[0].textContent);
console.log(dropdownItemArray);

dropdownItemArray.forEach(btn => {
	btn.addEventListener('click', function (item) {
		let sortItem = document.querySelectorAll('.sort-item');
		if (dropdownItemArray[0].textContent === 'Popularité') {
			console.log('ok pour titre');
		}

		// dropdownItemEl.innerHTML = dropdownItemArray[0];
		// console.log(dropdownItemArray[index].textContent);
	});
});

//==================================================================================================
// Lightboxes
//  function and events for Open & Close
//==================================================================================================

// const openCloseLightbox = function () {
function openCloseLightbox() {
	overlayLightboxEl.classList.toggle('hidden');
	lightboxEl.classList.toggle('hidden');
	console.log(overlayLightboxEl);
}

// for (let i = 0; i < lightboxMediaEl.length; i++) {
// 	lightboxMediaEl[i].addEventListener('click', openCloseLightbox);
// }
console.log(lightboxMediaEl);

// workMediaEl.addEventListener('click', openCloseLightbox);
lightboxMediaEl.addEventListener('click', openCloseLightbox);

// Close lightbox
btnCloseLightboxEl.addEventListener('click', openCloseLightbox);
console.log(btnCloseLightboxEl);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//=============================================================
// BROUILLON
//============================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// FACTORY
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let newMedia = '';
// let imageWork = workById.map(imageById => imageById.image);
// imageWork = imageWork.filter(element => element !== undefined);
// console.log(imageWork);
// let videoWork = workById.map(videoById => videoById.video);
// videoWork = videoWork.filter(element => element !== undefined);
// console.log(videoWork);

// console.log(imageWork, videoWork);
// // const mediaType = (image, video, element) => {
// imageWork.forEach(image => {
//     newMedia +=
// 		`<img class="work__media image" src='./scss/img/photos/${ID}/${work.image}' alt="" aria-label=""/>`;

// return `<video class="work__media video" src="./scss/img/photos/${ID}/${workById.video}"></video>`;

// if (imageWork in element) {
// 	return (newMediaChoice = `<img class="work__media image" src='./scss/img/photos/${ID}/${work.image}' alt="" aria-label=""/>`);
// } else if (videoWork in element) {
// 	return (newMediaChoice = `<video class="work__media video" src="./scss/img/photos/${ID}/${work.video}"></video>`);
// }

// // switch case
// let image = '';
// const mediaChoice = function () {
// 	if (data.media[media].image) {
// 		return (image += `<img class="work__media image" src='./scss/img/photos/${ID}/${work.image}' alt="${work.alt}" role="img" aria-label=""/>`);
// 	} else {
// 		return `<video class="work__media video" src="./scss/img/photos/${ID}/${work.video} alt="${work.alt} role="img"">`;
// 	}
// };

// const FactoryMedia = (image) => {
//     newMedia
// 		if ((work.image = work.image)) {
// 			newMedia = mediaImage;
// 		} else if ((work.image = work.video)) {
// 			newMedia = mediaVideo;
// 		}
//         return newMedia;
// 	}

// const factoryMedia = (image, video, media) => {
// 	if (image in media) {
// 		return `<img class="work__media image" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt-text']}" aria-label=""/>`;
// 	} else if (video in media) {
// 		return `<video class="work__media video" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt-text']}"></video>`;
// 	}
// }

// console.log(newMedia);

// let mediaImage = function () {
//     `<img class="work__media image" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt-text']}" aria-label=""/>`;
// }
// let mediaVideo = function () {
//     `<video class="work__media video" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt-text']}"></video>`;
// }
