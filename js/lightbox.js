'use strict';
/**
 *  LIGHTBOX
 */
//==================================================================================================
//  DOM ELEMENTS
//==================================================================================================
// Lightbox
const overlayLightboxEl = document.querySelector('.overlay-lightbox');
const lightboxEl = document.querySelector('.lightbox');
const btnCloseLightboxEl = document.querySelector('.lightbox__close');
console.log(btnCloseLightboxEl);
const lightboxContentEl = document.querySelector('.lightbox__content');
console.log(lightboxContentEl);
const lightboxHeadingEl = document.querySelector('.lightbox__heading');

// VARIABLE
// let currentMedia = '';
// let currentMedia;

//==================================================================================================
// FETCH JSON
//==================================================================================================
// const datasLightbox = Utils.getAllDatas(URL).then(data => renderLightbox(data));

//==================================================================================================

// const renderLightbox = data => {
// 	// console.log(workById);
// 	console.log(containerWorksEl);

//     renderWorksCards();

// 	let workMediaEl = containerWorksEl.querySelectorAll('.work__media__item');
//     console.log(workMediaEl);

// 	// let workMediaArray = Array.from(workMediaEl);
// 	// console.log(workMediaArray);

// 	// workMediaEl.forEach(work => {
// 	// 	work.addEventListener('click', e => {
// 	// 		e.preventDefault();
// 	// 		currentMedia = e.target;
// 	// 		mediaFactoryLightbox();
// 	// 		// lightboxMediaEl.src = e.target.src;
// 	// 		// lightboxMediaEl.tagName = e.target.tagName;
// 	// 		openLightbox();
// 	// 		console.log(e.target.tagName);
// 	// 		console.log(e.target.src);
// 	// 	});
// 	// });

// 	workById.forEach(work => {});
// };

//==================================================================================================
// FACTORY FOR MEDIA LIGHTBOX
//==================================================================================================

function mediaFactoryLightbox() {
	if (currentMedia.tagName == 'IMG') {
		lightboxContentEl.innerHTML = `<img class="lightbox__content__media" src="${currentMedia.src}" alt="${currentMedia.alt}">`;
		lightboxHeadingEl.innerHTML = `${currentMedia.alt}`;
	} else {
		lightboxContentEl.innerHTML = `<video class="lightbox__content__media" src="${currentMedia.src}" type="video/mp4" controls aria-label="${currentMedia['aria-label']}"></video>`;
		lightboxHeadingEl.textContent = `${currentMedia.textContent}`;
	}
}

//==================================================================================================
// Lightboxes
//  function and events for Open & Close
//==================================================================================================

function openLightbox() {
	overlayLightboxEl.classList.remove('hidden');
}

// const openCloseLightbox = function () {
function closeLightbox() {
	overlayLightboxEl.classList.add('hidden');
}

// Events for Close lightbox
// Close with button 'X'
btnCloseLightboxEl.addEventListener('click', closeLightbox);

// Close with keyboard 'ESCAPE'
document.addEventListener('keydown', function (e) {
	// console.log(e.key);
	if (e.key === 'Escape') {
		closeLightbox();
	}
});

// // FIXME add controls on videos in lightbox

// let mediaLightbox = '';
// mediaLightbox +=
// 	lightboxMediaEl.tagName === 'VIDEO'
// 		? (mediaLightbox = `<video id="${work['id']}" class="lightbox__content__media" src='' alt="" controls></video>`)
// 		: (mediaLightbox = `<img id="${work['id']}" class="lightbox__content__media" src='' alt="" aria-label=""/>`);
// lightboxContentEl.innerHTML = mediaLightbox;
