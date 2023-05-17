let num1 = parseInt(prompt('첫번재 수를 입력해 주세요.'));
let num2 = parseInt(prompt('첫번재 수를 입력해 주세요.'));

function bigNumber(num1, num2) {
    if (num2 === 0) {
        return num1;
    } else {
        return bigNumber(num2, num1 % num2);
    }

    //재귀함수(자신을 재참조 하는 함수), 콜백(함수의 내부에서 실행하는 함수)
}