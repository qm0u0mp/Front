// 버튼 클릭 시 페이지 이동

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
