// 라디오 접근

const radio_opt = document.testForm.subject;
// console.log(radio_opt[2].value);

// // 체크박스 버튼 접근
const ck_box = document.testForm.mailing;
// console.log(ck_box);

// 라디오, 체크박스 접근 = checked 속성을 사용
const radio_opt2 = document.querySelector("input[name='subject']:checked");
const ck_box2 = document.querySelector("input[name='mailing']:checked"); // 중복 선택
console.log(radio_opt2);
console.log(ck_box2);