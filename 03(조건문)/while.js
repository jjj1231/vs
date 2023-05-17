let starts = parseInt(prompt("별의 개수 : "));

// // 0을 입력했을 때 입력안해줌, while의 경우 false는 실행 안함
// while (starts > 0) {
//     document.write('*');
//     starts--;
// }

// 0을 입력했을 때 별 1개 입력해줌, do의 경우 무조건 한번 실행해줌
do {
    document.write('*');
    starts--;

} while (starts > 0)