// 원시 타입

// 숫자형(Number) - 정수 , 실수 모두 포함

// 문자열(string) - 텍스트 데이터를 나타내는 데 사용
// 작은 따옴표 '' / 큰 따옴표 "" / 백틱 `` 

var string;

string = '문자\n열';
console.log(string);
console.log(typeof (string));


string = "\"문자열\"";
console.log(string);
console.log(typeof (string));


string = `문자열`;
console.log(typeof (string));

string = '';
console.log(typeof (string));


// 템플릿 리터럴
// 일반적인 따옴표가 아닌 ``(백틱)을 사용해 표현
// 이스케이프 사용 없이 줄바꿈 허용, 공백 적용


// 표현식 삽입 기능 $(표현식)
var firstName = 'jinju';
var lastName = 'jang';

// My name is jinju jang.
console.log('My name is' + firstNmae + '' + lastName + '');
console.log(`My name is ${firstName} ${lastName}.`);
// 표현식의 평가 결과가 문자열이 아니더라도 문자열로 강제 형변환되어 삽입된다.

// 논리형 (Boolean) - 값은 참, 거짓 뿐 
// 지정한 조건에 맞는지 여부 확인하는 조건식에서 많이 사용한다.
var console = 10 > 3;
console.log(compare);


// undefined 타입 - 값이 할당되지 않았을 때의 변수 초기값

// null 타입 - 값이 없거나 유효하지 않은 값
// 변수에 값이 없다는 것을 의도적으로 명시할 때 사용
var element = document.querySelector('.myClass');
// HTML 문서에 myClass 클래스를 갖는 요소가 있니? - 있으면 값을 element라는 변수에 담아줘.

console.log(element); // 없으니까 유효하지 않은 값이라고 null 반환

// 객체 타입
// 하나의 변수에 다양한 정보가 포함되어 있는 데이터 타입
// {} 중괄호 안에 모든 정보를 담는다. 키:값 쌍으로 여러 개를 만들 수 있다. 
let gitBook = {
    title: "깃&깃허브 입문", // 문자열
    pubDate: "2023-03-17", // 문자열
    pages: 277, //숫자
    finished: true //논리값
    // 키는 문자열이어도 다옴표를 사용하지 않는다
}

// property = 키:값 하나의 쌍을 말한다.

// 객체명. 키 이름 / 객체명["키 이름"]
// title 값을 가져오기
console.log(gitBook.title);

// 배열(array) - 객체타입
// 하나의 변수에 여러 개의 값을 저장할 수 있는 데이터 타입.
// 대괄호 [] 로 묶고 그 안에 값을 나열하면 된다. 값을 쉼표(,) 로 구분

var color = ["red", "blue", "green"]; // 문자열 배열 생성
var arr = [10, "banana", true]; //여러 자료형으로 구성된 배열

var season = ["봄", "여름", "가을", "겨울"];
// 배열 값에 인덱스를 통해 접근하고, 인덱스 번호는 0번부터 시작된다.
// 배열 이름[인덱스_번호]
console.log(season[2]);
// 배열의 길이 값을 알아 내려면? 배열이름.length
console.log(season.length);

