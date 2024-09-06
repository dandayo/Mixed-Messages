const day = ['Today', 'Tomorrow', 'Next friday'];
const happens = ['meet someone special', 'receive good news', 'succeed in achieving a goal', 'experience joy and happiness', 'discover something new', 'solve an important problem','feel a surge of energy and inspiration', 'create something wonderful', 'help others', 'enjoy every moment' ];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

let randomNumberDay = getRandomNumber(0, 3);
let randomNumberHappens = getRandomNumber(0, 10)

let predictionDay = day[randomNumberDay];
let predictionHappens = happens[randomNumberHappens];

function prediction(){
    return predictionDay + ", you will " + predictionHappens + ".";
};

document.querySelector('.prediction').textContent = prediction();