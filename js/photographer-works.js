'use strict';
/**
 *  PHOTOGRAPHER'S WORKS & ASIDE
 */
//==================================================================================================
//DOM ELEMENTS
//==================================================================================================
// Photographer work
const containerWorksEl = document.querySelector('.container-works');
const btnLikeEl = document.querySelector('.btn-like');
const workLikeEl = document.querySelectorAll('.work-like');

// Aside
const totalLikesEl = document.querySelector('.total-likes');

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
let totalLikesArray = [];
// let likesByIDArray = [];
let likesByIDList;

// Function render photographers' works
const renderPhotographerWorks = data => {
	let media = data.media;
	workById = media.filter(media => media['photographerId'] == ID);

	console.log(media); // ==> Array with 59 medias
	console.log(ID); // ==> id of photographer in URL
	console.log(workById); // ==> array 10 work for Mimi

	// sort workById (array works cards) by Popularity by default
	workById.sort((a, b) => b.likes - a.likes);

	// Create an array with all likes of current photographer (ID)
	likesByIDList = workById.map(work => work.likes);
	console.log(likesByIDList);

	// // Calcul the total of the likes' array
	// let totalLikesList = likesByIDList.reduce(
	// 	(total, likes) => total + likes,
	// 	0
	// );
	// console.log(totalLikesList);
	// let totalLikes = totalLikesList;

	// let totalLikesArray = [];
	// let likesByIDArray = [];

	// Calcul the total of the likes' array
	let totalLikes = likesByIDList.reduce((total, likes) => total + likes, 0);
	console.log(totalLikes); // TOTAL EX 680 NUMBER

	totalLikesArray.push(totalLikes);
	console.log(totalLikesArray); // TOTAL EX 680 DS ARRAY []

	totalLikesEl.innerHTML = totalLikesArray;

	//=============================================================
	renderWorksCards();
};

//==================================================================================================
//  WORKS CARDS
//==================================================================================================
let likedUp = 0;
let newLike = '';

function renderWorksCards() {
	// Render Works Cards (Image - name - price - numb of like & heart icon)
	let newWorkCard = '';
	workById.forEach(work => {
		let newMedia = '';
		newMedia +=
			work.image !== undefined
				? (newMedia = `<img class="work__media__item" src='./img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label=""/>`)
                : (newMedia = `<video class="work__media__item" src='./img/photos/${ID}/${work.video}' alt="${work['alt']}"></video>`);
                //TODO remettre qd lightbox controls aux videos
		// console.log(newMedia);
		// const workLikeEl = document.querySelectorAll('.work-like');
		// console.log(workLikeEl);
		// workLikeEl.value = parseInt(workLikeEl.value) + 1;
		// console.log(workLikeEl);

		// let newLike = '';
		// newLike = newLike.nextElementSibling.classList.contains('liked')
		// 	? (newLike = work.likes + 1)
		// 	: (newLike = work.likes);
		// console.log(workLikeEl);

		// likedUp = 0;
		// newLike = work.likes + likedUp;

		//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
		// Render newWorkCard
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

	//==================================================================================================
	//  Function & Events for like  each Works & total likes
	//==================================================================================================
	let btnLikeArray = Array.from(document.querySelectorAll('.btn-like'));
	// console.log(btnLikeArray);
	console.log(totalLikesArray);
	// console.log(workById);
	console.log(workById);
	console.log(likesByIDList);

	// const workLikeArray = Array.from(workLikeEl);
	// console.log(workLikeArray);
	// let workLikeEl = document.querySelectorAll('.work-like');
	// console.log(workLikeEl);
	likesByIDList.forEach(like => {
		// workLikeEl.innerHTML = like;
		like = workLikeEl.innerHTML;
	});
	console.log(workLikeEl);

	btnLikeArray.forEach(btn => {
		btn.addEventListener('click', function (e) {
			e.preventDefault();
			// btnLikeEl.previousElementSibling = newLike;
			if (!btn.classList.contains('liked')) {
				btn.previousElementSibling.innerHTML++;
				// likedUp = 1;
				// workLikeEl.innerHTML++;
				btn.classList.add('liked');
				totalLikesArray++;
			} else {
				btn.previousElementSibling.innerHTML--;
				// likedUp = 0;
				btn.classList.remove('liked');
				totalLikesArray--;
			}
			document.querySelector('.total-likes').innerHTML = totalLikesArray;
			console.log(totalLikesArray);
			console.log(btn.previousElementSibling);
		});
	});
}

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
