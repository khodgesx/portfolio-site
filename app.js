
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