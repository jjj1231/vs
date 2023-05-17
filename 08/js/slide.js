// 슬라이드 영역 가지고 오기
const container = document.querySelector('#container');


// 이미지 값을 담을 배열 생성
const pics = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg"];

// 첫번째 이미지 표시 
container.style.backgroundImage = `url('../08/img/${pics[0]}')`;

// 화살표 영역 선택
const arrows = document.querySelectorAll(".arrow");

// >결과 값이 NodeList의 각각의 요소로 담긴다.


// arrows[0].addEventListener("click", 
// function (e) { if (e.target.id === "left")


// })

let i = 0; // 배열 순회 돌릴 인덱스 번호

// 왼쪽, 오른쪽 각 요소에 이벤트 핸들러 생성
arrows.forEach((arrow) => {
    // for(let arrow=0; arrow<arrows.length;arrow++ )
    // for(arrow of arrows)
    arrow.addEventListener('click', (e) => {
        // 왼쪽 화살표를 클릭했다면,
        if (e.target.id === "left") {
            // 이전 이미지로 이동 
            i--;
            // 첫번째 이미지인 경우라면, 
            if (i < 0) {
                // i가 0인 경우 === 첫번째 이미지
                // 맨 마지막 이미지로 이동
                i = pics.length - 1;
                // 배열 길이 -1 === '무조건' 배열의 마지막 인덱스 번호
            }

        }
        else if (e.target.id === "right") {
            // 다음 이미지로 이동
            i++;
            // 마지막 이미지인 경우라면 
            if (i >= pics.length) { // pics[3] or pics[4]..
                //i가 length와 같거나 크다면 = 마지막 이미지 혹은 없는 인덱스 번호
                i = 0;
                // i가 0번째인 경우 == 첫번째 이미지 (pics[0])
            }
            // 첫번째 이미지로 이동

        }

        container.style.backgroundImage = `url('../08/img/${pics[i]}')`;
    });
});

// 이미지 전환
function moveRight() {

    i++;

    // 만약 i번이 배열의 마지막 길이와 같거나 더 크다면 ==> 마지막 이미지 혹은 그 이후의 번호
    // 다시 첫번째 이미지로 돌아가라

    if (i >= pics.length) {
        i = 0;
    }
    container.style.backgroundImage = `url('../08/img/${pics[i]}')`;

}

// 3초마다 이미지가 바뀌는 함수
setInterval(moveRight, 3000);


