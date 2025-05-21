import { chooseMoods } from "./moodLogic.js";

const catFace = document.querySelector('.cat-face');
const catMood = document.querySelector('.cat-mood');
const catQuote = document.querySelector('.cat-quote');
const changeMoodBtn = document.querySelector('.nextMoodBtn');

export function uiUpdater() {
  changeMoodBtn.addEventListener('click', () => {
    let currentMood = chooseMoods();
    catFace.textContent = currentMood.face;
    catMood.textContent = currentMood.mood;
    catQuote.textContent = currentMood.quote;
  })
}

