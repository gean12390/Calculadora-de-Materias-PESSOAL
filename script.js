import {copiar_ncm} from './ncm.js'
import {redirecionar} from './redirecionar.js'

for(let ver= 0; ver <= 0; ver++){
    redirecionar();
}


let soma = 0;


//Quando Clicado TAB e esteja no COD. DO MATERIAL, pula direto para o PESO DO MATERIAL
document.addEventListener('keydown', (event) =>{
    if (document.activeElement.id === 'select' && event.key === 'Tab') {
        document.getElementById('limpar').select();
    }   
    
});

//ATIVIDA AO CLICAR NO BOTAO
document.getElementById('calcular').addEventListener('click', () => calcular());

// ATIVA AO CLICAR NA TECLA 'ENTER'
document.body.addEventListener('keypress', (event) => {
        if(event.key == 'Enter'){
            calcular();
        }
});


    function calcular(){

    // VARIAVEIS
    let select = document.getElementById('select').value;
    let peso_mate = document.getElementById('peso_mate').value;
    let peso_unid = document.getElementById('peso_unid').value;
    let peso_total = document.getElementById('peso_total');
    let ipi_input = document.getElementById('ipi');
    let icms_input = document.getElementById('icms');
    let total = document.getElementById('total');
    let soma_final = document.getElementById('soma_f');
    let reducao = document.getElementById('reducao');
    let PIS = document.getElementById('pis');
    let COFINS = document.getElementById('cofins');


    // PESO MATERIAL * PESO/UNID
    let peso_sem_ipi = (peso_mate * peso_unid);

    // IPI
    let IPI = (parseFloat(peso_sem_ipi) * 0.0325).toFixed(2);

    //Total com IPI
    let total_com_ipi = (parseFloat(peso_sem_ipi) + parseFloat(IPI)).toFixed(2);

    // ICMS NORMAL
    let ICMS = (parseFloat(peso_sem_ipi) * 0.18).toFixed(2);

    //Redução de Pis/COFINS
    let re_pis_cofins = (parseFloat(peso_sem_ipi) - ICMS).toFixed(2);

    //PIS
    let pis = (re_pis_cofins * 0.0065).toFixed(2);

    //COFINS
    let cofins = (re_pis_cofins * 0.03).toFixed(2);


    soma += peso_sem_ipi; 

    // SAÍDA

    if (select == '02' || select == 20 || select == 21 || select == 22) {
        peso_total.value = parseFloat(peso_sem_ipi).toFixed(2);
        ipi_input.value = IPI;
        icms_input.value = ICMS;
        total.value = total_com_ipi;
        reducao.value = re_pis_cofins;
        PIS.value = pis;
        COFINS.value = cofins;
        soma_final.value =  soma.toFixed(2);

        if (select == '02') {   
            ipi_input.value *= 0;
            total.value = parseFloat(peso_sem_ipi).toFixed(2);

        } else if (select == 20 || select == 22) {
            if (select == 20) {
                icms_input.value = (parseFloat(peso_sem_ipi) * 0.12).toFixed(2);
                reducao.value = (peso_sem_ipi - icms_input.value).toFixed(2);
            } else {
                icms_input.value = ((((parseFloat(peso_sem_ipi) * 0.3333) - parseFloat(peso_sem_ipi)) * -1) * 0.18).toFixed(2);
                reducao.value = (peso_sem_ipi - icms_input.value).toFixed(2);
            }
            PIS.value = (reducao.value * 0.0065).toFixed(2);
            COFINS.value = (reducao.value * 0.03).toFixed(2)
        }
    }



    }

//COPIAR O NCM
    copiar_ncm(); 

// LIMPAR 
let limpar = document.getElementById('limpar');



limpar.addEventListener('click', () => {
    document.getElementById('b_icms_redu').innerHTML = ' ';

});
limpar.addEventListener('dblclick', () => {
    document.getElementById('soma_f').value = '';
    soma -= soma;
});
//LIMPAR A TELA QUANDO PRECIONADO A TECLA 'PageUp' DO TECLADO:
document.body.addEventListener('keydown', (event) => 
    event.key === 'PageUp' && document.forms[0].reset()); 
    //SÃO A MESMA COISA, POREM ESTE UTILIZA O CODIGO DA TABELA ASCII PARA ATIVAR 
    /* events.keyCode  === 35 && document.getElementById('limpar').click() */ 
    
    // LIMPA APENAS O CAMPO DO SOMATORIO QUANDO PRECIONADO A TECLA 'PageDown'
    document.body.addEventListener('keydown', (event) => 
        event.key === 'PageDown' && (document.getElementById('soma_f').value = ''));


let i = true;
document.getElementById('botao').addEventListener('click', () => {
    if (i == false) {
        document.getElementById('tabela').innerHTML = " ";

        let tabela = document.getElementById('botao').value = "ABRIR";
    } else {
        document.getElementById('tabela').innerHTML = "<td><strong>LETRA</strong></td><td><strong>CATEGORIA</strong></td></tr><tr><td><strong>A</strong></td><td>BUCHA BRONZE</td></tr><tr><td><strong>B</strong></td><td>TARUGO DE BRONZE</td></tr><tr><td><strong>C</strong></td><td>BARRA LATAO</td></tr><tr><td><strong>D</strong></td><td>CHAPA LATAO</td></tr><tr><td><strong>F</strong></td><td>BARRA COBRE</td></tr><tr><td><strong>G</strong></td><td>CHAPA COBRE</td></tr><tr><td><strong>H</strong></td><td>TUBO COBRE</td></tr><tr><td><strong>I</strong></td><td>BARRA ALUMINIO</td></tr><tr><td><strong>J</strong></td><td>CHAPA ALUMINIO</td></tr><tr><td><strong>L</strong></td><td>TARUGO ALUMINIO</td></tr><tr><td><strong>K</strong></td><td>TUBO ALUMINIO</td></tr><tr><td><strong>M</strong></td><td>CHAPA INOX</td></tr><tr><td><strong>N</strong></td><td>BARRA INOX</td></tr><tr><td><strong>O</strong></td><td>CHUMBO BRIDGESTONE</td>";
        document.getElementById('botao').value = 'ESCONDER';
    }
    i = !i; //alterna o valor entre verdadiro e falso

});

