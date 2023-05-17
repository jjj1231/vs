// 물건의 가격과 할인율 배열
const prices = [10000, 25000, 30000, 50000];
const discounts = [0.1, 0.2, 0.3, 0.4];

//최종 가격을 저장할 배열
const finalPrices = [];


//for문을 사용해서 최종 가격 계산
for (let i = 0; i < prices.length; i++) {

    //최종 가격 계산
    const discountedPrice = prices[i] * (1 - discounts[i]);

    finalPrices.push(discountedPrice);

}
console.log(finalPrices);