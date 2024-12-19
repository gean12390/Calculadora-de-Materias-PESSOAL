export {copiar_ncm };


//FUNÇÃO PARA COPIAR O NCM
function copiar_ncm() {

    let copiar_somatorio = document.getElementById('copiar_somatorio');

    copiar_somatorio.addEventListener('click', () => {

        let copiar_som = document.getElementById('soma_f');

        // Seleciona o texto dentro do input
        copiar_som.select();

        // Verifica se a seleção foi bem-sucedida
        document.execCommand('copy');
    });

}

document.getElementById('NCM').addEventListener('keydown', (event) => {
    let temp = document.getElementById('temp');
    let evento = event.key.toLowerCase()
        evento === 'a' && (temp.value = 74072921); 
        evento === 'b' && (temp.value = 74072910); 
        evento === 'c' && (temp.value = 74072110); 
        evento === 'd' && (temp.value = 74092900); 
        evento === 'f' && (temp.value = 74071010); 
        evento === 'g' && (temp.value = 74091900); 
        evento === 'h' && (temp.value = 74111010); 
        evento === 'i' && (temp.value = 76042919); 
        evento === 'j' && (temp.value = 76061290); 
        evento === 'k' && (temp.value = 76082090); 
        evento === 'l' && (temp.value = 76012000); 
        evento === 'm' && (temp.value = 72193300); 
        evento === 'n' && (temp.value = 72221100); 
        evento === 'o' && (temp.value = 78011011);

    temp.select();
    document.execCommand('copy');
})


