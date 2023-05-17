// 적 요소 생성
// 1. 여러 적이 생긴다는 가정 - 값을 여러개 담아야 한다. > 배열 > 적이 없어 > 적을 담ㄷ을 빈 배열이 필요

const enemies = [];

// 2. 적 요소 생성(div) > 생성하고 나서 enemy 클래스를 추가 
function spawnEnemy() {
    var enemy = document.createElement('div');
    enemy.classList.add('enemy');

    // enemy 요소의 top, left 속성 값을 0~499 까지의 랜덤한 값으로 설정
    enemy.style.top = Math.floor(Math.random() * 500) +
        "px"; // 355px
    enemy.style.left = Math.floor(Math.random() * 500) +
        "px";

    // 눈에 보일 수 있게 body 요소의 자식 요소로 추가
    document.body.appendChild(enemy);

    // 생성된 enemy 요소를 enemies 배열에 추가 (push)
    enemies.push(enemy);
}

// 적 요소 생성하는 함수를 2초마다 실행하기
setInterval(function () { spawnEnemy(); }, 2000);



setInterval(function () {
    // 1. 적 요소가 움직일 수 있게

    // 각각의 적 요소들한테 접근할 수 있는 반복문 
    enemies.forEach(function (item) {
        // for(let i = 0; i < enmies.length; item++)
        var enemy = item;
        var enemyX = parseInt(enemy.style.left);
        var enemyY = parseInt(enemy.style.top);
        // top, left 값 가지고 오기

        // 2. 적 요소와 player가 닿으면 게임 끝
        var enemyRight = enemyX + enemy.offsetWidth;
        // 적 요소의 오른쪽 x 좌표 
        var enemyBottom = enemyY + enemy.offsetHeight;
        // 적 요소의 아래쪽 y 좌표
        var playerRight = playerX + player.offsetHeight;
        // 적 요소의 아래쪽 x 좌표
        var playerBottom = playerY + player.offsetHeight;
        // 적 요소의 아래쪽 y 좌표

        if (
            playerX < enemyRight &&
            playerRight > enemyX &&
            playerY < enemyBottom &&
            playerBottom > enemyY
        ) {
            alert("Game over");
            location.reload();
        }


        // -1, 0, 1 중 하나를 무작위로 선택하여 directionX 변수 할당
        // [Math.floor(Math.random * 3)] > 배열의 인덱스 번호로 사용된다.
        // [-1, 0, 1] = 배열
        // 배열의 값을 선택하기 위해 인덱스 번호를 [Math.floor...]로 지정
        var directionX = [-1, 0, 1][Math.floor(Math.random() * 3)];
        var directionY = [-1, 0, 1][Math.floor(Math.random() * 3)];

        // 적의 이동 방향을 랜덤으로 설정한 후 10씩 이동할 수 있도록 구현
        // 좌우(x), 상하(y)에 각각 이동 방향을 적용하면 대각선으로 움직일 수 있다.

        // -1 * 10 (-10) / 0*10(0) / 1*10(10)
        enemyX += directionX * 10;
        enemyY += directionY * 10;

        /* enemyX, Y 값 0보다 작아지거나, 게임 화면의 가로 길이에서 적 요소의 너비를 뺀 값
        (오른쪽 끝 지점) 보다 크게 되는 것을 방지 */
        // offsetwidth -> 오른쪽 끝 지점의 값
        enemyX = Math.min(Math.max(enemyX, 0), 500 - enemy.offsetWidth);
        enemyY = Math.min(Math.max(enemyY, 0), 500 - enemy.offsetWidth);

        enemy.style.left = enemyX + "px";
        enemy.style.top = enemyY + "px";


    });

}, 5000)