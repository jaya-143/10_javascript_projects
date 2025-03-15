const switchBtn = document.querySelector(".switch");
const switchBtn1 = document.querySelector(".switch1");
const switchBtn2 = document.querySelector(".switch2");
const body = document.body;

switchBtn.addEventListener("click",()=>{
    body.classList.toggle("on");
});
switchBtn1.addEventListener("click",()=>{
    body.classList.toggle("on");
});
switchBtn2.addEventListener("click",()=>{
    body.classList.toggle("on");
});

