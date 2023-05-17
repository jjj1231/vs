let likeApple = false;


// 1. 프로미스 객체 선언
const apple = new Promise((res, rej) => {
    if (likeApple) {
        res('사과를 먹었습니다.');

    } else {
        rej('사과를 먹지 않았습니다.');
    }
})

// 2. 프로미스 객체 실행 
apple
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));
/* apple 
    .then(funciton(res){
        console.log(res);
    })
    .catch(function(rej){
        console.log(rej)
    }); */
