/* 
    데이터 타입

    원시 타입
    - number
    - string
    - boolean
    - null
    - undefined
    - sybol

    객체 타입
    - object
*/

/*
    number : 정수 및 실수를 모두 포함하는 타입
*/
var integer = 10;
var double = "10.0";

/* 
    number 값들은 표기법만 다르고 값은 같을 수 있음
*/
console.log(integer == double); // 결과값 : true => 타입이 달라도 true를 반환함
console.log(integer === double); // 결과값 : false => 타입이 같아야함

/*
    Infinity : 양의 무한대 
    -Infinity : 음의 무한대
    NaN : 숫자가 아님을 표현
*/
var plus_inf = 1 / 0;
console.log(plus_inf); // 결과값 : Infinity

var minus_inf = -1 / 0;
console.log(minus_inf); // 결과값 : -Infinity

var nan = NaN;
console.log(nan); // 결과값 : NaN

/*
    string : 문자열 텍스트 타입
    - "", '', `` 으로 표현 가능
    - 일반적으로 자바 스크립트에서는 ''으로 문자열을 표기
    - 변수 선언 시 java에서는 lowerCamelCase를 쓰지만 javascript에서는 lower_snake_case를 사용
    - 값 할당 시 java에서는 ""(쌍따옴표)를 쓰지만 javascript에서는 ''(홑따옴표)를 사용
*/
var name = "홍길동";
name_ = "홍길동";
name_ = `홍길동`;

/*
    자바 스크립트의 문자열은 배열처럼 인덱스를 이용해서 접근할 수 있음 (유사배열 = 반복 가능 객체)
*/
for (var index = 0; index < name_.length; index++) {
  console.log(name_[index]); // 결과값 : 홍길동 한 글자씩 세로로 출력
}

/*
    문자열 데이터는 불변성을 가짐 (변경 불가능)
*/
name_[0] = "고";
console.log(name_); // 결과값 : 홍길동

/*
    boolean : 논리 참,거짓을 나타내는 타입
    - 빈 문자열, null, undefined, 0은 false로 간주됨
*/
name_ = ""; // 결과값 : 아무것도 출력되지 않음
name_ = []; // 결과값 : name은 빈 문자열이 아닙니다.

if (name_) {
  console.log("name은 빈 문자열이 아닙니다."); // name_의 값을 ''으로 선언하지 않으면 출력됨
}

/*
    undefined : 선언 이후에 값을 초기화하지 않으면 변수는 undefined를 가짐
    - 선언은 되었지만 값을 할당하지 않은 변수
    - 존재하지 않는 객체 속성
*/
var variable;
console.log(variable); // 결과값 : undefined

var obj = {};
console.log(obj.age); // 결과값 : undefined => age가 선언되어 있지 않기 때문에

/*
    null : 의도적으로 변수에 값이 없다는 것을 명시하는 타입
    - 변수에 저장된 메모리 주소를 제거하는 용도
    - 함수의 반환값으로 유효한 값이 없을 때 반환하는 용도
    - null 값은 typeof 타입 확인 연산자로 확인하면 object 타입이 반환됨 (단순 자바 스크립트 자체의 문제)
*/
obj = null;

var element = document.getElementsByClassName("class"); // document : html에서 특정한 데이터를 찾을 떄 사용하는 것
console.log(element); // html에서 확인해봐야하는데 나중에 document 배울 때 더 자세히 알려줌
