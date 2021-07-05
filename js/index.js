function guardarNota(){

    //Obteniendo valores del formulario
    var nota = document.getElementById("nota").value; 

    // Accediendo al body
    var body = document.getElementsByTagName("body")[0];
    var col = document.getElementById("laCol");

    // Creando elementos
    var divCard = document.createElement("div")
    var divCarBody = document.createElement("div")
    var blockquote = document.createElement("blockquote");
    var p = document.createElement("p");
    var footer = document.createElement("footer");
    var br = document.createElement("br");
    var texto = document.createTextNode(nota);
    var texto2 = document.createTextNode("05/07/21, 09:00am");



    col.appendChild(divCard);
    divCard.setAttribute("class", "card bg-light");

    divCard.appendChild(divCarBody);
    divCarBody.setAttribute("class", "card-body");

    divCarBody.appendChild(blockquote);
    blockquote.setAttribute("class", "blockquote mb-0");

    blockquote.appendChild(p);
    p.appendChild(texto);
    
    blockquote.appendChild(footer);
    footer.setAttribute("class", "blockquote-footer text-right");
    footer.appendChild(texto2);

}

          