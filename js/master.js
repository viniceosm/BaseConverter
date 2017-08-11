window.onload = ()=>{
	renderizarRadios();

	var txtNumero = document.querySelector('#txtNumero');
	txtNumero.addEventListener('input', ()=>{
		transformarNumero(txtNumero.value);
	});
}
const transformarNumero = (numero)=>{
	var radioEntradaMarcado = document.querySelector('input[name="rdBaseEntrada"]:checked');
	var baseEntrada = radioEntradaMarcado.id.toLowerCase();

	var radioSaidaMarcado = document.querySelector('input[name="rdBaseSaida"]:checked');
	var baseSaida = radioSaidaMarcado.id;

	var txtResultado = document.querySelector('#txtResultado');
	var resultado;

	if(numero!=''){
		numero = parseInt(numero);

		var funcaoTransformarChamar = `${baseEntrada}Para${baseSaida}(${numero}, '${baseEntrada}Para${baseSaida}');`;
		var funcaoChamar = `
			try{
				${funcaoTransformarChamar}
			}catch(e){
				console.dir(e.message);
			}
		`;
		resultado = eval(funcaoChamar);

		txtResultado.innerHTML = `${resultado}`;
		document.querySelector('#colResultado').style.display = '';
	}else{
		txtResultado.innerHTML = ``;
		document.querySelector('#colResultado').style.display = 'none';
	}
};

//ENTRADA DECIMAL
const decimalParaHexadecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

const decimalParaOctal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
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
const hexadecimalParaDecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

const hexadecimalParaOctal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

const hexadecimalParaBinario = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
}

//ENTRADA OCTAL
const octalParaDecimal = (numero, nomeDessaFuncao)=>{
	console.log(nomeDessaFuncao);
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



function renderizarRadios(){
	[].forEach.call(document.querySelectorAll('radioBoot'), (radio)=>{
		var nameRadio = radio.getAttribute(`name`);
		var labelRadio = radio.getAttribute(`label`);
		var checkedRadio = radio.getAttribute(`checked`);
		var idRadio = radio.getAttribute(`id`);
		radio.innerHTML = renderizarRadio(idRadio, nameRadio, labelRadio, checkedRadio);
	});
}

function renderizarRadio(id, name, label, isChecked){
	var atributoChecked = isChecked == null ? '' : `checked="${isChecked}"`;
	var atributoId = id == null ? '' : `id="${id}"`;

	return `<div class="radio">
				<label>
					<input type="radio" ${atributoId} name="${name}" ${atributoChecked}>
					<span class="circle"></span><span class="check"></span>
					<div id="label">${label}</div>
				</label>
			</div>`;
}
