// Validate Contact Form

const form = document.querySelector('#form');
const email = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

function showErrorMessage() {
  if (email.value.trim() !== email.value.trim().toLowerCase()) {
    errorMessage.textContent = 'Please, kindly use lowercase for the email address';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value.trim() !== email.value.trim().toLowerCase()) {
    showErrorMessage();
  }
});