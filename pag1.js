function pag1(){

    var nome = document.getElementById("nomeCompleto").value;
    var resumo = document.getElementById("resumo").value;

    if (nome == "" || resumo ==""){
        alert("Informe seu nome e seu resumo!")
    }
    localStorage.setItem("nomeCompleto", nome);
    localStorage.setItem("resumo", resumo);

}

function mostrarInputs(){
  document.getElementById("nomeCompleto").value = localStorage.getItem("nomeCompleto");
  document.getElementById("resumo").value= localStorage.getItem("resumo");
}

    mostrarInputs();
   var proximo = document.getElementById("proximo");
   proximo.addEventListener("click",pag1);

