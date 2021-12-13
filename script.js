let buttonLeft = document.querySelector('#buttonLeft');
let buttonRight = document.querySelector('#buttonRight');
let imgArray = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9',
    'img10', 'img11', 'img12'];
let div = document.querySelector('.photo');


//function for load the image
function load() {
    for (let i = 0; i < imgArray.length; i++) {
        //create a div for stock the images
        div.style.backgroundImage = "url('/" + imgArray[i] + ".jpg')";
    }
}

let j = 0;
load();
div.style.backgroundImage = "url('/" + imgArray[j] + ".jpg')";

buttonLeft.addEventListener('click', function (){
    j--;
    load();
    div.style.backgroundImage = "url('/" + imgArray[j] + ".jpg')";
    console.log(j)
    if (j === -1) {
        j = imgArray.length -1;
        load();
        div.style.backgroundImage = "url('/" + imgArray[j] + ".jpg')";
    }
});



buttonRight.addEventListener('click', function (){
    j++;
    load();
    div.style.backgroundImage = "url('/" + imgArray[j] + ".jpg')";

    if (j === imgArray.length - 1) {
        j = -1;
    }
});

setInterval(function () {
    load();
    j++;
    div.style.backgroundImage = "url('/" + imgArray[j] + ".jpg')";
    if (j === imgArray.length - 1) {
        j = 0;
    }
}, 5000);