function calculos(form){
    
    form.login.value = form.login.value.toUpperCase(); 
    
    //entrada dos dados
    pagamento = form.pagamento.value;
    
    quant1 = form.quant1.value;  
    quant2 = form.quant2.value;  
    quant3 = form.quant3.value;  
    quant4 = form.quant4.value;  
	quant5 = form.quant5.value; 
	quant6 = form.quant6.value; 
	quant7 = form.quant7.value; 
	quant8 = form.quant8.value; 
	quant9 = form.quant9.value; 
	quant10 = form.quant10.value; 
    
    
    //processamento
    tot1 = quant1 * 428;
    tot2 = quant2 * 286;
    tot3 = quant3 * 255;
    tot4 = quant4 * 316;
	tot5 = quant5 * 166;
	tot6 = quant6 * 350;
	tot7 = quant7 * 409;
	tot8 = quant8 * 700;
	tot9 = quant9 * 230;
	tot10 = quant10 * 650;
    
    
    total = tot1 + tot2 + tot3 + tot4 + tot5 + tot6 + tot7 + tot8 + tot9 + tot10 ;
    apagar = total;
    
    //saída
    form.tot1.value = "R$ " + tot1.toFixed(2); 
    form.tot2.value = "R$ " + tot2.toFixed(2); 
    form.tot3.value = "R$ " + tot3.toFixed(2); 
    form.tot4.value = "R$ " + tot4.toFixed(2); 
	form.tot5.value = "R$ " + tot5.toFixed(2); 
	form.tot6.value = "R$ " + tot6.toFixed(2); 
	form.tot7.value = "R$ " + tot7.toFixed(2); 
	form.tot8.value = "R$ " + tot8.toFixed(2); 
	form.tot9.value = "R$ " + tot9.toFixed(2); 
	form.tot10.value = "R$ " + tot10.toFixed(2); 
    
   // form.total.value = "R$ " + total.toFixed(2); 
    document.getElementById('total').value = total.toFixed(2);
    document.getElementById('apagar').value = apagar.toFixed(2);

}

function confirma(form){
    total = form.total.value;
    
    if(form.login.value == ""){
        alert('O campo Login é Obrigatório');
        form.login.focus();
        return false;
    }
    else if(form.senha1.value == ""){
        alert('O campo Senha é Obrigatório');
        form.senha1.focus();
        return false;
    }
    else if(form.senha1.value != form.senha2.value){
        alert('O campo Senha esta diferente da confirmação de senha');
        form.senha1.focus();
        return false;
    }
    else if((quant1 == 0) && (quant2 == 0) && (quant3 == 0) && (quant4 == 0) && (quant5 == 0)&& (quant6 == 0) && (quant7 == 0) && (quant8 == 0) && (quant9 == 0) && (quant10 == 0)){
        alert('Você precisa Socilitar pelo menos 1 Hótel');
        form.quant1.focus();
        return false;
    }
    else {
        if(confirm("Confirma o envio da Compra no valor de " + total)){
        alert("Sua compra foi efetuado com sucesso, favor aguarde o nosso telefonema para darmos procedimento com o Hotel selecionado, Obrigado!");   
            return true;
        }
        else{
           return false; 
        }        
    }
   
}

function senha(){
    senha1 = document.orcamento.senha1.value;
    senha2 = document.orcamento.senha2.value;
    
    if(senha1 != senha2){
        document.getElementById('msg').style.display = "block";
    }
    else{
        document.getElementById('msg').style.display = "none";
    }
}


function pessoa(obj){
    if(obj == "pf"){
        document.getElementById('cpf').style.display = "block"; 
        document.getElementById('cnpj').style.display = "none";
        document.orcamento.cpf.focus();
    }
    else{
       document.getElementById('cpf').style.display = "none"; 
       document.getElementById('cnpj').style.display = "block"; 
       document.orcamento.cnpj.focus();
    }
    
}

function mascara_cpf(obj){
    if(obj.value.length == 3){
        obj.value += ".";
    }
    if(obj.value.length == 7){
        obj.value += ".";
    }
    if(obj.value.length == 11){
        obj.value += "-";
    }
}

function mascara_cnpj(obj){
    if(obj.value.length == 2){
        obj.value += ".";
    }
    if(obj.value.length == 6){
        obj.value += ".";
    }
    if(obj.value.length == 10){
        obj.value += "/";
    }
    if(obj.value.length == 15){
        obj.value += "-";
    }
}

function mascara_tel(obj){
    if(obj.value.length == 0){
        obj.value += "(";
    }
    if(obj.value.length == 3){
        obj.value += ")";
    }
    if(obj.value.length == 8){
        obj.value += "-";
    }
    
}

function salto(campo,digito){
    if(campo == "cpf"){
        if(digito.length>13){
            document.orcamento.telefone.focus();
        }
    }
    
    if(campo == "cnpj"){
        if(digito.length>17){
            document.orcamento.telefone.focus();
        }
    }
    
    if(campo == "telefone"){
        if(digito.length>12){
            document.orcamento.pagamento.focus();
        }
    }
    
}

function abrir(){
    pagamento = document.orcamento.pagamento.value;    
    if(pagamento == "Cartão"){
        document.getElementById('cartao').style.display = "block"; 
        document.orcamento.num.focus();
    }
    else{
       document.getElementById('cartao').style.display = "none";  
    }
}

function somente_numero(e){
    tecla = (window.event)?event.keyCode:e.which;
    
    if((tecla>=48 && tecla<=57) || (tecla>=96 && tecla<=105) || (tecla == 8) || (tecla == 37) || (tecla == 39) || (tecla == 46) ){
       return true; 
    }
    else{
       return false; 
    }
}


function setas(e){
    tecla = (window.event)?event.keyCode:e.which;
    
    if((tecla == 38) || (tecla == 40) || (tecla == 9) ){
       return true; 
    }
    else{
       return false; 
    }
}




