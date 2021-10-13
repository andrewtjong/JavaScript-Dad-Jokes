const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');


const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad.',
  'you are the worst',
  'seriously',
  'stop it.',
  'please stop',
  'that was the worst one',
];

async function fetchJoke() {
  // turn loader on
  loader.classList.remove('hidden')
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json()
  // turn the loader off
  loader.classList.add('hidden')
  return data
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  // recursion: if the thing is the same thing as the last time then run it again.
  if(item === not) {
    console.log('Ahh we used that one last time, look again')
    return randomItemFromArray(arr, not);
  }
  return item
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke
  jokeButton.textContent = randomItemFromArray(buttonText, jokeButton.textContent)
}

jokeButton.addEventListener('click', handleClick);
