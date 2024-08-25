function encriptar(){
    let texto = document.getElementById("texto").value;
    let titulo_Mensaje = document.getElementById("titulo_Mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("muneco");
    let mensaje_Encriptado_Div = document.getElementById("mensaje_Encriptado");
    let mensaje = document.getElementById("mensaje");
    let boton_Copiar = document.getElementById("boton_Copiar");

    let texto_Cifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if(texto.length != 0){
        texto = texto_Cifrado;
        mensaje.value = texto_Cifrado;

        imagen.style.display = "none";
        titulo_Mensaje.style.display = "none";
        parrafo.style.display = "none";
        mensaje_Encriptado_Div.style.display = "none";

        mensaje.style.display = "block";
        boton_Copiar.style.display = "block";


    } else{
        alert("Debes ingresar algún texto");
    }
}

function copiar(){
    const texto = document.getElementById("mensaje");

    texto.select();
    texto.setSelectionRange(0,99999);

    document.execCommand("copy");
    alert("Texto copiado");
}