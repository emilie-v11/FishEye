'use strict';
/**
 *  FORM CONTACT
 */
//==================================================================================================
//DOM ELEMENTS
//==================================================================================================
// header & main
const mainEl = document.querySelector('#main');
const headerEl = document.querySelector('.header');

// Btn Form & Success Message
const btnOpenFormEl = document.querySelector('.btn-contact');
const btnCloseFormEl = document.querySelector('.close-form');
const btnXCloseSuccessEl = document.querySelector('.close-success');
const btnSuccessMessageEl = document.querySelector('.btn-success');

// Modal Form, Overlay & Modal Success Message
const overlayFormEl = document.querySelector('.overlay-form');
const modalBgEl = document.querySelector('.modal-bg');
const modalFormEl = document.querySelector('.modal-form');
const modalSuccessEl = document.querySelector('.modal-success');

// Photographer Name
const photographerNameEl = document.querySelector('.photographer-name');

// Input & Textarea
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const messageTextarea = document.querySelector('#message');

// Error Message
const errorFirst = document.querySelector('.error-first');
const errorLast = document.querySelector('.error-last');
const errorEmail = document.querySelector('.error-email');
const errorMessage = document.querySelector('.error-message');

//==================================================================================================
// ADD PHOTOGRAPHER'S NAME IN FORM MODAL
//==================================================================================================

const datasPhotographer = Utils.getAllDatas('./FishEyeDataFR.json').then(
	data => {
		let photographer = data['photographers'].find(
			photograph => photograph.id == ID
		);
		photographerNameEl.innerHTML = `${photographer.name}`;
	}
);

//==================================================================================================
// NAVIGATION IN FORM MODAL
//==================================================================================================

// add all the elements inside modal which you want to make focusable
let focusableElements =
	'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])';
let modal;
let firstFocusableElement;
let focusableContent;
let lastFocusableElement;

// trap the focus inside the form
function trapFocusForm() {
	modal = document.querySelector('#modal-form'); // select the modal by id
	firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
	focusableContent = modal.querySelectorAll(focusableElements);
	lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal
	trapFocus();
}

// trap the focus inside the success message
function trapFocusSuccess() {
	modal = document.querySelector('#modal-success'); // select the modal by id
	firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
	focusableContent = modal.querySelectorAll(focusableElements);
	lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal
	trapFocus();
}

// Function for trap the focus
function trapFocus() {
	document.addEventListener('keydown', function (e) {
		let isTabPressed = e.key === 'Tab' || e.key === 9;
		if (!isTabPressed) {
			return;
		}
		if (e.shiftKey) {
			// if shift key pressed for shift + tab combination
			if (document.activeElement === firstFocusableElement) {
				e.preventDefault();
				lastFocusableElement.focus(); // add focus for the last focusable element
			}
		} else {
			// if tab key is pressed
			if (document.activeElement === lastFocusableElement) {
				e.preventDefault();
				// if focused has reached to last focusable element then focus first focusable element after pressing tab
				firstFocusableElement.focus(); // add focus for the first focusable element
			}
		}
	});
	firstFocusableElement.focus();
}

//==================================================================================================
// OPEN & CLOSE FORM
//==================================================================================================

// Function for Open
const openForm = function () {
	headerEl.ariaHidden = 'true';
	mainEl.ariaHidden = 'true';
	modalBgEl.ariaHidden = 'false';
	modalFormEl.ariaHidden = 'false';
	overlayFormEl.classList.remove('hidden');
	modalBgEl.classList.remove('hidden');
	trapFocusForm();
};

// Function for Close
const closeForm = function () {
	headerEl.ariaHidden = 'false';
	mainEl.ariaHidden = 'false';
	modalBgEl.ariaHidden = 'true';
	modalFormEl.ariaHidden = 'true';
	overlayFormEl.classList.add('hidden');
	modalBgEl.classList.add('hidden');
	btnOpenFormEl.focus();
};

// Events for Open & Close Form without validation
btnOpenFormEl.addEventListener('click', openForm);
btnCloseFormEl.addEventListener('click', closeForm);

// Events with keyboard key 'ESCAPE'
// for close the modal form & the modal success
document.addEventListener('keydown', function (e) {
	// console.log(e.key);
	if (e.key === 'Escape') {
		closeForm();
		closemodalSuccess();
	}
});

//==================================================================================================
// VALIDATION FORM
//==================================================================================================

// Regex
const nameRegExp = /^([A-ZÀ-Ÿa-z-']{2,20})$/;
const emailRegExp =
	/^([a-zA-Z0-9.]{2,})+@([a-zA-Z0-9.]{2,})+[.]+([a-zA-Z0-9-]{2,20})$/;
const messageRegExp = /[\s\S]{10,300}/;

// Functions to check valid input
function checkFirstName() {
	const isFirstNameValid = nameRegExp.test(firstNameInput.value);

	if (isFirstNameValid) {
		errorFirst.ariaHidden = 'true';
		errorFirst.style.display = 'none';
		firstNameInput.style.border = 'transparent';
	} else {
		errorFirst.ariaHidden = 'false';
		errorFirst.style.display = 'block';
		firstNameInput.style.border = 'red 2px solid';
	}

	return isFirstNameValid;
}

function checkLastName() {
	const isLastNameValid = nameRegExp.test(lastNameInput.value);

	if (isLastNameValid) {
		errorLast.ariaHidden = 'true';
		errorLast.style.display = 'none';
		lastNameInput.style.border = 'transparent';
	} else {
		errorLast.ariaHidden = 'false';
		errorLast.style.display = 'block';
		lastNameInput.style.border = 'red 2px solid';
	}

	return isLastNameValid;
}

function checkEmail() {
	const isEmailValid = emailRegExp.test(emailInput.value);

	if (isEmailValid) {
		errorEmail.ariaHidden = 'true';
		errorEmail.style.display = 'none';
		emailInput.style.border = 'transparent';
	} else {
		errorEmail.ariaHidden = 'false';
		errorEmail.style.display = 'block';
		emailInput.style.border = 'red 2px solid';
	}

	return isEmailValid;
}

function checkMessage() {
	const isMessageValid = messageRegExp.test(messageTextarea.value);

	if (isMessageValid) {
		errorMessage.ariaHidden = 'true';
		errorMessage.style.display = 'none';
		messageTextarea.style.border = 'transparent';
	} else {
		errorMessage.ariaHidden = 'false';
		errorMessage.style.display = 'block';
		messageTextarea.style.border = 'red 2px solid';
	}

	return isMessageValid;
}

//==================================================================================================
// SUBMIT FORM
//==================================================================================================

modalFormEl.addEventListener('submit', function (e) {
	e.preventDefault();
	const isFormValid =
		checkFirstName() && checkLastName() && checkEmail() && checkMessage();

	checkFirstName();
	checkLastName();
	checkEmail();
	checkMessage();

	if (isFormValid) {
		modalFormEl.ariaHidden = 'true';
		modalSuccessEl.ariaHidden = 'false';
		modalSuccessEl.style.display = 'block';
		trapFocusSuccess();
		return console.log(`
            Prénom : ${firstNameInput.value}
            Nom : ${lastNameInput.value}
            Email : ${emailInput.value}
            Message : ${messageTextarea.value}
        `);
	}
});

//====================================================
// Close the modal success message when form is valid
//====================================================

function closemodalSuccess() {
	headerEl.ariaHidden = 'false';
	mainEl.ariaHidden = 'false';
	modalBgEl.ariaHidden = 'true';
	modalSuccessEl.ariaHidden = 'true';
	modalSuccessEl.style.display = 'none';
	modalFormEl.reset();
	closeForm();
}

// Events for Close the success modal
// with 'X' Button Icon
btnXCloseSuccessEl.addEventListener('click', closemodalSuccess);

// with Button 'Fermer'
btnSuccessMessageEl.addEventListener('click', closemodalSuccess);
