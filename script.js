const $imgFull = $('.preview');
const $modalContainer = $('.modal-container');
const $modal = $('.modal');
const $img2 = $('.img2');
const $img3 = $('.img3');
const $img4 = $('.img4');
const $img5 = $('.img5');
const $img6 = $('.img6');
const $img7 = $('.img7');
const $img8 = $('.img8');
const $img9 = $('.img9');
const $img10 = $('.img10');
const $img11 = $('.img11');
const $img12 = $('.img12');
const $img13 = $('.img13');
const $img14 = $('.img14');
const $img15 = $('.img15');
const $img16 = $('.img16');
const $img17 = $('.img17');
const $img18 = $('.img18');
const $img19 = $('.img19');
const $img20 = $('.img20');
const $img21 = $('.img21');
const $img22 = $('.img22');

$imgFull.click(function(){
    $modalContainer.addClass('show');
    $('.modal').append("<button class='x' style='background-color:red'>x</button>");
});

$modalContainer.click(function(){
    $modalContainer.removeClass('show');
    $('.modal').empty();
});

$img2.click(function(){
    $('.modal').append("<img src='images/image02.jpg' width='650'>");
});

$img3.click(function(){
    $('.modal').append("<img src='images/image03.jpg' width='650'>");
    
});

$img4.click(function(){
    $('.modal').append("<img src='images/image04.jpg' width='650'>");
    
});

$img5.click(function(){
    $('.modal').append("<img src='images/image05.jpg' width='650'>");
    
});

$img6.click(function(){
    $('.modal').append("<img src='images/image06.jpg' width='650'>");
    
});

$img7.click(function(){
    $('.modal').append("<img src='images/image07.jpg' width='650'>");
    
});

$img8.click(function(){
    $('.modal').append("<img src='images/image08.jpg' width='500'>");
    
});

$img9.click(function(){
    $('.modal').append("<img src='images/image09.jpg' width='650'>");
    
});

$img10.click(function(){
    $('.modal').append("<img src='images/image10.jpg' width='650'>");
    
});

$img11.click(function(){
    $('.modal').append("<img src='images/image11.jpg' width='650'>");
    
});

$img12.click(function(){
    $('.modal').append("<img src='images/image12.jpg' width='650'>");
    
});

$img13.click(function(){
    $('.modal').append("<img src='images/image13.jpg' width='650'>");
    $('.modal').append("<p>New York City</p>");
});

$img14.click(function(){
    $('.modal').append("<img src='images/image14.jpg' width='650'>");
    $('.modal').append("<p>New York City</p>");
});

$img15.click(function(){
    $('.modal').append("<img src='images/image15.jpg' width='650'>");
    $('.modal').append("<p>New York City</p>");
});

$img16.click(function(){
    $('.modal').append("<img src='images/image16.jpg' width='650'>");
    $('.modal').append("<p>New York City</p>");
});

$img17.click(function(){
    $('.modal').append("<img src='images/image17.jpg' width='650'>");
    $('.modal').append("<p>New York City</p>");
});

$img18.click(function(){
    $('.modal').append("<img src='images/image18.jpg' width='650'>");
    $('.modal').append("<p>New York City</p>");
});

$img19.click(function(){
    $('.modal').append("<img src='images/image19.jpg' width='650'>");
});

$img20.click(function(){
    $('.modal').append("<img src='images/image20.jpg' width='500'>");
});

$img21.click(function(){
    $('.modal').append("<img src='images/image21.jpg' width='650'>");
});

$img22.click(function(){
    $('.modal').append("<img src='images/image22.jpg' width='650'>");
});
