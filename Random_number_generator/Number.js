const generayeBtn = document.getElementById("generate-btn");
const numberElement = document.getElementById("Random-number");

generayeBtn.addEventListener("click",()=>{
    const randomNumber = Math.floor(Math.random()*100)+1;

    numberElement.textContent = randomNumber;
});