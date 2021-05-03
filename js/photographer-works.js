'use strict';
/*
 *  PHOTOGRAPHER'S WORKS
 */
//==================================================================================================
//DOM ELEMENTS
//==================================================================================================
// Photographer work
const containerWorksEl = document.querySelector('.container-works');
const btnLikeEl = document.querySelector('.btn-like');
const workLikeEl = document.querySelectorAll('.work-like');
console.log(workLikeEl);

// Aside
const totalLikesEl = document.querySelector('.total-likes');

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
let likesByIDList;
let workCardsArray = [];

// Function render photographers' works
const renderPhotographerWorks = data => {
	let media = data.media;
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
				: (newMedia = `<video class="work__media__item" src='./img/photos/${ID}/${work.video}' alt="${work['alt']}" controls></video>`);

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
                            <button class="btn-like" aria-label="likes, click for like this photo">
                                <i class="far fa-heart" aria-hidden="true"></i>
                                <i class="fas fa-heart liked" aria-hidden="true"></i>
                            </button>
                        </span>
                    </p>
                </div>
            </article>
        `;
	});
	// workCardsArray.push(newWorkCard);
	// containerWorksEl.innerHTML = workCardsArray;
	containerWorksEl.innerHTML = newWorkCard;

	//==================================================================================================
	//  Function & Events for like  each Works & total likes
	//==================================================================================================
	let btnLikeArray = Array.from(document.querySelectorAll('.btn-like'));

	// console.log(btnLikeArray);
	// console.log(totalLikesArray); // [680] for Mimi
	// console.log(workById); // 10 works for Mimi (all works infos)
	console.log(likesByIDList); // all likes (10 for Mimi)

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
			console.log(totalLikesArray);
			console.log(btn.previousElementSibling);
		});
	});
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
console.log(workById);
