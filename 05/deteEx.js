// html에서 각 요소를 선택, 현재 날짜를 나타내는 date 객체 생성

const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const bttn = document.querySelector("#bttn");

const current = document.querySelector(`#current`);
const resultDays = document.querySelector(`#days`);
const resultHours = document.querySelector(`#hours`);

const today = new Date(); //오늘 날짜
const year = today.getFullYear(); //연도
const month = today.getMonth() + 1; //월(0~11)+1 (월이 0부터 시작하기 때문에 지정할때 +1 )
const date = today.getDate(); //날짜
const day1 = today.getDay(); //요일(0~6)
const hours = today.getHours(); //시간
const mins = today.getMinutes(); //분

current.innerHTML = `${year}년 ${month}월 ${date}일 ${hours}시 ${mins} 분 현재`;

// 이벤트 핸들러 생성
bttn.addEventListener("click", () => { //() => {} : function(){} 동일
    // 입력 받은 생일(년, 월, 일) date 객체 저장 (사용자에게 입력 받을 경우, birthMonth는 -1)
    const birthDay = new Date(birthYear.value, birthMonth.value - 1, birthDate.value);
    alert(birthDay);

    let passed = today.getTime() - birthDay.getTime(); //밀리초 기준으로 계산을 해줌

    //일수 계산
    let passedDay = Math.floor(passed / (1000 * 60 * 60 * 24)); //밀리초 기준이기 때문에 일수 계산을 다시 해줌

    // 시간 수 계산 
    let passedHours = Math.floor(passed / (1000 * 60 * 60)); //math.floor : 소수점 내림, 정수만 표기

    // passedDay 값은 어제까지 흐른 날짜 수를 계산한 값
    // 만일, 오늘이 몇일 째인지 표시하려면 passedDays + 1로 계산해야 한다.
    resultDays.innerHTML = `날짜로는 ${passedDay} 일이 지났고,`;
    resultHours.innerHTML = `시간으로는  ${passedHours} 시간이 흘렀습니다.`;

    birthYear.value = ""; //입력하는 곳에 빈문자 열로 바꾸는 거 (사용자 편의)
    birthMonth.value = "";
    birthDate.value = "";
});