// 주어진 배열에서 입력받은 수보다 큰 값을 찾아서 화면에 표시해라 
// 배열의 요소 개수만큼 for문을 반복
// if문을 사용해서 요소의 값과 수를 비교
// document.write문을 사용해 화면에 표시

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let num = parseInt(prompt('기준이 될 값을 입력하세요'));

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 15) {
        console.log(arr[i]);
    }
}