window.onload = ()=>{
	document.querySelectorAll('input[id^="txtNum"]').forEach((input)=>{
		input.addEventListener('input', (e)=>{
			limparCamposCasoVazio(e.target);
		}, false);
	});

	document.querySelector('#txtNumDecimal').oninput = (e)=>{
		if(e.target.value!=''){
			document.querySelector('#txtNumBinario').value = decimalParaBinario(parseInt(e.target.value));
			document.querySelector('#txtNumHexadecimal').value = decimalParaHexadecimal(parseInt(e.target.value));
			document.querySelector('#txtNumOctal').value = decimalParaOctal(parseInt(e.target.value));
		}
	};
	document.querySelector('#txtNumHexadecimal').oninput = (e)=>{
		if(e.target.value!=''){
			document.querySelector('#txtNumDecimal').value = hexadecimalParaDecimal((e.target.value));
			document.querySelector('#txtNumBinario').value = hexadecimalParaBinario((e.target.value));
		}
	};

	document.querySelector('#txtNumOctal').oninput = (e)=>{
		if(e.target.value!=''){
			document.querySelector('#txtNumDecimal').value = octalParaDecimal((e.target.value));
		}
	};

}

var arrayLetras=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const limparCamposCasoVazio = (input)=>{
	if(input.value==""){
		document.querySelectorAll('input[id^="txtNum"]').forEach((input)=>{
			input.value = "";
		});
	}
}

//ENTRADA DECIMAL
const decimalParaHexadecimal = (numero)=>{
	var arrayNumero=[], mod;

//teste
	while(numero!=0){
		mod = Math.trunc(numero%16);
		arrayNumero.push((mod > 9 ? arrayLetras[mod] : mod));

		numero = Math.trunc(numero/16);
	};

	var resultado = arrayNumero.reverse().join('');
	return resultado == '' ? 0 : resultado;
}

const decimalParaOctal = (numero)=>{
	var arrayNumero=[], mod;

	do{
		mod = Math.trunc(numero%8);
		arrayNumero.push(mod);

		numero = numero/8;
	}while(numero>8);

	mod = Math.trunc(numero%8);
	arrayNumero.push(mod);

	var resultado = arrayNumero.reverse().join('');
	return resultado == '' ? numero : resultado;
}

const decimalParaBinario = (numero)=>{
	var arrayNumero = [], mod;

	while(numero!=0){
		mod = numero%2;
		arrayNumero.push(mod);
		if(mod==1){
			numero = numero-1;
		}
		numero = numero/2;
	};

	var resultado = arrayNumero.reverse().join('');
	return resultado == '' ? 0 : resultado;
}

//ENTRADA HEXADECIMAL
const hexadecimalParaDecimal = (numero)=>{
	var numeroSeparado = numero.split('');
	var numeroExpoente= [];
	var indiceLetra;
	var numeroSomado = 0;

	numeroSeparado.forEach((numeroAtual, i)=>{

		if(isNaN(numeroAtual)){

			indiceLetra = arrayLetras.join('').indexOf(numeroAtual.toUpperCase());

			numeroSeparado[i] = indiceLetra;

		}else{

			numeroSeparado[i] = parseInt(numeroAtual);
		}
	});

	for(var i = numero.length-1;i>=0; i--){
		numeroExpoente.push(i);
	}

	for(var i = 0;i<numero.length;i++){
		numeroSomado += numeroSeparado[i]*16**numeroExpoente[i];
	}

	return numeroSomado;
	//teste
}

const hexadecimalParaOctal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

const hexadecimalParaBinario = (numero, nomeDessaFuncao)=>{
	var numeroSeparado = numero.split('');
	var indiceLetra;

	numeroSeparado.forEach((numeroAtual, i)=>{
		if(isNaN(numeroAtual)){
			indiceLetra = arrayLetras.join('').indexOf(numeroAtual.toUpperCase());

			numeroSeparado[i] = decimalParaBinario(indiceLetra);
		}else{
			numeroSeparado[i] = decimalParaBinario(parseInt(numeroAtual));
		}
		if(i>0){
			numeroSeparado[i] = numeroSeparado[i].toString().padStart(4, '0');
		}
	});
	return numeroSeparado.join('');
}

//ENTRADA OCTAL
const octalParaDecimal = (numero)=>{
	var numeroSeparado = numero.split('');
	var numeroExpoente = [];
	var numeroSomado = 0;

	for(var i = numero.length-1;i>=0; i--){
		numeroExpoente.push(i);
	}

	for(var i = 0;i<numero.length;i++){
		numeroSomado += numeroSeparado[i]*8**numeroExpoente[i];
	}

	return numeroSomado;

}

const octalParaBinario = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

const octalParaHexadecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

//ENTRADA BINARIO
const binarioParaDecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}
const binarioParaHexadecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}
const binarioParaOctal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}
