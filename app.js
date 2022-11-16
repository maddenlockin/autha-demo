/* Imports */
import { getUser, redirectIfLoggedIn, signUpUser } from './fetch-utils.js';

/* Get DOM Elements */
const signUpForm = document.getElementById('sign-up');

redirectIfLoggedIn();

/* Events */

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log('data', data.get('email'));
    const user = await signUpUser(data.get('email'), data.get('password'));
    console.log(getUser());
    if (user) {
        location.replace('/home');
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
