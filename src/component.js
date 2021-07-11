const switchChecked = document.getElementById('switch-checked');
const switchBtn = document.getElementById('switch-btn');

//take width for content right
window.addEventListener('load', function () {
    const bottomFixedHeight = document.getElementsByClassName('fixed-bottom');
    const setRightHeight = document.getElementsByClassName('right');
    let zx = bottomFixedHeight[0].offsetHeight;
    setRightHeight[0].style.height = String(window.innerHeight - zx) + "px";
})
//switch button change text
switchBtn.addEventListener('click', () => {
    if (switchChecked.checked) {
        switchBtn.setAttribute('data-content', 'Danh sách phát')
    } else {
        switchBtn.setAttribute('data-content', 'Nghe gần đây')
    }
});

