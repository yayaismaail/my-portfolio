// Retrieve the form data from local storage
function getFormData() {
  const formData = localStorage.getItem('formData');
  return formData ? JSON.parse(formData) : {};
}

// Save the form data to local storage
function saveFormData(data) {
  localStorage.setItem('formData', JSON.stringify(data));
}

// Update the form fields with the saved data
function updateFormFields() {
  const formData = getFormData();
  document.getElementById('fullname').value = formData.fullname || '';
  document.getElementById('email').value = formData.email || '';
  document.getElementById('message').value = formData.message || '';
}

// Save the form data whenever a field is changed
function handleInputChange(event) {
  const inputField = event.target;
  const fieldName = inputField.fullname;
  const fieldValue = inputField.value;

  const formData = getFormData();
  formData[fieldName] = fieldValue;
  saveFormData(formData);
}

// Add event listeners to input fields
const inputFields = document.querySelectorAll('input');
inputFields.forEach((input) => {
  input.addEventListener('change', handleInputChange);
});

// Load the form data on page load
window.addEventListener('load', updateFormFields);