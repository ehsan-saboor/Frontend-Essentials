let flag = 0;
slideshow(flag)  // we call number of array of classes in slideshow function

// with this function we add or substract on click function in html
function controller(x) {
    flag = flag + x;
    slideshow(flag)
}

// we call this function in the beginneing
function slideshow(num) {
    let slides = document.getElementsByClassName("item");

    // if num becomes = array last number, reverse num to the 0 
    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
    // if num becomes = -1 number, reverse num to the lenght of slides
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }
    for (let y of slides) {
        y.style.display = "none"
    }
    slides[num].style.display = "block";
}