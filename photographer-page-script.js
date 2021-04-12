'use strict';
/*
 **  DOM ELEMENTS
 */
// Main
const mainEl = document.querySelector('.photographer-page');

// Jumbotron photographer
const jumbotronEl = document.querySelector('.jumbotron');
const tagsListEl = document.querySelector('.photographers__tags');

// Photographer work
const containerWorks = document.querySelector('.container-works');
const workImageEl = document.querySelectorAll('.work__media');
// const btnLike = document.querySelector('.btn-like');

// Form contact
const btnOpenFormEl = document.querySelector('.contact-btn');
const btnCloseFormEl = document.querySelector('.close-form');
const overlayFormEl = document.querySelector('.overlay-form');
const modalFormEl = document.querySelector('.modal-form');

const formEl = document.querySelector('.form-content');
const photographerName = document.querySelector('.photographer-name');
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

const ID = Utils.getIdByUrl();
console.log(ID);

// URL JSON
const URL = './FishEyeDataFR.json';

//==================================================================================================
//  Render Photographer Jumbotron
//==================================================================================================
const datasJumbotron = Utils.getAllPhotographers(URL).then(data =>
	renderJumbotron(data)
);

// function for jumbotron photographer
const renderJumbotron = data => {
	// console.log(data);
	let newJumbotron = '';
	let photographers = data['photographers'];
	let photographer = photographers.find(photograph => photograph.id == ID);
	console.log(photographer);

	// Render Photographers' Tag list
	let newLiTags = '';
	let tagsList = photographer['tags'];
	for (let i = 0; i < tagsList.length; i++) {
		newLiTags += `
            <a href="#" class="photographers__tags__item">#${tagsList[i]}</a>
        `;
	}

	// Total Likes by each photographer for all works likes
	let media = data.media;
	const dataByID = media.filter(media => media['photographerId'] == ID);
	console.log(dataByID); // works photographers [10]

	// Create an array with all likes of current photographer (ID)
	let likesByIDList = dataByID.map(likesByID => likesByID.likes);
	console.log(likesByIDList);

	// Calcul the total of the likes' array
	let totalLikes = likesByIDList.reduce((total, likes) => total + likes, 0);
	console.log(totalLikes);

	// Render photographer name in form modal
	photographerName.innerHTML = `${photographer.name}`;

	// Render Each Photographer' Jumbotron
	//src='./scss/img/photos/PhotographersIDPhotos/${photographer.portrait}'
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
            <p> 
                <span class='total-likes'>
                    ${totalLikes} <i class='fas fa-heart' aria-label='likes'></i>
                </span>
                <span class='price-day'>
                    ${photographer.price}€ / jour
                </span>
            </p>
        </aside>
	    `;
	jumbotronEl.innerHTML = newJumbotron;
};

//==================================================================================================
//  Render Photographer Works
//==================================================================================================

const datasWorks = Utils.getAllPhotographers(URL).then(data =>
	renderPhotographerWorks(data)
);

// Function render photographers' works
const renderPhotographerWorks = data => {
	let newMedia = '';
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

	// // TODO fonctionne ! mais transformer pour changer le json et pas le textContent.
	// let btnLike = Array.from(document.querySelectorAll('.btn-like'));
	// console.log(btnLike);

	// btnLike.forEach(btn =>
	// 	btn.addEventListener('click', function () {
	// 		btn.previousElementSibling.textContent++;
	// 	})
	// );
	// // console.log(work.likes);

	// let btnLike = document.querySelectorAll('.btn-like');
	// const addLike = button => {
	//     btnLike.forEach(button => {
	//         likesByID.likes += 1;
	//     })
	//     console.log('ok');
	// };
	// btnLike.addEventListener('click', addLike());

	workById.forEach(work => {
		newMedia += `
            <article class="work">
                <a href="#">
                    <div class="work__media">

                    </div>
                </a>
                <div class="work__infos">
                    <h3 class="work__infos__name">${work.alt}</h3>
                    <p>
                        <span class="work__infos__price">${work.price}€</span>
                        <span class="work__infos__likes"><span>${work.likes}</span>
                            <a href="#" class="btn-like" type="button">
                                <i class="fas fa-heart"></i>
                            </a>
                        </span>
                    </p>
                </div>
            </article>
            `;
	});
	containerWorks.innerHTML = newMedia;
	/*
        <img class="work__media image" src='./scss/img/photos/${ID}/${work.image}' alt="" aria-label=""/>
        <video class="work__media video" src="./scss/img/photos/${ID}/${work.video}"></video>

    */

	// TODO fonctionne ! mais transformer pour changer le json et pas le textContent.
	let btnLike = Array.from(document.querySelectorAll('.btn-like'));
	console.log(btnLike);

	btnLike.forEach(btn =>
		btn.addEventListener('click', function () {
			btn.previousElementSibling.textContent++;
		})
	);

	// // TODO fonctionne ! mais transformer pour changer le json et pas le textContent.
	// let btnLike = Array.from(document.querySelectorAll('.btn-like'));
	// btnLike.forEach(btn =>
	// 	btn.addEventListener('click', function () {
	// 		// btn.previousElementSibling.textContent++;
	//         btn.previousElementSibling.workById.likes++;

	//         console.log(workById['likes']);
	// 	})
	// );
	// // // console.log(work.likes);

	// console.log(totalLikes);

	// let btnLike = document.querySelectorAll('.btn-like');
	// let likesNumber = document.querySelectorAll('.work__infos__likes');
	// console.log(btnLike, btnLike.length); // nodelist avec 10 btn
	// console.log(likesNumber, likesNumber.length);

	// 	// for (let i = 0; i < likesNumber.length; i++) {
	// 	// 	// const liked = likesByIDList[i];
	// 	// 	likesNumber[i] = likesNumber + 1;
	// 	// 	console.log(likesNumber[i]);
	// 	// }
	// 	// like[i] = like + 1;
	// 	// console.log(like);
	// btnLike.addEventListener('click', function () {
	// 	btnLike.likesNumber.textContent++;
	// 	console.log(btnLike.likesNumber);
	// });
	//===================================================================
	// let btnLike = document.querySelectorAll('.btn-like');
	// console.log(btnLike, btnLike.length); // nodelist avec 10 btn

	// console.log(likesByIDList);
	// btnLike.forEach(button => {
	// 	addLike();
	// });
	// btnLike.addEventListener('click', addLike);
	// function addLike() {
	// 	for (let like = 0; like < likesByIDList.length; like++) {
	// 		const addLike = likesByIDList[like] + 1;
	// 		console.log(addLike); // chaque like de chaque image de ce photog +1
	// 		console.log(likesByIDList[like]); // chaque like de chaque image de ce photog
	// 	}
	// }
	// console.log(work.likes);
	// work.likes.innerHTML = addLike;

	//BUG FIXME ça ne marche pas ! POURQUOI !!!! 😭😭😭😭😭😭😭😭

	// LikesByIDList.forEach(like => {
	//     btnLike.addEventListener('click', function (like) {
	// 		like += 1;
	// 		console.log(like);
	// 	});
	// });

	// btnLike.forEach(button => {

	// btnLike.addEventListener('click', function() {
	// 	likesByIDList.forEach(like => {
	// 		like[i] += 1;
	// 		console.log(like);
	// 	});
	// });

	// console.log(likesByIDList);
};

//==================================================================================================
//  function and events for like work :
//==================================================================================================

//==================================================================================================
//  function and events for Open & Close form contact :
//==================================================================================================

const openForm = function () {
	overlayFormEl.classList.remove('hidden');
	modalFormEl.classList.remove('hidden');
};

const closeForm = function () {
	overlayFormEl.classList.add('hidden');
	modalFormEl.classList.add('hidden');
};

btnOpenFormEl.addEventListener('click', openForm);
btnCloseFormEl.addEventListener('click', closeForm);

//====================
// Event submit form
//====================

//FIXME envoyer les infos + fermer le form et reset form. cf P4 !
modalFormEl.addEventListener('submit', function (e) {
	e.preventDefault();
	return console.log(`
            Prénom : ${firstnameInput.value}
            Nom : ${lastnameInput.value}
            Email : ${emailInput.value}
            Message : ${messageInput.value}
        `);
	closeForm();
});

//==================================================================================================
//  function and events for Open & Close sorting dropdown :
//==================================================================================================

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

//==================================================================================================
//  function and events for Open & Close lightboxes :
//==================================================================================================

// const openCloseLightbox = function () {
// 	overlayLightboxEl.classList.toggle('hidden');
// };

// for (let i = 0; i < workImageEl.length; i++) {
// 	workImageEl[i].addEventListener('click', openCloseLightbox);
// }
// // workImageEl.addEventListener('click', openCloseLightbox);
// btnCloseLightboxEl.addEventListener('click', openCloseLightbox);

// console.log(workImageEl);
