// const teamOne = Dolphins;
// const teamTwo = Koalas;

// const teamOneScore = (96 + 108 + 89) / 3;
// const teamTwoScore = (97 + 112 + 101) / 3;

// if (teamOneScore > teamTwoScore) {
//   console.log(`${teamOne} wins the ${teamTwo}`);
// } else if (teamOneScore === teamTwoScore) {
//   console.log(`${teamOne} and ${teamTwo} have a draw`);
// } else {
//   console.log(`${teamTwo} wins the ${teamOne}`);
// }

console.log("Javascript is fully working");

const teamOne = "Dolphins";
const teamTwo = "Koalas";

const teamOneScore = (97 + 112 + 101) / 3;
const teamTwoScore = (109 + 95 + 106) / 3;

const minScoreHundred = 100;

if (teamOneScore > teamTwoScore && minScoreHundred) {
  console.log(`${teamOne} wins the ${teamTwo}`);
} else if (teamTwoScore > teamOneScore && minScoreHundred) {
  console.log(`${teamTwo} wins the ${teamOne}`);
} else if (teamOneScore === teamTwoScore && minScoreHundred) {
  console.log(`${teamOne} and ${teamTwo} have a draw`);
} else {
  console.log(`Neither teams won!!`);
}
