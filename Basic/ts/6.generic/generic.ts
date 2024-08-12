/*
    제너릭 : 
    - 선언 시점이 아니라 컴파일 시점에 타입을 명시하여 하나의 타입이 아닌 여러 타입을 사용할 수 있도록 하는 기법
    - 코드 안전성, 재사용성을 높일 수 있음
*/

// interface Person {
//     name: string;
//     data: any;
// }

// const person: Person = {
//     name: '홍길동',
//     data: '김철수'
// }

// person.data; // person에 있는 데이터의 타입 : any

interface Person<T> {
    name: string;
    data: T;
}

const person: Person<string> = {
    name: '홍길동',
    data: '김철수'
}

person.data; // person에 있는 데이터의 타입 : string

console.log('==================================================');

// <T>(name: string, data: T) : 괄호 앞의 T는 매개변수 안의 T를 제너릭 타입으로 사용한다는 것을 알려주는 것
const func = <T>(name: string, data: T) => {
    const result: Person<T> = { 
        name, data
    };
    return result;
}

const person1 = func('김철수', '홍길동');
const person2 = func('이영희', 20);

person2.data;