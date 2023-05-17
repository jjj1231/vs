const bttn = document.querySelector("button");
console.log(bttn);

bttn.onclick = () => {
    document.body.classList.toggle("dark");
}