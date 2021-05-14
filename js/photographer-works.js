'use strict';
/**
 *  PHOTOGRAPHER'S WORKS
 */
//==================================================================================================
//DOM ELEMENTS
//==================================================================================================
// Photographer work
const containerWorksEl = document.querySelector('.container-works');
const btnLikeEl = document.querySelector('.btn-like');
const workLikeEl = document.querySelectorAll('.work-like');
// console.log(workLikeEl);

// Aside
const totalLikesEl = document.querySelector('.total-likes');

// VARIABLE
let workById = [];
let totalLikesArray = [];
let likesByIDList;
let workCardsArray = [];
let media;
let newMedia = '';

let workMediaEl;
let workMediaArray;
let lightboxMedia;
let activeMedia;

console.log(workMediaEl);
console.log(workMediaArray);

//==================================================================================================
// FETCH JSON
//==================================================================================================

const datasPhotographerPage = Utils.getAllDatas(URL).then(data =>
	renderPhotographerWorks(data)
);

console.log(ID);
//==================================================================================================
//  Render Photographer Works
//==================================================================================================

// Function render photographers' works
const renderPhotographerWorks = data => {
	media = data.media;
	workById = media.filter(media => media['photographerId'] == ID);

	// Create a map with all likes of current photographer (ID)
	likesByIDList = workById.map(work => work.likes);

	// Calcul the total of the likes' array
	let totalLikes = likesByIDList.reduce((total, likes) => total + likes, 0);
	totalLikesArray.push(totalLikes);
	totalLikesEl.innerHTML = totalLikesArray;

	// sort workById (array works cards) by Popularity by default
	workById.sort((a, b) => b.likes - a.likes);

	// Render the Works Cards
	renderWorksCards();

	// console.log(media); // ==> Array with 59 medias
	// console.log(ID); // ==> id of photographer in URL
	// console.log(workById); // ==> array 10 work for Mimi
};

//==================================================================================================
//  WORKS CARDS
//==================================================================================================

function renderWorksCards() {
	// Render Works Cards (Image - name - price - numb of like & heart icon)
	let newWorkCard = '';

	workById.forEach(work => {
		function mediaFactory() {
			if (work.image !== undefined) {
				return (newMedia = `<img id="${work['id']}" class="work__media__item" src='./img/photos/${ID}/${work.image}' alt="${work['alt']}" aria-label="${work['alt']}"/>`);
			} else {
				return (newMedia = `<video id="${work['id']}" class="work__media__item" src='./img/photos/${ID}/${work.video}' alt="${work['alt']}" aria-label="${work['alt']}">
                        <p class="video-alt">${work['alt']}</p>
                    </video>`);
			}
		}

		// Render newWorkCard
		newWorkCard += `
            <article class="work">
                <a href="#" class="work__media" alt="${
					work['alt']
				}, open closeup view">
                    ${mediaFactory()}
                </a>
                <div class="work__infos">
                    <h2 class="work__infos__name">${work['alt']}</h2>
                    <div class="work__infos__likes">
                        <p class="work-like" aria-label="number of like">${
							work.likes
						}</p>
                        <button class="btn-like" aria-label="likes, click for like this photo">
                            <i class="far fa-heart" aria-hidden="true"></i>
                            <i class="fas fa-heart liked" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
		// <span class="work__infos__price">${work.price}€</span>
	});
	containerWorksEl.innerHTML = newWorkCard;
	let workMediaEl = document.querySelectorAll('.work__media__item');

	workMediaArray = Array.from(workMediaEl);
	console.log(workMediaArray);

	workMediaArray.forEach((image, index) => {
		image.addEventListener('click', e => {
			openLightbox();
			setActiveMedia(image);
			activeMedia = index;
		});
	});
	// console.log(e.target.src, e.target.tagName);
    // console.log(image, index);

	//==================================================================================================
	//  Function & Events for like  each Works & total likes
	//==================================================================================================
	let btnLikeArray = Array.from(document.querySelectorAll('.btn-like'));
	// console.log(btnLikeArray);
	// console.log(totalLikesArray); // [680] for Mimi
	// console.log(workById); // 10 works for Mimi (all works infos)
	// console.log(likesByIDList); // all likes (10 for Mimi)

	btnLikeArray.forEach(btn => {
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
			// console.log(totalLikesArray);
			// console.log(btn.previousElementSibling);
		});
	});
}
