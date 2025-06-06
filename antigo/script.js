function calcular() {

    // VARIAVEIS
    let select = document.getElementById('select').value;
    let SIP = document.getElementById('SIP').value;
    let FCP = document.getElementById('FCP').value;
    let AL = document.getElementById('AL').value;
    let REDU = document.getElementById('REDU').value;
    let peso_total = document.getElementById('peso_total').value;
    let peso_mate = document.getElementById('peso_mate').value;
    let peso_unid = document.getElementById('peso_unid').value;
    let reducao = document.getElementById('reducao').value;
    let total = document.getElementById('total').value;
    let NCM = document.getElementById('NCM').value;
    let A = document.getElementById('A').value;
    let B = document.getElementById('B').value;
    let C = document.getElementById('C').value;
    let D = document.getElementById('D').value;
    let F = document.getElementById('F').value;
    let G = document.getElementById('G').value;
    let H = document.getElementById('H').value;
    let I = document.getElementById('I').value;
    let J = document.getElementById('J').value;
    let K = document.getElementById('K').value;
    let L = document.getElementById('L').value;
    let M = document.getElementById('M').value;
    let N = document.getElementById('N').value;
    let O = document.getElementById('O').value;

    // PESO MATERIAL * PESO/UNID
    peso_total = (peso_mate * peso_unid);
    

    // IPI
    let IPI_1 = 0;
    let IPI_2 = (peso_total * 0.0325);

    total = (peso_total + IPI_2);


    // ICMS NORMAL
    let ICMS_NORMAL = (peso_total * 0.18);
    // REDUÇÃO ICMS PIS/COFINS (18%)
    let RICM_PC_NORMAL = (peso_total - ICMS_NORMAL);


    // ICMS FORA DO ESTADO (12%)
    let ICMS_FCP = (peso_total * 0.12);
    let RICM_PC_FCP = (peso_total - ICMS_FCP);


    // ICMS REDUÇÃO (33,33%)
    let ICMS_REDU_CNT1 = (peso_total * 0.3333);
    let ICMS_REDU_CNT2 = (peso_total - ICMS_REDU_CNT1);
    let ICMS_REDU_RESUL = (ICMS_REDU_CNT2 * 0.18);
    let RICM_PC_REDU = (peso_total - ICMS_REDU_RESUL);

    //PIS
    let PIS_NORMAL = (RICM_PC_NORMAL * 0.0065);
    let PIS_FCP = (RICM_PC_FCP * 0.0065);
    let PIS_REDU = (RICM_PC_REDU * 0.0065);

    //COFINS
    let COFINS_NORMAL = (RICM_PC_NORMAL * 0.03);
    let COFINS_FCP = (RICM_PC_FCP * 0.03);
    let COFINS_REDU = (RICM_PC_REDU * 0.03);

    // REDUÇÃO DE ICMS
     


    // NCM
    let NCM_A = 74072921;
    let NCM_B = 74072910;
    let NCM_C = 74072110;
    let NCM_D = 74092900;
    let NCM_F = 74071010;
    let NCM_G = 74091900;
    let NCM_H = 74111010;
    let NCM_I = 76042919;
    let NCM_J = 76061290;
    let NCM_K = 76082090;
    let NCM_L = 76012000;
    let NCM_M = 72193300;
    let NCM_N = 72221100;
    let NCM_O = 78011011;



    // SAÍDA
    if (select === SIP) {
        document.getElementById('ipi').value = `${IPI_1}`;
        document.getElementById('icms').value = `${ICMS_NORMAL.toFixed(2)}`
        document.getElementById('pis').value = `${PIS_NORMAL.toFixed(2)}`
        document.getElementById('cofins').value = `${COFINS_NORMAL.toFixed(2)}`
        document.getElementById('ncm').value = `${NCM_I}`
        document.getElementById('peso_total').value = `${peso_total.toFixed(2)}`
        document.getElementById('total').value = `${peso_total.toFixed(2)}`
        document.getElementById('reducao').value = `${RICM_PC_NORMAL.toFixed(2)}`
        document.getElementById('b_icms_redu').innerHTML = ' '


    } else if (select === FCP) {
        document.getElementById('ipi').value = `${IPI_2.toFixed(2)}`
        document.getElementById('icms').value = `${ICMS_FCP.toFixed(2)}`
        document.getElementById('pis').value = `${PIS_FCP.toFixed(2)}`
        document.getElementById('cofins').value = `${COFINS_FCP.toFixed(2)}`
        document.getElementById('peso_total').value = `${peso_total.toFixed(2)}`
        document.getElementById('total').value = `${total.toFixed(2)}`
        document.getElementById('reducao').value = `${RICM_PC_FCP.toFixed(2)}`
        document.getElementById('b_icms_redu').innerHTML = ' '

    } else if (select === AL) {
        document.getElementById('ipi').value = `${IPI_2.toFixed(2)}`
        document.getElementById('icms').value = `${ICMS_NORMAL.toFixed(2)}`
        document.getElementById('pis').value = `${PIS_NORMAL.toFixed(2)}`
        document.getElementById('cofins').value = `${COFINS_NORMAL.toFixed(2)}`
        document.getElementById('ncm').value = `${NCM_J}`
        document.getElementById('peso_total').value = `${peso_total.toFixed(2)}`
        document.getElementById('total').value = `${total.toFixed(2)}`
        document.getElementById('reducao').value = `${RICM_PC_NORMAL.toFixed(2)}`
        document.getElementById('b_icms_redu').innerHTML = ' '


    } else if (select === REDU) {
        document.getElementById('ipi').value = `${IPI_2.toFixed(2)}`
        document.getElementById('icms').value = `${ICMS_REDU_RESUL.toFixed(2)}`
        document.getElementById('pis').value = `${PIS_REDU.toFixed(2)}`
        document.getElementById('cofins').value = `${COFINS_REDU.toFixed(2)}`
        document.getElementById('peso_total').value = `${peso_total.toFixed(2)}`
        document.getElementById('total').value = `${total.toFixed(2)}`
        document.getElementById('reducao').value = `${RICM_PC_REDU.toFixed(2)}`
        document.getElementById('b_icms_redu').innerHTML = '<br><br><label>BASE CALCULO ICMS<input type="text" id="b_icms_redu_1" readonly></label>'
        document.getElementById('b_icms_redu_1').value = `${ICMS_REDU_CNT2.toFixed(2)}`
         
    }


    // NCM
    switch (NCM) {
        case A:
            document.getElementById('ncm').value = `${NCM_A}`
            break;

        case B:
            document.getElementById('ncm').value = `${NCM_B}`

            break;

        case C:
            document.getElementById('ncm').value = `${NCM_C}`

            break;

        case D:
            document.getElementById('ncm').value = `${NCM_D}`

            break;

        case F:
            document.getElementById('ncm').value = `${NCM_F}`

            break;

        case G:
            document.getElementById('ncm').value = `${NCM_G}`

            break;

        case H:
            document.getElementById('ncm').value = `${NCM_H}`

            break;

        case I:
            document.getElementById('ncm').value = `${NCM_I}`

            break;

        case J:
            document.getElementById('ncm').value = `${NCM_J}`

            break;

        case K:
            document.getElementById('ncm').value = `${NCM_K}`

            break;

        case L:
            document.getElementById('ncm').value = `${NCM_L}`

            break;

        case M:
            document.getElementById('ncm').value = `${NCM_M}`

            break;

        case N:
            document.getElementById('ncm').value = `${NCM_N}`

            break;

        case O:
            document.getElementById('ncm').value = `${NCM_O}`

            break;

        default:
            break;
    }
    
}
function copiar_ncm() {
    let copiar = document.getElementById('ncm');

    // Seleciona o texto dentro do input
    copiar.select();

    // Verifica se a seleção foi bem-sucedida
     document.execCommand('copy');

}

// LIMPAR 

let limpar = document.getElementById('limpar')


limpar.addEventListener('click', function(){
    document.getElementById('b_icms_redu').innerHTML = ' '
});


let i = true;
document.getElementById('botao').addEventListener('click', function(){
   if(i == false){  
       document.getElementById('tabela').innerHTML = " ";
       let tabela = document.getElementById('botao').value = "ABRIR";
   } else {
       document.getElementById('tabela').innerHTML = "<tr><td><strong>LETRA</strong></td><td><strong>CATEGORIA</strong></td><td><strong>NCM</strong></td></tr><tr><td><strong>A</strong></td><td>BUCHA BRONZE</td><td>74072921</td></tr><tr><td><strong>B</strong></td><td>TARUGO DE BRONZE</td><td>74072910</td></tr><tr><td><strong>C</strong></td><td>BARRA LATAO</td><td>74072110</td></tr><tr><td><strong>D</strong></td><td>CHAPA LATAO</td><td>74092900</td></tr><tr><td><strong>F</strong></td><td>BARRA COBRE</td><td>74071010</td></tr><tr><td><strong>G</strong></td><td>CHAPA COBRE</td><td>74091900</td></tr><tr><td><strong>H</strong></td><td>TUBO COBRE</td><td>74111010</td></tr><tr><td><strong>I</strong></td><td>BARRA ALUMINIO</td><td>76042919</td></tr><tr><td><strong>J</strong></td><td>CHAPA ALUMINIO</td><td>76061290</td></tr><tr><td><strong>L</strong></td><td>TARUGO ALUMINIO</td><td>76012000</td></tr><tr><td><strong>K</strong></td><td>TUBO ALUMINIO</td><td>76082090</td></tr><tr><td><strong>M</strong></td><td>CHAPA INOX</td><td>72193300</td></tr><tr><td><strong>N</strong></td><td>BARRA INOX</td><td>72221100</td></tr><tr><td><strong>O</strong></td><td>CHUMBO BRIDGESTONE</td><td>78011011</td></tr>";
       document.getElementById('botao').value = 'ESCONDER';
   }
        i = !i; //alterna o valor entre verdadiro e falso

});
