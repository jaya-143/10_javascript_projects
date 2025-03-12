const btnElement = document.getElementById('button');
const spanElement = document.getElementById('update');

btnElement.onclick = function(){
    const yourname = prompt("Enter your name");
    spanElement.textContent = yourname;
}