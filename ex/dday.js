const remainTime = document.querySelector("#remain-time");

function diffDay() {
    const masTime = new Date("2023-4-23");
    const todayTime = new Date();
    const diff = masTime - todayTime;

    const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
    const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const diffMin = Math.floor((diff / (1000 * 60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);

    remainTime.innerHTML = `<span style='font-color:lightbule'>D-${diffDay}</span> ${diffHour}hour ${diffMin}min ${diffSec}sec`;

}

diffDay();
setInterval(diffDay, 1000);