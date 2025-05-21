import { provideMoods } from "./catMoods.js";

const moods = provideMoods();

function randomNumber() {
  return Math.floor(Math.random() * 7);
}

function chooseMoods(moodNumber) {
  return moods[moodNumber]
}

console.log(chooseMoods(randomNumber()));