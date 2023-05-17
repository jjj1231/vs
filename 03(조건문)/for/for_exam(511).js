// 숫자를 입력받은 후 1부터 그 숫자까지 3의 배수를 모두 화면에 출력합니다.
// 그리고 출력된 3의 배수가 총 몇 개인지 알려 주는 프로그램을 작성해 보세요.
// 1. 프롬프트 문을 이용



let i;
let userNumber = parseInt(prompt('몇 까지 3의 배수를 찾을까요?'));
let count = 0;

if (userNumber !== null) {
    // null이 아닌 경우에 if문 실행

    // 1~userNumber까지 순회하는 반복문
    for (i = 1; i <= userNumber; i++) {
        // 3의 배수를 찾는 조건문
        if (i % 3 === 0) {
            count++;
            document.write(`${i}, `); // 3, 6, 9, 
        }
    }

    document.write(`${userNumber}까지 3의 배수의 개수 : ${count}`)
}



