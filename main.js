document.getElementById("handburgerid").addEventListener("click", handfunk);
document.getElementById("offbtn").addEventListener("click", handfunkoff);
document.getElementById("anbtn").addEventListener("click", redirecttoanimation);
document.getElementById("homebtn").addEventListener("click", redirecttohome);
document.getElementById("pcbtn").addEventListener("click", redirecttopc);
document.getElementById("abbtn").addEventListener("click", redirecttoab);


function handfunk(){
    console.log("test")
    document.getElementById("sidebarid").style.transform = "translateX(0px) translateY(0px)";
    document.getElementById("offbtn").style.zIndex = "19";
}
function handfunkoff(){
    console.log("test")
    document.getElementById("sidebarid").style.transform = "translateX(-200px) translateY(-500px)";
    document.getElementById("offbtn").style.zIndex = "-20";
}
function redirecttoanimation(){
    window.location.href = "Animation.html";
}
function redirecttohome(){
    window.location.href = "mane.html";
}
function redirecttopc(){
    window.location.href = "PoliceChicken.html";
}
function redirecttoab(){
    window.location.href = "about.html";
}