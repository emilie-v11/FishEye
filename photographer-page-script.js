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
const btnLike = document.querySelector('.btn-like');

// Form contact
const btnOpenFormEl = document.querySelector('.contact-btn');
const btnCloseFormEl = document.querySelector('.close-form');
const overlayFormEl = document.querySelector('.overlay-form');
const modalFormEl = document.querySelector('.modal-form');

const formEl = document.querySelector('.form-content');
const photographerNameEl = document.querySelector('.photographer-name');
const submitBtnForm = document.querySelectorAll('#form-submit');
const firstnameInput = document.querySelectorAll('#first-name');
const lastnameInput = document.querySelectorAll('#last-name');
const emailInput = document.querySelectorAll('#email');
const messageInput = document.querySelectorAll('#message');

// Lightbox
const overlayLightboxEl = document.querySelector('.overlay-lightbox');
const lightboxEl = document.querySelector('.lightbox');
const btnCloseLightboxEl = document.querySelector('.close-lightbox');

// Dropdown
const dropdownBtnEl = document.querySelector('.dropdown__item.btn');
const dropdownExtendEl = document.querySelector('.dropdown-extend');
const dropdownItemEl = document.querySelectorAll('.dropdown__item');
const chevronIconEl = document.querySelector('.fa-chevron-down');

console.log(dropdownItemEl);

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
	let totalLikesList = likesByIDList.reduce(
		(total, likes) => total + likes,
		0
	);
	console.log(totalLikesList);
	let totalLikes = totalLikesList;

	// Render photographer name in form modal
	photographerNameEl.innerHTML = `${photographer.name}`;

	// Render Each Photographer' Jumbotron
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

		let newMedia = '';
		newMedia += work.image = work.image
			? (newMedia = `<img class="work__media image" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt-text']}" aria-label=""/>`)
			: (newMedia = `<video class="work__media video" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt-text']}"></video>`);

		// Lightbox infos
		const lightboxHeadingEl = document.querySelector(
			'.lightbox-modal__heading'
		);
		lightboxHeadingEl.innerHTML = `${work['alt-text']}`;

		const lightboxMediaEl = document.querySelector(
			'.lightbox-modal__media'
		);
		lightboxMediaEl.innerHTML = `${newMedia}`;

		const workMediaEl = document.querySelector('lightbox-modal__media');
		for (let i = 0; i < lightboxMediaEl.length; i++) {
			lightboxMediaEl[i].addEventListener('click', openCloseLightbox);
		}
		console.log(lightboxMediaEl);
		lightboxMediaEl.addEventListener('click', openCloseLightbox);

		//FIXME ne s'ouvre pas au click.
		function openCloseLightbox() {
			overlayLightboxEl.classList.toggle('hidden');
			lightboxEl.classList.toggle('hidden');
			console.log(overlayLightboxEl);
		}
		// workMediaEl.forEach(media => {
		// 	workMediaEl.addEventListener('click', openCloseLightbox);
		// });
//=============================================================
		// // Span likes button and icon
		// let newLikesWork = '';
		// newLikesWork += `
		//     <span class="work__infos__likes"><span>${work.likes}</span>
		//         <a href="#" class="btn-like" type="button">
		//             <i class="fas fa-heart"></i>
		//         </a>
		//     </span>
		// `;

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
	containerWorks.innerHTML = newWorkCard;

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
	// TODO fonctionne ! mais transformer pour changer le json et pas le textContent.
	let btnLike = Array.from(document.querySelectorAll('.btn-like'));
	console.log(btnLike);

	btnLike.forEach(btn =>
		btn.addEventListener('click', function () {
			// const liked = btn.previousElementSibling.innerHTML++;
			btn.previousElementSibling.innerHTML++;

			let totalLikesLiked = totalLikes++;

			// return (totalLikes.innerHTML = totalLikesLiked);
			// console.log(work.likes);
		})
	);
};

//==================================================================================================
//  function and events for like work :
//==================================================================================================

//==================================================================================================
//  Form Contact
// function and events for Open & Close
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

//FIXME isValid à ajouter, envoyer les infos + fermer le form et reset form. cf P4 !
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
//  Sorting Dropdown
// function and events for Open & Close
//==================================================================================================

// function for swap chevron icon 'down' or 'up'
const swapchevronIconEl = function () {
	if (!dropdownBtnEl.classList.contains('active')) {
		chevronIconEl.classList.add('fa-chevron-up');
	} else {
		chevronIconEl.classList.replace('fa-chevron-up', 'fa-chevron-down');
	}
};

let dropdownItemArray = Array.from(
	document.querySelectorAll('.dropdown__item')
);
//Array.from(document.querySelectorAll('.dropdown__item'));
console.log(dropdownItemArray[0].textContent);
console.log(dropdownItemArray);

const openDropdown = function () {
	dropdownBtnEl.classList.remove('active');
	dropdownExtendEl.classList.remove('hidden');
	swapchevronIconEl();
};

const closeDropdown = function () {
	dropdownExtendEl.classList.add('hidden');
	dropdownBtnEl.classList.add('active');
	swapchevronIconEl();
};

// dropdownBtnEl.addEventListener('click', openDropdown);
dropdownBtnEl.addEventListener('click', function () {
	if (dropdownBtnEl.classList.contains('active')) {
		dropdownBtnEl.classList.remove('active');
		dropdownExtendEl.classList.remove('hidden');
		swapchevronIconEl();
	} else {
		dropdownExtendEl.classList.add('hidden');
		dropdownBtnEl.classList.add('active');
		swapchevronIconEl();
	}
});

dropdownExtendEl.addEventListener('click', closeDropdown);

// function Dropdown filter

// function activeSortBtn(item, index) {
// 	switch (item) {
// 		case 'Popularité':
// 			dropdownItemArray[0].textContent = 'Popularité';
// 			dropdownItemArray[1].textContent = 'Date';
// 			dropdownItemArray[2].textContent = 'Titre';
// 			break;
// 		case 'Date':
// 			dropdownItemArray[0].textContent = 'Date';
// 			dropdownItemArray[1].textContent = 'Popularité';
// 			dropdownItemArray[2].textContent = 'Titre';
// 			break;
// 		case 'Titre':
// 			dropdownItemArray[0].textContent = 'Titre';
// 			dropdownItemArray[1].textContent = 'Date';
// 			dropdownItemArray[2].textContent = 'Popularité';
// 			dropdownBtnEl.textContent = 'Titre';
// 			break;
// 	}
// 	dropdownItemEl.innerHTML = dropdownItemArray[index];
// }

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
// openCloseLightbox();

// for (let i = 0; i < workMediaEl.length; i++) {
// 	workmediaEl[i].addEventListener('click', openCloseLightbox);
// }
// console.log(workMediaEl);

// workMediaEl.addEventListener('click', openCloseLightbox);

// Close lightbox
btnCloseLightboxEl.addEventListener('click', openCloseLightbox);
console.log(btnCloseLightboxEl);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//=============================================================
//=============================================================
// BROUILLON
//=============================================================
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

// 		// return `<video class="work__media video" src="./scss/img/photos/${ID}/${workById.video}"></video>`;

// 	console.log();
// });
// console.log();
// console.log();

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

// let likesNumber = document.querySelectorAll('.work__infos__likes');
// console.log(btnLike, btnLike.length); // nodelist avec 10 btn
// console.log(likesNumber, likesNumber.length);

// for (let i = 0; i < likesNumber.length; i++) {
// const liked = likesByIDList[i];
// 	likesNumber[i] = likesNumber + 1;
// 	console.log(likesNumber[i]);
// }
// like[i] = like + 1;
// console.log(like);
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
