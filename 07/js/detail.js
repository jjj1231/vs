// 상세 설명 보기 / 닫기 btn 요소 불러오기
// 상세 설명이 적혀 있는 div 요소 불러오기


const bttn = document.querySelector("#view");
const note = document.querySelector("#detail");


// 버튼을 클릭했을 때 -> 상세 설명 div 내용 보였다가 다시 접히게
bttn.onclick = () => {
    detail.classList.toggle("hidden")
    // hidden이 있을 경우 지워주고, 없을 경우 만들어 줌. 
}