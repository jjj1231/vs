const bttn = document.querySelector("#save");
const note = document.querySelector("#bookList");

bttn.onclick = () => {
    bookList.classList.toggle("hidden")
}

const save = document.querySelector("#save");

save.onclick = () => {
    title.innerHTML = `보건교사, 안은영`;
    author.innerHTML = `정세랑`;
};