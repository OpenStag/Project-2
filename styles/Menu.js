// Category tab switching
const categoryBtns = document.querySelectorAll('.category-btn');
const menuCards = document.querySelectorAll('.menu-card');

categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.getAttribute('data-category');
    menuCards.forEach(card => {
      if (card.getAttribute('data-category') === cat) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Toast notification for Add to Cart
const toast = document.getElementById('toast');
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 1800);
}

function attachCartListeners() {
  document.querySelectorAll('.add-cart-btn').forEach(btn => {
    btn.onclick = () => {
      const item = btn.closest('.menu-card').querySelector('h3').textContent;
      showToast(`${item} added to cart!`);
    };
  });
}
attachCartListeners(); 