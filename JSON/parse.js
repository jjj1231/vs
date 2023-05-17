// JSON > 객체로 변환 (역직렬화)
let member = '{"name" : "백두산", "age" : 30, "hobby" : "basketball"}';
let member_obj = JSON.parse(member);


console.log(member);
console.log(typeof member);
console.log(member_obj);
console.log(typeof member_obj);
