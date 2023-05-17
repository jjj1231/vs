let click = document.querySelector(#btn_click);
click.onclick = function () {
    alert('알림 메시지가 표시됩니다')
}

let heading = document.querySelector('#heading');
heading.onclick = function onclick() {
    heading.style.color = "red";
}


// 변수 지정하는 키워드
// var 변수이름 = 변수값; / 재선언, 재할당 가능
// let 재선언 불가능, 재할당 가능

// 상수 지정하는 키워드
// const