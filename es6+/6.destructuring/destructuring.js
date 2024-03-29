/*
    디스트럭처링 :
    - 구조화된 배열 또는 개체를 비구조화, 구조화 파괴하여 개별 변수로 할당하는 것
    - 배열 또는 객체에서 필요한 데이터만 추출해서 변수에 할당하여 사용할 수 있도록 함
*/

let king = {
    name : '이성계',
    tombName : '태조',
    birth : '1335.11.04',
    death : '1408.06.27'
};

// let name = king.name;
// let tombName = king.tombName;
// let birth = king.birth;
// let death = king.death;

let fruits = ['apple', 'banana', 'melon', 'mango', 'orange']

// let ftuits1 = ftuits[0];
// let ftuits2 = ftuits[1];
// let ftuits3 = ftuits[2];
// let ftuits4 = ftuits[3];
// let ftuits5 = ftuits[4];

//============================================================================================================================================================//

/*
    배열 디스트럭처링
    - 배열의 각각의 요소를 배열로부터 추출해서 변수 리스트에 할당
    - 할당 기준은 인덱스
*/

// 만약 배열 디스트럭처링에 배열의 길이를 초과한 변수를 선언하면 초과한 범위에 대하여 해당 변수는 undefined가 됨
const [fruit1, fruit2, fruit3, fruit4, fruit5, fruits6] = fruits;
console.log(fruit1); // 결과값 : apple
console.log(fruit2); // 결과값 : banana
console.log(fruit3); // 결과값 : melon
console.log(fruit4); // 결과값 : mango
console.log(fruit5); // 결과값 : orange
console.log(fruits6); // 결과값 : undefined

console.log('========================================');

/*
    spread 연산자를 활용
    - 배열 디스트럭처링 마지막에 스프레드 연산자를 사용하면 나머지 모든 요소로 새로운 배열을 생성
*/

const [anotherFruit, ...otherFruits] = fruits;
console.log(anotherFruit); // 결과값 : apple
console.log(otherFruits); // 결과값 : [ 'banana', 'melon', 'mango', 'orange' ]

console.log('========================================');

/*
    객체 디스트럭처링
    - 객체의 각 속성을 객체로부터 추출하여 변수에 할당
    - 할당 기준 : 키
*/

// 객체 디스트럭처링에서는 변수의 순서는 상관없지만, 이름은 반드시 객체의 키의 이름과 같아야함
const { name, tombName } = king;
console.log(name); // 결과값 : 이성계
console.log(tombName); // 결과값 : 태조


console.log('========================================');

/*
    spread 연산자를 활용
    - 객체 디스트럭처링 마지막에 스프레드 연산자를 사용하면 나머지 모든 속성으로 새로운 객체를 생성
*/

const { birth, death, ...restKing } = king;
console.log(birth); // 결과값 : 1335.11.04
console.log(death); // 결과값 : 1408.06.27
console.log(restKing); // 결과값 : { name: '이성계', tombName: '태조' }

console.log('========================================');