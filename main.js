let adviceID = document.getElementById("advice-id");
let advice = document.getElementById("advice-text");
let genAdviceBtn = document.querySelector('.circle');

document.addEventListener("DOMContentLoaded", function () {
    getAdvice();
})

const getAdvice = async () => {
    const adviceObj = await fetch("https://api.adviceslip.com/advice");
    const adviceData = await adviceObj.json();
    genAdvice(adviceData);
}

const genAdvice = (obj) => {
    adviceID.innerHTML = "ADVICE #" + obj.slip.id;
    advice.innerHTML = '"' + obj.slip.advice + '"';
}

genAdviceBtn.addEventListener("click", () => {
    location.reload();
    return false;
});