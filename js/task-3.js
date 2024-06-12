document.addEventListener('DOMContentLoaded', () => {
  const inputName = document.getElementById('name-input');
  const outputName = document.getElementById('name-output');

  inputName.addEventListener('input', () => {
    const trimValue = inputName.value.trim();
    outputName.textContent = trimValue ? trimValue : 'Anonymous';
  });
});
