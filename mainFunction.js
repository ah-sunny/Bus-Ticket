

const buttons = document.querySelectorAll('.seat');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.backgroundColor = 'red';
  });
});

