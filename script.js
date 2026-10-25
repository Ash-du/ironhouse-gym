document.getElementById('year').textContent = new Date().getFullYear();

const form = document.querySelector('.visit-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!name || !email) {
    alert('Please add your name and email before submitting.');
    return;
  }
  alert('Your request has been received. We will contact you shortly.');
  form.reset();
});
