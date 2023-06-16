

// const carousel = document.querySelector(".carousel");
// firstImg = carousel.querySelectorAll("img")[0];
// arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false,isdragging = false, prevPageX, prevScrollLeft, positionDiff;



// const showHideIcons = () =>{
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
//     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft ==  scrollWidth ? "none" : "block";
// }

// arrowIcons.forEach(icon => {
//     icon.addEventListener('click', () =>{
//         let firstImgWidth = firstImg.clientWidth + 14;
//         carousel.scrollLeft += icon.id == "left" ?  -firstImgWidth : firstImgWidth;
//         showHideIcons();
//         setTimeout(() => showHideIcons(), 60);
//     });
// });


// const autoSlide  = () => {

//     if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

//         positionDiff = Math.abs(positionDiff);
//         let firstImgWidth = firstImg.clientWidth + 14;
//         let valDifference = firstImgWidth - positionDiff;

//         if(carousel.scrollLeft > prevScrollLeft){
//             return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
//         }
//         carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// }


// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX || e.touched[0].pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) =>{
//     if(!isDragStart)
//     e.preventDefault();
//     isdragging =true;
//     carousel.classList.add("dragging");
//     positionDiff = (e.pageX || e.touches[0].pageX )- prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }

// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");

//     if(!isdragging) return;
//     isdragging = false;
//     autoSlide();
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchStart", dragStart);

// carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);

// carousel.addEventListener("mouseup", dragStop);
// carousel.addEventListener("mouseleave", dragStop);
// carousel.addEventListener("touched", dragStop);








//----- IMAGE SLIDER ----
let slideImg = document.getElementById('slideImg');

let images = new Array(
      "images/image-1.jpg",
      "images/image-2.jpg",
      "images/image-3.jpg",
      "images/image-4.jpg",
      "images/image-5.jpg",
      "images/image-6.jpg",
);

let len = images.length;

let i = 0;

function slider(){
    if(i > len-1){
        i = 0;
    }

    slideImg.src = images[i]; i++;
    setTimeout('slider()', 3000);
}


// ---- MENU BAR ------


let show = document.getElementById("nav-links")

  
function showMenu(){
   show.style.right = "0";
   console.log('clicked')
}

function closeMenu(){
   show.style.right = "-200px";
   console.log('clicked me')
}


