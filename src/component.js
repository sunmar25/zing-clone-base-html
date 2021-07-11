const bottomFixedHeight = document.getElementsByClassName('fixed-bottom');
const setRightHeight = document.getElementsByClassName('right');

const switchChecked = document.getElementById('switch-checked');
const switchBtn = document.getElementById('switch-btn');

//take width for content right
window.addEventListener('load', function() {
    let zx = bottomFixedHeight[0].offsetHeight;
    setRightHeight[0].style.height = String(window.innerHeight - zx) + "px";
})
//switch button change text
switchBtn.addEventListener('click',()=>{
    //when click, state checked is false
    if(!switchChecked.checked){
        switchBtn.setAttribute('data-content','Nghe gần đây')
    }else{
        switchBtn.setAttribute('data-content','Danh sách phát')
    }
});

