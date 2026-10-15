const fortune1 = "Beware of soft furniture today; a lost remote control will attempt to recruit you into its secret society.";
const fortune2 = "You will soon encounter a squirrel that looks at you with profound disappointment. Do not try to defend your life choices.";
const fortune3 = "A vast financial windfall is in your future, but it will arrive entirely in un-cancelled 1990s grocery store coupons.";
const fortune4 = "Your code will compile on the first try today, but your left sock will inexplicably slide down under your heel for the rest of the afternoon.";
const fortune5 = "The universe signals that you should eat a snack immediately. No, this isn't a cosmic metaphor—go check the pantry.";

const min = 1;
const max = 5;
let randomNumber = Math.floor(Math.random() * ((max + 1) - min) + min);

let selectedFortune;

if (randomNumber == 1) {
  selectedFortune = fortune1;
} else if (randomNumber == 2) {
  selectedFortune = fortune2;
} else if (randomNumber == 3) {
  selectedFortune = fortune3;
} else if (randomNumber == 4) {
  selectedFortune = fortune4;
} else if (randomNumber == 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune);
