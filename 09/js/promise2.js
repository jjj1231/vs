
const pizza = () => {//
    return new Promise((res, rej) => {
        res('피자를 주문합니다.');
    })
}

const step1 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('피자 도우 준비');
        }, 3000);
    });
};

const step2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('토핑 완료');
        }, 1000);
    });
};

const step3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('굽기 완료');
        }, 2000);
    });
};




pizza()
    .then(step1)
    .then(step2)
    .then(step3)
    .then(console.log)
    .then(() => {
        console.log('피자가 준비되었습니다.');
    });