$("#hello").on("click", function(){
    $(".pill").toggleClass("to-circle");
});

$('#hamburger').on('click', ()=>{
    $('.menu').addClass('menu-open')
});
$('#menu-close').on('click', ()=>{
    $('.menu').removeClass('menu-open')
})