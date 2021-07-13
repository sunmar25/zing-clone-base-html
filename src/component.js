const switchChecked = document.getElementById('switch-checked');
const switchBtn = document.getElementById('switch-btn');
const imageSlides = document.getElementsByClassName('image-slides');

let index = 2;
let displayNone = 0;
let key = false;
let order =0;
//take width for content middle, right
window.addEventListener('load', function () {
    const bottomFixedHeight = document.getElementsByClassName('fixed-bottom');
    const setRightHeight = document.getElementsByClassName('right');
    const setMiddleHeight = document.getElementsByClassName('middle');
    let zx = bottomFixedHeight[0].offsetHeight;
    setRightHeight[0].style.height = String(window.innerHeight - zx) + "px";
    setMiddleHeight[0].style.height = String(window.innerHeight -zx) + "px";

    // slide first load
    for (let i = 0; i < index; i++) {
        imageSlides[i].style.display = "block";
        imageSlides[i].style.order = order;
        order++;
    }

})
window.addEventListener('resize',function(){
    const bottomFixedHeight = document.getElementsByClassName('fixed-bottom');
    const setRightHeight = document.getElementsByClassName('right');
    const setMiddleHeight = document.getElementsByClassName('middle');
    let zx = bottomFixedHeight[0].offsetHeight;
    setRightHeight[0].style.height = String(window.innerHeight - zx) + "px";
    setMiddleHeight[0].style.height = String(window.innerHeight -zx) + "px";
});

function carousel() {
    if (key) {
        imageSlides[displayNone].style.display = "none";
        displayNone++;
        if (displayNone == imageSlides.length) {
            displayNone = 0;
        }
    }

    imageSlides[index].style.display = "block";
    imageSlides[index].style.order = order;
    order++;
    if(order == 10000){
        order =0;
    }
    index++;
    if (index == imageSlides.length) {
        index = 0;
    }
    key = true;
    setTimeout(carousel, 2000);
}
carousel();
//switch button change text
switchBtn.addEventListener('click', () => {
    if (switchChecked.checked) {
        switchBtn.setAttribute('data-content', 'Danh sách phát')
    } else {
        switchBtn.setAttribute('data-content', 'Nghe gần đây')
    }
});

