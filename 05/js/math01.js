// window.onload = () => {
//     const bgCount = 5;

//     // let randomeNumber = Math.floor(Math.random() * bgCount) + 1;
//     // document.body.style.backgroundImage = `url('../05/img/bg-${randomeNumber}.jpg')`;

//     setInterval(() => {
//         let randomeNumber = Math.floor(Math.random() * bgCount) + 1;
//         document.body.style.backgroundImage = `url('../05/img/bg-${randomeNumber}.jpg')`;
//     }, 1500);
//     // 1.5초마다 랜덤으로 이미지를 불러오게 함 

// }

// setInterval(window.onload = () => {
//     const bgCount = 5;
//     let randomeNumber = Math.floor(Math.random() * bgCount) + 1;
//     document.body.style.backgroundImage = `url('../05/img/bg-${randomeNumber}.jpg')`;
// }, 1500)


let windowOnload = window.onload = () => {
    const bgCount = 5;
    let randomeNumber = Math.floor(Math.random() * bgCount) + 1;
    document.body.style.backgroundImage = `url('../05/img/bg-${randomeNumber}.jpg')`;
}

setInterval(windowOnload, 1500);