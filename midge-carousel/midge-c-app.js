// console.log("corgi carousel connected to app.js!");
$(() => {

    let currentImgIndex = 0;
    let numOfImages = $('.carousel-images').children().length-1;
    let imageToAdjust = $('.carousel-images').children().eq(currentImgIndex);
$('.next').on('click', () => {
    //hide current image
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');
   
    //go to next image, unless at end of array > then go back to beginning
    if(currentImgIndex < numOfImages){
        currentImgIndex++
    }else{
        currentImgIndex = 0
    }
     
    //"unhide"/display: block instead of display:none on the next image (currentImgIndex)
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
});


$('.previous').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none');

    if(currentImgIndex > 0){
        currentImgIndex -- 
    }else{
        currentImgIndex = numOfImages;
    }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block');
});




});

