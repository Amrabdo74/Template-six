let imgmain = document.querySelector(".content img");
let imgone = document.querySelector(".one img");
let imgtwo = document.querySelector(".two img");
let imgthere = document.querySelector(".there img");

imgone.onclick = function(){
    imgmain.src = imgone.src
}

imgtwo.onclick = function(){
    imgmain.src = imgtwo.src
}

imgthere.onclick = function(){
    imgmain.src = imgthere.src
}

let hambur = document.querySelector(".hambur img");
let nav = document.querySelector(".list");
let exit = document.querySelector(".list img");
hambur.onclick = function(){
    nav.classList.toggle("nav-bar");
    nav.classList.remove("hidde");

}
exit.onclick = function(){
    nav.classList.toggle("nav-bar");
    nav.classList.add("hidde");


}