
function detectarDispositivo() {
    const usuarioAgent = navigator.userAgent.toLowerCase();

    // Verifica se é um dispositivo móvel (celular ou tablet)
    if (/iphone|ipod|android|blackberry|windows phone|opera mini/i.test(usuarioAgent)) {
        return 'celular';
    } else {
        return 'computador';
    }
}

function redirecionar() {
    const dispositivo = detectarDispositivo();
    
    if (dispositivo === 'celular') {
        window.location.href = './antigo/celular.html'; // Link para celular
    } else {
        window.location.href = './computador/computador.html'; // Link para computador
    }
}

// Chama a função de redirecionamento
redirecionar();
