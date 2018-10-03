

var pics = [
    "imgs/cat1.jpg",
    "imgs/cat2.jpg",
    "imgs/cat3.jpg",
    "imgs/cat4.jpg",
    "imgs/cat5.jpg",
    "imgs/cat6.jpg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
btn.addEventListener("click", function(){
    if(counter === 6){
        counter = 0;
    }
    img.src = pics[counter];
    counter = counter + 1;
});
