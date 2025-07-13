let loading = document.createElement("img");
loading.src = "loading.gif";
let div = document.getElementById("div");
loading.style.position = "absolute";
loading.style.left = "50%";
loading.style.bottom = "50%";
loading.style.height = "40%";

loading.style.transform = 'translate(-50%, 50%)';


function logout() {
    document.body.appendChild(loading);
    div.style.display = "none";
    setTimeout(() => {
        window.location.href = "../index.html"
    }, 3000);

}

