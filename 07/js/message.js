// 1. 버튼 요소 가지고 오기
const bttn = document.querySelector('#bttn');
console.log(bttn);


// 2. noti-box 요소 가지고 오기
const notiBox = document.querySelector('#noti_box');
console.log(notiBox);

/*
// 버튼을 클릭했을 때, div 요소(class 명이 noti)를 만들고,noti_box 자식 요소로 추가
// .noti(div요소) -> 알림창 내용을 표시
bttn.addEventListener('click', () => {
    //bttn에 대한 이벤트 리스너를 생성
    //bttn이 클릭됐을 때, 함수 실행 
    const noti = document.createElement('div');
    //div 요소 생성
    noti.classList.add('noti');
    //생성한 div요소(noti)한테 class noti를 부여
    noti.innerText = '알림 내용이 표시됩니다.';
    //noti 요소 안에 텍스트 추가
    notiBox.appendChild(noti);
    //notiBox의 자식 요소로 noti를 연결

    setTimeout(() => {
        noti.remove();

    }, 2000);
    //2초 기준으로 생성된 noti 요소를 지우겠다
});
*/

bttn.addEventListener('click', () => {
    //bttn에 대한 이벤트 리스너를 생성
    //bttn이 클릭됐을 때, 함수 실행 
    const noti = document.createElement('div');
    //div 요소 생성
    noti.classList.add('noti');
    //생성한 div요소(noti)한테 class noti를 부여
    noti.innerHTML = '알림 내용이 표시됩니다.<span>&cross;</span>';
    //noti 요소 안에 텍스트 추가

    const message_btn = document.createElement('span');
    message_btn.innerHTML = '&cross;';
    noti.appendChild(message_btn);

    message_btn.onclick = () => {
        noti.remove();
    }

    notiBox.appendChild(noti);
    //notiBox의 자식 요소로 noti를 연결

    setTimeout(() => {
        noti.remove();

    }, 2000);
    //2초 기준으로 생성된 noti 요소를 지우겠다
});