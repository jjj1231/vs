function clasSum() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i; // sum = sum + i;
    }

    console.log(`1부터 10까지 더한 숫자는 ${sum}입니다.`);

}

clasSum();

for (let i = 1; i <= 10; i++) {
    clasSum();
}
