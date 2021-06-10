let random = require('./1-random.js')

/**
 * Generate string of random characters
 * Use Math.random() and Math.floor()
 * See documentation at MDN
 * @param  {number} length
 * @param  {string} possible
 * @returns {string}
 *
 */


const generateKey = (length, possible) => {
  let iterator,
      result;
  let characters = possible.split('');
  for (let i = 0; i < characters.length; i++) {
    iterator = random.random(length);
    (result === undefined)?
    result = characters[iterator] :
    result += characters[iterator];


  }
  return result;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
module.exports = { generateKey };
