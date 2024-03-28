// 임시정보

const ID = 'userIdentity';
const PASSWORD = 'P!ssw0rd';
const EMAIL = 'email@email.com';
const AUTH_NUMBER = '1010';

/*========================================================================*/
// 회원가입

let id = '', password = '', passwordCheck = '', email = '', authNumber = '';
let isDuplicate = true, isPasswordPattern = false, isEqualPassword = false, isEmail = false, isDuplicateEmail = true, isEqualAuthNumber = false;

/*========================================================================*/
// 변수선언

const idInputElement = document.getElementById('id');
const passwordInputElement = document.getElementById('password');
const passwordCheckInputElement = document.getElementById('password-check');
const emailInputElement = document.getElementById('email');
const authNumberInputElement = document.getElementById('auth-number');

const checkDuplicateButtonElement = document.getElementById('check-duplication-button');
const checkEmailButtonElement = document.getElementById('check-email-button');
const checkAuthNumberButtonElement = document.getElementById('check-auth-number-button');

const idMessageElement = document.getElementById('id-message');
const passwordMessageElement = document.getElementById('password-message');
const passwordCheckMessageElement = document.getElementById('password-check-message');
const emailMessageElement = document.getElementById('email-message');
const authNumberMessageElement = document.getElementById('auth-number-message');

const signUpButtonElement = document.getElementById('sign-up-button');
const signInLinkElement = document.getElementById('sign-in-link');

/*========================================================================*/
// 아이디 중복확인 버튼 색 변화

function onIdInputHandler (event) {
    id = event.target.value;
    isDuplicate = true;

    if (id) { 
        checkDuplicateButtonElement.className = 'input-primary-button';
    } else {
        checkDuplicateButtonElement.className = 'input-disable-button';
    }
}

/*========================================================================*/
// 비밀번호 입력

function onPasswordInputHandler (event) {
    password = event.target.value;

    const passwordReg = /^(?=.*[a-zA-Z])(?=.*[0-9]){8,13}$/;
    const isPasswordPattern = passwordReg.test(password);

    if(isPasswordPattern){
        passwordMessageElement.className = 'input-message error';
        passwordMessageElement.textContent = '영문, 숫자를 혼용하여 8~13자 입력해주세요.';
        return;
    }
    passwordMessageElement.className = 'input-message';
    passwordMessageElement.textContent = '';
}

/*========================================================================*/
// 비밀번호 확인 입력

function onPasswordCheckInputHandler (event) {
    passwordCheck = event.target.value;

    const isEqualPassword = password === passwordCheck;

    if(!isEqualPassword) {
        passwordCheckMessageElement.className = 'input-message error';
        passwordCheckMessageElement.textContent = '비밀번호가 일치하지 않습니다.';
        return;
    }
    passwordCheckMessageElement.className = 'input-message';
    passwordCheckMessageElement.textContent = '';
}

/*========================================================================*/
// 이메일 인증 색 변화

function onEmailInputHandler (event) {
    email = event.target.value;
    isEmail = false;
    isDuplicateEmail = true;

    if (email) {
        checkEmailButtonElement.className = 'input-primary-button';
    } else {
        checkEmailButtonElement.className = 'input-disable-button';
    }
}

/*========================================================================*/
// 인증번호 인증확인 버튼 색 변화

function onAuthNumberInputHandler (event) {
    authNumber = event.target.value;
    isEqualAuthNumber = false;

    if (authNumber) {
        checkAuthNumberButtonElement.className = 'input-primary-button';
    } else {
        checkAuthNumberButtonElement.className = 'input-disable-button';
    }
}

/*========================================================================*/
// input 창에 입력 시 event 발생

idInputElement.addEventListener('input', function (event) {
    onIdInputHandler(event);
    setSignUpButton();
});

passwordInputElement.addEventListener('input', function (event) {
    onPasswordInputHandler(event);
    setSignUpButton();
});

passwordCheckInputElement.addEventListener('input', function (event) {
    onPasswordCheckInputHandler(event);
    setSignUpButton();
});

emailInputElement.addEventListener('input', function (event) {
    onEmailInputHandler(event);
    setSignUpButton();
});

authNumberInputElement.addEventListener('input', function (event) {
    onAuthNumberInputHandler(event);
    setSignUpButton();
});

/*========================================================================*/
// 아이디 입력

function onCheckDuplicateClickHandler (event) {
    if (!id) {
        return;
    }

    isDuplicate = id === ID;

    if (isDuplicate) {
        idMessageElement.className = 'input-message error';
        idMessageElement.textContent = '이미 사용중인 아이디 입니다.';
        return;
    }    
    idMessageElement.className = 'input-message primary';
    idMessageElement.textContent = '사용 가능한 아이디 입니다.';
}

/*========================================================================*/
// 이메일 입력

function onCheckEmailClickHandler (event) {
    if (!email) {
        return;
    }

    const emailReg = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
    isEmail = emailReg.test(email);

    if (!isEmail) {
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이메일 형식이 아닙니다.';
        return;
    }

    isDuplicateEmail = email === EMAIL;
    if (isDuplicateEmail) {
        emailMessageElement.className = 'input-message error';
        emailMessageElement.textContent = '이미 사용중인 이메일 입니다.';
        return;
    }
    emailMessageElement.className = 'input-message primary';
    emailMessageElement.textContent = '인증번호가 전송되었습니다.';
}

/*========================================================================*/
// 인증번호 입력

function onCheckAuthNumberClickHandler (event) {
    if (!authNumber) {
        return;
    }

    isEqualAuthNumber = authNumber === AUTH_NUMBER;

    if (!isEqualAuthNumber) {
        authNumberMessageElement.className = 'input-message error';
        authNumberMessageElement.textContent = '인증번호가 일치하지 않습니다.';
        return;
    }    
    authNumberMessageElement.className = 'input-message primary';
    authNumberMessageElement.textContent = '인증번호가 확인되었습니다.';
}

/*========================================================================*/
// 버튼 클릭 시 event 발생

checkDuplicateButtonElement.addEventListener('click', function (event) {
    onCheckDuplicateClickHandler(event);
    setSignUpButton();
});

checkEmailButtonElement.addEventListener('click', function (event) {
    onCheckEmailClickHandler(event);
    setSignUpButton();
});

checkAuthNumberButtonElement.addEventListener('click', function (event) {
    onCheckAuthNumberClickHandler(event);
    setSignUpButton();
});

/*========================================================================*/
// 회원가입 버튼

function setSignUpButton () {
    const isPrimaryButton = 
        id && password && passwordCheck && email && authNumber && 
        !isDuplicate && isPasswordPattern && isEqualPassword && isEmail && !isDuplicateEmail && isEqualAuthNumber;

    if (isPrimaryButton) {
        signUpButtonElement.className = 'primary-button full-width';
    } else {
        signUpButtonElement.className = 'disable-button full-width';
    }
}

/*========================================================================*/
// 로그인 버튼 클릭 후 페이지 이동

function onSignInLinkClickHandler (event) {
    window.location.href = '../sign-in';
}

signInLinkElement.addEventListener('click', onSignInLinkClickHandler);