const promise = new Promise((resolve, reject) => {
  resolve("start");
});

promise
  .then(() => console.log(1))
  .then(() => setTimeout(() => console.log(2), 1600))
  .then(() => console.log(3));

promise.then(() => console.log(4)).then(() => console.log(5));

promise.then(() => console.log(6));

// 1, 4, 6, 2, 5, 3
