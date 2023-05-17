// 할당 연산자
// = += -= *= /= %=

var x = 3;
var y = 3;

// y += x; //y = y + x;
// y -= x; //y = y - x;
// y *= x; //y = y * x;
// y /= x; //y = y / x;
// y %= x; //y = y % x;

var x;
x = 10; // x 변수에 10이라는 값을 할당
console.log(x);

x += 5; // x = x + 5; (10+5)
console.log(x); //15

x -= 5; // x = x-5; (15-5)
console.log(x); //10

x *= 5; // x = x*5; (10*5)
console.log(x); //50

x /= 5; // x = x/5; (50/5)
console.log(x); //10

x %= 5; // x = x%5; (10%5)
console.log(x); //0

// 문자열 연결 연산자
var str = "My name is ";
str += "jang"; //str = str + shin (My name is + shin)
console.log(str);