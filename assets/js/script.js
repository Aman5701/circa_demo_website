// ----------- Pre-Loader -----------
$(window).on('load', function() {
    $('#preloader').fadeOut('slow', function() {
      $(this).remove();
    });
  });


// ----------- Home Carousel -----------
$('.home-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// ----------- Navbar -----------
window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    // Toggles fixed class in navbar on scroll
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})


// ----------- Nav Buttons -----------
let menuBtn = document.querySelector('.menu-btn');
let searchBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector('.cartbtn');
let lightBtn = document.querySelector('.lightbtn');


// menu button
menuBtn.onclick = function(){
    // toggles active class in nav items on click
    document.getElementById("nav-items").classList.toggle('active');

    // changes icon on click
    if(document.getElementById("nav-items").classList.contains('active')){
        menuBtn.classList.remove("bx-menu");
        menuBtn.classList.add("bx-x");
    }
    else{
        menuBtn.classList.remove("bx-x");
        menuBtn.classList.add("bx-menu");
    }
}


// search button
searchBtn.onclick = function(){
    // toggles active class in search form on click
    document.getElementById("search-form").classList.toggle('active');

    // changes icon on click
    if(document.getElementById("search-form").classList.contains('active')){
        searchBtn.classList.remove("bx-search-alt-2");
        searchBtn.classList.add("bx-x");
    }
    else{
        searchBtn.classList.remove("bx-x");
        searchBtn.classList.add("bx-search-alt-2");
    }
}

// cart button
cartBtn.onclick = function(){
    // toggles active class in cart on click
    document.getElementById("cart").classList.toggle('active');

    // changes icon on click
    if(document.getElementById("cart").classList.contains('active')){
        cartBtn.classList.remove("bx-cart");
        cartBtn.classList.add("bx-x");
    }
    else{
        cartBtn.classList.remove("bx-x");
        cartBtn.classList.add("bx-cart");
    }
}

// light button
lightBtn.onclick = function(){
    // toggles light mode class to body on click
    document.body.classList.toggle('light-mode');

    // changes icon on click
    if(document.body.classList.contains('light-mode')){
        lightBtn.classList.remove("bx-sun");
        lightBtn.classList.add("bx-moon");
    }
    else{
        lightBtn.classList.remove("bx-moon");
        lightBtn.classList.add("bx-sun");
    }
}


// ----------- Menu Section -----------
let menuTabs = document.querySelector('.menu-tabs');
menuTabs.addEventListener('click', function(e){
    if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){

        // gets data attribute
        const target = e.target.getAttribute("data-target");

        // removes active class from active tab 
        menuTabs.querySelector('.active').classList.remove('active');

        // adds active class from clicked tab 
        e.target.classList.add('active');

        let menuSection = document.querySelector(".menu-section");
        // removes show class from active tab content
        menuSection.querySelector(".menu-tab-content.show").classList.remove("show");
        // adds show class to clicked tab content
        menuSection.querySelector(target).classList.add("show");
    }
    else{
        return //returns nothing
    }
})


// ----------- Event Carousel -----------
$('.events-carousel').owlCarousel({
    loop:true,
    margin:30,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:2
        }
    }
})


// ----------- Team Carousel -----------
$('.team-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// ----------- Review Carousel -----------
$('.review-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// ----------- Blog Carousel -----------
$('.blog-carousel').owlCarousel({
    loop:true,
    margin:5,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})