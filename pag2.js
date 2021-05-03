function pag2(){
    var resposta;
    var resp = document.getElementById("lista").value;

    
    if (resp1.checked){
         resposta = "Para minha área é um diferencial."
    }else if (resp2.checked){
        resposta = "Gosto de aprender coisas novas."
    }else{
        resposta = "Quero viajar para o exterior."
    }
   
    localStorage.setItem("lista", resposta);
}

function marcarRadio(){
    if(localStorage.getItem("lista")){
        var resp = localStorage.getItem("lista");

        if (resp == "Para minha área é um diferencial."){
            resp1.checked = true;
        } else if (resp == "Gosto de aprender coisas novas." ){
                resp2.checked = true;
        } else if (resp == "Quero viajar para o exterior.") {
                resp3.checked = true;
    }
    
    }

}
marcarRadio()

function lista2(){
    var resposta;
    var resp = document.getElementById("lista2").value;
    if (resposta1.checked){
        resposta = "2 horas";
    }else if (resposta2.checked){
        resposta = "Entre 3/4 Horas";
    }else if (resposta3.checked){
        resposta = "Horário Integral";
    }
    localStorage.setItem("lista2", resposta)
 }
 lista2();

 function marcarNovo(){
    if(localStorage.getItem("lista2")){
        var resp = localStorage.getItem("lista2");
        if (resp == "2horas"){
            resposta1 = true;
        }else if (resp == "Entre 3/4 Horas"){
            resposta2 = true;
        }else if (resp == "Horário Integral"){
            resposta3 = true;
        }
    }
    marcarNovo()

 }

function mostrarOutroRadio(){
    document.getElementById("lista2").style.display = "block";
}


var pag_3 = document.getElementById("pag3");
pag_3.addEventListener("click", pag2);