function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  let i = -1;

  return function () {
    i++;
    return list[i]
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie()); // 5
console.log(rollLoadedDie()); // 4
console.log(rollLoadedDie()); // 6

// Exercise 2 - Countdown

var countdownGenerator = function (x) {
  let count = x;

  return function () {
    if (count > 0) {
      console.log(`T-minus ${count}...`);
      count--;
      return;
    } else if (count === 0) {
      console.log(`Blast Off!`);
      count--;
      return;
    }
    console.log(`Rockets already gone, bub!`);
  }
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!