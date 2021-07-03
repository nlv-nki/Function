function curry(f) { // curry(f) выполняет каррирование
  //console.log(f);
  return function(a) {
//  console.log(a, 'a arg');


    return function(b) {
      return f(a, b);
    };

  };
}


curry2 = f => a => b => f(a, b)


// использование F
function sum(a, b) {
  return a + b;
}

let carriedSum = curry(sum);
let carriedSum2 = curry2(sum);
let carriedSum3 = curry2();
console.log(carriedSum3),666;
console.log(carriedSum3(1)),666;

//console.log(carriedSum)
//let carried2 =


// console.log( carriedSum(1)(2) ); // 3
// console.log( carriedSum2(1)(2) ); // 3
// console.log( carriedSum2(1) ); // 3

// let param = carriedSum2(2)
// console.log(param(2));





