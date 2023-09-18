const promise = new Promise((resolve, reject) => {
  resolve("start");
});

promise
  .then(() => console.log(1), 1000)
  .then(() => console.log(2), 1600)
  .then(() => console.log(3));

promise.then(() => console.log(4), 1200).then(() => console.log(5));

promise.then(() => console.log(6), 1400);

// 1, 4, 6, 2, 5, 3
