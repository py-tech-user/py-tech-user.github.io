document.addEventListener('DOMContentLoaded', function() {
  const wishlist = [];
  const wishlistItemsContainer = document.getElementById('wishlist-items');
  const totalPriceElement = document.getElementById('total-price');
  let totalPrice = 0;

  document.querySelectorAll('.wishlist-button').forEach(button => {
      button.addEventListener('click', function() {
          const productId = button.getAttribute('data-id');
          const productName = button.getAttribute('data-name');
          const productPrice = parseFloat(button.getAttribute('data-price'));

          // Création de l'élément de la wishlist
          const wishlistItem = document.createElement('li');
          wishlistItem.classList.add('wishlist-item');
          wishlistItem.setAttribute('data-id', productId);
          wishlistItem.innerHTML = `
              <span>${productName} - ${productPrice.toFixed(2)} €</span>
              <button class="remove-button">Supprimer</button>
          `;
          const wishlistItemsContainer = document.getElementById('wishlist-items');
          wishlistItemsContainer.appendChild(wishlistItem);
          

          // Mise à jour du total
          totalPrice += productPrice;
          totalPriceElement.textContent = `Total: ${totalPrice.toFixed(2)} €`;

          // Écouteur d'événement pour supprimer l'article de la wishlist
          wishlistItem.querySelector('.remove-button').addEventListener('click', function() {
              wishlistItemsContainer.removeChild(wishlistItem);
              totalPrice -= productPrice;
              totalPriceElement.textContent = `Total: ${totalPrice.toFixed(2)} €`;
          });
      });
  });
});
