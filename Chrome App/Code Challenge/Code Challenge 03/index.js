const generateNumber = document.querySelector('.title');
const guessNumber = document.getElementById('guess');
const maxNumber = document.getElementById('maxNumber');
const play = guessNumber.querySelector('input');
const result = document.querySelector('#result');

function handleGuessSubmit(e) {
  e.preventDefault();
  const max = parseInt(maxNumber.value);
  const random = Math.ceil(Math.random() * max);
  const guess = parseInt(play.value);
  const span = result.querySelector('span');

  if (guess === random) {
    span.innerHTML = `You chose: ${guess}, the machine chose: ${random}. <br> <strong>You won! </strong>`;
  } else {
    span.innerHTML = `You chose: ${guess}, the machine chose: ${random}. <br> <strong>You lost!</strong>`;
  }
}
guessNumber.addEventListener('submit', handleGuessSubmit);
