 export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
//   if (expansion1989 === undefined) {
//     expansion1989 = 89;
//   }

//   if (expansion2019 === undefined) {
//     expansion2019 = 19;
//   }
  return initialNumber + expansion1989 + expansion2019;
 }
console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));