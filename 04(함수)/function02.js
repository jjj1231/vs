/* function multiple(a, b, c = 10) {
    console.log(a);
    console.log(b);
    console.log(c);
    //console.log(a * b + c);
    return a * b + c;
    // return - 데이터를 반환한다
}

multiple(5, 10, 20);
multiple(10, 20);

let result = multiple(5, 10, 30); // result : 데이터를 받을 곳 
console.log(`함수에서 반환한 값 ${result}`);

*/


// return

function multiple(x, y) {
    console.log('실행되지 않는다');
    return x * y; //반환문
    //반환문 이후 다른 문이 존재하면 그 문은 실행되지 않는다. 
}

console.log(multiple(3, 5)); //15


/* 함수 호출 시 인자로 데이터를 전달 > 전달받은 인자를 이용해 구문을 실행 > 
그에 따른 결과값을 반환하는 함수를 생성
<함수 4가지>
1. 매개 변수, 반환 없는 함수
2. 매개 변수 있지만 반환은 없는 함수
3. 매개 변수 없지만 반환은 있는 함수 
4. 매개 변수와 반환이 모두 있는 함수 */

// 즉시 실행 함수(한번만 실행하고 끝냄)
(function () {
    userName = prompt('이름을 입력하세요.');
    alert(`안녕하세요, ${userName}님!`);

}());


// 화살표 함수 
const hi = () => { return "안녕하세요."; }
// 익명 함수로 변경
const hi = function () {
    return "안녕하세요";
}
