function Langs(){
    fetch("Data/Languages.json").then(res=>res.json()).then(Data=>{
        let d=document.getElementById("languages");
        let re="";
        for(let l of Data)
            re+=`<li><a href="#">${l.name}</a></li>`;
        d.innerHTML+=re;
    })
}
function Ads(){
    fetch("Data/ads.json").then(res=>res.json()).then(Data=>{
        let d=document.getElementById("Ads");
        let re="";
        for(let l of Data)
            re+=`<div>${l.name}</div></li>`;
        d.innerHTML+=re;
    })
}
window.onload=()=>{ 
    Langs();
    Ads();
}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 

