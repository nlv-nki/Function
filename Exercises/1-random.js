'use strict';
/**
 * Generate random Number between from min to max
 * Use Math.random() and Math.floor()
 * See documentation at MDN
 * @param  {} min
 * @param  {} max
 */

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
     return Math.floor(min + Math.random() * (max - min));

};

module.exports = { random };


// function randomInteger(min, max) {
//   // случайное число от min до (max+1)
//   let rand = min + Math.random() * (max + 1 - min); Зачем + 1 ? В чем вообще смысл этой
// конструкции
//   return Math.floor(rand);
// }
