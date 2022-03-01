
//hello button from pill shape to circle and photo reveal
$("#hello").on("click", function(){
    $(".pill").toggleClass("to-circle");
    $('.kelly-oregon').toggleClass("show-photo")
});

//click on #hamburger image and add class menu open to menu
$('#hamburger').on('click', ()=>{
    $('.menu').addClass('menu-open')
});
//click X and remove class from menu/close it
$('#menu-close').on('click', ()=>{
    $('.menu').removeClass('menu-open')
})

//close aside menu if contact is clicked
$('.links').on('click', ()=>{
    $('.menu').removeClass('menu-open')
})

//resume/experience modal
const $openButton = $('#open-resume');
const $modal = $('#resume-modal');
const $closeButton = $('#modal-close');

const openModal = () => {
    $modal.css('display', 'block');
}

const closeModal = () => {
    $modal.css('display', 'none');
}

$openButton.on('click', openModal)
$closeButton.on('click', closeModal)
$('#modal-close-top').on('click',closeModal)

//homepage pizza "accordion" for mobile
$("#pizza-one").on("click", ()=>{
    $("#pizza-one-div").slideToggle();
    $("#pizza-two-div").slideUp();
    $("#pizza-three-div").slideUp();
    
});
$("#pizza-two").on("click", ()=>{
    $("#pizza-two-div").slideToggle();
    $("#pizza-one-div").slideUp();
    $("#pizza-three-div").slideUp();
  
});
$("#pizza-three").on("click", ()=>{
    $("#pizza-three-div").slideToggle();
    $("#pizza-one-div").slideUp();
    $("#pizza-two-div").slideUp();
    
});

//homepage pizza "accordion" for browser
$("#b-pizza-one").on("click", ()=>{
    $("#b-pizza-one-div").slideToggle();
    $("#b-pizza-two-div").slideUp();
    $("#b-pizza-three-div").slideUp();
    
});
$("#b-pizza-two").on("click", ()=>{
    $("#b-pizza-two-div").slideToggle();
    $("#b-pizza-one-div").slideUp();
    $("#b-pizza-three-div").slideUp();
  
});
$("#b-pizza-three").on("click", ()=>{
    $("#b-pizza-three-div").slideToggle();
    $("#b-pizza-one-div").slideUp();
    $("#b-pizza-two-div").slideUp();
    
});
