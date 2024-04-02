/*
    클래스 정의 :
    - 속성을 사전 정의해서 사용
*/

class Sample1 {
    field : string;

    constructor(field: string){
        this.field = field;
    }
}

console.log('==================================================');

/*
    접근제어자
    - public : 클래스 내부, 자식 클래스 내부, 모든 위치 
    - protected : 클래스 내부, 자식 클래스 내부
    - private : 클래스 내부
    - typescript에는 패키지라는 개념이 없기 때문에 기본적으로 public으로 지정됨
*/

class Sample2 {
    private privateField: string;
    protected protectedField: string;
    public publicField: string;
    
    constructor() {
        this.privateField = '프라이빗 필드';
        this.protectedField = '프로텍티드 필드';
        this.publicField = '퍼블릭 필드';
    }
}

console.log('==================================================');

/*
    생성자 매개변수에 접근 제어자 지정
    - 생성자의 매개변수에 접근 제어자를 지정하여 필드 선언 가능
*/

class Sample3 {

    // 클래스 내부에 변수를 선언했을 시, 제어자를 입력하지 않아도 속성으로 인식하여 호출 가능
    // 인스턴스 생성하여 값을 출력했을 시, 4개의 속성값이 모두 출력됨
    // public publicField: string;
    // public protectedField: string;
    // public privateField: string;
    // localVriable: string;

    constructor(
        public publicField: string,
        public protectedField: string,
        public privateField: string,
        localVriable: string // 제어자를 넣지 않았을 시 속성으로 인식하지 않기 때문에 this 함수를 이용하여 출력 시 찾을 수 없음
    ) {
        this.publicField = publicField;
        // this.localVriable = localVriable; 필드가 아니기 때문에 this에서 찾을 수 없음, 존재하지 않는거에 대해서 생성하지 않음
    }
}

console.log('==================================================');

/*
    readonly :
    - readonly가 선언된 클래스 속성은 선언 시 또는 생성자 내부에서만 값을 할당 할 수 있음
    - 값을 재할당 할 수 없고 오직 읽기만 가능
    - 상수 선언에 사용됨
*/

class Sample4 {
    public readonly field1: string = '퍼블릭 읽기전용 필드1';
    public readonly field2: string;

    constructor (
        field2: string,
        public readonly field3: string
    ) {
        this.field2 = field2;
    }
}

const Sample4Instance = new Sample4('퍼블릭 읽기 전용 필드2','퍼블릭 읽기 전용 필드3');
console.log(Sample4Instance);

// Sample4Instance.field1 = '변경'; => 에러 : 읽기 전용 속성이므로 'field1'에 할당할 수 없습니다.

console.log('==================================================');

/*
    추상 클래스 :
    - 하나 이상의 추상 메서드를 포함하는 클래스, abstract 키워드로 선언
*/

abstract class AbstractClass {
    abstract abstractMethod (arg: string): string;
}
class SubClass extends AbstractClass {
    abstractMethod(arg: string): string {
        return arg;
    }
}

console.log('==================================================');