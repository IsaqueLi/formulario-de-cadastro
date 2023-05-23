async function buscaEndereco(cep) {
	var mensagemErro = document.getElementById('erro');
	mensagemErro.innerHTML = "";
	try{
		var encontraCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
		var encontraCEPConvertida = await encontraCEP.json();
		if(encontraCEPConvertida.erro) {
			throw Error('CEP é invalido!');
		}
		var cidade = document.getElementById('cidade');
		var logradouro = document.getElementById('endereco');
		var estado = document.getElementById('estado');

		cidade.value = encontraCEPConvertida.localidade;
		logradouro.value = encontraCEPConvertida.logradouro;
		estado.value = encontraCEPConvertida.uf;

		console.log(encontraCEPConvertida);
		return encontraCEPConvertida;
	} catch(erro) {
		mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
		console.log(erro)
	}
} 

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value))