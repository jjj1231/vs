const displayDate = document.querySelector('#today');

const today = new Date();
console.log(today);
console.log(today.toDateString()); //날짜 정보만 문자열로 반환
// 날짜 정보만 문자열로 반환

// 날짜 정보 (연도, 월, 일, 요일로 나눠서 변수 저장)
const year = today.getFullYear(); //연도
const month = today.getMonth() + 1; //월(0~11) + 1
const date = today.getDate(); //날짜
const day1 = today.getDay(); // 요일(0~6)

// 요일명 나타내기 
let day2 = " "; //요일명을 저장할 변수

// 반환된 요일(숫자)을 체크해서 요일명 지정
switch (day1) {
    case 0:
        day2 = "일요일"; break;
    case 1:
        day2 = "월요일"; break;
    case 2:
        day2 = "화요일"; break;
    case 3:
        day2 = "수요일"; break;
    case 4:
        day2 = "목요일"; break;
    case 5:
        day2 = "금요일"; break;
    case 6:
        day2 = "토요일"; break;

}

// 계산된 날짜 화면에 표시
// 년 year 월 month 일 date 요일 day2
displayDate.innerHTML = `${year}년 ${month}월 ${date}일
<span style="font-weight:bold"> ${day2}</span>`;

// 현재 시간 표시
console.log(today.toTimeString()); //시간 정보만 출력

// 시간 표시할 html 요소 선택
const displayTime = document.querySelector('#clock');

// 시간 정보만 변수에 저장(시, 분, 초)
let clock = () => {
    let current = new Date();
    let hrs = current.getHours(); //시
    let mins = current.getMinutes(); //분
    let secs = current.getSeconds(); //초

    // 12시간제 (24시간 형식 -> 12시간제 표시)
    /* hrs가 0이면 hrs값을 12로 변경, hrs가 0이 아니라면, hrs값 -12 (조건식 : hrs가 12보다 클 경우), am > pm */
    let period = "AM"
    // if (hrs === 0) {
    //     hrs = 12;
    // } else if (hrs > 12) {
    //     hrs = hrs - 12; // hrs -= 12
    //     period = "PM";


    // 3항 연산자로 할때
    hrs = (hrs === 0 ? 12 : (hrs > 12 ? hrs - 12 : hrs));
    period = (hrs < 12 ? "AM" : "PM");

    // 시간, 분, 초가 10보다 작으면 앞에 0을 붙여서 두자리 숫자로 만드는 삼항연산자
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;


    displayTime.innerHTML = `${period} ${hrs} : ${mins} : ${secs}`;
}

// 일정 시간 간격으로 지정된 함수를 반복해서 실행하겠다. 
// setInterval(function, milliseconds);
setInterval(clock, 1000);