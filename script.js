 let buttonLeft = document.querySelector('#buttonLeft');
 let buttonRight = document.querySelector('#buttonRight');
let imgArray = ['img1','img2','img3','img4','img5','img6','img7','img8','img9',
'img10','img11','img12'];
let div = document.querySelector('.photo');


//function for load the image
function load () {
     for (let i = 0; i < imgArray.length; i++) {
         //create a div for stock the images
        div.style.backgroundImage = "url('/" + imgArray[i] + ".jpg')";
    }
}

 buttonLeft.addEventListener('click', function (){

 });

 buttonRight.addEventListener('click', function (){
     for (let i = 0; i < imgArray[i].length; i++) {
         if (i < imgArray.length) {
             div.style.backgroundImage = "url('/"+ imgArray[i] +".jpg')";
             div.style.transition = "all 0.5s ease";
             console.log("gkbj");
             i++;
         }
         else if (i === imgArray.length) {
             console.log("nbvc");
         }
     }
 });

setInterval(function (){
  //boucle for
},1000);