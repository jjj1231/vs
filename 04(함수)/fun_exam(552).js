/* let num1 = prompt('비교할 첫 번째 숫자 : ');
let num2 = prompt('비교할 두 번째 숫자 : ');

function number(num1, num2) {
    if (num1 === num2) {
        alert('같습니다')
        return number;

    } else if (num1 > num2) {
        alert(`${num1}이 ${num2}보다 큽니다.`);
        return number;

    } else if (num1 < num2) {
        alert(`${num2}가 ${num1}보다 큽니다.`);
        return number;
    } else {
    }

}

number(num1, num2); */


let num1 = parseInt(prompt('비교할 첫 번째 숫자 : '));
let num2 = parseInt(prompt('비교할 두 번째 숫자 : '));

function compareTwo(x, y) {
    if (x === y) {
        alert(`${x}와 ${y}는 같습니다`);
    } else if (x > y) {
        alert(`${x}가 ${y}보다 큽니다`);
    } else {
        alert(`${x}가 ${y}보다 큽니다`);
    }
    // x 보다 y가 큰 경우 - x를 표시
    // x 보다 y가 작은 경우 - y가 크니까 y를 표시 
    // x,y랑 같은 수인 경우 
}

compareTwo(num1, num2);