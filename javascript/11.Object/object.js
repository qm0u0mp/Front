/*
    객체 : 키(key)와 값(value)로 구성된 속성들의 집합
    - 메서드를 가질 수 있음
*/

/*
    객체 리터럴 : 자바 스크립트에서 가장 일반적인 객체 생성 방법
    - {}를 사용하여 객체를 생성
*/
const emptyObject = {};
const hongGildong = {
    name : "홍길동",
    age : 23,
    address : "서울특별시",
    greating : function() {
        console.log(`안녕 난 ${this.name}이야!`);
    }
};

console.log(hongGildong); // 결과값 : {hongGildong 안에 있는 요소들}
console.log(hongGildong.name); // 결과값 : 홍길동

hongGildong.greating(); // 결과값 : 안녕 난 홍길동이야!

const name = "고종";
const age = 40;
const address = "서울특별시";


// const goJong = {
//     name : name,
//     age : age,
//     address : address
// }; => 밑에 적은 것과 똑같은 의미

const goJong = {
    name,
    age,
    address
};

console.log(goJong); // 결과값 : { name: '고종', age: 40, address: '서울특별시' }

console.log('==============================');

/*
    Object 생성자 : Object 클래스의 생정자로 빈 객체 생성 가능
*/
const emptyObjectByConstructor = new Object();

console.log(emptyObjectByConstructor); // 결과값 : {}


console.log('==============================');

/*
    생성자 함수 : 생성자 함수를 사용하여 클래스처럼 사용 가능
*/
function Person(name, age, address){ // 클래스없이 생성자 함수 생성
    this.name = name;
    this.age = age;
    this.address = address;
}

const goGildong = new Person("고길동", 30, "인천광역시");

console.log(goGildong); // 결과값 : Person { name: '고길동', age: 30, address: '인천광역시' }
console.log(goGildong.name); // 결과값 : 고길동

console.log('==============================');

/*
    속성 이름 (속성 키) : 
    - 일반적으로 문자열을 표기함
    - 자바 스크립트에서 유효한(변수 이름으로 사용 가능한 이름) 이름일 경우네는 "",''(따옴표) 생략 가능
    - 유효한 이름이 아니면 반드시 "",''(따옴표)를 포함하여 작성해야함
*/
const wooHaNeul = {
    "first name" : "HaNeul",
    "last name" : "woo",
    gender : "Female",
    age : 26
}

console.log(wooHaNeul); // 결과값 : { 'first name': 'HaNeul', 'last name': 'woo', gender: 'Female', age: 26 }

console.log('==============================');

/*
    속성 값 읽기 : 
    - . 표기법과 []표기법으로 접근 가능
    - . 표기법은 유효한 이름일 때 사용
    - [] 표기법은 유효한 이름이 아닐 때와 접근할 속성이 동적으로 변할 때 사용 ([] 안에 반드시 문자열로 지정)
    - 객체에 존재하지 않는 속성에 접근하면 undefined를 반환
*/
console.log(wooHaNeul.age); // 결과값 : 26
console.log(wooHaNeul["last name"]); // 결과값 : woo

let property = "first name";
console.log(wooHaNeul[property]); // 결과값 : HaNeul


console.log('==============================');

/*
    속성 값 변경 :
    - 객체 속성에 접근하여 새로운 값을 할당하여 변경 가능
    - 만약에 존재하지 않는 속성에 값을 할당하면 새로운 속성이 생성
*/
goJong.name = "이형";
goJong.birth = "1852-09-08";

console.log(goJong); // 결과값 : { name: '이형', age: 40, address: '서울특별시', birth: '1852-09-08' }

console.log('==============================');

/*
    속성 삭제 :
    - delete 연산자를 사용하여 객체 속성 제거 가능
*/
delete goJong.birth;

console.log(goJong); // 결과값 : { name: '이형', age: 40, address: '서울특별시' }

console.log('==============================');

/*
    for-in 문 : 
    - for-in문으로 객체에 포함되어 있는 키를 순회해서 접근 가능
    - 반환되는 값은 문자열 티입의 키가 반환
*/
for (const key in goJong) {
    console.log(`${key} : ${goJong[key]}`); // 결과값 : name : 이형  age : 40  address : 서울특별시
}


console.log('==============================');

let sunJong = goJong; // 고종의 주소값을 sunJong에 복사
sunJong.name = '이척';

console.log(sunJong.name); // 결과값 : 이척
console.log(goJong.name); // 결과값 : 이척

console.log('==============================');

// sunJong = {
//     name : goJong.name,
//     age : goJong.age,
//     address : goJong.address,
// }; // => 잘못된 데이터 복사방법

sunJong = {};

for(const key in goJong) {
    sunJong[key] = goJong[key];
}

console.log(sunJong); // 결과값 : { name: '이척', age: 40, address: '서울특별시' }

console.log('==============================');

sunJong = {};
console.log(sunJong); // 결과값 : {}

// name, agem address
// 중괄호로 인해서 새로운 공간이 만들어짐 (즉, sunJong은 AA 공간을 goJong은 AB 공간을 가지고 있는 것임 => 서로 다른 메모리 주소를 가지고 있다는 것을 나타냄)
// 이떄 goJong을 가르키게 되면 AB 공간을 나타내는 것
sunJong = {...goJong}; 

console.log(sunJong); // 결과값 : { name: '이척', age: 40, address: '서울특별시' }

goJong.name = "이형";
console.log(goJong.name); // 결과값 : 이형
console.log(sunJong.name); // 결과값 : 이척

console.log('==============================');