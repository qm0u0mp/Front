/*
    매개변수 기본값 : 
    - 함수 호출 시 인수를 전달하지 않으면 사용할 기본값을 지정할 수 있음
*/

const add = (a = 10, b = 20) => {
    return a + b;
}
console.log(add()); // 결과값 : 30
console.log(add(30, 90)); // 결과값 : 120

console.log('========================================');

/*
    rest 매개변수 : 
    - 매개변수 앞에 ...을 붙여서 정의한 매개변수
    - 함수에 전달받은 인수의 목록을 리스트로 전달 받음
    - rest 매개변수는 반드시 제일 마지막에 선언되어야함
*/

const restFunction1 = (...args) => {
    console.log(args); // 결과값 : [ 1, 2, 3, 4, 5 ]
};
restFunction1(1, 2, 3, 4, 5);

const restFunction2 = (arg1, ...args) => { // rest 매개변수 제일 마지막에 선언
    console.log(arg1); // 결과값 : 1
    console.log(args); // 결과값 [ 2, 3, 4, 5 ]
};
restFunction2(1, 2, 3, 4, 5);

console.log('========================================');

/*
    spread 연산자 : 
    - ...을 사용하여 대상을 개별 요소로 분리해주는 역할
    - 반드시 피연산자는 반복 가능한 객체 (배열, 객체, 문자열 등 ...)
*/

const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // 결과값 : [ 1, 2, 3, 4, 5 ]
console.log(...numbers); // 결과값 : 1 2 3 4 5 => 배열인 형태가 아닌 각 요소 자체를 나열 == console.log(1, 2, 3, 4, 5);

console.log('========================================');

// 1. 배열 복사에 사용
const copyNumbers = [ ...numbers ];
console.log(copyNumbers); // 결과값 : [ 1, 2, 3, 4, 5 ]

// 요소를 가져와서 새로운 배열을 생성하였기 때문에 copyNumbers의 값을 변경하였다해도 numbers의 값은 변경되지 않음
copyNumbers[0] = 10;
console.log(numbers); // 결과값 : [ 1, 2, 3, 4, 5 ]
console.log(copyNumbers); // 결과값 : [ 10, 2, 3, 4, 5 ]

console.log('========================================');

// 2. 배열 연결에 사용
const numbers2 = [6, 7, 8, 9, 10];
let newNumbers = [ ...numbers, ...numbers2 ];

console.log(newNumbers); // 결과값 : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

newNumbers = [ ...numbers2, ...numbers ];
console.log(newNumbers); // 결과값 : [ 6, 7, 8, 9, 10, 1, 2, 3, 4, 5 ]

console.log('========================================');

// 3. 배열 요소 추가에 사용
newNumbers = [ ...numbers, 0, -1, -2 ];
console.log(newNumbers) // 결과값 : [ 1, 2, 3, 4, 5, 0, -1, -2 ]

console.log('========================================');

// 4. 객체 복사, 연결, 요소 추가에 사용

//===복사===//
const king = {
    name : '이성계',
    tomName : '태조',
};

let newKing = { ...king };
console.log(king);

newKing.name = '이방과';
console.log(newKing); // 결과값 : { name: '이방과', tomName: '태조' }
console.log(king); // 결과값 : { name: '이성계', tomName: '태조' }

//===연결===//
const kingInfo = {
    address : '서울특별시',
    contury : '고려',
}

newKing = { ...king, ...kingInfo };
console.log(newKing); // 결과값 : { name: '이성계', tomName: '태조', address: '서울특별시', contury: '고려' }

//===추가===//
newKing = { ...king, birth : '1335.11.04'}; // 결과값 : { name: '이성계', tomName: '태조', birth: '1335.11.04' }
console.log(newKing);

newKing = { ...king, name : '이단', birth : '1335.11.04'}; // 결과값 : { name: '이단', tomName: '태조', birth: '1335.11.04' }
console.log(newKing);

console.log('========================================');