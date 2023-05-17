// id가 bttn 인거를 담아줘
const bttn = document.querySelector('#bttn');
const nav = document.querySelector('#nav');
console.log(bttn);
console.log(nav);

bttn.addEventListener('click', () => {
    bttn.classList.toggle('active');
    nav.classList.toggle('active');
});
