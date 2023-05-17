/* pet 클래스 혹은 생성자 함수를 만든 후 cheez라는 인스턴스 객체를 만들어 보시오.
- pet 클래스에는 name과 age 프로퍼티, run() 메소드를 가지고 있습니다.
- run() 메서드는 name과 함께 'it's running' 이라는 문자열을 알림창에 표시하도록 정의합니다.
'name is running'

<hint> 
-class 사용 시, constructor()함수에 프로퍼티 저장
    - 클래스에서 funtion을 사용해 메서드를 만든다.
-new 예약어를 사용해 인스턴스를 만들어야 한다.
-인스턴스 객체에서 run() 메서드를 실행한다. */

class Pet {
    constructor(name, age) {
        // 프로퍼티 정의
        this.name = name;
        this.age = age;
    }


    // 메소드
    run = function () {
        alert(`${this.name} is running.`);

    }
}

const cheez = new Pet("치즈", "yellow");
console.log(cheez.name);
console.log(cheez.age);
cheez.run();