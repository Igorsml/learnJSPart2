const promise = new Promise((resolve, reject) => {
  resolve("start");
});

promise
  .then(() => console.log(1), 1e3)
  .then(() => console.log(2), 1e3)
  .then(() => console.log(3), 1e3);

promise.then(() => console.log(4), 1e3).then(() => console.log(5), 1e3);

promise.then(() => console.log(6), 1e3);

// 1, 4, 6, 2, 5, 3
