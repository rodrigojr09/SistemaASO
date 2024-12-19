export function validacaoDetamanho(texto) {
	if (texto.length > 5) {
		return "";
	}
	return "os textos precisam ter mais de 5 caracteres ";
}

export function validarCNPJ(cnpj) {
	if (cnpj.length !== 14) return false;

	if (/^(\d)\1+$/.test(cnpj)) return false;

	function calcularDigito(baseCnpj, pesos) {
		let soma = 0;
		for (let i = 0; i < pesos.length; i++) {
			soma += parseInt(baseCnpj[i]) * pesos[i];
		}
		const resto = soma % 11;
		return resto < 2 ? 0 : 11 - resto;
	}

	const pesosPrimeiro = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
	const pesosSegundo = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

	const primeiroDigito = calcularDigito(cnpj.slice(0, 12), pesosPrimeiro);

	const segundoDigito = calcularDigito(
		cnpj.slice(0, 12) + primeiroDigito,
		pesosSegundo
	);

	return (
		primeiroDigito === parseInt(cnpj[12]) &&
		segundoDigito === parseInt(cnpj[13])
	);
}

export function validarIdade(idade) {
	document
		.getElementById("formularioIdade")
		.addEventListener("submit", function (evento) {
			evento.preventDefault();

			const dataNascimento = new Date(
				document.getElementById("dataNascimento").value
			);
			const hoje = new Date();

			let idade = hoje.getFullYear() - dataNascimento.getFullYear();
			const diferencaMes = hoje.getMonth() - dataNascimento.getMonth();
			const diferencaDia = hoje.getDate() - dataNascimento.getDate();

			if (diferencaMes < 0 || (diferencaMes === 0 && diferencaDia < 0)) {
				idade--;
			}

			const elementoMensagem = document.getElementById("mensagem");
			if (idade >= 18) {
				elementoMensagem.textContent = `Tem ${idade} anos.`;
				elementoMensagem.style.color = "white";
			} else {
				elementoMensagem.textContent = `Tem apenas ${idade} anos.`;
				elementoMensagem.style.color = "red";
			}
		});
}

export function getRiscos() {
	return [
		{
			_id: { oid: "664788064e9b94949c471c39" },
			tipo: "Acidente",
			risco: "Abrasões",
		},
		{
			_id: { oid: "664788064e9b94949c471c3a" },
			tipo: "Acidente",
			risco: "Acidente com ferramentas, queda de mesmo nível",
		},
		{
			_id: { oid: "664788064e9b94949c471c3b" },
			tipo: "Acidente",
			risco: "Acidente de trânsito",
		},
		{
			_id: { oid: "664788064e9b94949c471c3c" },
			tipo: "Acidente",
			risco: "Acidente por contato em componentes de transmissão de força de máquinas",
		},
		{
			_id: { oid: "664788064e9b94949c471c3d" },
			tipo: "Acidente",
			risco: "Acidente trânsito de empilhadeira",
		},
		{
			_id: { oid: "664788064e9b94949c471c3e" },
			tipo: "Acidente",
			risco: "Acidentes causados por Iluminamento inadequado",
		},
		{
			_id: { oid: "664788064e9b94949c471c3f" },
			tipo: "Acidente",
			risco: "Acidentes provocado por objetos (ferramentas) perfuro-cortantes em atividade de eletricista",
		},
		{
			_id: { oid: "664788064e9b94949c471c40" },
			tipo: "Acidente",
			risco: "Afogamento",
		},
		{
			_id: { oid: "664788064e9b94949c471c41" },
			tipo: "Acidente",
			risco: "Ambientes com risco de afogamento",
		},
		{
			_id: { oid: "664788064e9b94949c471c42" },
			tipo: "Acidente",
			risco: "Ambientes com risco de engolfamento",
		},
		{
			_id: { oid: "664788064e9b94949c471c43" },
			tipo: "Acidente",
			risco: "Ambientes com risco de soterramento",
		},
		{
			_id: { oid: "664788064e9b94949c471c44" },
			tipo: "Acidente",
			risco: "Animais domésticos",
		},
		{
			_id: { oid: "664788064e9b94949c471c45" },
			tipo: "Acidente",
			risco: "Animais peçonhentos",
		},
		{
			_id: { oid: "664788064e9b94949c471c46" },
			tipo: "Acidente",
			risco: "Animais selvagens",
		},
		{
			_id: { oid: "664788064e9b94949c471c47" },
			tipo: "Acidente",
			risco: "Áreas classificadas",
		},
		{
			_id: { oid: "664788064e9b94949c471c48" },
			tipo: "Acidente",
			risco: "Áreas de movimentação de materiais sem demarcação",
		},
		{
			_id: { oid: "664788064e9b94949c471c49" },
			tipo: "Acidente",
			risco: "Áreas de trânsito de pedestres sem demarcação",
		},
		{
			_id: { oid: "664788064e9b94949c471c4a" },
			tipo: "Acidente",
			risco: "Áreas de trânsito de veículos sem demarcação",
		},
		{
			_id: { oid: "664788064e9b94949c471c4b" },
			tipo: "Acidente",
			risco: "Armazenamento inadequado",
		},
		{
			_id: { oid: "664788064e9b94949c471c4c" },
			tipo: "Acidente",
			risco: "Arranjo físico deficiente ou inadequado",
		},
		{
			_id: { oid: "664788064e9b94949c471c4d" },
			tipo: "Acidente",
			risco: "Atropelamento",
		},
		{
			_id: { oid: "664788064e9b94949c471c4e" },
			tipo: "Acidente",
			risco: "Cavaco nos olhos",
		},
		{
			_id: { oid: "664788064e9b94949c471c4f" },
			tipo: "Acidente",
			risco: "Choque elétrico",
		},
		{
			_id: { oid: "664788064e9b94949c471c50" },
			tipo: "Acidente",
			risco: "Colisão",
		},
		{
			_id: { oid: "664788064e9b94949c471c51" },
			tipo: "Acidente",
			risco: "Colisões de veículos",
		},
		{
			_id: { oid: "664788064e9b94949c471c52" },
			tipo: "Acidente",
			risco: "Condições ou procedimentos que possam provocar contato com eletricidade",
		},
		{
			_id: { oid: "664788064e9b94949c471c53" },
			tipo: "Acidente",
			risco: "Condução de veículos de qualquer natureza em vias públicas",
		},
		{
			_id: { oid: "664788064e9b94949c471c54" },
			tipo: "Acidente",
			risco: "Contato com ferramentas e materiais causadores de cortes e lacerações",
		},
		{
			_id: { oid: "664788064e9b94949c471c55" },
			tipo: "Acidente",
			risco: "Contato com pontos de operação das máquinas que utilizam serra (circular e/ou fita) para efetuar cortes",
		},
		{
			_id: { oid: "664788064e9b94949c471c56" },
			tipo: "Acidente",
			risco: "Contato com superfícies quentes",
		},
		{
			_id: { oid: "664788064e9b94949c471c57" },
			tipo: "Acidente",
			risco: "Contusão por levantamento manual de peso",
		},
		{
			_id: { oid: "664788064e9b94949c471c58" },
			tipo: "Acidente",
			risco: "Contusões e fraturas",
		},
		{
			_id: { oid: "664788064e9b94949c471c59" },
			tipo: "Acidente",
			risco: "Contusões, fraturas e esmagamento",
		},
		{
			_id: { oid: "664788064e9b94949c471c5a" },
			tipo: "Acidente",
			risco: "Correias de máquinas sem proteção",
		},
		{
			_id: { oid: "664788064e9b94949c471c5b" },
			tipo: "Acidente",
			risco: "Corte nos membros superiores por manuseio de facas e máquinas para corte",
		},
		{
			_id: { oid: "664788064e9b94949c471c5c" },
			tipo: "Acidente",
			risco: "Corte nos membros superiores por manuseio de facas",
		},
		{
			_id: { oid: "664788064e9b94949c471c5d" },
			tipo: "Acidente",
			risco: "Corte por projeção de cacos de vidro por manipulação inadequada de garrafas com conteúdo sob pressão",
		},
		{
			_id: { oid: "664788064e9b94949c471c5e" },
			tipo: "Acidente",
			risco: "Corte por projeção de cacos de vidro por manipulação inadequada",
		},
		{
			_id: { oid: "664788064e9b94949c471c5f" },
			tipo: "Acidente",
			risco: "Corte por queda de objetos perfuro-cortantes",
		},
		{
			_id: { oid: "664788064e9b94949c471c60" },
			tipo: "Acidente",
			risco: "Corte/perfuração por manuseio inadequado de agulhas e/ou seringas",
		},
		{
			_id: { oid: "664788064e9b94949c471c61" },
			tipo: "Acidente",
			risco: "Cortes",
		},
		{
			_id: { oid: "664788064e9b94949c471c62" },
			tipo: "Acidente",
			risco: "Cortes e perfurações",
		},
		{
			_id: { oid: "664788064e9b94949c471c63" },
			tipo: "Acidente",
			risco: "Cortes, contusões e fraturas",
		},
		{
			_id: { oid: "664788064e9b94949c471c64" },
			tipo: "Acidente",
			risco: "Cortes, contusões, fraturas ou perfurações",
		},
		{
			_id: { oid: "664788064e9b94949c471c65" },
			tipo: "Acidente",
			risco: "Cortes, fraturas e/ou perfurações",
		},
		{
			_id: { oid: "664788064e9b94949c471c66" },
			tipo: "Acidente",
			risco: "Danos físicos",
		},
		{
			_id: { oid: "664788064e9b94949c471c67" },
			tipo: "Acidente",
			risco: "Decorrente da própria atividade laboral",
		},
		{
			_id: { oid: "664788064e9b94949c471c68" },
			tipo: "Acidente",
			risco: "Diferença de nível maior que dois metros",
		},
		{
			_id: { oid: "664788064e9b94949c471c69" },
			tipo: "Acidente",
			risco: "Diferença de nível menor ou igual a dois metros",
		},
		{
			_id: { oid: "664788064e9b94949c471c6a" },
			tipo: "Acidente",
			risco: "Eletricidade",
		},
		{
			_id: { oid: "664788064e9b94949c471c6b" },
			tipo: "Acidente",
			risco: "Emborcamento",
		},
		{
			_id: { oid: "664788064e9b94949c471c6c" },
			tipo: "Acidente",
			risco: "Escadas e rampas inadequadas",
		},
		{
			_id: { oid: "664788064e9b94949c471c6d" },
			tipo: "Acidente",
			risco: "Esmagamento",
		},
		{
			_id: { oid: "664788064e9b94949c471c6e" },
			tipo: "Acidente",
			risco: "Esmagamentos, coices, cabeçadas ou chifradas",
		},
		{
			_id: { oid: "664788064e9b94949c471c6f" },
			tipo: "Acidente",
			risco: "Espaço confinado",
		},
		{
			_id: { oid: "664788064e9b94949c471c70" },
			tipo: "Acidente",
			risco: "Explosão",
		},
		{
			_id: { oid: "664788064e9b94949c471c71" },
			tipo: "Acidente",
			risco: "Explosão de caldeira",
		},
		{
			_id: { oid: "664788064e9b94949c471c72" },
			tipo: "Acidente",
			risco: "Falta de atenção e cautela ao atracar a embarcação",
		},
		{
			_id: { oid: "664788064e9b94949c471c73" },
			tipo: "Acidente",
			risco: "Ferramentas inadequadas",
		},
		{
			_id: { oid: "664788064e9b94949c471c74" },
			tipo: "Acidente",
			risco: "Ferramentas necessitando de ajustes e manutenção",
		},
		{
			_id: { oid: "664788064e9b94949c471c75" },
			tipo: "Acidente",
			risco: "Ferroada de abelha",
		},
		{
			_id: { oid: "664788064e9b94949c471c76" },
			tipo: "Acidente",
			risco: "Frequente execução de movimentos repetitivos",
		},
		{
			_id: { oid: "664788064e9b94949c471c77" },
			tipo: "Acidente",
			risco: "Fundição",
		},
		{
			_id: { oid: "664788064e9b94949c471c78" },
			tipo: "Acidente",
			risco: "Iluminação diurna inadequada",
		},
		{
			_id: { oid: "664788064e9b94949c471c79" },
			tipo: "Acidente",
			risco: "Iluminação noturna inadequada",
		},
		{
			_id: { oid: "664788064e9b94949c471c7a" },
			tipo: "Acidente",
			risco: "Incêndio e/ou explosão",
		},
		{
			_id: { oid: "664788064e9b94949c471c7b" },
			tipo: "Acidente",
			risco: "Inflamável",
		},
		{
			_id: { oid: "664788064e9b94949c471c7c" },
			tipo: "Acidente",
			risco: "Instalação, testes e manutenção de máquinas e equipamentos",
		},
		{
			_id: { oid: "664788064e9b94949c471c7d" },
			tipo: "Acidente",
			risco: "Intempéries",
		},
		{
			_id: { oid: "664788064e9b94949c471c7e" },
			tipo: "Acidente",
			risco: "Intoxicação por produtos químicos",
		},
		{
			_id: { oid: "664788064e9b94949c471c7f" },
			tipo: "Acidente",
			risco: "Intoxicações",
		},
		{
			_id: { oid: "664788064e9b94949c471c80" },
			tipo: "Acidente",
			risco: "Manuseio de ferramentas",
		},
		{
			_id: { oid: "664788064e9b94949c471c81" },
			tipo: "Acidente",
			risco: "Manutenção",
		},
		{
			_id: { oid: "664788064e9b94949c471c82" },
			tipo: "Acidente",
			risco: "Máquinas e equipamentos necessitando ajustes e manutenção",
		},
		{
			_id: { oid: "664788064e9b94949c471c83" },
			tipo: "Acidente",
			risco: "Máquinas e equipamentos sem proteção",
		},
		{
			_id: { oid: "664788064e9b94949c471c84" },
			tipo: "Acidente",
			risco: "Mecânicos",
		},
		{
			_id: { oid: "664788064e9b94949c471c85" },
			tipo: "Acidente",
			risco: "Mobiliário e/ou superfícies com quinas vivas, rebarbas ou elementos de fixação expostos",
		},
		{
			_id: { oid: "664788064e9b94949c471c86" },
			tipo: "Acidente",
			risco: "Mordidas",
		},
		{
			_id: { oid: "664788064e9b94949c471c87" },
			tipo: "Acidente",
			risco: "Móveis de aço soltos",
		},
		{
			_id: { oid: "664788064e9b94949c471c88" },
			tipo: "Acidente",
			risco: "Movimentação de materiais",
		},
		{
			_id: { oid: "664788064e9b94949c471c89" },
			tipo: "Acidente",
			risco: "Objetos cortantes e/ou perfurocortantes",
		},
		{
			_id: { oid: "664788064e9b94949c471c8a" },
			tipo: "Acidente",
			risco: "Operação de motosserras",
		},
		{
			_id: { oid: "664788064e9b94949c471c8b" },
			tipo: "Acidente",
			risco: "Operação de munck",
		},
		{
			_id: { oid: "664788064e9b94949c471c8c" },
			tipo: "Acidente",
			risco: "Operar BobCat em área energizada",
		},
		{
			_id: { oid: "664788064e9b94949c471c8d" },
			tipo: "Acidente",
			risco: "Outros",
		},
		{
			_id: { oid: "664788064e9b94949c471c8e" },
			tipo: "Acidente",
			risco: "Perda excessiva do calor do corpo",
		},
		{
			_id: { oid: "664788064e9b94949c471c8f" },
			tipo: "Acidente",
			risco: "Perfuração",
		},
		{
			_id: { oid: "664788064e9b94949c471c90" },
			tipo: "Acidente",
			risco: "Perfurações",
		},
		{
			_id: { oid: "664788064e9b94949c471c91" },
			tipo: "Acidente",
			risco: "Pisos, passagens, passarelas, plataformas, rampas e corredores com saliências, descontinuidades, aberturas ou obstruções, ou escorregadios",
		},
		{
			_id: { oid: "664788064e9b94949c471c92" },
			tipo: "Acidente",
			risco: "Possibilidade de exposição a violência/agressão no ambiente de trabalho",
		},
		{
			_id: { oid: "664788064e9b94949c471c93" },
			tipo: "Acidente",
			risco: "Probabilidade de incêndio ou explosão",
		},
		{
			_id: { oid: "664788064e9b94949c471c94" },
			tipo: "Acidente",
			risco: "Procedimentos de ajuste, limpeza, manutenção e inspeção deficientes ou inexistentes",
		},
		{
			_id: { oid: "664788064e9b94949c471c95" },
			tipo: "Acidente",
			risco: "Projeção de partículas de mistura química nos olhos",
		},
		{
			_id: { oid: "664788064e9b94949c471c96" },
			tipo: "Acidente",
			risco: "Projeção de partículas em operação de corte de alumínio, esmerilhamento e outras atividades",
		},
		{
			_id: { oid: "664788064e9b94949c471c97" },
			tipo: "Acidente",
			risco: "Projeção de partículas em operações de corte de ferro, esmerilhamento e outras atividades semelhantes",
		},
		{
			_id: { oid: "664788064e9b94949c471c98" },
			tipo: "Acidente",
			risco: "Projeção de partículas em operações diversas de manutenção",
		},
		{
			_id: { oid: "664788064e9b94949c471c99" },
			tipo: "Acidente",
			risco: "Projeção de partículas volantes",
		},
		{
			_id: { oid: "664788064e9b94949c471c9a" },
			tipo: "Acidente",
			risco: "Projeção de resíduos de madeira nos processos de corte e lixação de madeira",
		},
		{
			_id: { oid: "664788064e9b94949c471c9b" },
			tipo: "Acidente",
			risco: "Queda de materiais",
		},
		{
			_id: { oid: "664788064e9b94949c471c9c" },
			tipo: "Acidente",
			risco: "Queda da rampa de carregamento",
		},
		{
			_id: { oid: "664788064e9b94949c471c9d" },
			tipo: "Acidente",
			risco: "Queda de altura",
		},
		{
			_id: { oid: "664788064e9b94949c471c9e" },
			tipo: "Acidente",
			risco: "Queda de diferença de nível",
		},
		{
			_id: { oid: "664788064e9b94949c471c9f" },
			tipo: "Acidente",
			risco: "Queda de galhos",
		},
		{
			_id: { oid: "664788064e9b94949c471ca0" },
			tipo: "Acidente",
			risco: "Queda de materiais (restos de construção)",
		},
		{
			_id: { oid: "664788064e9b94949c471ca1" },
			tipo: "Acidente",
			risco: "Queda de material",
		},
		{
			_id: { oid: "664788064e9b94949c471ca2" },
			tipo: "Acidente",
			risco: "Queda de objetos",
		},
		{
			_id: { oid: "664788064e9b94949c471ca3" },
			tipo: "Acidente",
			risco: "Queda de peças",
		},
		{
			_id: { oid: "664788064e9b94949c471ca4" },
			tipo: "Acidente",
			risco: "Queda no piso escorregadio ou molhado",
		},
		{
			_id: { oid: "664788064e9b94949c471ca5" },
			tipo: "Acidente",
			risco: "Queimadura (chamas provenientes da caldeira e/ou recolhimento de cinza)",
		},
		{
			_id: { oid: "664788064e9b94949c471ca6" },
			tipo: "Acidente",
			risco: "Queimadura (solda)",
		},
		{
			_id: { oid: "664788064e9b94949c471ca7" },
			tipo: "Acidente",
			risco: "Queimadura em máquina de passar roupas (lençóis)",
		},
		{
			_id: { oid: "664788064e9b94949c471ca8" },
			tipo: "Acidente",
			risco: "Queimadura por contato com azeite quente proveniente de fritador para cones de massa",
		},
		{
			_id: { oid: "664788064e9b94949c471ca9" },
			tipo: "Acidente",
			risco: "Queimadura por manipulação de recipientes (panelas, formas) utilizadas no preparo de alimentos",
		},
		{
			_id: { oid: "664788064e9b94949c471caa" },
			tipo: "Acidente",
			risco: "Queimaduras",
		},
		{
			_id: { oid: "664788064e9b94949c471cab" },
			tipo: "Acidente",
			risco: "Respingo de água quente na face",
		},
		{
			_id: { oid: "664788064e9b94949c471cac" },
			tipo: "Acidente",
			risco: "Respingo de óleo quente nos olhos e face",
		},
		{
			_id: { oid: "664788064e9b94949c471cad" },
			tipo: "Acidente",
			risco: "Respingo de produto químico nos olhos",
		},
		{
			_id: { oid: "664788064e9b94949c471cae" },
			tipo: "Acidente",
			risco: "Respingo de produtos químicos",
		},
		{
			_id: { oid: "664788064e9b94949c471caf" },
			tipo: "Acidente",
			risco: "Risco da atividade",
		},
		{
			_id: { oid: "664788064e9b94949c471cb0" },
			tipo: "Acidente",
			risco: "Roubos ou outras espécies de violência física",
		},
		{
			_id: { oid: "664788064e9b94949c471cb1" },
			tipo: "Acidente",
			risco: "Sinalização deficiente e/ou inadequada",
		},
		{
			_id: { oid: "664788064e9b94949c471cb2" },
			tipo: "Acidente",
			risco: "Sinalização e isolamento ambiente",
		},
		{
			_id: { oid: "664788064e9b94949c471cb3" },
			tipo: "Acidente",
			risco: "Solda",
		},
		{
			_id: { oid: "664788064e9b94949c471cb4" },
			tipo: "Acidente",
			risco: "Superfícies e/ou materiais aquecidos expostos",
		},
		{
			_id: { oid: "664788064e9b94949c471cb5" },
			tipo: "Acidente",
			risco: "Superfícies e/ou materiais em baixa temperatura expostos",
		},
		{
			_id: { oid: "664788064e9b94949c471cb6" },
			tipo: "Acidente",
			risco: "Tombamento",
		},
		{
			_id: { oid: "664788064e9b94949c471cb7" },
			tipo: "Acidente",
			risco: "Trabalhos em altura",
		},
		{
			_id: { oid: "664788064e9b94949c471cb8" },
			tipo: "Acidente",
			risco: "Trabalhos em espaços confinados",
		},
		{
			_id: { oid: "664788064e9b94949c471cb9" },
			tipo: "Acidente",
			risco: "Uso de ar comprimido",
		},
		{
			_id: { oid: "664789c24e9b94949c471cba" },
			risco: "Assento inadequado",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cbb" },
			risco: "Cadência do trabalho imposta por um equipamento",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cbc" },
			risco: "Compressão de partes do corpo por superfícies rígidas ou com quinas",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cbd" },
			risco: "Controle rígido de produtividade",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cbe" },
			risco: "Desequilíbrio entre tempo de trabalho e tempo de repouso",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cbf" },
			risco: "Encosto do assento inadequado ou ausente",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cc0" },
			risco: "Equipamentos e/ou máquinas sem meios de regulagem de ajuste ou sem condições de uso",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cc1" },
			risco: "Equipamentos ou mobiliários não adaptados à antropometria do trabalhador",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cc2" },
			risco: "Exigência de alto nível de concentração, atenção e memória",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cc3" },
			risco: "Exigência de elevação frequente de membros superiores",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cc4" },
			risco: "Exigência de flexões de coluna vertebral frequentes",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cc5" },
			risco: "Exigência de postura inadequada",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cc6" },
			risco: "Exigência de realização de múltiplas tarefas, com alta demanda cognitiva",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cc7" },
			risco: "Exigência de uso frequente de força, pressão, preensão, flexão, extensão ou torção dos segmentos corporais",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cc8" },
			risco: "Flexão da cervical e abdução dos ombros",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cc9" },
			risco: "Flexão da cervical e deslocamento constante",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cca" },
			risco: "Flexão da cervical e extensão dos punhos.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ccb" },
			risco: "Flexão da cervical, da coluna lombar e dos ombros.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ccc" },
			risco: "Flexão da cervical, dos punhos e ombros.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ccd" },
			risco: "Flexão da cervical, rotação do tronco",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cce" },
			risco: "Flexão da cervical, rotação do tronco e abdução dos ombros.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ccf" },
			risco: "Flexão da cervical, rotação do tronco e flexão dos ombros.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cd0" },
			risco: "Flexão da cervical, rotação do tronco e flexão dos punhos.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cd1" },
			risco: "Flexão da coluna lombar e dos punhos.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cd2" },
			risco: "Flexão da coluna lombar, extensão dos punhos e flexão dos ombros.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cd3" },
			risco: "Flexão de tronco, flexão da cervical e extensão dos ombros.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cd4" },
			risco: "Flexão de tronco, flexão da cervical e extensão dos punhos.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cd5" },
			risco: "Flexão e rotação de tronco e da coluna cervical",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cd6" },
			risco: "Flexões de coluna vertebral frequentes",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cd7" },
			risco: "Frequente ação de puxar/empurrar cargas ou volumes",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cd8" },
			risco: "Frequente deslocamento a pé durante a jornada de trabalho",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cd9" },
			risco: "Frequente execução de movimentos repetitivos",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cda" },
			risco: "Iluminação Inadequada",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cdb" },
			risco: "Imposição de ritmos excessivos de trabalho",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cdc" },
			risco: "Insatisfação no trabalho",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cdd" },
			risco: "Insuficiência de capacitação para execução da tarefa",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cde" },
			risco: "Jornadas de trabalho prolongadas",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cdf" },
			risco: "LER",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ce0" },
			risco: "LER/DORT",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ce1" },
			risco: "Levantamento de peso, cargas e volumes",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ce2" },
			risco: "Levantamento e transporte manual de cargas ou volumes",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ce3" },
			risco: "Levantamento e transporte manual de peso",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ce4" },
			risco: "Manuseio de ferramentas e/ou objetos pesados por longos períodos",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ce5" },
			risco: "Manuseio de galões cheios e manipulam compensados para acomodação das cargas.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ce6" },
			risco: 'Manuseio ou movimentação de cargas e volumes sem pega ou com "pega pobre"',
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ce7" },
			risco: "Mobiliário ou equipamento sem espaço para movimentação de segmentos corporais",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ce8" },
			risco: "Mobiliário sem meios de regulagem de ajuste",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ce9" },
			risco: "Monotonia",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cea" },
			risco: "Monotonia e Repetitividade",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ceb" },
			risco: "Movimentos repetitivos de punhos, mão e braços",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cec" },
			risco: "Outras situações causadoras de estresse físico e/ou psíquico",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471ced" },
			risco: "Piso escorregadio e/ou irregular",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cee" },
			risco: "Posto de trabalho improvisado",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cef" },
			risco: "Posto de trabalho não planejado/adaptado para a posição sentada",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cf0" },
			risco: "Postura (trabalho com computador).",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cf1" },
			risco: "Postura constante em pé / Postura vertical em pé",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cf2" },
			risco: "Postura constante em pé e agachado",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cf3" },
			risco: "Postura de pé por longos períodos",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cf4" },
			risco: "Postura forçada e desajuste estrutural de coluna",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cf5" },
			risco: "Postura Inadequada",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cf6" },
			risco: "Postura predominante sentada",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cf7" },
			risco: "Postura sentada por longos períodos",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cf8" },
			risco: "Postural",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cf9" },
			risco: "Presença de reflexos em telas, painéis, vidros, monitores ou qualquer superfície, que causem desconforto ou prejudiquem a visualização",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cfa" },
			risco: "Risco de patologias de MMSS, coluna cervical.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cfb" },
			risco: "Risco em desconforto de membros superiores e coluna cervical na manipulação das ferramentas",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cfc" },
			risco: "Risco minimo em estruturas corporais como: membros inferiores e coluna lombar",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cfd" },
			risco: "Riscos em patologias de membros superiores e inferiores",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cfe" },
			risco: "Rotação da coluna torácica e Flexão dos ombros.",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471cff" },
			risco: "Situações de sobrecarga de trabalho mental",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d00" },
			risco: "Sobrecarga psíquica e muscular estática de pescoço, ombros, dorso e membros superiores",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d01" },
			risco: "Tensões musculares",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d02" },
			risco: "Trabalho com demandas divergentes (ordens divergentes, metas incompatíveis entre si, exigência de qualidade X quantidade, entre outras)",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d03" },
			risco: "Trabalho com esforço físico intenso",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d04" },
			risco: "Trabalho com necessidade de alcançar objetos, documentos, controles ou qualquer ponto além das zonas de alcance ideais para as características antropométricas do trabalhador",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d05" },
			risco: "Trabalho com necessidade de variação de turnos",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d06" },
			risco: "Trabalho com utilização rigorosa de metas de produção",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d07" },
			risco: "Trabalho em condições de difícil comunicação",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d08" },
			risco: "Trabalho em posturas incômodas ou pouco confortáveis por longos períodos",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d09" },
			risco: "Trabalho em turno e noturno",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d0a" },
			risco: "Trabalho intensivo com teclado ou outros dispositivos de entrada de dados",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d0b" },
			risco: "Trabalho noturno",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d0c" },
			risco: "Trabalho realizado sem pausas pré-definidas para descanso",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d0d" },
			risco: "Trabalho remunerado por produção",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d0e" },
			risco: "Transporte Manual / Levantamento de Peso",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d0f" },
			risco: "Uso frequente de alavancas",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d10" },
			risco: "Uso frequente de escadas",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664789c24e9b94949c471d11" },
			risco: "Uso frequente de pedais",
			tipo: "Ergonomico",
		},
		{
			_id: { oid: "664b930e4341c7488e243451" },
			risco: "Ruído",
			tipo: "Fisico",
		},
		{
			_id: { oid: "664b930e4341c7488e243452" },
			risco: "Calor",
			tipo: "Fisico",
		},
		{
			_id: { oid: "664b930e4341c7488e243453" },
			risco: "Radiação Ionizantes",
			tipo: "Fisico",
		},
		{
			_id: { oid: "664b930e4341c7488e243454" },
			risco: "Radiação Não Ionizantes",
			tipo: "Fisico",
		},
		{
			_id: { oid: "664b930e4341c7488e243455" },
			risco: "Vibração",
			tipo: "Fisico",
		},
		{
			_id: { oid: "664b930e4341c7488e243456" },
			risco: "Frio",
			tipo: "Fisico",
		},
		{
			_id: { oid: "664b930e4341c7488e243457" },
			risco: "Umidade",
			tipo: "Fisico",
		},
		{
			_id: { oid: "664b94414341c7488e243459" },
			risco: "Agentes biológicos (bactérias, vírus, protozoários, fungos, príons, parasitas e outros)",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24345a" },
			risco: "Bactéria",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24345b" },
			risco: "Contato com Esgotos",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24345c" },
			risco: "Contato com Materiais Contaminados",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24345d" },
			risco: "Contato com materiais infecto-contagiantes",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24345e" },
			risco: "Contato com microrganismos nos corpos",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24345f" },
			risco: "Contato com pacientes e materiais perfuro cortantes",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243460" },
			risco: "Contato direto com pacientes",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243461" },
			risco: "Contato direto com pacientes e materiais infecto contagiosos",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243462" },
			risco: "Couro de animais",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243463" },
			risco: "Estábulos e cavalariças.",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243464" },
			risco: "Fungos",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243465" },
			risco: "Higienização de instalações sanitárias e contato com material infecto contagiante (coleta de lixo).",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243466" },
			risco: "Hospitais, ambulatórios, postos de vacinação e outros estabelecimentos destinados ao atendimento e tratamento de animais (aplica-se apenas ao pessoal que tenha contato com tais animais)",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243467" },
			risco: "Manutenção em maquinas e equipamentos contaminados (ao acessar setores onde se encontra o risco biológico)",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243468" },
			risco: "Resíduos de animais não deteriorados.",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243469" },
			risco: "SARS-Cov-2 (Covid-19)",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24346a" },
			risco: "Trabalhos e operações em cemitérios (exumação de corpos).",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24346b" },
			risco: "Trabalhos e operações em contato permanente com pacientes, animais ou com material infecto-contagiante em gabinetes de autópsias, de anatomia e histoanatomopatologia (aplica-se somente ao pessoal técnico).",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24346c" },
			risco: "Trabalhos e operações em contato permanente com pacientes, animais ou com material infecto-contagiante em hospitais, ambulatórios, postos de vacinação e outros estabelecimentos destinados ao atendimento e tratamento de animais (aplica-se apenas ao pessoal que tenha contato com tais animais).",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24346d" },
			risco: "Trabalhos e operações em contato permanente com pacientes, animais ou com material infecto-contagiante em hospitais, serviços de emergência, enfermarias, ambulatórios, postos de vacinação e outros estabelecimentos destinados aos cuidados da saúde humana (aplica-se unicamente ao pessoal que tenha contato com os pacientes, bem como aos que manuseiam objetos de uso desses pacientes, não previamente esterilizados).",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24346e" },
			risco: "Trabalhos e operações em contato permanente com pacientes, animais ou com material infecto-contagiante em laboratórios de análise clínica e histopatologia (aplica-se tão-só ao pessoal técnico).",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e24346f" },
			risco: "Trabalhos e operações em contato permanente com resíduos de animais deteriorados.",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243470" },
			risco: "Trabalhos ou operações, em contato com pacientes em isolamento por doenças infecto-contagiosas, bem como objetos de seu uso, não previamente esterilizados.",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243471" },
			risco: "Trabalhos ou operações, em contato permanente com carnes, glândulas, vísceras, sangue, ossos, couros, pelos e dejeções de animais portadores de doenças infecto-contagiosas (carbunculose, brucelose, tuberculose).",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243472" },
			risco: "Trabalhos ou operações, em contato permanente com esgotos (galerias e tanques).",
			tipo: "Biologico",
		},
		{
			_id: { oid: "664b94414341c7488e243473" },
			risco: "Trabalhos ou operações, em contato permanente com lixo urbano (coleta e industrialização).",
			tipo: "Biologico",
		},
	];
}
