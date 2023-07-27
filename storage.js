const formD = document.querySelector('.form');
const uName = document.querySelector('#fullname');
const msg = document.querySelector('#message');
const emailD = document.querySelector('#email');

function getFormData() {
  const formData = {
    uName: uName.value,
    emailD: emailD.value,
    msg: msg.value,
  };
  return formData;
}

formD.addEventListener('change', () => {
  const formData = getFormData();
  localStorage.setItem('formData', JSON.stringify(formData));
});

window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('formData'));
  if (data) {
    uName.value = data.uName;
    emailD.value = data.emailD;
    msg.value = data.msg;
  }
});