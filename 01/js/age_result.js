const currentYear = 2023;  // 기준 연도
let birthYear; // 태어난 연도 - 사용자의 입력을 받음
let age; // 계산되어 나온 값 = 나이 

birthYear = prompt('태어난 연도를 입력하세요. (예 1990)', '');
age = currentYear - birthYear + 1;
console.log(currentYear + "년 기준" + birthYear + "년생의 나이는 " + age);
// 2023년 기준 0000년생의 나이는 00