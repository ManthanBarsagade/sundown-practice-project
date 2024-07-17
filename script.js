const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page5Animation() {
    var elemContainers = document.querySelector("#elem-containers");
    var fixedImages = document.querySelector("#fixed-images");
    elemContainers.addEventListener("mouseenter", function () {
        fixedImages.style.display = "block";
    })

    elemContainers.addEventListener("mouseleave", function () {
        fixedImages.style.display = "none";
    })

    var elems = document.querySelectorAll(".elements");
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var dataImages = ele.getAttribute("data-image");
            fixedImages.style.backgroundImage = `url(${dataImages})`
        })
    })
}

function changingEle(changELem) {
    switch (changELem) {
        case 'first':
            document.querySelector(".innerTextOne").style.display = 'block';
            document.querySelector(".innerTextTwo").style.display = 'none';
            document.querySelector(".innerTextThree").style.display = 'none';
            document.querySelector(".imageOne").style.display = 'block';
            document.querySelector(".imageTwo").style.display = 'none';
            document.querySelector(".imageThree").style.display = 'none';
            document.querySelector(".redLine").style.top = '0%';
            document.querySelector(".tagOne").style.color = "rgb(239, 234, 227)";
            document.querySelector(".tagTwo").style.color = 'rgb(88, 88, 88)';
            document.querySelector(".tagThree").style.color = 'rgb(88, 88, 88)';
            break;
        case 'second':
            document.querySelector(".innerTextOne").style.display = 'none';
            document.querySelector(".innerTextTwo").style.display = 'block';
            document.querySelector(".innerTextThree").style.display = 'none';
            document.querySelector(".imageOne").style.display = 'none';
            document.querySelector(".imageTwo").style.display = 'block';
            document.querySelector(".imageThree").style.display = 'none';
            document.querySelector(".redLine").style.top = '30%';
            document.querySelector(".tagOne").style.color = 'rgb(88, 88, 88)';
            document.querySelector(".tagTwo").style.color = "rgb(239, 234, 227)";
            document.querySelector(".tagThree").style.color = 'rgb(88, 88, 88)';
            break;

        case 'three':
            document.querySelector(".innerTextOne").style.display = 'none';
            document.querySelector(".innerTextTwo").style.display = 'none';
            document.querySelector(".innerTextThree").style.display = 'block';
            document.querySelector(".imageOne").style.display = 'none';
            document.querySelector(".imageTwo").style.display = 'none';
            document.querySelector(".imageThree").style.display = 'block';
            document.querySelector(".redLine").style.top = '67%';
            document.querySelector(".tagOne").style.color = 'rgb(88, 88, 88)';
            document.querySelector(".tagTwo").style.color = 'rgb(88, 88, 88)';
            document.querySelector(".tagThree").style.color = "rgb(239, 234, 227)";
            break;
        default:
            break;
    }

}

function handleClick(event) {
    event.preventDefault();
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}

swiperAnimation();
page5Animation();


var menu = document.querySelector("#menu");
var fullScreen = document.querySelector("#fullScreen");
var logo = document.querySelector(".logo");
var flag = 0;

function dropdown(){
    if (flag == 0) {
        fullScreen.style.top = 0;
        flag = 1;
        logo.style.opacity = "0";
    }else{
        fullScreen.style.top = "-120%";
        flag = 0
        logo.style.opacity = "1";
    }

}