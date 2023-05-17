//사용자에게 2가지 숫자와 연산자 입력 받음
let n1 = prompt("첫 번째 숫자");
let n2 = prompt("두 번째 숫자");
let n3 = prompt("연산자 입력");

//parseInt로 형변환
n1 = parseInt(n1);
m2 = parseInt(n2);

// result 값을 이용해서 
switch (n3) {
    case "+":
        result = n1 + n2;
        break;

    case "-":
        result = n1 - n2;
        break;

    case "*":
        result = n1 * n2;
        break;

    case "/":
        result = n1 / n2;
        break;

    case "%":
        result = n1 % n2;
        break;

    default:
        result = '지원하지 않는 연산자입니다';
}

alert(`${n1} ${n3} ${n2} = ${result}`5
);