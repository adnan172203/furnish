// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });

//   $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })


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
