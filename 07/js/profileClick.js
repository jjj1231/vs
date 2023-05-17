const pfImage = document.querySelector("#profile img"); //프로필 이미지를 선택자 기준으로 가져오기

console.log(pfImage);

pfImage.onclick = () => { pfImage.src = "imges/pf2.png" };


// 1. 이름이 적혀있는 부분을 변수에 담아야 하고 (값이 잘 들어왔는지 확인)

const userName = document.querySelector("#desc p");

// 2. click 이라는 이벤트가 발생했을 때, 함수를 실행할 건데,
// 함수 안에 명령문 `이름 : 짝궁 이름`으로 변경될 수 있게

userName.onclick = () => {
    userName.innerHTML = `이름 : 강효경`;
    userName.style.color = "blue";
};


// const title = document.getElementsByTagName("h1")[0];
// // 첫 번째 h1 요소를 선택하겠다.

// console.log(title);

// title.onclick = () => {
//     title.style.backgroundColor = "black";
//     title.style.color = "white";
// }

const title = document.querySelector("h1");
title.onclick = () => {
    title.classList.toggle("clicked");

}