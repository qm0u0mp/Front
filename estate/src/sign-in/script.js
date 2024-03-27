// 임시정보

const ID = 'userIdentity';
const PASSWORD = 'P!ssw0rd';

/*========================================================================*/
// 로그인 성공, 실패

function onSignInButtonClickHandler(event) {
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    if (id === ID && password === PASSWORD) {
        alert('로그인 성공!');
    } else {
        const signInMessageElement = document.getElementById('sign-in-message');
        signInMessageElement.textContent = '로그인 정보가 일치하지 않습니다.';
    }
}

/*========================================================================*/
// 버튼 클릭 시 페이지 이동

// 회원가입
function onSignUpLinkClickHandler(event) {
    // window.location.href = '../sign-up/index.html'; => index.html 안 붙여도 sign-up 페이지로 이동함
    window.location.href = '../sign-up';
}
const signUpLinkElement = document.getElementById('sign-up-link');
signUpLinkElement.addEventListener('click', onSignUpLinkClickHandler);

// 카카오
function onKakaoButtonClickHandler(event) {
    window.location.href = 'https://developers.kakao.com/';
}
const kakaoButtonElement = document.getElementById('kakao-button');
kakaoButtonElement.addEventListener('click', onKakaoButtonClickHandler);

// 네이버
function onNaverButtonClickHandler(event) {
    window.location.href = 'https://developers.naver.com/';
}
const naverButtonElement = document.getElementById('naver-button');
naverButtonElement.addEventListener('click', onNaverButtonClickHandler);

/*========================================================================*/
