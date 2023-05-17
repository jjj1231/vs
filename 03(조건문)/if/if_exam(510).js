let userNumber = parseInt(prompt('숫자를 입력하시오'));

if (userNumber !== null) {
    // userNumber의 숫자가 있는 경우 명령문 실행
    if (userNumber % 4 === 0) {
        document.write(`${userNumber}는 4의 배수입니다.`);

    } else {
        document.write(`${userNumber}는 4의 배수가 아닙니다.`);
    }
}