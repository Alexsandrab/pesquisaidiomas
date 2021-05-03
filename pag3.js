function pag3() {
    var select = document.getElementById("id").value;

    localStorage.setItem("id", select);
}

function mostrarResultado() {
    document.getElementById("id").value = localStorage.getItem("id");
}

mostrarResultado();

var pag4 = document.getElementById("pag_4");
pag4.addEventListener("click", pag3);