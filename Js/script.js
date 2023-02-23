let searchForm=document.querySelector('.form-search');

document.querySelector('#search-btn').onclick =()=>{
    searchForm.classList.toggle('active')
    navbar.classList.remove('active')
    loginCart.classList.remove('active')
    shoppingCart.classList.remove('active')
}


let shoppingCart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =()=>{
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    navbar.classList.remove('active')
    loginCart.classList.remove('active')
    
}


let loginCart=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =()=>{
    loginCart.classList.toggle('active')
    searchForm.classList.remove('active')
    navbar.classList.remove('active')
    shoppingCart.classList.remove('active')
}

let navbar=document.querySelector('navbar');

document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    loginCart.classList.remove('active')
    shoppingCart.classList.remove('active')
}

window.onscroll =()=>{
    searchForm.classList.remove('active')
   
    loginCart.classList.remove('active')
    shoppingCart.classList.remove('active')
}


var swiper = new Swiper(".product-slider", {
    loop: true, 
    spaceBetween:20,
   autoplay:{
    delay:7500,
    disableOnInteraction:false
   },
   centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });