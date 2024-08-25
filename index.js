function encriptar(){
    let texto = document.getElementById("texto").value;
    let titulo_Mensaje = document.getElementById("titulo_Mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("muneco");
    let mensaje_Encriptado_Div = document.getElementById("mensaje_Encriptado")

    let texto_Cifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if(texto.length != 0){
        texto = texto_Cifrado;
        parrafo.textContent = texto_Cifrado;

        imagen.style.display = "none";
        titulo_Mensaje.style.display = "none";

        mensaje_Encriptado_Div.style.justifyContent = "flex-star";
        mensaje_Encriptado_Div.style.marginTop = "0";
        parrafo.style.marginTop = "20px";
        mensaje_Encriptado_Div.style.top = "0";
        mensaje_Encriptado_Div.style.textAlign = "justify"


    } else{
        alert("Debes ingresar algún texto");
    }
}