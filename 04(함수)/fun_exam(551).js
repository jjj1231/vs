// 마무리 문제 1 


function sumMulti(num1, num2) {
    if (num1 === num2) {
        return num1 * num2;
        04(함수) / fun_exam(552).js
    } else {
        return num1 + num2;
    }
}

let num1 = parseInt(prompt('첫번째 숫자를 입력하세요.'));
let num2 = parseInt(prompt('두번째 숫자를 입력하세요.'));
console.log(sumMulti(num1, num2));

