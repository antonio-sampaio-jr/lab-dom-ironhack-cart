// ITERATION 1
function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const total=(Number(price)*Number(quantity));
  product.querySelector('.subtotal span').innerHTML = total;
  return total;
}

function calculateAll() {
  const products = document.getElementsByClassName('product');
  let sumTotal = 0;
  let sum = new Array();
  for (let i = 0; i < products.length; i++)
  {
       sum[i] = updateSubtotal(products[i]);
       sumTotal += sum[i];
  }     
  document.getElementById('total-value').querySelector('span').innerHTML = sumTotal;
}  
// somente qdo carrega  
window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
});

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
