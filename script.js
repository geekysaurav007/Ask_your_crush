let no = document.getElementById("no");
let yes = document.getElementById("yes");
let message = document.getElementById("message");

no.addEventListener("mouseover", () => {
    no.style.position = "absolute";
    no.style.left = Math.random() * 80 + "vw";
    no.style.top = Math.random() * 80 + "vh";
});

yes.addEventListener("click", () => {
    message.style.display = "block";
});

message.addEventListener("click", () => {
    message.style.display = "none";
});

message.style.display = "none";
