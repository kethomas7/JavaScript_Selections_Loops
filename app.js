console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ", i);
  } else if (i % 3 == 0) {
    console.log("FIZZ", i);
  } else if (i % 5 == 0) {
    console.log("BUZZ", i);
  }
}
// Exercise 3 Section
console.log("EXERCISE 3/Exercise 1 WHILE LOOP:\n==========\n");

let number = 1;

while (number <= 100) {
  if (number % 2 != 0) {
    console.log(number);
  }
  number++;
}

console.log("EXERCISE 3/Exercise 1 DO WHILE LOOP:\n==========\n");

number = 1;

do {
  if (number % 2 != 0) {
    console.log(number);
  }
  number++;
} while (number <= 100);

console.log("EXERCISE 3/Exercise 2 DO WHILE LOOP:\n==========\n");

let i = 1;
do {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ", i);
  } else if (i % 3 == 0) {
    console.log("FIZZ", i);
  } else if (i % 5 == 0) {
    console.log("BUZZ", i);
  }
  i++;
} while (i <= 100);

console.log("EXERCISE 3/Exercise 2 WHILE LOOP:\n==========\n");

i = 1;
while (i <= 100) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ", i);
  } else if (i % 3 == 0) {
    console.log("FIZZ", i);
  } else if (i % 5 == 0) {
    console.log("BUZZ", i);
  }
  i++;
}
