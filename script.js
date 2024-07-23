const field_texto = document.getElementById("entrada-texto");
const saida_container = document.querySelector(".container-saida-texto");

function criptografar(){
    let texto_criptografado = field_texto.value.replace(/e/gi, 'enter')
                                   .replace(/i/gi, 'imes')
                                   .replace(/a/gi, 'ai')
                                   .replace(/o/gi, 'ober')
                                   .replace(/u/gi, 'ufat');
    setar_campo_saida(texto_criptografado);
}

function descriptografar(){
    let texto_descriptografado = field_texto.value.replace(/enter/gi, 'e')
                                   .replace(/imes/gi, 'i')
                                   .replace(/ai/gi, 'a')
                                   .replace(/ober/gi, 'o')
                                   .replace(/ufat/gi, 'u');
    setar_campo_saida(texto_descriptografado);
}

function setar_campo_saida(texto){
    let saida_texto = document.createElement('p');
    let icone_copiar = document.createElement('img');
    saida_texto.textContent = texto;
    icone_copiar.src = "assets/copy-icon.png";
    icone_copiar.classList.add("icone-copiar");
    icone_copiar.addEventListener("click", copiar_texto);
    saida_texto.classList.add('saida-texto');
    saida_container.innerHTML = '';
    saida_container.appendChild(saida_texto);
    saida_container.appendChild(icone_copiar);
}


function copiar_texto(){
    let saida_texto = document.querySelector(".saida-texto").innerText;
    let icone_copiar = document.querySelector(".icone-copiar");
    icone_copiar.src = "assets/copied-icon.png";
    navigator.clipboard.writeText(saida_texto);
    alert('Texto copiado para a área de transferência');
}