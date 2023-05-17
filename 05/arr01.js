// concat - 서로 다른 배열 2개를 합쳐서 새로운 배열을 만듦
const arr1 = [1, 2];
const arr2 = [3, 4];

let result = arr1.concat(arr2);
// arr2.concat(arr1) : [3, 4]가 기준
console.log(result);


// 원본 배열 arr1의 마지막 요소로 값을 추가한 새로운 배열 반환
result = arr1.concat(3);
console.log(result);

result = arr1.concat(arr2, 5);
console.log(result);


// (중요)원본 배열은 변경되지 않는다.
console.log(arr1);


// 배열 요소를 연결해 하나의 '문자열' 을 만드는 join()
const arr = [1, 2, 3, 4];

// 기본 구문자, (쉼표)
result = arr.join();
console.log(typeof result);


result = arr.join('');
console.log(result);


result = arr.join(':');
console.log(result);

// 새로운 요소 추가 맨 앞 unshift(), 맨 뒤 push() 
// concat : 원본 배열 변경하지 않고 새로운 배열을 추가할 경우
// push : 원본 배열을 직접 변경
result = arr.push(5, 6);
console.log(result);

console.log(arr);

// 원본 배열에서 마지막(pop) 혹은 맨 앞 요소(shift)를 제거하고 제거한 요소를 반환

result = arr.pop();
console.log(result);
console.log(arr);


// 원하는 위치에 요소를 추가, 삭제하는 splice()
// 매개변수(start, deleteCount, items)
// 배열의 시작 위치 지정 / 시작 위치부터 제거할 요소의 수 / 삭제한 위치에 추가될 요소들

const items1 = [1, 2, 3, 4];

// items[1]부터 2개의 요소를 제거하고 제거된 요소를 배열로 반환
const res1 = items1.splice(1, 2);
console.log(items1); // [1, 4] 가 남아 있음
console.log(res1); //[2, 3] 제거된 배열

const items2 = [1, 2, 3, 4];
const res2 = items2.splice(1);
console.log(items2); // [1]  남아 있음
console.log(res2); //[2, 3, 4] 제거된 배열

const items3 = [1, 2, 3, 4];
const res3 = items3.splice(1, 2, 30, 40); //1번부터 2개의 요소를 지움. 30, 40을 추가함
console.log(items3); // [1, 30, 40, 4]  남아 있음
console.log(res3); //[2, 3] 제거된 배열

items3.splice(1, 0, 100); // 중간에 추가 요소를 추가
console.log(items3); // [1, 100, 30, 40, 4] 


// 기존 배열을 바구지 않으면서 요소를 꺼내는 slice()
// 매개변수(start, end)

const items = ['a', 'b', 'c'];
let res = items.slice(0, 1);
// items[0] 부터 items[1] 이전 (items(1) 미포함) 까지 반환
console.log(res);

// items[1]부터 이후의 모든 요소 반환
res = items.slice(1);
console.log(res); //['b', 'c']

// 인자가 음수인 경우 배열의 끝에서 요소를 반환
res = items.slice(-1);
console.log(res); //['c']


// 모든 요소를 반환 ( = 복사본(shallow copy) 생성)
// 인자를 전달하지 않으면 원본 배열의 복사본을 생성하여 반환한다.

res = items.slice();
console.log(res); //['a', 'b', 'c']

console.log(items); //['a', 'b', 'c']

// 인수로 전달된 요소를 검색하여 인덱스 번호를 반환하는 indexOf()
// 배열에 요소가 존재하는지 여부를 확인할 때 유용
const arrNum = [1, 2, 2, 3];

arrNum.indexOf(2); //2라는 데이터가 있니? 라고 물어보는 내용, 2가 두 개있을 때 첫 번째 것만 반환


// 배열 arrNum에서 요소 2를 검색하여 첫번째 인덱스를 반환
// 중복되는 요소가 있는 경우, 첫번째 인덱스만 반환한다.
console.log(arrNum.indexOf(2)); //[1]을 반환해줌

// 해당하는 요소가 없는 경우, -1을 반환
console.log(arrNum.indexOf(4)); //[-1]을 반환해줌

// 두번째 인수는 검색을 시작할 인덱스 번호를 지정한 것이다.
// 두번째 인수를 생략하면 처음(0번)부터 검색한다.
console.log(arrNum.indexOf(2, 2)); // 2번부터 시작해서(위치) 2라는 친구가 중복되는 게 있는지, [2]를 반환

const foods = ['apple', 'banana', 'orange']
if (foods, indexOf('orange') === -1) {
    //요소가 존재하지 않는 경우
    foods.push('orange');
}

console.log(foods);