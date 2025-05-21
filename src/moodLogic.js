import { provideMoods } from "./catMoods.js";

const moods = provideMoods();

function randomNumber() {
  return Math.floor(Math.random() * 7);
}

export function chooseMoods() {
  let moodNumber = randomNumber();
  return moods[moodNumber]
}