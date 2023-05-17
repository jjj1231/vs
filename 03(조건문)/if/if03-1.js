let userNum = prompt('숫자를 입력하세요');

// if (userNum !== null) {
//     userNum = parseInt(userNumm);
//     (userNum % 2 === 0) ? alert('짝수입니다') : alert('홀수입니다')
//     // if (userNum % 2 === 0) {
//     //     alert('짝수입니다');
//     // } else {
//     //     alert('홀수입니다')
//     // }

// } else {
//     alert('입력이 취소되었습니다.');
// }


if (userNum !== null) {
    //사용자 입력 값을 판단하는 조건식
    if (isNaN(userNum) === false) {
        //isNaN, Nan이면 true - NaN이 아니라면 false 반환
        //숫자인지 아닌지 판단하는 조건식
        userNum = parseInt(userNum);
        //숫자라면, 짝수인지 아닌지 판단하는 조건식
        userNum % 2 === 0 ? alert("짝수입니다.") : alert("홀수입니다");
    } else {
        alert('숫자를 입력하세요');

    }
} else {
    alert('입력이 취소되었습니다.');
}

// 짝수와 홀수를 구별하는 프로그램
// 사용자에게 값을 입력 받아라
// 입력받은 값이 없다면 '입력이 취소되었습니다 ~알림창
// 입력 받은 값이 있다면 입력 받은 값이 숫자인지 아닌지 확인을 하고,
// parselnt 를 사용하여 형변환을 한 후 짝수인 경우 '짝수입니다.'
// 홀수인 경우 '홀수입니다' 라는 알림창을 띄워줘라
// 숫자가 아닌 값이라면 숫자를 입력하세요. 라는 알침창을 띄어줘라