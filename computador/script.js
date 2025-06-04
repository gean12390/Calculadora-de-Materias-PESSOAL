import { copiar_ncm } from './ncm.js'

//Quando Clicado TAB e esteja no COD. DO MATERIAL, pula direto para o PESO DO MATERIAL
document.addEventListener('keydown', (event) => {
    if (document.activeElement.id === 'select' && event.key === 'Tab') {
        document.getElementById('limpar').select();
        document.getElementById('quantidade_soma').select();
        document.getElementById('_calc').select();
    }

});

document.addEventListener('keydown', (event) => {
    if (document.activeElement.id === 'quantidade_soma' && event.key === 'Tab') {
        document.getElementById('_calc').select();
    }

});



//ATIVIDA AO CLICAR NO BOTAO
document.getElementById('calcular').addEventListener('click', () => calcular());

// ATIVA AO CLICAR NA TECLA 'ENTER'
document.body.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        calcular();
    }
});


let tabel = true;
document.getElementById('botao').addEventListener('click', () => {
    if (tabel == false) {
        document.getElementById('tabela').innerHTML = " ";

        document.getElementById('botao').value = "ABRIR";
    } else {
        document.getElementById('tabela').innerHTML = "<tr><td><strong>LETRA</strong></td><td><strong>CATEGORIA</strong></td><td><strong>NCM</strong></td></tr><tr><td><strong>A</strong></td><td>BUCHA BRONZE</td><td>74072921</td></tr><tr><td><strong>B</strong></td><td>TARUGO DE BRONZE</td><td>74072910</td></tr><tr><td><strong>C</strong></td><td>BARRA LATAO</td><td>74072110</td></tr><tr><td><strong>D</strong></td><td>CHAPA LATAO</td><td>74092900</td></tr><tr><td><strong>F</strong></td><td>BARRA COBRE</td><td>74071010</td></tr><tr><td><strong>G</strong></td><td>CHAPA COBRE</td><td>74091900</td></tr><tr><td><strong>H</strong></td><td>TUBO COBRE</td><td>74111010</td></tr><tr><td><strong>I</strong></td><td>BARRA ALUMINIO</td><td>76042919</td></tr><tr><td><strong>J</strong></td><td>CHAPA ALUMINIO</td><td>76061290</td></tr><tr><td><strong>L</strong></td><td>TARUGO ALUMINIO</td><td>76012000</td></tr><tr><td><strong>K</strong></td><td>TUBO ALUMINIO</td><td>76082090</td></tr><tr><td><strong>M</strong></td><td>CHAPA INOX</td><td>72193300</td></tr><tr><td><strong>N</strong></td><td>BARRA INOX</td><td>72221100</td></tr><tr><td><strong>O</strong></td><td>CHUMBO BRIDGESTONE</td><td>78011011</td></tr>";
        document.getElementById('botao').value = 'ESCONDER';
    }
    tabel = !tabel; //alterna o valor entre verdadiro e falso

});

function calcular() {

    // VARIAVEIS
    let select = document.getElementById('select').value;
    let peso_mate = document.getElementById('peso_mate').value;
    let peso_unid = document.getElementById('peso_unid').value;
    let peso_total = document.getElementById('peso_total');
    let ipi_input = document.getElementById('ipi');
    let icms_input = document.getElementById('icms');
    let total = document.getElementById('total');
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



    // SAÍDA

    if (select == '02' || select == 20 || select == 21 || select == 22) {
        peso_total.value = parseFloat(peso_sem_ipi).toFixed(2);
        ipi_input.value = IPI;
        icms_input.value = ICMS;
        total.value = total_com_ipi;
        reducao.value = re_pis_cofins;
        PIS.value = pis;
        COFINS.value = cofins;
        calcular_final();

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
    window.location.reload();

});

    let seletor = document.getElementById("select")
    let sIpi = 0;
    let _Ipi = 0;
    let _Icms = 0;
    let j = 0;


function calcular_final() {
    let posicao = document.getElementById("posicao");
    let soma_semIpi = document.getElementById("soma_f");
    let soma_comIpi = document.getElementById("soma_f_comIpi");
    let soma_ipi = document.getElementById("som_ipi");
    let soma_icms = document.getElementById("som_icms");
    let redu_pis_cofins = document.getElementById("soma_pis_cofins");
    let redu_pis = document.getElementById("soma_pis");
    let redu_cofins = document.getElementById("soma_cofins");
    let Icms = parseFloat(document.getElementById("icms").value);
    let Ipi = parseFloat(document.getElementById("ipi").value);
    let quant_soma = parseInt(document.getElementById("quantidade_soma").value);
    let pesoSemIpi = parseFloat(document.getElementById('peso_total').value);
    if(j < quant_soma){
        if(seletor.value == '21'|| seletor.value == '22'|| seletor.value == '20' || seletor.value == '02'){
        sIpi += pesoSemIpi;
            if(seletor.value == '21'|| seletor.value == '22'|| seletor.value == '20'){
                 _Ipi += Ipi; 
                soma_ipi.value = _Ipi.toFixed(2);
                
                if(seletor.value == '21'){
                    _Icms += Icms;

                }else if(seletor.value == '22' || seletor.value == '20'){
                     let Redu = Icms;
                     let Redu2 = (Redu - (Icms * 0.3333)).toFixed(2);
                    _Icms += parseFloat(Redu2);
                }

            } else if(seletor.value == '02'){
                 _Ipi += 0;
                soma_ipi.value = _Ipi;
                 _Icms += Icms;
            }

            j++;
        }
         soma_semIpi.value = sIpi.toFixed(2);
         soma_icms.value = ((_Icms).toFixed(2))
         soma_comIpi.value = ((sIpi + _Ipi).toFixed(2));
         redu_pis_cofins.value = ((sIpi - _Icms).toFixed(2));
         redu_pis.value = (((sIpi - _Icms)*0.0065).toFixed(2));
         redu_cofins.value = (((sIpi - _Icms)*0.03).toFixed(2));
         document.getElementById('posicao').textContent = `CALCULADORA TOTAL - Posição ${j}` 
         posicao.value = j;

    }
 


}

 let abrir = false;

document.getElementById('_calc').addEventListener('click', () => {
    if (abrir) {
        document.getElementById('calc_total').style.display = "block";
        document.getElementById('_calc').value = "FECHAR";
    } else {
        document.getElementById('calc_total').style.display = "none";
        document.getElementById('_calc').value = "ABRIR";
    }
    abrir = !abrir;
});
