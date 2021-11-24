let cartItem = document.getElementById('cartItem');
let hide = document.querySelector('.hide');

cartItem.onclick = showReceipt;

function showReceipt() {
  cartItem.classList.add('active');
  hide.style.display = 'flex';
}

console.log(cartItem.length);
