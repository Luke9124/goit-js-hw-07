document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.login-form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const emailInput = form.elements['email'];
    const passwordInput = form.elements['password'];

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '' || password === '') {
      alert('All form fields must be filled in');
      return;
    }

    const dataForm = {
      email: email,
      password: password,
    };

    console.log(dataForm);

    form.reset();
  });
});
