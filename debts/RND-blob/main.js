axios.get("https://loremflickr.com/640/480/animals").then((response) => {
  console.log(response.data);
});

const price = document.querySelector('.price');
console.log('price:', price);

if (price.includes('₸')) {
  {{product.variants.first.price | times: 1.1 | Round: 0}}
}