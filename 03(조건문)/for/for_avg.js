// 사용자에게 점수를 입력 받아 평균을 구하는 for문
// -사용자로부터 입력받은 점수들을 저장할 빈 배열 생성
// -입력받을 점수의 개수를 사용자로부터 입력받기(입력받은 개수는 정수로 변환)

//1. for문
// - 입력받은 개수만큼 점수를 입력 받아 점수 배열에 값을 추가(입력받은 점수 정수로 변환)
// - push()메소드 사용하여 변환한 점수 빈 배열에 추가.

//2. for문
// - 배열에 있는 모든 점수를 더하여 합계를 계산
// - 평균을 계산하여 웹 브라우저에 출력 (document.write() 사용)


// 사용자로 부터 입력 받은 점수들을 저장할 빈 배열
const scores = [];

// 입력 받을 점수의 개수 사용자로 부터 입력 받음
const inputCount = prompt('몇 개의 점수를 입력하시겠습니까?');
const count = parseInt(inputCount);

// count 개수 만큼 점수를 입력 받아 scores 빈 배열에 추가
for (let i = 0; i < count; i++) {
    const input = prompt(`점수를 입력하세요 (${i + 1}/${count})`);
    const score = parseInt(input); // 입력받은 값을 숫자로 변환
    if (isNaN(input) || input === null) {
        // 입력값이 NaN이거나 null인 경우 
        alert('숫자를 제대로 입력해 주세요');
        i--; // 점수를 잘못 입력했을 때 다시 입력받기 위해 i값을 줄임
        continue;

    }
    scores.push(score); // 변환한 점수를 배열에 추가

}

// 배열에 있는 모든 점수를 더하여 합계를 계산
let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum += scores[i]; // sum = sum + scores[0] ... scores[n]
}

// 평균 계산 
const average = sum / count; //sum = 점수의 총 합계 
document.write(`입력한 점수들의 평균은 ${average} 입니다.`);

