var n1 = parseInt(prompt('첫 번째 양의 정수 :'));
console.log(n1);
// var n2 = parseInt(prompt('두 번째 양의 정수 :'));

// 입력한 숫자가 모두 짝수인지 체크하는 프로그램
// 두 수가 모두 짝수라면 - '두 수 모두 짝수입니다.'
// 짝수가 아니라면 - '짝수가 아닌 수가 있습니다.'
// 사용자에게 입력 값을 받지 못했다면 '입력이 취소되었습니다' 라는 알림창

// if (n1 && n2) {
//     if (n1 % 2 === 0 && n2 % 2 === 0) { //2로 나눴을 때(%) 나머지가 0일 경우
//         console.log("두 수 모두 짝수 입니다.");
//     }

//     else {
//         console.log("짝수가 아닌 수가 있습니다")
//     }
// }
// else {
//     console.log('입력이 취소되었습니다.');
// }
//Truthy - 조건식에서 "true"로 평가 되는 값
//(true), 1, [],{}, "hello"... )
//Falsy - 조건식에서 "false"로 평가 되는 값
//(false, 0, "", null, undefined, NaN)

if (n1! = null) {// 입력값이 null이 아닌 경우,
    if (isNaN(n1) === false) {
        n1 = parseInt(n1);
        if (n1 % 2 === 0 && n2 % 2 === 0) {
            console.log('두 수 모두 짝수입니다.');
        } else {
            console.log('짝수가 아닌 수가 있습니다.');
        }
    }
    else {
        console.log('입력이 취소되었습니다.');
    }


