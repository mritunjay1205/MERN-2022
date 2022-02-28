window.addEventListener('load',bindEvent);

function bindEvent(){
    document.getElementById("btn").addEventListener("click",computeEvent)
}
function computeEvent(){
    Allowance.basicSalary = document.getElementById("basicSalarys").value ? parseInt(document.getElementById("basicSalarys").value) : 0;
    // document.getElementById("HRA").innerText=Allowance.Hra().toLocaleString("en-IN");
    // document.getElementById("DA").innerText=Allowance.Da().toLocaleString("en-IN");
    // document.getElementById("TA").innerText=Allowance.Ta().toLocaleString("en-IN");
    // document.getElementById("MA").innerText=Allowance.Ma().toLocaleString("en-IN");
    // document.getElementById("PF").innerText=Allowance.Pf().toLocaleString("en-IN");
    // document.getElementById("GS").innerText=Allowance.Gs().toLocaleString("en-IN");
    // document.getElementById("NS").innerText=Allowance.Ns().toLocaleString("en-IN");
    var str = "";
    for(let key in Allowance){
        if(typeof Allowance[key] === 'function' )
            str += `<h4> ${key.toLocaleUpperCase()} is : &#x20B9; ${(Allowance[key]()).toLocaleString('hi-in')}</h4>`;
    }
    document.getElementById("allowsences").innerHTML = str;
}