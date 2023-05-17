// 연산자 - 단항 연산자 (증감, 감소)
// 전위 | 후위 
// 전위 증감/감소 - 피연산자의 값을 증가/감소 시킨 후, 다른 연산 수행 
// 후위 증감/감소 - 다른 연산 먼저 수행 후, 피연산자 값을 증가/감소

var result;
var x = 5;

result = x++;
// x의 값을 result에 먼저 할당한 후 > x의 값을 1 증가 시킴, 
// result 값은 5, x의 값은 6 
console.log(`result의 값은 ${result}, x의 값은 ${x}`);

result = ++x;
// x의 값을 1 먼저 증가 시킨 후 , x의 값을 result에 할당
// result 값은 7, x의 값은 7 
console.log(`result의 값은 ${result}, x의 값은 ${x}`);

result = x--;
// x의 값을 result에 먼저 할당한 후, x의 값을 1 감소 시킴
// result 값은 7, x의 값은 6
console.log(`result의 값은 ${result}, x의 값은 ${x}`);

result = --x;
// x의 값을 1 먼저 감소 시킨 후, x의 값을 result에 할당
console.log(`result의 값은 ${result}, x의 값은 ${x}`);

x = 'hello'; //문자열
console.log(x);
console.log(+x); // 문자열에 산술 연산을 시행 > NaN(Not a Number) 반환한다.

x = true; // 값이 있는 상태로 인식, 1로 인식
console.log(x);
console.log(+x);

x = false; //값이 없는 상태로 인식, 0으로 인식
console.log(x);
console.log(+x);

// 문자열 연결 연산자
var a = "1" + 2;
console.log(a);
console.log(typeof a);

// true는 1이라는 숫자로 타입 변환(형 변환)이 된다. 2진수 0과 1
// (0은 off, false / 1은 on, true)
a = 1 + true;
console.log(a); //1+1(true) > 2
console.log(typeof a); //number

// false는 0이라는 숫자로 타입 변환이 된다.
a = 1 + false;
console.log(a); //1+0(false) > 1
console.log(typeof a);




