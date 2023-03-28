var yourvote = 1;
document.querySelectorAll(".vote").forEach(btn => {
    btn.addEventListener("click", ()=>{
        reset();
        btn.style.background = "hsl(25, 97%, 53%)";
        btn.style.color = "white";
        btn.style.opacity = 1;
        yourvote = btn.innerHTML ;
        console.log(yourvote);
    })
});
function reset(){
    document.querySelectorAll(".vote").forEach(btn => {
        btn.style.background = "hsl(212, 17%, 22%)";
        btn.style.opacity = 0.6;
    });
}
document.getElementById("submitbutton").addEventListener("click",()=>{
    document.getElementById("main").style.display = "none";
    document.getElementById("thankyou").style.display = "flex";
    document.getElementById("js").innerHTML="You selected "+yourvote+" out of 5.";
});
