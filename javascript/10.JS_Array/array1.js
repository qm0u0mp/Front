/*
    배열 : 여러 데이터를 하나의 변수로 저장할 때 사용
*/

/*
    배열 리터럴 : 
    - 0개 이상의 값을 쉼표로 구분하여 []로 묶어서 표현
    - 배열[인덱스]로 요소에 접근 가능 (단, 존재하지 않는 인덱스에 접근하면 undefined 반환)
    - 자바 스크립트 배열 각 요소의 데이터 타입이 서로 달라도 됨
*/
const emptyArray = []; // 길이가 0인 배열
console.log(emptyArray[2]); // 결과값 : undefined

const numbers = [1, 2, 3, 4, '5'];
console.log(numbers); // 결과값 : [ 1, 2, 3, 4, '5' ]

const funcs = [
    function(){
        console.log('함수1')
    },
    function(){
        console.log('함수2')
    },
];

console.log(funcs); // 결과값 : [ [Function (anonymous)], [Function (anonymous)] ]
funcs[0](); // 결과값 : 함수1


console.log('==============================');

/*
    배열의 요소 추가
    - 배열[인덱스] = 값 : 요소 추가 가능, 순서를 생각할 필요는 없음
    - 뛰어 넘은 인덱스의 값에는 empty item이 추가됨
*/
const emptyArray2 = [];
emptyArray2[2] = 10;

console.log(emptyArray2); // 결과값 : [ <2 empty items>, 10 ]

console.log('==============================');

/*
    배열의 요소 삭제
    - delete 연산자를 사용하여 제거 가능
*/
delete emptyArray2[2];

console.log(emptyArray2); // 결과값 : [ <3 empty items> ]

console.log('==============================');

/*
    배열의 순회
    - for-in문을 사용하여 index 값을 가지고 순회 가능
*/
const fruits = ['apple', 'banana', 'melon'];

for(let index = 0; index < fruits.length; index++){ // const로 지정 시, index++ 연산이 적용되지 않음
    console.log(fruits[index]); // 결과값 : apple, banana, melon
}

for(const index in fruits){
    console.log(fruits[index]); // 결과값 : apple, banana, melon => item 값들을 변경할 시 사용 가능
}


console.log('==============================');

/*
    - for-in 순회 방식은 index를 사용하여 한번 더 작업해야 하기 때문에 요소를 읽어들이는 순회에는 적합하지 않을 수 있음
    - forEach 메서드 혹은 for-of문을 사용
*/
for(const item of fruits){
    console.log(item); // 결과값 : apple, banana, melon => item 값들을 읽기 전용으로 출력해서 변경 불가능
}

fruits.forEach(function (item, index) {
    console.log(`index : ${index}, item : ${item}`); // 결과값 : index : 0, item : apple / index : 1, item : banana / index : 2, item : melon
});

console.log('==============================');

/*
    배열의 길이 : 배열.length
*/


console.log('==============================');

/*
    배열 메서드
*/

/*
    indexOf(element) : 
    - 배열에서 매개변수로 전달된 요소를 검색하여 해당 인덱스를 반환
    - 배열에 요소가 존재하지 않으면 -1을 반환
*/
console.log(fruits.indexOf('banana')); // 결과값 : 1
console.log(fruits.indexOf('orange')); // 결과값 : -1 => 존재하지 않는 요소를 인덱스 지정했기때문

console.log('==============================');

/*
    includes(element) :
    - 배열에 매개변수로 전달된 요소가 존재하면 true, 존재하지 않으면 false 반환
*/
console.log(fruits.includes('banana')); // 결과값 : true
console.log(fruits.includes('orange')); // 결과값 : false

console.log('==============================');

/*
    push(element) :
    - 배열의 마지막 인덱스에 요소를 추가하고 변경된 길이를 반환
*/
console.log(fruits, fruits.length); // 결과값 : [ 'apple', 'banana', 'melon' ] 3
console.log(fruits.push('orange')); // 결과값 : 4 => 푸쉬 작업 후 인덱스 길이를 반환
console.log(fruits); // 결과값 : [ 'apple', 'banana', 'melon', 'orange' ]

console.log('==============================');

/*
    pop() :
    - 배열의 마지막 인덱스 요소를 제거하고 제거한 요소를 반환
*/
console.log(fruits.pop()); // 결과값 : orange
console.log(fruits); // 결과값 : [ 'apple', 'banana', 'melon' ]

console.log('==============================');

/*
    shift() :
    - 배열의 첫번째 인덱스 요소를 제거하고 제거한 요소를 반환
*/
console.log(fruits.shift()); // 결과값 : apple
console.log(fruits); // 결과값 : [ 'banana', 'melon' ]

console.log('==============================');

/*
    reverse() :
    - 배열의 순서를 역전시킴 (정렬 순서를 바꿈)
*/
console.log(fruits.reverse()); // 결과값 : [ 'melon', 'banana' ]
console.log(fruits); // 결과값 : [ 'melon', 'banana' ]

console.log('==============================');

/*
    concat(array or item) : 
    - 매개변수로 전달된 값들을 해당 배열의 마지막 요소 뒤에 연결 새로운 배열을 반환
*/
const newFruits = fruits.concat(['apple', 'orange']);

console.log(newFruits); // 결과값 : [ 'melon', 'banana', 'apple', 'orange' ]
console.log(fruits); // 결과값 : [ 'melon', 'banana' ]

console.log('==============================');

/*
    slice(start, end) : 
    - start에 해당하는 인덱스부터 end에 해당하는 인덱스 앞까지 복사하여 반환
*/
console.log(newFruits.slice(1,3)); // 결과값 : [ 'banana', 'apple' ]
console.log(fruits); // 결과값 : [ 'melon', 'banana' ]

console.log('==============================');

/*
    splice(start, eleteCount, items...) :
    - 배열의 요소를 제거하고 제거한 위치에 요소를 갈아끼운 배열을 반환
*/
console.log(newFruits.splice(2, 1)); // 결과값 : [ 'apple' ]
console.log(newFruits); // 결과값 : [ 'melon', 'banana', 'orange' ]
console.log(fruits); // 결과값 : [ 'melon', 'banana' ]

// console.log(newFruits.splice(2,1,'peach')); // 결과값 : [ 'apple' ] => 원래 apple이 있던 자리이기 떄문에 apple 반환
// console.log(newFruits); // 결과값 : [ 'melon', 'banana', 'peach', 'orange' ]
