'use strict';
//==================================================================================================
//DOM ELEMENTS
//==================================================================================================

// Photographer work
const containerWorksEl = document.querySelector('.container-works');
const btnLikeEl = document.querySelector('.btn-like');

// Aside
const totalLikesEl = document.querySelector('.total-likes');

// Dropdown
const dropdownEl = document.querySelector('.dropdown');
const dropdownBtnEl = document.querySelector('.dropdown__item.btn');
const dropdownExtendEl = document.querySelector('.dropdown-extend');
const dropdownItemEl = document.querySelectorAll('.dropdown__item');
const sortItemEl = document.querySelectorAll('.sort-item');
const chevronIconEl = document.querySelector('.chevron-icon');

// Lightbox
const overlayLightboxEl = document.querySelector('.overlay-lightbox');
const lightboxEl = document.querySelector('.lightbox');
const btnCloseLightboxEl = document.querySelector('.close-lightbox');

const lightboxHeadingEl = document.querySelector('.lightbox-modal__heading');
const lightboxMediaEl = document.querySelector('.lightbox-modal__media');

//==================================================================================================
// FETCH JSON
//==================================================================================================

const datasPhotographerPage = Utils.getAllDatas(URL).then(data => {
	renderPhotographerWorks(data);
});

//==================================================================================================
//  Render Photographer Works
//==================================================================================================

let workById = [];

// Function render photographers' works
const renderPhotographerWorks = data => {
	let media = data.media;
	// let workById = [];
	workById = media.filter(media => media['photographerId'] == ID);
	console.log(media); // ==> Array with 59 medias
	console.log(ID); // ==> id of photographer in URL
	console.log(workById); // ==> array 10 work for Mimi

	let totalLikesArray = [];
	let likesByIDArray = [];

	let likesByIDList = workById.map(likesByID => likesByID.likes);
	console.log(likesByIDList);

	likesByIDArray.push(likesByIDList);
	console.log(likesByIDArray);

	// Calcul the total of the likes' array
	let totalLikes = likesByIDList.reduce((total, likes) => total + likes, 0);
	console.log(totalLikes); // TOTAL EX 680 NUMBER

	totalLikesArray.push(totalLikes);
	console.log(totalLikesArray); // TOTAL EX 680 DS ARRAY []

	totalLikesEl.innerHTML = totalLikesArray;

	// DROPDOWN - SORT WORKS TODO
	// FIXME fonctionne seule

	const sortByPopular = workById.sort((a, b) => b.likes - a.likes);
	console.log(sortByPopular);

	// const sortByTitle = workById.sort((a, b) => a.likes - b.likes);
	// console.log(sortByTitle);

	//reussi à faire changer
	// console.log(workById, sortByPopular);
	// function sortByPopular() {
	// 	workById.sort((a, b) => b.likes - a.likes);
	// 	// return workById;
	// }

	console.log(workById);

	let sortItemArray = [];
	sortItemArray = Array.from(document.querySelectorAll('.sort-item'));
	console.log(sortItemArray);

	let workLikeEl = document.querySelectorAll('.work-like');

	// const oneSortItem = document.querySelector('.one');
	// oneSortItem.addEventListener('click', function () {
	// 	workById.sort(function (a, b) {
	// 		return b.likes - a.likes;
	//     });
	//     return workById;
	// });
	// console.log(oneSortItem);
	// console.log(workById);

	// TODO CEUX-LÀ FONCTIONNE AUTOMATIQUEMENT
	// const sortByPopular = workById.sort(function (a, b) {
	// 	return b.likes - a.likes;
	// });
	// console.log(workById, sortByPopular);

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

	// sortItemArray.forEach(item => {
	// 	// console.log(sortItemArray);
	// 	item.addEventListener('click', function () {
	// 		// if (!dropdownBtnEl.classList.contains('active')) {
	// 		// 	console.log('ok c un filtre!');
	// 		if (item.innerHTML === 'Popularité') {
	// 			// console.log(item.innerHTML, 'Popularité');
	// 			return workById.sort((a, b) => b.likes - a.likes);
	// 		} else if (item.innerHTML === 'Titre') {
	// 			// console.log(item.innerHTML, 'Titre');
	// 			return workById.sort(
	// 				(a, b) => new Date(b.date) - new Date(a.date)
	// 			);
	// 		} else if (item.innerHTML === 'Date') {
	// 			// console.log(item.innerHTML, 'Date');
	// 			return workById.sort((a, b) => {
	// 				const titleA = a.alt.toUpperCase();
	// 				const titleB = b.alt.toUpperCase();
	// 				if (titleA < titleB) return -1;
	// 				if (titleA > titleB) return 1;
	// 				return 0;
	// 			});
	// 		}
	// 		// } else {
	// 		// 	console.log('Non, c un button, pas un filtre !');
	// 		// }
	// 		// 		// return workById;
	// 	});
	// });

	console.log(workById);

	let newWorkCard = '';

	workById.forEach(work => {
		let newMedia = '';
		newMedia +=
			work.image !== undefined
				? (newMedia = `<img class="work__media__item" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`)
				: (newMedia = `<video class="work__media__item" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`);
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
                            <span class="work-like">${work.likes}</span>
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
	console.log(workById, newWorkCard);

	// FIXME problème entre newWorkCard et workById

	// const oneSortItem = document.querySelector('.one');
	// oneSortItem.addEventListener('click', function () {
	// 	workById.sort(function (a, b) {
	// 		return b.likes - a.likes;
	// 	});
	// 	return newWorkCard;
	// });
	// console.log(oneSortItem);
	// console.log(workById, newWorkCard);

	//==================================================================================================
	//  Function & Events for like  each Works & total likes
	//==================================================================================================
	let btnLikeEl = Array.from(document.querySelectorAll('.btn-like'));
	// console.log(btnLikeEl);
	console.log(totalLikesArray);
	console.log(workById);

	btnLikeEl.forEach(btn => {
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			if (!btn.classList.contains('liked')) {
				btn.previousElementSibling.innerHTML++;
				btn.classList.add('liked');
				totalLikesArray++;
			} else {
				btn.previousElementSibling.innerHTML--;
				btn.classList.remove('liked');
				totalLikesArray--;
			}
			document.querySelector('.total-likes').innerHTML = totalLikesArray;
			console.log(totalLikesArray);
			console.log(btn.previousElementSibling);
		});
	});
};
// // Total Likes by each photographer for all works likes
// let media = data.media;
// let dataByID = media.filter(media => media['photographerId'] == ID);
// console.log(dataByID); // works photographers [10]

// //========================= ASIDE : photographer's total like ==================================
// // Create an array with all likes of current photographer (ID)
// let likesByIDList = dataByID.map(likesByID => likesByID.likes);
// console.log(likesByIDList);

// // Calcul the total of the likes' array
// let totalLikesList = likesByIDList.reduce(
// 	(total, likes) => total + likes,
// 	0
// );
// console.log(totalLikesList);
// let totalLikes = totalLikesList;

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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// displayPhotographerWorks(data);
// console.log(workById);

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

console.log(workById);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
