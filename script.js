let buttonLeft = document.querySelector('#buttonLeft');
let buttonRight = document.querySelector('#buttonRight');
let position = 0;
let imgArray = ['img1.jpeg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg',
'img10.jpg','img11.jpg','img12.jpg'];
let div = document.querySelector('.photo');

//function for load the image
function load () {
     for (let i = 1; i < imgArray.length; i++) {
         //create a div for stock the images
        div.style.backgroundImage = "url('/img" +i+ ".jpg')";
    }
}

buttonLeft.addEventListener('click', function (){
    if (position > imgArray.length - 1){
        position = 0;
        div.style.transition = "all 0.5s ease";
    }
});

buttonRight.addEventListener('click', function (){
    for (let i = 0; i < imgArray.length; i++) {
        if (i <= imgArray.length) {
            div.style.backgroundImage = "url('/img"+ imgArray[i].length +".jpg')";
            i++;
            div.style.transition = "all 0.5s ease";
        }
        else if (i === imgArray[i].length) {
            div.style.backgroundImage = "url('/img"+ imgArray[+i].length +".jpg')";
            i++;
            div.style.transition = "all 0.5s ease";
        }
    }
})

load ();