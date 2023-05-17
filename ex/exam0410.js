
//10보다 작은 수 입력 받기
const userNumber = document.querySelector('#num');
// 입력 버튼 
const numinput = document.querySelector('#numinput');

numinput.addEventListener('click', () => {
    try {
        // 실행 코드
        // 텍스트 필드에 입력한 값을 가져와 변수로 저장
        const n = Number(userNumber.value);
        // Number() - 문자열을 숫자로 변환

        // 1. 아무 내용도 입력하지 않았거나, 숫자가 아닌 경우
        if (n === "" || isNaN(n)) {
            throw `숫자를 입력하세요.`;
            // 2. 숫자가 10보다 작은 경우 - 결과를 보여줌    
        } else if (n <= 10) {
            document.querySelector('#result').innerText = n;

            // 3. 그 외의 경우 (숫자가 10보다 큰 경우)
        } else {
            throw `10보다 작은 수를 입력하세요.`
        }
    } catch (err) {
        //try문의 실행 코드 에러 처리
        alert(err);
    } finally {
        userNumber.value = "";
    }

});
