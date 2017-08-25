/*    modal-content    */

var btnOpen = document.querySelector(".open-modal");
var modalContent = document.querySelector(".modal-content");
var btnClose = modalContent.querySelector(".btn-cancel");
var inputName = modalContent.querySelector("[name=name]")

btnOpen.addEventListener("click", function(event){
   event.preventDefault(); 
   modalContent.classList.add("modal-content-show");
   inputName.focus();
});

btnClose.addEventListener("click", function(event){
   event.preventDefault(); 
   modalContent.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event){
   if (event.keyCode == 27){
       if (modalContent.classList.contains("modal-content-show")){
           modalContent.classList.remove("modal-content-show");
       }
   }
});


/*    promo-slider    */

var controlLeft = document.querySelector(".slide-control-left");
var controlRight = document.querySelector(".slide-control-right");
var promoSlide = document.querySelectorAll(".promo-slide");

controlLeft.addEventListener("click", function(event){
    event.preventDefault();
    promoSlide[0, 1].classList.toggle("active");
});

controlRight.addEventListener("click", function(event){
    event.preventDefault();
    promoSlide[0, 1].classList.toggle("active");
});


/*    services-slider    */

var slideLink = document.querySelectorAll(".slider-menu a");
var slide = document.querySelectorAll(".slider-item");

slideLink[0].addEventListener("click", function(event){
    event.preventDefault();
    slideLink[0].classList.add("current");
    slideLink[1].classList.remove("current");
    slideLink[2].classList.remove("current");
    slide[0].classList.add("current");
    slide[1].classList.remove("current");
    slide[2].classList.remove("current");
});

slideLink[1].addEventListener("click", function(event){
    event.preventDefault();
    slideLink[1].classList.add("current");
    slideLink[2].classList.remove("current");
    slideLink[0].classList.remove("current");
    slide[1].classList.add("current");
    slide[2].classList.remove("current");
    slide[0].classList.remove("current");
});

slideLink[2].addEventListener("click", function(event){
    event.preventDefault();
    slideLink[2].classList.add("current");
    slideLink[0].classList.remove("current");
    slideLink[1].classList.remove("current");
    slide[2].classList.add("current");
    slide[0].classList.remove("current");
    slide[1].classList.remove("current");
});