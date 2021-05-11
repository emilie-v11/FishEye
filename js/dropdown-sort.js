'use strict';
/**
 *  DROPDOWN
 */
//==================================================================================================
//  DOM ELEMENTS
//==================================================================================================
const dropdownEl = document.querySelector('.dropdown');
const dropdownBtnEl = document.querySelector('.dropdown__item.btn');
const dropdownExtendEl = document.querySelector('.dropdown-extend');
const chevronIconEl = document.querySelector('.chevron-icon');
const sortItemEl = document.querySelectorAll('.sort-item');

//====================================================================
const sortItemArray = Array.from(sortItemEl);
console.log(sortItemArray);

//==================================================================================================
//  DROPDOWN OPEN & CLOSE
//==================================================================================================

// functions for Close Dropdown after select sort item
const closeDropdown = function () {
	dropdownEl.ariaExpanded = 'false';
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
	dropdownBtnEl.focus();
	if (dropdownBtnEl.classList.contains('active')) {
		dropdownEl.ariaExpanded = 'true';
		dropdownBtnEl.classList.remove('active');
		dropdownExtendEl.classList.remove('hidden');
		sortItemArray[0].focus();
	} else {
		dropdownEl.ariaExpanded = 'false';
		dropdownExtendEl.classList.add('hidden');
		dropdownBtnEl.classList.add('active');
	}
	swapchevronIcon();
});

//==================================================================================================
//  DROPDOWN SORT BY ITEM
//==================================================================================================

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
	sortItemArray[1].innerHTML = ['Date'];
	sortItemArray[2].innerHTML = ['Popularité'];
}

//==================================================================================================
//  DROPDOWN EVENTS
//==================================================================================================

const dropdownSortBy = sortItemArray.forEach(item => {
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
