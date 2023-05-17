/*사용자가 프롬프트 창에 숫자를 입력했을 때 그 숫자를 함수로 넘겨주고, 
함수에서 숫자가 양수인지 음수인지 또는 0인지 판단하여 알림창에 보여주는 프로그램을 작성하라.

- parseInt()를 사용하여 프롬프트 창에 입력한 내용을 숫자로 변환
- 반환값이 숫자일 경우에만 함수를 실행할 수 있게 하라 

*/

/* let num = parseInt(prompt('숫자를 입력해주세요'));

function number(num) {
    if (isNaN(num) < 0) {
        alert('음수 입니다.');
    } else if (isNaN(num) > 0) {
        alert('양수 입니다.');

    } else {
        alert('0입니다');
    }

}

number(isNaN(num)); */


let num1 = parseInt(prompt('숫자를 입력하세요 :'));

if (!isNaN(num1)) {// 숫자일 경우에만 실행될 수 있게 
    isPositive(num1);
} else {
    alert('숫자를 제대로 입력해 주세요');
    isPositive(num1);
}

function isPositive(n) {
    if (n > 0) {
        alert(`${n}은 양수입니다.`);

    } else if (n < 0) {
        alert(`${n}은 음수입니다.`);
    } else {
        alert(`${n}은 0입니다.`);
    }
}

