// fetch('https://dummyjson.com/quotes')
//     .then((Response) => Response.json())
//     .then((data) => {
//         let output = ""
//         arr.forEach((quote) => {
//             output += `
//             <ul>  
//                 <li>${quote.quote}</li>
//                 <li>${quote.author}</li>
//             </ul>
//             <hr>
//             `;
//         });
//         document.querySelector('#result').innerHTML = output;
//     })
//     .catch((err) => console.log(err));

// const resultContainer = document.querySelector("#result");

// fetch('https://dummyjson.com/quotes')
//     .then((Response) => Response.json())
//     .then((data) => {
//         const { quote, author } = JSON.parse(data)[0];

//         resultContainer.querySelector(".quote").textContent = quote;
//         resultContainer.querySelector(".author").textContent = `${author}`;
//     })
//     .catch((err) => console.log(err));

// const quoteEl = document.querySelector('.quote');
// const authorEl = document.querySelector('.author');

// fetch('https://type.fit/api/quotes')
//     .then(response => response.json())
//     .then(data => {
//         const randomSaying = data[Math.floor(Math.random() * data.length)];
//         quoteEl.textContent = randomSaying.text;
//         authorEl.textContent = randomSaying.author || 'Unknown';
//     })
//     .catch(error => console.log(error));


const quoteURL = 'https://dummyjson.com/quotes';

fetch(quoteURL)
    // .then(console.log)
    .then(res => res.json()) //json데이터 > 객체로 변환
    // .then(console.log) // 데이터 구조 파악
    .then(data => {
        console.log(data);

        // 결과를 보여줄 요소를 result라는 변수에 저장, id가 result라는 친구가 있으면 result에 담아줘 
        const result = document.querySelector('#result');
        // 0~29 사이의 수를 랜덤으로 뽑아내는 변수
        // quote, author 같은 값을 불러와야 하므로 random 변수에 담아줌
        const random = Math.floor(Math.random() * 30);

        result.querySelector('.quote').innerHTML = data.quotes
        [random].quote;

        result.querySelector('.author').innerHTML = `- ${data.quotes
        [random].author}`;

    })
    .catch(err => console.log(err));