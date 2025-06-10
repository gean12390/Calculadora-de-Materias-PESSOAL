import { copiar_ncm } from './ncm.js'

    let seletor = document.getElementById("select")
    let sIpi = 0;
    let _Ipi = 0;
    let _Icms = 0;
    let j = 0;
    let verdade = true; 

    verifica_input();

//Quando Clicado TAB e esteja no COD. DO MATERIAL, pula direto para o PESO DO MATERIAL
document.addEventListener('keydown', (event) => {
    if (document.activeElement.id === 'select' && event.key === 'Tab') {
        document.getElementById('limpar').select();
        document.getElementById('quantidade_soma').select();
    }

});

document.addEventListener('keydown', (event) => {
    if (document.activeElement.id === 'quantidade_soma' && event.key === 'Tab') {
    }

});



//ATIVIDA AO CLICAR NO BOTAO
document.getElementById('calcular').addEventListener('click', () => calcular());

// ATIVA AO CLICAR NA TECLA 'ENTER'
document.body.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        verdade = true;
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
let limpar_individual = document.getElementById('limpar');
let limpar_total = document.getElementById('_limpar');


limpar_individual.addEventListener('click', () => {
    document.getElementById("calculadora_individual").reset();
    verifica_input();
});

limpar_total.addEventListener('click', () => {
    document.getElementById("calculadora_total").reset();
    soma = 0;
    p = 0;
    document.getElementById('posicao').innerText = `Posição: ${p}`;
    verdade = true;
});

    //Sistema Logico para Calculadora Total

    let p = 0;
    let soma = 0;
    let ipi = 0;
    let icms = 0;
    let _total = 0;
    let _base_calculo = 0;
    let _pis = 0;
    let _cofins = 0;
    let array_icms = [];
    let array_ipi = [];
    let array = [];
    let soma_total = document.getElementById('soma_f_comIpi');
    let _reducao = document.getElementById('soma_pis_cofins');
    let _soma_pis = document.getElementById('soma_pis');
    let _soma_cofins = document.getElementById('soma_cofins');

 

function calcular_final() {
    //Variaveis
    let quantidade_soma = parseFloat(document.getElementById('quantidade_soma').value)
    let soma_semIpi = document.getElementById('soma_f');
    let soma_ipi = document.getElementById('som_ipi');
    let soma_icms = document.getElementById('som_icms');

    if(verdade == true){
        if(p < quantidade_soma){
            array[p] = parseFloat(document.getElementById('peso_total').value);
            soma += array[p];

        if(seletor.value == '21' || seletor.value == '22' || seletor.value == '20'){
                array_ipi[p] = parseFloat((array[p] * 0.0325).toFixed(2));
                ipi += parseFloat(array_ipi[p]);
                    if(seletor.value == '21'){
                        array_icms[p] = parseFloat((array[p] * 0.18).toFixed(2));
                        icms += array_icms[p];
                    } else{
                        array_icms[p] = parseFloat(((array[p] - (array[p] * 0.3333))* 0.18).toFixed(2));
                        icms += array_icms[p];
                    }
            }else if(seletor.value == '02'){
                    array_ipi[p] = 0;
                    ipi += parseFloat(array_ipi[p]);
                    array_icms[p] = parseFloat((soma * 0.18).toFixed(2));
                    icms += array_icms[p];
            }  
            p++
        }
    }
    //Mostra os valores na Calculadora total
     _total = (soma + ipi).toFixed(2);
     soma_total.value = _total;
     soma_semIpi.value = (soma).toFixed(2);
     soma_ipi.value = (ipi).toFixed(2); 
     soma_icms.value = icms.toFixed(2);
     _base_calculo = (soma - icms);
     _pis = (_base_calculo * 0.0065);
     _cofins = (_base_calculo * 0.03);
     _reducao.value = (_base_calculo).toFixed(2);
     _soma_pis.value = (_pis).toFixed(2);
     _soma_cofins.value = (_cofins).toFixed(2);
     verdade = true; 

     if(soma_semIpi.value == 0){
        soma_semIpi.value = (0).toFixed(2)
        soma_total.value = (0).toFixed(2);
        soma_semIpi.value = (0).toFixed(2);
        soma_ipi.value = (0).toFixed(2); 
        soma_icms.value = (0).toFixed(2);
        _base_calculo = (0).toFixed(2);
        _reducao.value = (0).toFixed(2);  
        _soma_pis.value = (0).toFixed(2);
        _soma_cofins.value = (0).toFixed(2); 
    }

        document.getElementById('posicao').innerText = `Posição: ${p}`;

}
    //Apaga o item atual e volta para o anterior
    document.getElementById('_voltar').addEventListener('click', () => {
        if(p > 0){
            verdade = false;
            array[p] = parseFloat(document.getElementById('peso_total').value);
            soma -= array[p - 1] || 0;
            ipi -= array_ipi[p -1] || 0; 
            icms -= array_icms[p - 1] || 0;
            p--;
            calcular_final();
        }
    });

    //Div que abre a Calculadora Total

    function verifica_input(){
        let abre_calculadora = document.getElementById('quantidade_soma');

        abre_calculadora.addEventListener('input', () => {

        if (abre_calculadora.value.trim() === "") {
            document.getElementById('calc_total').style.display = "none";
        } else {
            document.getElementById('calc_total').style.display = "block";

        }
    });
    }
