/*
    타입선언 : 
    - 변수 및 함수에 타입을 지정하여 타입에 대한 제한을 추가할 수 있음
*/

let variable: string = '문자열';
// variable = true;

// 함수의 반환 타입 지정 => function func() : 반환타입 {}
// 매개변수 타입 지정  => function func(변수명 : 타입) {}
function func(arg: number): string {
    return arg + '';
}

// 화살표 함수에서의 타입 선언
const arrowFunc = (arg: number) : string => {
    return arg + '';
}

//================================================================================//

/*
    typescript의 타입
    - string : 문자열
    - number : 숫자
    - boolean : 논리
    - null : null 값
    - undefined : 정의되지 않음
    - object : 참조타입
    - array : 배열타입
    - enum : 열거형 타입
    - void : 함수에서 반환값이 없음
    - any : 모든 타입
*/

// array 타입
const numbers1: number[] = [1, 2, 3, 4, 5];
const numbers2: Array<number> = [1, 2, 3, 4, 5];

// enum 타입
enum Color {
    RED, GREEN, BLUE
}
const color: Color = Color.RED;

// any 타입
let anyV: any = 10;
anyV: '10';

// void 타입
const aFunc = (): void => {

}

//================================================================================//

/*
    타입추론 :
    - 타입을 선언하지 않고 변수에 값이 할당되는 순간에 할당된 값에 따라 변수의 타입이 결정나는 것
*/

let stringVariable = '문자열';
// stringVariable = 10; => 에러 : 'number' 형식은 'string' 형식에 할당할 수 없습니다.

//================================================================================//

/*
    타입 변환 :
    - as 키워드로 형변환 가능 (객체일 때 자주 사용)
*/

const PI: any = '3.14';

// as 키워드로 number 타입으로 형변환
let piNumber: number = PI as number;
piNumber = Number(PI);

//================================================================================//

/*
    유니온 타입
    - 복수의 타입을 지정하는 방법
*/

let union: number | null;

union = 10;
union = null;
// union = '10'; => 에러 : 'string' 형식은 'number' 형식에 할당할 수 없습니다.

//================================================================================//

/*
    리터럴 타입
    - 지정한 리터럴 값만 가질 수 있는 타입
*/

let gender: '남' | '여';

gender = '남';
gender = '여';
// gender = '남자'; => 에러 : '"남자"' 형식은 '"남" | "여"' 형식에 할당할 수 없습니다.