'use strict';
/**
 *  TAGS FILTER - HOMEPAGE / PHOTOGRAPHER'S PAGE
 */
//==================================================================================================
let tagsArray = Array.from(document.querySelectorAll('.tags'));
let activeTag = '';

//==================================================================================================
// FUNCTION FILTER PHOTOGRAPHERS CARDS BY CATEGORIES WITH NAVIGATION'S TAGS
//==================================================================================================

function filterByTagsNav(activeTag) {
	// Filter cards including activeTag (tag selected)
	let filterCards = allPhotographersProfiles.filter(item =>
		item.tags.includes(activeTag)
	);

	// Each photographers's cards
	let photographersEl = document.getElementsByClassName('photographers');
	// Array for all photographers's cards
	let photographersArray = Array.from(photographersEl);
	// Tag for check if activeTag match
	let tagToCompare = '#' + activeTag;

	photographersArray.forEach(card => {
		// Array for each photographers'card with all tags (Mimi 4 - Ellie-Rose 2 - ... 3-2-4-2)
		let tagsCardArray = Array.from(card.querySelectorAll('.tags-card')); // ('.tags)
		// console.log(tagsCardArray);
		// Array with matching tags
		let tagsText = [];
		// get back the 'tagText' textContent for tags' photographer and push it in 'tagsText' array
		tagsCardArray.forEach(tag => {
			let tagText = tag.textContent;
			tagsText.push(tagText);
		});

		for (let i = 0; i < filterCards.length; i++) {
			if (tagsText.includes(tagToCompare)) {
				card.style.display = 'block';
			} else {
				card.style.display = 'none';
			}
		}
	});
}

//==================================================================================================
//  EVENT FOR FILTER PHOTOGRAPHERS' CARDS
//==================================================================================================

function filterBytagsCards() {
	let tagsCard = document.querySelectorAll('.tags');
	let tagsCardArray = Array.from(tagsCard);

	tagsCardArray.forEach(tag =>
		tag.addEventListener('click', function () {
			if (tag.classList.contains('active')) {
				tag.classList.remove('active');
				window.location.href = './index.html';
			} else {
				tagsCardArray.forEach(item => {
					item.classList.remove('active');
				});
				tag.classList.add('active');
				activeTag = tag.textContent.substr(1).toLowerCase();
				filterByTagsNav(activeTag);
			}
		})
	);
}
