//=============================================================
// BROUILLON
//============================================================
// Function render photographers' cards
// const renderPhotographers = data => {
// 	allPhotographersProfiles = data['photographers'];
// console.log(allPhotographersProfiles); // datas of 6 photographers

// 	renderPhotographersCards();
// };

newMedia +=
	work.image !== undefined
		? (newMedia = `<img id="${work['id']}" class="work__media__item" src='./img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label="${work['alt']}"/>`)
		: (newMedia = `<video id="${work['id']}" class="work__media__item" src='./img/photos/${ID}/${work.video}' alt="${work['alt']}" aria-label="${work['alt']}">
                <p class="video-alt">${work['alt']}</p>
            </video>`);

//=============================================================
// LIGHTBOX
//============================================================

function renderLightbox() {
	// Render Lightbox Media
	let mediaLightbox = '';
	mediaLightbox +=
		lightboxMediaEl.tagName === 'VIDEO'
			? (mediaLightbox = `<video id="${work['id']}" class="lightbox__content__media" src='' alt="" controls></video>`)
			: (mediaLightbox = `<img id="${work['id']}" class="lightbox__content__media" src='' alt="" aria-label=""/>`);
	// FIXME add controls on videos in lightbox

	// Render Lightbox
	newLightbox += `
            <div class="overlay-lightbox hidden">
                <div class="lightbox " aria-label="image closeup view">
                    <div class="lightbox__container">
                        <button class="lightbox__close " aria-label="Close dialog">
                            <span class="sr-only">Fermer</span>
                        </button>
                        <button class="lightbox__next" aria-label="Next image">
                            <span class="sr-only">Suivant</span>
                        </button>
                        <button class="lightbox__prev " aria-label="Previous image">
                            <span class="sr-only">Précedent</span>
                        </button>
                        <div class="lightbox__loader"></div>
                        <div class="lightbox__content">
                            <!-- <img class="lightbox__content__media" src="./img/photos/243/Animals_Rainbow.jpg"
                            alt="Rainbow (name photo)"> -->                            
                            <img class="lightbox__content__media" src=""
                                alt="">

                        </div>
                        <h2 class="lightbox__heading">Rainbow</h2>
                    </div>
                </div>
            </div>
        `;
	lightboxContainerEl.innerHTML = mediaLightbox;
}

//=============================================================
// NAVIGATION TAGS HOMEPAGE
//============================================================
//=============================================================
function filterCards(activeTag) {
	// let filterCards = allPhotographersProfiles.filter(item =>
	// 	item.tags.includes(activeTag)
	// );
	// console.log(filterCards); // TODO photographers json filtrer
	// // TODO filtrage fonctionne mais pas apparition

	const photographersEl = document.getElementsByClassName('photographers');
	console.log(photographersEl);

	let photographersArray = Array.from(photographersEl);
	console.log(photographersArray);

	let tagToCompare = '#' + activeTag;

	photographersArray.forEach(card => {
		let tags = Array.from(
			card.querySelectorAll('.photographers__tags__item')
		);
		let tagsText = [];

		tags.forEach(tag => {
			let tagText = tag.textContent;
			tagsText.push(tagText);
		});
		console.log(tagsText);
		console.log(tagToCompare);

		// card.classList.add('hidden');
		// // card.style.display = 'none';
		// console.log('add hidden all');
		// if (filterCards.length == 0) {
		// 	card[i].classList.remove('hidden');
		// 	// card[i].style.display = 'block';
		// 	console.log('remove hidden all');
		// } else {
		// 	for (let i in filterCards) {
		// 		if (filterCards[i].tagsList == activeTag || tag == '') {
		// 			//BUG filterCards[i].id == tag.id //tagsList
		// 			card[i].classList.remove('hidden');
		// 			// card[i].style.display = 'block';
		// 			console.log('remove hidden of match cards / activeTag');
		// 		}
		// 	}
		// }

		if (tagsText.includes(tagToCompare)) {
			card.style.display = 'block';
		} else {
			card.style.display = 'none';
		}
	});
}

//==================================================================================================
// DOM ELEMENTS
//==================================================================================================
function filterCards(activeTag) {
	// let filterCards = allPhotographersProfiles.filter(item =>
	// 	item.tags.includes(activeTag)
	// );
	// console.log(filterCards); // TODO photographers json filtrer
	// // TODO filtrage fonctionne mais pas apparition
	const photographersEl = document.getElementsByClassName('.photographers');
	console.log(photographersEl);

	let photographersArray = Array.from(photographersEl);
	console.log(photographersArray);

	let tagToCompare = '#' + activeTag;

	photographersArray.forEach(card => {
		let tags = Array.from(
			card.querySelectorAll('.photographers__tags__item')
		);
		let tagsText = [];

		tags.forEach(tag => {
			let tagText = tag.textContent;
			tagsText.push(tagText);
		});
		console.log(tagsText);
		console.log(tagToCompare);

		// card.classList.add('hidden');
		// // card.style.display = 'none';
		// console.log('add hidden all');
		// if (filterCards.length == 0) {
		// 	card[i].classList.remove('hidden');
		// 	// card[i].style.display = 'block';
		// 	console.log('remove hidden all');
		// } else {
		// 	for (let i in filterCards) {
		// 		if (filterCards[i].tagsList == activeTag || tag == '') {
		// 			//BUG filterCards[i].id == tag.id //tagsList
		// 			card[i].classList.remove('hidden');
		// 			// card[i].style.display = 'block';
		// 			console.log('remove hidden of match cards / activeTag');
		// 		}
		// 	}
		// }

		if (tagsText.includes(tagToCompare)) {
			card.style.display = 'block';
		} else {
			card.style.display = 'none';
		}
	});
}

// let activeTag = ''; // FIXME current tag activeTag ???

//==================================================================================================
//  SORT PHOTOGRAPHERS' CARDS EVENTS
//==================================================================================================

// function changeActiveTag() {
// 	navItemsArray.forEach((tag, index) => {
// 		tag.addEventListener('click', function (e) {
// 			e.preventDefault();
// 			if (tag.classList.contains('active')) {
// 	tag.classList.remove('active');
// 	filterCards(activeTag);
// } else {
// 	navItemsArray.forEach(item => {
// 		item.classList.remove('active');
// 	});
// 	tag.classList.add('active');
// 		});
// 	});
// }
// changeActiveTag();

// console.log(activeTag);
// console.log(photographersTags);

// containerPhotographersEl.style.display = 'block'; // all cards block
//=============================================================
// Event for tags
const photographersCardsSortByTags = navItemsArray.forEach(tag => {
	tag.addEventListener('click', function (e) {
		e.preventDefault();
		if (tag.classList.contains('active')) {
			tag.classList.remove('active');
			filterCards(activeTag);
		} else {
			navItemsArray.forEach(item => {
				item.classList.remove('active');
			});
			tag.classList.add('active');
			activeTag = tag.getAttribute('id');
			filterCards(activeTag);
		}
		console.log(activeTag); // TODO fonctionne valeur ID tag active apparait
		// filterCards(activeTag);
		// renderPhotographersCards();
		console.log(containerPhotographersEl);
	});
});
console.log(containerPhotographersEl); // ok innerHTML du container + toutes les cards

let containerPhotographersEl = document.querySelector(
	'.container-photographers'
);
// const tagsListEl = document.querySelector('.photographers__tags');
// navigation tags
const navEl = document.querySelector('.navigation');
// const navItemsEl = document.querySelectorAll('.navigation__item');
// console.log(navEl);

// NAV ITEMS TAGS
const navItemsEl = navEl.getElementsByClassName('navigation__item');
console.log(navItemsEl);

// const photographersEl = document.getElementsByClassName('.photographers');
// console.log(photographersEl);

// const photographersEl = document.querySelectorAll('.photographers');
// console.log(photographers);
// const containerPhotographersEl = document.querySelectorAll(
// 	'.container-photographers'
// );
console.log(containerPhotographersEl);

// URL JSON
const URL = './FishEyeDataFR.json';

//==================================================================================================
// FETCH JSON
//==================================================================================================

const datasHomepage = Utils.getAllDatas(URL).then(data => {
	renderPhotographers(data);
	// , renderTagsNavFilter(data)
});

//==================================================================================================
//  Render Photographers' Cards Homepage
//==================================================================================================

let allPhotographersProfiles;
let tagsList;
let photographersCards = [];
let photographersTags;
// let containerPhotographersEl;

const renderPhotographers = data => {};

//==================================================================================================
// Filter Photographers by Tags with Navigation Tags
//==================================================================================================
// console.log(navItemsEl);
const navItemsEl = navEl.getElementsByClassName('navigation__item');
const activeTag = navEl.getElementsByClassName('active');
console.log(navItemsEl);

const photographersEl = document.querySelectorAll('.photographers');
console.log(photographersEl);

//
const containerPhotographersEl = document.querySelectorAll(
	'.container-photographers'
);
console.log(containerPhotographersEl);

const navItemsArray = Array.from(navItemsEl);
console.log(navItemsArray);

//=============================================================
// Function render Photographers Cards filter by categories
const renderTagsNavFilter = data => {
	allPhotographersProfiles.forEach(photographers => {
		console.log(photographers.tags);
		// 	let photographerFilterbyTag = console.log(photographers['tags']); //datas tags for each photographer
		// if (photographers.tags !== activeTag) {
		// 	photographersArray.slice()
		// }
	});
	console.log(containerPhotographersEl);
	console.log(allPhotographersProfiles); // = data['photographers']
	console.log(activeTag); //

	const cardMimi = document.getElementById('243');
	console.log(cardMimi);
};
//=============================================================

console.log(photographersEl); // [] empty

// function changeActiveTag() {
// 	navItemsArray.forEach(tag => {
// 		tag.addEventListener('click', function () {
// 			if (
// 				navItemsEl.target.classList.contains('active')
// 				// && activeTag == tag.target
// 			) {
// 				tag.target.classList.remove('active');
// 				tag.classList.remove('active');
// 			}
// 		});
// 		tag.target.classList.add('active');

// let activeTagId = activeTag.getElementById('id');
// console.log(tagId);
// if (tagId == 'portrait') {
// 	containerPhotographersEl.style.display = 'none';
// 	if (photographersEl.id == 'portrait') {
// 		photographersEl.style.display = 'block';
// 	}
// }
// 	});
// }

function changeActiveTag() {
	navItemsArray.forEach((tag, index) => {
		tag.addEventListener('click', function () {
			// e.preventDefault();
			if (activeTag.length > 0) {
				activeTag[0].classList.remove('active');
			}
			navItemsEl[index].classList.add('active');
		});
	});
	// cardsMimi.style.display = 'none';
}
changeActiveTag();

console.log(activeTag);
console.log(photographersTags);

// const idActiveTag = document.getElementById(id).value;;
// console.log(idActiveTag);

// function filterPhotographersbyTag() {
// 	changeActiveTag();

// 	if (!activeTag.innerHTML) {
// 	}
// }

// Get the container element
// const navEl = document.querySelector('.navigation');
// // Get all tags with class="navigation__item" inside the container
// const navItemsEl = navEl.getElementsByClassName('navigation__item');
// let activeTag = navEl.getElementsByClassName('active');
// //Loop through the tags and add the active class to the current/clicked button
// for (let i = 0; i < navItemsEl.length; i++) {
// 	navItemsEl[i].addEventListener('click', function () {
// 		// activeTag = document.getElementsByClassName('active');
// 		// If there's no active class
// 		if (activeTag.length > 0) {
// 			// current[0].className = current[0].className.replace(' active', '');
// 			activeTag[0].classList.remove('active');
// 		}
// 		navItemsEl[i].classList.add('active');
// 	});
// 	console.log(activeTag);
// }

// containerPhotographersEl.style.display = 'block'; // all cards block

// function tagsNavFilter() {
// 	if (navItemsEl.classList.contains('active')) {
// 		console.log('ok');
// 	}
// }

// Change style for tag selected

// navItemsEl.forEach(tag => {
// 	tag.addEventListener('click', function () {
// 		// let navItemsEl = document.querySelectorAll('.navigation__item');
// 		let tagActive = tag.classList.contains('active');
// 		);

//     navEl.addEventListener('click', function () {
// 	    for (let i = 0; i < navItemsEl.length; i++) {
// 		console.log(navEl, navItemsEl[i]);
// 		let tagActive = navItemsEl[i].classList.contains('active');
// 		console.log(tagActive);
// 		navItemsEl[i].classList.add('active');
// 	}
// });

//=============================================================
// Increment like
//=============================================================

// let newLike = '';
// newLike = newLike.nextElementSibling.classList.contains('liked')
// 	? (newLike = work.likes + 1)
// 	: (newLike = work.likes);
// console.log(workLikeEl);
// likedUp = 0;
// newLike = work.likes + likedUp;

// const workLikeArray = Array.from(workLikeEl);
// console.log(workLikeArray);
// let workLikeEl = document.querySelectorAll('.work-like');
// console.log(workLikeEl);

//=============================================================
//=============================================================

// ID = Utils.getIdByUrl();
// console.log(ID);

// URL JSON
// URL = './FishEyeDataFR.json';
//============================================================
// DROPDOWN SORT le 29/04
//============================================================

// FIXME problème entre newWorkCard et workById

// // functions for Open & Close Dropdown
// const openCloseDropdown = function () {
// 	if (dropdownBtnEl.classList.contains('active')) {
// 		dropdownBtnEl.classList.remove('active');
// 		dropdownExtendEl.classList.remove('hidden');
// 		swapchevronIcon();
// 	} else {
// 		dropdownExtendEl.classList.add('hidden');
// 		dropdownBtnEl.classList.add('active');
// 		swapchevronIcon();
// 	}
// };
// chevronIconEl.addEventListener('click', openCloseDropdown);

// const oneSortItem = document.querySelector('.one');
// oneSortItem.addEventListener('click', function () {
// 	workById.sort(function (a, b) {
// 		return b.likes - a.likes;
// 	});
// 	return newWorkCard;
// });
// console.log(oneSortItem);
// console.log(workById, newWorkCard);

//==========================

// oneSortItemEl.addEventListener('click', function () {
// 	workById.sort((a, b) => b.likes - a.likes);
// 	closeDropdown();
// 	renderWorksCards();
// });

// twoSortItemEl.addEventListener('click', function () {
// 	workById.sort((a, b) => new Date(b.date) - new Date(a.date));
// 	closeDropdown();
// 	renderWorksCards();
// });

// threeSortItemEl.addEventListener('click', function () {
// 	workById.sort((a, b) => {
// 		const titleA = a.alt.toUpperCase();
// 		const titleB = b.alt.toUpperCase();
// 		if (titleA < titleB) return -1;
// 		if (titleA > titleB) return 1;
// 		return 0;
// 	});
// 	closeDropdown();
// 	renderWorksCards();
// });
let sortItemArray = [];
sortItemArray = Array.from(sortItemEl);
console.log(sortItemArray);

// let [one, two, three] = sortItemArray;
// console.log(sortItemArray);
// console.log(one, two, three);

sortItemArray.forEach(item => {
	item.addEventListener('click', function (e) {
		e.preventDefault();
		if (!dropdownBtnEl.classList.contains('active')) {
			if (item.innerHTML === 'Popularité') {
				sortByPopularity();
				// sortItemArray[0].innerHTML = ['Popularité'];
				// sortItemArray[1].innerHTML = ['Date'];
				// sortItemArray[2].innerHTML = ['Titre'];
			} else if (item.innerHTML === 'Date') {
				sortByDate();
				// sortItemArray[0].innerHTML = ['Date'];
				// sortItemArray[1].innerHTML = ['Popularité'];
				// sortItemArray[2].innerHTML = ['Titre'];
				// sortItemArray[2].innerHTML = ['Titre'];
			} else if (item.innerHTML === 'Titre') {
				sortByTitle();
				// sortItemArray[0].innerHTML = ['Titre'];
				// sortItemArray[1].innerHTML = ['Popularité'];
				// sortItemArray[2].innerHTML = ['Date'];
			}
		}
		closeDropdown();
		renderWorksCards();
	});
});

// oneSortItemEl.addEventListener('click', function (e) {
// 	e.preventDefault();
// 	sortByPopularity();
// 	closeDropdown();
// 	// oneSortItemEl.innerHTML = ''
// 	// sortItemArray = [one, two, three];
// 	// sortItemArray = sortItemEl.innerHTML;

// 	renderWorksCards();
// });

// twoSortItemEl.addEventListener('click', function (e) {
// 	e.preventDefault();
// 	sortByDate();
// 	closeDropdown();
// 	oneSortItemEl.innerHTML = 'Date';
// 	twoSortItemEl.innerHTML = 'Popularité';
// 	threeSortItemEl.innerHTML = 'Title';

// 	renderWorksCards();
// });

// threeSortItemEl.addEventListener('click', function (e) {
// 	e.preventDefault();
// 	sortByTitle();

// 	closeDropdown();
// 	renderWorksCards();
// });

// oneSortItemEl.addEventListener('click', sortByPopularity);
// twoSortItemEl.addEventListener('click', sortByDate);
// threeSortItemEl.addEventListener('click', sortByTitle);

//==========================

// DROPDOWN - SORT WORKS TODO
// FIXME fonctionne seule

// const sortByPopular = workById.sort((a, b) => b.likes - a.likes);
// console.log(sortByPopular);

// const sortByTitle = workById.sort((a, b) => a.likes - b.likes);
// console.log(sortByTitle);

//reussi à faire changer
// console.log(workById, sortByPopular);
// function sortByPopular() {
// 	workById.sort((a, b) => b.likes - a.likes);
// 	// return workById;
// }

//==========================

let sortItemArray = [];
sortItemArray = Array.from(document.querySelectorAll('.sort-item'));
console.log(sortItemArray);

let workLikeEl = document.querySelectorAll('.work-like');

const oneSortItem = document.querySelector('.one');
oneSortItem.addEventListener('click', function () {
	// workById.sort(function (a, b) {
	// 	return b.likes - a.likes;
	// });
	workById.sort((a, b) => a.likes - b.likes);
	// alert('tout ok');
});
console.log(oneSortItem);
console.log(workById);

console.log(workById);

// // TODO CEUX-LÀ FONCTIONNE AUTOMATIQUEMENT
const sortByPopular = workById.sort(function (a, b) {
	return b.likes - a.likes;
});
console.log(workById, sortByPopular);

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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// LIGHTBOX
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// <div class="overlay-lightbox image hidden">
//     </div>
//     <div class="lightbox image hidden">
//         <div class="lightbox-modal">
//             ${newMedia}
//             <h3>${work['alt']}</h3>
//             <span class="close-lightbox fas fa-times"></span>
//             <span class="previous fas fa-chevron-left"></span>
//             <span class="next fas fa-chevron-right"></span>
//         </div>
//     </div>

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

// function mediaFactory (type, attr) {
//     return {
//     type,
//     newMedia : function(){
//         if (work.image !== undefined) {
//             return `<img class="work__media__item" src='./img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`
//         } else {
//             return `<video class="work__media__item" src='./img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`
//         }
//     }
// }

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
// 	return `<img class="work__media__item" src='./img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`;
// };

// let videoMedia = function () {
// 	return `<video class="work__media__item" src='./img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`;
// };

// 	if (work.image !== undefined) {
// 		return (newMedia = `<img class="work__media__item" src='./img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`);
// 	} else {
// 		return (newMedia = `<video class="work__media__item" src='./img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`);
// 	}
// 	return newMedia;
// }

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
// 		`<img class="work__media image" src='./img/photos/${ID}/${work.image}' alt="" aria-label=""/>`;

// return `<video class="work__media video" src="./img/photos/${ID}/${workById.video}"></video>`;

// if (imageWork in element) {
// 	return (newMediaChoice = `<img class="work__media image" src='./img/photos/${ID}/${work.image}' alt="" aria-label=""/>`);
// } else if (videoWork in element) {
// 	return (newMediaChoice = `<video class="work__media video" src="./img/photos/${ID}/${work.video}"></video>`);
// }

// // switch case
// let image = '';
// const mediaChoice = function () {
// 	if (data.media[media].image) {
// 		return (image += `<img class="work__media image" src='./img/photos/${ID}/${work.image}' alt="${work.alt}" role="img" aria-label=""/>`);
// 	} else {
// 		return `<video class="work__media video" src="./img/photos/${ID}/${work.video} alt="${work.alt} role="img"">`;
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
// 		return (newMedia = `<img class="work__media image" src='./img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`);
// 	} else if (video in media) {
// 		return (newMedia = `<video class="work__media video" src='./img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`);
// 	}
// 	return newMedia;
// };

// console.log(newMedia);

// let mediaImage = function () {
//     `<img class="work__media image" src='./img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`;
// }
// let mediaVideo = function () {
//     `<video class="work__media video" src='./img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`;
// }

//==================================================================================================
//  DROPDOWN SORT
//==================================================================================================

// function Dropdown filter
// let dropdownItemArray = Array.from(
// 	document.querySelectorAll('.dropdown__item')
// );
// console.log(dropdownItemArray);

// // let [one, two, three] = dropdownItemArray;
// // console.log(one, two, three); //

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

// let [first, second, third] = sortItemArray;
// console.log(first, second, third); // [0]one-Popularité / [1]two-Date / [2]three-Titre

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

// let temp = one;
// one = two;
// two = three;
// three = temp;

// let sortItemPopular = sortItemArray[0];
// console.log(sortItemPopular);

// first.addEventListener('click', sortByPopular);
// console.log(first);

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

//======================================================
// DROPDOWN HTML
//======================================================

// let newDropdown = '';
// newDropdown = `
// <a href="#" class="dropdown__item btn active">
//     <span class="sort-item one" onclick="sortByPopular()">Popularité</span>
//     <button class="chevron-icon fas fa-chevron-down"></button>
// </a>
// <div class="dropdown-extend hidden">
//     <a href="#" class="dropdown__item">
//         <span class="sort-item two" onclick="sortByDate()">Date</span>
//     </a>
//     <a href="#" class="dropdown__item ">
//         <span class="sort-item three" onclick="sortByTitle()">Titre</span>
//     </a>
// </div>
// `;
// dropdownEl.innerHTML = newDropdown;

// let sortItemArray = [];
// sortItemArray = Array.from(document.querySelectorAll('.sort-item'));
// console.log(sortItemArray);

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

// console.log(workById);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // function Dropdown filter
// let dropdownItemArray = Array.from(
// 	document.querySelectorAll('.dropdown__item')
// );
// console.log(dropdownItemArray);

// // let [one, two, three] = dropdownItemArray;
// // console.log(one, two, three); //
