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
const chevronIconEl = document.querySelector('.chevron-icon');

const sortItemEl = document.querySelectorAll('.sort-item');
// let oneSortItemEl = document.querySelector('.one');
// let twoSortItemEl = document.querySelector('.two');
// let threeSortItemEl = document.querySelector('.three');

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
	workById = media.filter(media => media['photographerId'] == ID);

	console.log(media); // ==> Array with 59 medias
	console.log(ID); // ==> id of photographer in URL
	console.log(workById); // ==> array 10 work for Mimi

	// sort workById (array works cards) by Popularity by default
	workById.sort((a, b) => b.likes - a.likes);

	// // Create an array with all likes of current photographer (ID)
	// let likesByIDList = workById.map(likesByID => likesByID.likes);
	// console.log(likesByIDList);

	// // Calcul the total of the likes' array
	// let totalLikesList = likesByIDList.reduce(
	// 	(total, likes) => total + likes,
	// 	0
	// );
	// console.log(totalLikesList);
	// let totalLikes = totalLikesList;

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

	//=============================================================
	renderWorksCards();

	// let sortItemArray = [];
	// sortItemArray = Array.from(document.querySelectorAll('.sort-item'));
	// console.log(sortItemArray);

	//=============================================================
	// function renderNewWorkCard (data) {

	// 	workById = workById.sort((a, b) => b.likes - a.likes);

	// 	// Render Works Cards (Image - name - price - numb of like & heart icon)
	// 	let newWorkCard = '';
	// 	workById.forEach(work => {
	// 		let newMedia = '';
	// 		newMedia +=
	// 			work.image !== undefined
	// 				? (newMedia = `<img class="work__media__item" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`)
	// 				: (newMedia = `<video class="work__media__item" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`);
	// 		// console.log(newMedia);

	// 		newWorkCard += `
	//         <article class="work">
	//             <a href="#" class="work__media">
	//                     ${newMedia}
	//             </a>
	//             <div class="work__infos">
	//                 <h3 class="work__infos__name">${work['alt']}</h3>
	//                 <p>
	//                     <span class="work__infos__price">${work.price}€</span>
	//                     <span class="work__infos__likes">
	//                         <span class="work-like">${work.likes}</span>
	//                         <button class="btn-like" aria-label="click for like it">
	//                             <i class="far fa-heart "></i>
	//                             <i class="fas fa-heart liked"></i>
	//                         </button>
	//                     </span>
	//                 </p>
	//             </div>
	//         </article>
	//     `;
	// 	});

	// 	containerWorksEl.innerHTML = newWorkCard;
	// 	console.log(workById, newWorkCard);
	// }
	// renderNewWorkCard();

	//==================================================================================================
	//  Function & Events for like  each Works & total likes
	//==================================================================================================
	let btnLikeEl = Array.from(document.querySelectorAll('.btn-like'));
	// console.log(btnLikeEl);
	console.log(totalLikesArray);
	// console.log(workById);

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

//==================================================================================================
//  WORKS CARDS
//==================================================================================================

function renderWorksCards() {
	// Render Works Cards (Image - name - price - numb of like & heart icon)
	let newWorkCard = '';
	workById.forEach(work => {
		let newMedia = '';
		newMedia +=
			work.image !== undefined
				? (newMedia = `<img class="work__media__item" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`)
				: (newMedia = `<video class="work__media__item" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`);
		// console.log(newMedia);

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
}

//==================================================================================================
//  DROPDOWN
//==================================================================================================
//=========================
//  DROPDOWN OPEN & CLOSE
//=========================

// functions for Close Dropdown after select sort item
const closeDropdown = function () {
	dropdownExtendEl.classList.add('hidden');
	dropdownBtnEl.classList.add('active');
	swapchevronIcon();
};

// function for swap chevron icon 'down' or 'up'
const swapchevronIcon = function () {
	if (!dropdownBtnEl.classList.contains('active')) {
		chevronIconEl.classList.replace('fa-chevron-down', 'fa-chevron-up');
	} else {
		chevronIconEl.classList.replace('fa-chevron-up', 'fa-chevron-down');
	}
};

// functions & Events for Open & Close Dropdown with Chevron Icon
chevronIconEl.addEventListener('click', function (e) {
	e.preventDefault();
	if (dropdownBtnEl.classList.contains('active')) {
		dropdownBtnEl.classList.remove('active');
		dropdownExtendEl.classList.remove('hidden');
		swapchevronIcon();
	} else {
		dropdownExtendEl.classList.add('hidden');
		dropdownBtnEl.classList.add('active');
		swapchevronIcon();
	}
});

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

//=========================
//  DROPDOWN SORT BY ITEM
//=========================

// function sort by Popularity
function sortByPopularity() {
	if (!dropdownBtnEl.classList.contains('active')) {
		workById.sort((a, b) => b.likes - a.likes);
		sortItemArray[0].innerHTML = ['Popularité'];
		sortItemArray[1].innerHTML = ['Date'];
		sortItemArray[2].innerHTML = ['Titre'];
	}
}

// function sort by Date
function sortByDate() {
	workById.sort(
		(a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
	);
	sortItemArray[0].innerHTML = ['Date'];
	sortItemArray[1].innerHTML = ['Popularité'];
	sortItemArray[2].innerHTML = ['Titre'];
}

// function sort by Title
function sortByTitle() {
	workById.sort((a, b) => {
		const titleA = a.alt.toUpperCase();
		const titleB = b.alt.toUpperCase();
		if (titleA < titleB) return -1;
		if (titleA > titleB) return 1;
		return 0;
	});
	sortItemArray[0].innerHTML = ['Titre'];
	sortItemArray[1].innerHTML = ['Popularité'];
	sortItemArray[2].innerHTML = ['Date'];
}

//=========================
//  DROPDOWN EVENTS
//=========================
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
			} else if (item.innerHTML === 'Date') {
				sortByDate();
			} else if (item.innerHTML === 'Titre') {
				sortByTitle();
			}
		}
		closeDropdown();
		renderWorksCards();
	});
});

// sortItemArray.forEach(item => {
// 	item.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		if (!dropdownBtnEl.classList.contains('active')) {
// 			if (item.innerHTML === 'Popularité') {
// 				sortByPopularity();
// 				// sortItemArray[0].innerHTML = ['Popularité'];
// 				// sortItemArray[1].innerHTML = ['Date'];
// 				// sortItemArray[2].innerHTML = ['Titre'];
// 			} else if (item.innerHTML === 'Date') {
// 				sortByDate();
// 				// sortItemArray[0].innerHTML = ['Date'];
// 				// sortItemArray[1].innerHTML = ['Popularité'];
// 				// sortItemArray[2].innerHTML = ['Titre'];
// 				// sortItemArray[2].innerHTML = ['Titre'];
// 			} else if (item.innerHTML === 'Titre') {
// 				sortByTitle();
// 				// sortItemArray[0].innerHTML = ['Titre'];
// 				// sortItemArray[1].innerHTML = ['Popularité'];
// 				// sortItemArray[2].innerHTML = ['Date'];
// 			}
// 		}
// 		closeDropdown();
// 		renderWorksCards();
// 	});
// });

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
