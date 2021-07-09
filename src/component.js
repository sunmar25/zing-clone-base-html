const bottomFixedHeight = document.getElementsByClassName('fixed-bottom');
const setRightHeight = document.getElementsByClassName('right');


window.addEventListener('load', function() {
    let zx = bottomFixedHeight[0].offsetHeight;
    setRightHeight[0].style.height = String(window.innerHeight - zx) + "px";
})