'use strict';
//==================================================================================================
//DOM ELEMENTS
//==================================================================================================

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
const sortItemEl = document.querySelectorAll('.sort-item');
const chevronIconEl = document.querySelector('.chevron-icon');
// console.log(dropdownItemEl);

//==================================================================================================
// FETCH JSON
//==================================================================================================

const ID = Utils.getIdByUrl();
console.log(ID);

// URL JSON
const URL = './FishEyeDataFR.json';

const datasPhotographerPage = Utils.getAllPhotographers(URL).then(data => {
	displayJumbotron(data),
		displayPhotographerWorks(data),
		renderDropdownSort(data);
});

//==================================================================================================
//  Render Photographer Jumbotron
//==================================================================================================

const displayJumbotron = data => {
	console.log(data);
	let photographers = data['photographers'];
	let photographer = photographers.find(photograph => photograph.id == ID);
	console.log(photographer);

	// Total Likes by each photographer for all works likes
	let media = data.media;
	let dataByID = media.filter(media => media['photographerId'] == ID);
	console.log(dataByID); // works photographers [10]

	//========================= ASIDE : photographer's total like ==================================
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

let workById = [];

// Function render photographers' works
const displayPhotographerWorks = data => {
	let newWorkCard = '';

	let media = data.media;
	// let workById = [];
	workById = media.filter(media => media['photographerId'] == ID);
	console.log(media); // ==> Array with 59 medias
	console.log(ID); // ==> id of photographer in URL
	console.log(workById); // ==> array 10 work for Mimi

	let likesByIDList = workById.map(likesByID => likesByID.likes);
	console.log(likesByIDList);

	// Calcul the total of the likes' array
	let totalLikes = likesByIDList.reduce((total, likes) => total + likes, 0);
	console.log(totalLikes);

	// DROPDOWN - SORT WORKS
	// const sortByPopular = workById.sort((a, b) => b.likes - a.likes);

	// const sortByTitle = workById.sort((a, b) => a.likes - b.likes);
	// console.log(sortByTitle);

	//reussi à faire changer
	// console.log(workById, sortByPopular);
	// function sortByPopular() {
	// 	workById.sort((a, b) => b.likes - a.likes);
	// 	// return workById;
	// }

	console.log(workById);

	// let sortItemArray = [];
	// sortItemArray = Array.from(document.querySelectorAll('.sort-item'));
	// console.log(sortItemArray);

	let [first, second, third] = sortItemArray;
	console.log(first, second, third); // [0]one-Popularité / [1]two-Date / [2]three-Titre

	// let temp = first;
	// first = second;
	// second = third;
	// third = temp;
	// console.log(first, second, third); // [0]two-Date / [1]three-Titre / [2]one-Popularité

	// sortItemEl.innerHTML = [second, first, third];
	// console.log(sortItemEl, sortItemArray);

	// let temp = first;
	// first = second;
	// second = third;
	// third = temp;
	// console.log(first, second, third); // [0]two-Date / [1]three-Titre / [2]one-Popularité
	// console.log(sortItemEl);
	// console.log(sortItemArray);

	// let sortItemPopular = sortItemArray[0];
	// console.log(sortItemPopular);

	// first.addEventListener('click', sortByPopular);
	// console.log(first);

	const sortByPopular = workById.sort(function (a, b) {
		return b.likes - a.likes;
	});
	console.log(sortByPopular);

	// const sortByDate = workById.sort(function (a, b) {
	// 	return new Date(b.date).valueOf() - new Date(a.date).valueOf();
	// });
	// console.log(sortByDate);

	// second.addEventListener('click', sortByDate);

	// const sortByTitle = workById.sort(function (a, b) {
	// 	const titleA = a.alt.toUpperCase();
	// 	const titleB = b.alt.toUpperCase();
	// 	if (titleA < titleB) return -1;
	// 	if (titleA > titleB) return 1;
	// 	return 0;
	// });
	// console.log(sortByTitle);

	// const sortPhotographersWorks = (workById, item) => {
	//     if (item.innerHTML === 'Popularité') {
	// 		// console.log(item.innerHTML, 'Popularité');
	// 		return workById.sort((a, b) => b.likes - a.likes);
	// 	} else if (item.innerHTML === 'Titre') {
	// 		// console.log(item.innerHTML, 'Titre');
	// 		return workById.sort((a, b) => new Date(b.date) - new Date(a.date));
	// 	} else if (item.innerHTML === 'Date') {
	// 		// console.log(item.innerHTML, 'Date');
	// 		return workById.sort((a, b) => {
	// 			const titleA = a.alt.toUpperCase();
	// 			const titleB = b.alt.toUpperCase();
	// 			if (titleA < titleB) return -1;
	// 			if (titleA > titleB) return 1;
	// 			return 0;
	// 		});
	// 	}
	// };

	// sortItemArray.forEach(item => {
	// 	item.addEventListener('click', function () {
	// switch (item) {
	// 	case 'Popularité':
	// 		workById.sort((a, b) => b.likes - a.likes);
	// 		break;
	// 	case 'Titre':
	// 		workById.sort(
	// 			(a, b) => new Date(b.date) - new Date(a.date)
	// 		);
	// 		break;
	// 	case 'Date':
	// 		workById.sort((a, b) => {
	// 			const titleA = a.alt.toUpperCase();
	// 			const titleB = b.alt.toUpperCase();
	// 			if (titleA < titleB) return -1;
	// 			if (titleA > titleB) return 1;
	// 			return 0;
	// 		});
	// 		break;
	// }

	// if (item.innerHTML === 'Popularité') {
	// 	// console.log(item.innerHTML, 'Popularité');
	// 	return workById.sort((a, b) => b.likes - a.likes);
	// } else if (item.innerHTML === 'Titre') {
	// 	// console.log(item.innerHTML, 'Titre');
	// 	return workById.sort(
	// 		(a, b) => new Date(b.date) - new Date(a.date)
	// 	);
	// } else if (item.innerHTML === 'Date') {
	// 	// console.log(item.innerHTML, 'Date');
	// 	return workById.sort((a, b) => {
	// 		const titleA = a.alt.toUpperCase();
	// 		const titleB = b.alt.toUpperCase();
	// 		if (titleA < titleB) return -1;
	// 		if (titleA > titleB) return 1;
	// 		return 0;
	// 	});
	// }
	// 	});
	// });

	// sortItemArray.forEach(item => {
	// 	// console.log(sortItemArray);
	// 	item.addEventListener('click', function () {
	// 		if (!dropdownBtnEl.classList.contains('active')) {
	// 			console.log('ok c un filtre!');
	// 			if (item.innerHTML === 'Popularité') {
	// 				// console.log(item.innerHTML, 'Popularité');
	// 				return workById.sort((a, b) => b.likes - a.likes);
	// 			} else if (item.innerHTML === 'Titre') {
	// 				// console.log(item.innerHTML, 'Titre');
	// 				return workById.sort(
	// 					(a, b) => new Date(b.date) - new Date(a.date)
	// 				);
	// 			} else if (item.innerHTML === 'Date') {
	// 				// console.log(item.innerHTML, 'Date');
	// 				return workById.sort((a, b) => {
	// 					const titleA = a.alt.toUpperCase();
	// 					const titleB = b.alt.toUpperCase();
	// 					if (titleA < titleB) return -1;
	// 					if (titleA > titleB) return 1;
	// 					return 0;
	// 				});
	// 			}
	// 		} else {
	// 			console.log('Non, c un button, pas un filtre !');
	// 		}
	// 		// return workById;
	// 	});
	// });

	console.log(workById);

	workById.forEach(work => {
		// TODO NE PAS EFFACER CETTE LIGNE ' workById.forEach(work => { '
		// console.log(work.image);

		let newMedia = '';
		newMedia +=
			work.image !== undefined
				? (newMedia = `<img class="work__media__item" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`)
				: (newMedia = `<video class="work__media__item" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`);

		// // let newMedia = '';
		// function FactoryMedia() {
		// 	this.createMedia = function (type) {
		// 		let newMedia;

		// 		if (work.image !== undefined) {
		// 			newMedia = new imageMedia();
		// 		} else {
		// 			newMedia = new videoMedia();
		// 		}
		// 		newMedia.type = type;

		// 		return newMedia;
		// 	};
		// }

		// let imageMedia = function () {
		// 	return `<img class="work__media__item" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`;
		// };

		// let videoMedia = function () {
		// 	return `<video class="work__media__item" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`;
		// };

		// 	if (work.image !== undefined) {
		// 		return (newMedia = `<img class="work__media__item" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`);
		// 	} else {
		// 		return (newMedia = `<video class="work__media__item" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`);
		// 	}
		// 	return newMedia;
		// }

		// console.log(newMedia);

		//=============================================================

		// Works Cards (Image - name - price - numb of like & heart icon)
		newWorkCard += `
            <article class="work">
                <a href="#" class="work__media">
                        ${newMedia}
                </a>
                <div class="work__infos">
                    <h3 class="work__infos__name">${work['alt']}</h3>
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
        function mediaFactory (type, attr) {
            return {
            type,
            newMedia : function(){
                if (work.image !== undefined) {
                    return `<img class="work__media__item" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`
                } else {
                    return `<video class="work__media__item" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`
                }
            }
        }
                   
                   
        <img class="work__media" src='./scss/img/photos/${ID}/${work.image}' alt="" aria-label=""/>
        <video class="work__media" src="./scss/img/photos/${ID}/${work.video}"></video>
    
        <div class="overlay-lightbox image hidden">
            </div>
            <div class="lightbox image hidden">
                <div class="lightbox-modal">
                    ${newMedia}
                    <h3>${work['alt']}</h3>
                    <span class="close-lightbox fas fa-times"></span>
                    <span class="previous fas fa-chevron-left"></span>
                    <span class="next fas fa-chevron-right"></span>
                </div>
            </div>
    */

	// const sortByPopular = workById.sort((a, b) => {
	// 	return b.likes - a.likes;
	// });
	// console.log(sortByPopular);
	// console.log(workById);

	//==================================================================================================
	//  Function & Events for like  each Works & total likes
	//==================================================================================================
	let btnLikeEl = Array.from(document.querySelectorAll('.btn-like'));
	// console.log(btnLikeEl);
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
const messageRegExp = /[\s\S]{10,300}/;

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
	const isMessageValid = messageRegExp.test(messageTextarea.value);

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
	e.preventDefault();
	const isFormValid =
		checkFirstName() && checkLastName() && checkEmail() && checkMessage();

	checkFirstName();
	checkLastName();
	checkEmail();
	checkMessage();

	if (isFormValid) {
		modalSuccessEl.style.display = 'block';
	}
	return console.log(`
        Prénom : ${firstNameInput.value}
        Nom : ${lastNameInput.value}
        Email : ${emailInput.value}
        Message : ${messageTextarea.value}
    `);
});

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

function sortByPopular() {
	workById.sort((a, b) => b.likes - a.likes);
}

function sortByDate() {
	workById.sort(
		(a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
	);
}

function sortByTitle() {
	workById.sort(
		(a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
	);
}

let sortItemArray = [];
sortItemArray = Array.from(document.querySelectorAll('.sort-item'));
console.log(sortItemArray);

sortItemArray.forEach(item => {
	// console.log(sortItemArray);
	item.addEventListener('click', function () {
		if (!dropdownBtnEl.classList.contains('active')) {
			console.log('ok c un filtre!');
			if (item.innerHTML === 'Popularité') {
				// console.log(item.innerHTML, 'Popularité');
				return workById.sort((a, b) => b.likes - a.likes);
			} else if (item.innerHTML === 'Titre') {
				// console.log(item.innerHTML, 'Titre');
				return workById.sort(
					(a, b) => new Date(b.date) - new Date(a.date)
				);
			} else if (item.innerHTML === 'Date') {
				// console.log(item.innerHTML, 'Date');
				return workById.sort((a, b) => {
					const titleA = a.alt.toUpperCase();
					const titleB = b.alt.toUpperCase();
					if (titleA < titleB) return -1;
					if (titleA > titleB) return 1;
					return 0;
				});
			}
		} else {
			console.log('Non, c un button, pas un filtre !');
		}
		// return workById;
	});
});

console.log(workById);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // function Dropdown filter
// let dropdownItemArray = Array.from(
// 	document.querySelectorAll('.dropdown__item')
// );
// console.log(dropdownItemArray);

// // let [one, two, three] = dropdownItemArray;
// // console.log(one, two, three); //

//==================================================================================================
//  DROPDOWN SORT
//==================================================================================================

const renderDropdownSort = data => {
	let media = data.media;
	// const workById = media.filter(media => media['photographerId'] == ID);
	// console.log(media); // ==> Array with 59 medias
	// console.log(ID); // ==> id of photographer in URL
	// console.log(workById); // ==> array 10 work for Mimi
	// let sortByPopular = '';
	// sortByPopular = workById.sort((a, b) => {
	// 	return b.likes - a.likes;
	// });
	// console.log(sortByPopular);
	// 	function sortByPopular() {
	// 		workById.sort((a, b) => b.likes - a.likes);
	// 		return;
	// 	}
	// 	// 	sortByPopular();
	// 	let sortItemArray = Array.from(document.querySelectorAll('.sort-item'));
	// 	console.log(sortItemArray);
	// 	// 	let [first, second, third] = sortItemArray;
	// 	// 	console.log(first, second, third); // [0]one-Popularité / [1]two-Date / [2]three-Titre
	// 	// 	// let temp = first;
	// 	// 	// first = second;
	// 	// 	// second = third;
	// 	// 	// third = temp;
	// 	// 	// console.log(first, second, third); // [0]two-Date / [1]three-Titre / [2]one-Popularité
	// 	// 	let sortItem = document.querySelectorAll('.sort-item');
	// 	// 	console.log(sortItem);

	// 	sortItemArray.forEach(item => {
	// 		console.log(sortItemArray);
	// 		item.addEventListener('click', function () {
	// 			if (!dropdownBtnEl.classList.contains('active')) {
	// 				console.log('ok c un filtre!');
	// 				if (item.innerHTML === 'Popularité') {
	// 					return workById.sort((a, b) => b.likes - a.likes);

	// 					console.log(sortByPopular);
	// 					console.log(item.innerHTML, 'Popularité');
	// 				} else if (item.innerHTML === 'Titre') {
	// 					console.log(item.innerHTML, 'Titre');
	// 				} else if (item.innerHTML === 'Date') {
	// 					console.log(item.innerHTML, 'Date');
	// 				}
	// 				console.log(sortByPopular);
	// 			} else {
	// 				console.log('Non, c un button, pas un filtre !');
	// 			}
	// 			return workById;
	// 		});
	// 	});
};

// // //Array.from(document.querySelectorAll('.dropdown__item'));
// // console.log(dropdownItemArray[0].textContent);

// // dropdownItemArray.forEach(btn => {
// // 	btn.addEventListener('click', function (item) {
// // 		let sortItemArray = Array.from(document.querySelectorAll('.sort-item'));
// // 		if (dropdownItemArray.textContent === 'Popularité') {
// // 			console.log('ok pour titre');
// // 		}
// // 		// dropdownItemEl.innerHTML = dropdownItemArray[0];
// // 		// console.log(dropdownItemArray[index].textContent);
// // 		// console.log(SortItemArray);
// // 	});
// // });

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
// console.log(lightboxMediaEl);

// workMediaEl.addEventListener('click', openCloseLightbox);
lightboxMediaEl.addEventListener('click', openCloseLightbox);

// Close lightbox
btnCloseLightboxEl.addEventListener('click', openCloseLightbox);
// console.log(btnCloseLightboxEl);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//=============================================================
// BROUILLON
//============================================================

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LIGHTBOX
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // Lightbox infos
// lightboxHeadingEl.innerHTML = `${work['alt']}`;
// lightboxMediaEl.innerHTML = `${newMedia}`;

// const workMediaEl = document.querySelector('lightbox-modal__media');
// for (let i = 0; i < lightboxMediaEl.length; i++) {
// 	lightboxMediaEl[i].addEventListener('click', openCloseLightbox);
// }
// console.log(lightboxMediaEl);
// lightboxMediaEl.addEventListener('click', openCloseLightbox);

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
// 	let newMedia = '';
// 	if (image in media) {
// 		return (newMedia = `<img class="work__media image" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`);
// 	} else if (video in media) {
// 		return (newMedia = `<video class="work__media video" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`);
// 	}
// 	return newMedia;
// };

// console.log(newMedia);

// let mediaImage = function () {
//     `<img class="work__media image" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`;
// }
// let mediaVideo = function () {
//     `<video class="work__media video" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`;
// }
