let web_keyword = document.querySelector("#web_keyword");
let searchBtn = document.querySelector("#search_btn");

searchBtn.addEventListener('click', function (e) {
    e.preventDefault();

    let searchTitle = web_keyword.value;


    const REST_API_KEY = "45e923534fd7ec882c4ee55c820207a2";

    fetch(`https://dapi.kakao.com/v2/search/web?query=${searchTitle}`, {
        headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`
        }
    })
        .then((Response) => Response.json())
        .then(renderHTML);
});

function renderHTML(searchData) {
    console.log(searchData);

    const result = document.querySelector("#result");
    let output = "";

    searchData.documents.forEach((data) => {
        console.log(data);
        output += `
        <ul style="list-style:none">
            <li>${data.title}</li>
            <li><a href=${data.url} target="_blank">${data.contents}</a></li>
        </ul>`
        // taget="_blank" : 새창 열기

    });

    result.innerHTML = output;

}
