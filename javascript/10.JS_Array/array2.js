/*
    배열 고차 함수
    - 배열의 불변성을 최대한 보장하여 부수효과(원본에 끼치는 영향)를 제거한 메서드
*/
const array = [7, 11, 20, 1, 8, 3, 16, 2, 19, 9, 10, 4, 13, 12, 14, 17, 15, 5, 18, 6];

/*
    sort(비교 함수) : 배열의 요소를 적절하게 정렬
    - 단순 .sort()로 정렬하면 사전식 정렬을 하게됨
*/
// array.sort();
// console.log(array);
// 결과값 : [
//    1, 10, 11, 12, 13, 14, 15,
//    16, 17, 18, 19,  2, 20,  3,
//     4,  5,  6,  7,  8,  9
//  ] => 잘못된 정렬

const asc = function(x, y){
    return x - y; // x-y의 값이 음수
}
array.sort(asc);
console.log(array); // 결과값 : [1, 2, 3, ... , 18, 19, 20] => 오름차순 정렬

array.sort(function(x, y){
    return y - x
});
console.log(array); // 결과값 : [20, 19, 18, ... , 3, 2, 1] => 내림차순 정렬

const objects = [
    {x: 9, y: -5},
    {x: -2, y: 0},
    {x: 0, y: -3},
    {x: 6, y: 5}
]
console.log(objects); // 결과값 : [ { x: 9, y: -5 }, { x: -2, y: 0 }, { x: 0, y: -3 }, { x: 6, y: 5 } ]
objects.sort(function(a, b){
    return a.x - b.x; // a에 있는 x과 b에 있는 x값을 빼라 => 오름차순 정렬
});
console.log(objects); // 결과값 : [ { x: -2, y: 0 }, { x: 0, y: -3 }, { x: 6, y: 5 }, { x: 9, y: -5 } ] 

console.log('==============================');

/*
    forEach(콜백 함수) : for문 대신 사용
    - 배열을 순회하면서 각 요소와 인덱스를 사용할 수 있도록 함
    - 원본 배열 변경 X
    - break, continue,... 부가적인 작업을 추가 X
    - for문보다 성능 떨어짐, 가독성이 좋고 편리하므로 자주 사용됨
    - async await 작업은 forEach문으로 사용 불가
*/
array.forEach(function(item, index){
    console.log(`index : ${index}, item : ${item}`); // 결과값 : index : 0, item: : 20 ,..... ,index : 19, item : 1
});


console.log('==============================');

/*
    map(콜백 함수) : 콜백 함수의 반환값들로 이루어진 새로운 배열 생성해서 반환
    - 원본 배열 변경 X
    - forEach 단순히 요소를 가지고 작업만 진행 (반환값 없음)
    - map 요소를 가지고 작업한 결과로 배열을 새로 만듦 (반환값 있음)
*/
const mapArray = array.map(function(item, index){
    console.log(`index : ${index}, item : ${item}`);
    return item * item;
})

console.log(mapArray); // 결과값 : index : 0, item: : 20 ,..... ,index : 19, item : 1 [400, 361, 324, .... , 9, 4, 1]
console.log(array); // 결과값 : [20, 19, 18, .... , 3,  2,  1 ]

console.log('==============================');

/*
    filter(콜백 함수) : 콜백 함수의 반환값이 true인 배열의 요소 값만을 추출한 새로운 배열을 생성
    - 배열에서 특정 케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을 때 사용
    - 원본 배열 변경 불가능
*/
const filterArray = array.filter(function (item, index){
    return item % 2 === 1; // 2로 나눴을 떄 나머지가 1인 요소 반환
});

console.log(filterArray); // 결과값 : [19, 17, 15, 13, 11, 9,  7,  5,  3,  1]
console.log(array); // 결과값 : [20, 19, 18, .... , 3,  2,  1 ]

console.log('==============================');

/*
    find(콜백함수) : 콜백 함수 결과가 true인 첫번째 요소를 반환
*/
const findResult = array.find(function(item, index){
    return item % 2 === 1;
});

console.log(findResult); // 결과값 : 19 => 아이템을 나누기 2해서 나머지가 1인 요소들 중 첫번째 요소 반환

console.log('==============================');

/*
    findIndex(콜백함수) : 콜백 함수 결과가 true인 첫번째 요소의 인덱스를 반환
*/
const findIndexResult = array.findIndex(function(item, index){
    return item % 2 === 1;
});

console.log(findIndexResult); // 결과값 : 1

console.log('==============================');