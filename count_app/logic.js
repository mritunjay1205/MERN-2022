window.addEventListener('load',bindEvent);

function bindEvent(){
    var btnis = document.getElementById("btn");
    btnis.addEventListener('click',pluse);
}

var count = 0;
function pluse(){
    count++;
    var span = document.getElementsByTagName("span")[0];
    span.innerHTML =`<i> ${count}</i>`;
    console.log("i am pluse" + span);
}