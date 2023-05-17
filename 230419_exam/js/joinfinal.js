const form = document.querySelector('form');
const idInput = document.querySelector('#id');
const pwInput = document.querySelector('#password');
const pwCon = document.querySelector('#pwCon');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (pwInput.value !== pwCon.value) {
        alert('비밀번호가 일치하지 않습니다.');
        pwInput.focus();
    } else {
        const userId = idInput.value;
        if ((confirm`${userId}님, 회원가입을 진행하시겠습니까?`)) {
            alert(`${userId}님, 회원가입을 축하합니다!`);
            window.location.href = 'login.html';
        }
    }
});