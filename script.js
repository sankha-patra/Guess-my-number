'use strict';

document.querySelector('.message').textContent = 'Wanna guess?';

document.querySelector('.score').textContent = 20;
let highscore = 0;

const score = document.querySelector('.score').textContent;

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.guess').value);

let number = Math.floor(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   when no number is pressed

  if (!guess) {
    document.querySelector('.message').textContent =
      'No number was entered 😑!!';
  } else {
    // when the correct number is pressed

    if (number === guess) {
      document.querySelector('.number').textContent = number;

      document.querySelector('.message').textContent =
        '🎉Congratsss number matched  !!!';
      document.querySelector('.score').textContent++;
      console.log(document.querySelector('.score').textContent);

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (document.querySelector('.score').textContent > highscore) {
        highscore = document.querySelector('.score').textContent;
        document.querySelector('.highscore').textContent = highscore;
        console.log(document.querySelector('.highscore').textContent);
      }
    }

    // when the guess is wrong
    else if (number !== guess) {
      if (score > 1) {
        document.querySelector('body').style.backgroundColor = '#FA9905';
        document.querySelector('.message').textContent =
          guess > number
            ? 'Incorrect guess Too high 😑!!!'
            : 'Incorrect guess Too low 😑!!!';
        document.querySelector('.score').textContent--;
        console.log(document.querySelector('.score').textContent);
      } else {
        document.querySelector('body').style.backgroundColor = '#FF4848';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent = 'You lost 😓!!!';
      }
    }
  }
});

// for again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Wanna guess?';
  number = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
