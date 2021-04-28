//=============================================================
// BROUILLON
//============================================================
// ID = Utils.getIdByUrl();
// console.log(ID);

// URL JSON
// URL = './FishEyeDataFR.json';

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
//             return `<img class="work__media__item" src='./scss/img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`
//         } else {
//             return `<video class="work__media__item" src='./scss/img/photos/${ID}/${work.video}' controls alt="${work['alt']}"></video>`
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
