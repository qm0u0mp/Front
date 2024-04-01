/*
    화살표 함수 : 
    - function 키워드 대신 화살표 (=>)를 사용하여 함수를 생성하는 방법
    - 기본적으로 일회성 함수, 익명 함수
*/

// 화살표 함수 사용하지 않았을 때
const func1 = function (arg1, arg2) {

}

// 화살표 함수 사용했을 때
// func1 = (arg1, arg2) => {

// }

//============================================================================================================================================================//

/* 
    매개변수 지정 방법 
*/

// 매개변수가 없을 경우 (매개변수에 반드시 괄호가 있어야함)
func = () => { }

// 매개변수가 하나일 경우 (매개변수에 괄호 제거 가능)
func = (arg) => { }
func = arg => { }

// 매개변수가 여러개일 경우 (매개변수에 괄호 제거 불가능)
func = (arg1, arg2) => { }
// func = arg1, arg2 => { } // 1. func = arg1; / 2. arg => { }

//============================================================================================================================================================//

/*
    구현부 지정 방법
*/

// single line block
func = (arg) => {
    return arg * arg;
}

// 구현부가 한 줄이면 중괄호를 생략할 수 있음
// 해당 구문의 결과를 return
// return 키워드 제거하여 작성 가능
func = (arg) => arg * arg;

// 구현부가 한 줄이면서 객체 리터럴을 반환할 때 함수의 중괄호를 제거하면 객체 리터럴을 소괄호로 묶어야함
func = (name, tombName) => {
    return {
        name: name,
        tombName: tombName
    };
}

//          |
//          |
//          ▼

func = (name, tombName) => {
    return {
        name,
        tombName
    };
}

// 객체 리터럴을 반한활 떄 중괄호 제거, 소괄호 묶음
//          |
//          |
//          ▼

func = (name, tombName) => ({
    name, 
    tombName
});

//============================================================================================================================================================//

/*
    화살표 함수의 호출 : 
    - 화살표 함수는 익명 함수로만 사용할 수 있기 때문에 함수 표현식 형태로 변수에 저장하여 사용
    - 콜백 함수에 많이 사용됨
*/

const pow = (x) => {
    return x * x ;
};
console.log(pow(10)); // 결과값 : 100

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (value, index) {
    console.log(`index : ${index} / value : ${value}`); // 결과값 : index : 0 / value : 1 .... index : 4 / value : 5
})
numbers.forEach((value, index) => {
    console.log(`index : ${index} / value : ${value}`); // 결과값 : index : 0 / value : 1 .... index : 4 / value : 5
})