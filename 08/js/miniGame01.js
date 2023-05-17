const player = document.querySelector('#player');
console.log(player);


// playerX, playerY 나타내는 변수 생성
// playerX == css.left | playerY == css.top
let playerX = 100;
let playerY = 100;

// document.addEventListener('keydown', function (e) {
//     // document 객체에 대해 keydown 이벤트가 발생했을 때,
//     // 이벤트 리스너에 등록된 함수를 실행

//     // 방향키를 누를 때마다 호출
//     // 어떤 방향키가 눌렸는지 확인하기 위해서 'e.key' 속성 사용
//     if (e.key === "ArrowLeft") {
//         playerX -= 10;
//         // playerX 가 -10 씩 움직였으면 좋겠네~
//     } else if (e.key === "ArrowRight") {
//         playerX += 10;
//     } else if (e.key === "ArrowUp") {
//         playerY -= 10;
//     } else if (e.key === "ArrowUp") {
//         playerY += 10;
//     }

//     console.log(playerX + "px")

//     player.style.left = playerX + "px";
//     player.style.top = playerY + "px";

// })


//-----객체화할 경우----------

document.addEventListener('keydown', function (e) {
    // moveMap 이라는 객체를 사용하여 방향키와 이동할 좌표를 매핑
    const moveMap = {
        "ArrowLeft": -10,
        "ArrowRight": 10,
        "ArrowUp": -10,
        "ArrowDown": 10,
    };

    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        playerX += moveMap[e.key];
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        playerY += moveMap[e.key];
    }


    player.style.left = playerX + "px";
    player.style.top = playerY + "px";

});
