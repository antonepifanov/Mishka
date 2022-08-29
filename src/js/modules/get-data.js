(() => {
  const DATA_URL = "http://localhost:3000/products";

  fetch(DATA_URL)
    .then(res => res.json())
    .then(data => console.log(data));
})();
