let students = ["Kim", "Lee", "Park"];
console.log(`현재 students : ${students}`);

// 스토리지에 students 키로 배열을 저장 
// students내용을 JSON형태로 바꿈
localStorage.setItem("students", JSON.stringify(students));
// 로컬 스토리지에 키와 값을 저장
// key = students, value = JSON 형식으로 바꾼 students Array

// 로컬 스토리지에서 값을 가져와 localData라는 변수에 저장
// students 라는 이름의 로컬 스토리지에 저장된 데이터가 있는지 확인 > localStorage.getItem("students") 를 사용하고, 이 값이 `null`인 경우에는 `localData` 변수를 빈 배열로 초기화 함
// localStorage.getItem("students") 이 null 이 아닌 경우, 즉 "students"키에 이미 데이터가 저장되어 있다면 해당 데이터를 가져와서 JSON.parse() 를 사용하여 자바스크립트 객체로 변환후,
// `localDate` 변수에 할당
// 즉, 이 코드는 이전에 로컬 스토리지에 저장된 데이터가 있는 경우 해당 데이터를 가져와서 사용하고, 그렇지 않은 경우에는 빈 배열을 사용한다는 것을 의미합니다.
let localData;
if (localStorage.getItem("students") === null) {
    // 스토리지에 students라는 키가 있는지 체크
    localData = [];
} else {
    localData = JSON.parse(localStorage.getItem("students"));
}

// 새 값 추가 전 
console.log(localData);

// // 새 값 추가
localData.push("Choi");
console.log(localData);

// 다시 localData를 로컬 스토리지에 저장
// 스토리지에 localData를 JSON 형식으로 변환한 후 저장 
localStorage.setItem("students", JSON.stringify(localData));

// 삭제할 로컬 데이터의 인덱스 번호 알아내기 
const idxNum = localData.indexOf("Lee");
console.log(idxNum);

// 인덱스 위치를 기주으로 값을 삭제
localData.splice(idxNum, 1); // 인덱스에 해당하는 값부터 1개 삭제 
console.log(`삭제 후 localData : ${localData}`);
// Lee 값을 삭제한 localData를 다시 로컬 스토리지에 저장
localStorage.setItem("students", JSON.stringify(localData));

// 로컬 스토리지에서 특정 키를 삭제 - key "students" 삭제
// removeItem() - 특정 키를 지정해서 해당 키/값 쌍을 지운다
// clear() - 로컬 스토리지 전체를 비운다(삭제한다)
localStorage.removeItem("students");