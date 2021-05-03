'use strict';
/*
 *  FORM CONTACT
 */
//==================================================================================================
//DOM ELEMENTS
//==================================================================================================
// Btn Form & Success Message
const btnOpenFormEl = document.querySelector('.btn-contact');
const btnCloseFormEl = document.querySelector('.close-form');
const btnXCloseSuccessEl = document.querySelector('.close-success');
const btnSuccessMessageEl = document.querySelector('.btn-success');

// Modal Form, Overlay & Modal Success Message
const overlayFormEl = document.querySelector('.overlay-form');
const modalBg = document.querySelector('.modal-bg');
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
// OPEN & CLOSE FORM
//==================================================================================================
// Function for Open & Close
const openForm = function () {
	overlayFormEl.classList.remove('hidden');
	modalBg.classList.remove('hidden');
};

const closeForm = function () {
	overlayFormEl.classList.add('hidden');
	modalBg.classList.add('hidden');
};

const closemodalSuccess = function () {
	closeForm();
	modalSuccessEl.style.display = 'none';
	modalFormEl.reset();
};

//==================================================================================================
// EVENTS FORM
//==================================================================================================

// Events for Open & Close Form without validation
btnOpenFormEl.addEventListener('click', openForm);
btnCloseFormEl.addEventListener('click', closeForm);

// Events for Close the success modal
// with 'X' Button Icon
btnXCloseSuccessEl.addEventListener('click', closemodalSuccess);
// with Button 'Fermer'
btnSuccessMessageEl.addEventListener('click', closemodalSuccess);

//==================================================================================================
// VALIDATION FORM
//==================================================================================================

// Regex
const nameRegExp = /^([A-ZÀ-Ÿa-z-']{2,20})$/;
const emailRegExp = /^([a-zA-Z0-9.]{2,})+@([a-zA-Z0-9.]{2,})+[.]+([a-zA-Z0-9-]{2,20})$/;
const messageRegExp = /[\s\S]{10,300}/;

// Functions to check valid input
function checkFirstName() {
	const isFirstNameValid = nameRegExp.test(firstNameInput.value);

	if (isFirstNameValid) {
		errorFirst.style.display = 'none';
		firstNameInput.style.border = 'transparent';
	} else {
		errorFirst.style.display = 'block';
		firstNameInput.style.border = 'red 2px solid';
	}

	return isFirstNameValid;
}

function checkLastName() {
	const isLastNameValid = nameRegExp.test(lastNameInput.value);

	if (isLastNameValid) {
		errorLast.style.display = 'none';
		lastNameInput.style.border = 'transparent';
	} else {
		errorLast.style.display = 'block';
		lastNameInput.style.border = 'red 2px solid';
	}

	return isLastNameValid;
}

function checkEmail() {
	const isEmailValid = emailRegExp.test(emailInput.value);

	if (isEmailValid) {
		errorEmail.style.display = 'none';
		emailInput.style.border = 'transparent';
	} else {
		errorEmail.style.display = 'block';
		emailInput.style.border = 'red 2px solid';
	}

	return isEmailValid;
}

function checkMessage() {
	const isMessageValid = messageRegExp.test(messageTextarea.value);

	if (isMessageValid) {
		errorMessage.style.display = 'none';
		messageTextarea.style.border = 'transparent';
	} else {
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
		modalSuccessEl.style.display = 'block';
	}
	return console.log(`
        Prénom : ${firstNameInput.value}
        Nom : ${lastNameInput.value}
        Email : ${emailInput.value}
        Message : ${messageTextarea.value}
    `);
});
