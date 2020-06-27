(function () {
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
})();

//single product page tab

(function () {
  // tab content
  const tabItems = document.querySelectorAll('.tab-item');
  const tabContentItems = document.querySelectorAll('.tab-content-item');

  //select tab content item
  function selectItem(e) {
    removeBorder();
    removeShow();

    //Add border to current tab
    this.classList.add('tab-border');

    //grab content item from the  dom
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    //add show class
    tabContentItem.classList.add('show');
  }

  function removeBorder() {
    tabItems.forEach((item) => item.classList.remove('tab-border'));
  }

  function removeShow() {
    tabContentItems.forEach((item) => item.classList.remove('show'));
  }

  //Lister for  tab click
  tabItems.forEach((item) => item.addEventListener('click', selectItem));
})();

//minicart dropdown

(function () {
  const cartIcon = document.querySelector('.fa-shopping-cart');
  const headerDropdown = document.querySelector('.header-cart-dropdown');

  function showMinicart() {
    headerDropdown.classList.toggle('open');
  }

  cartIcon.addEventListener('click', showMinicart);
})();

//wishlist dropdown

(function(){
  const wishIcon = document.querySelector('.fa-heart');
  const wishDropdown = document.querySelector('.header-wishlist-dropdown');

  function showWishlist(){
    wishDropdown.classList.toggle('open-wishlist');
  }

  wishIcon.addEventListener('click', showWishlist);
})();


(function(){
  const burgerIcon = document.querySelector('.fa-bars');
  const mainHeader = document.querySelector('.main-header');

  function showMenu(){
    mainHeader.classList.toggle('show-menu');
  }

  burgerIcon.addEventListener('click', showMenu);
})();