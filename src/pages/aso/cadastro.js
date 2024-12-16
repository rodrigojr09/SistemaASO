import React, { useState } from "react";
import { validacaoDetamanho, validarCNPJ, validarIdade } from "@/utils";

function Cadastro() {
	const [form, setForm] = useState({
		cpf: "",
		nome: "",
		dataNascimento: "",
		empresa: "",
		cnpj: "",
		setor: "",
		funcao: "",
	});
	validacaoDetamanho
	validarCNPJ
	validarIdade
	const handleChange = (e) => {
		const { id, value } = e.target;
		setForm({ ...form, [id]: value });
	};

	const handleSave = () => {
		console.log("Informações Salvas:", form);
		alert("Informações salvas com sucesso!");

fetch('/api/aso/cadastro', {
	method: 'POST', // Método da requisição
	headers: {
	  'Content-Type': 'application/json' // Tipo de conteúdo
	},
	body: JSON.stringify(form) // Dados enviados no corpo da requisição
  })
	.then(response => {
	  if (!response.ok) {
		alert(response.statusText);
	  }
	  return response.json(); // Converte a resposta para JSON
	})
	.then(data => {
	  console.log('Resposta da API:', data);
	})
	.catch(error => {
	  console.error('Erro:', error);
	});
	};

	const navigateTo = (section) => {
		console.log(`Navegando para: ${section}`);
	};

	return (
		<div className="bg-gradient-to-r from-black via-pink-500 to-black min-h-screen flex">
			<div className="w-64 min-h-screen fixed bg-black/80 text-white flex flex-col p-6 shadow-lg">
				<h2 className="mb-4 text-xl font-bold">Menu</h2>
				<ul className="space-y-4">
					<li>
						<button
							className="w-full text-left font-semibold"
							id="info-basicas-btn"
							onClick={() => navigateTo("info-basicas")}
						>
							1. Informações Básicas
						</button>
					</li>
					<li>
						<button
							className="w-full text-left ml-4 font-semibold text-gray-500"
							id="riscos-btn"
							disabled
						>
							1.1. Riscos
						</button>
					</li>
					<li>
						<button
							className="w-full text-left ml-8 font-semibold text-gray-500"
							id="exames-btn"
							disabled
						>
							1.1.1. Exames
						</button>
					</li>
					<li>
						<button
							className="w-full text-left font-semibold text-gray-500"
							id="resumo-btn"
							disabled
						>
							2. Resumo
						</button>
					</li>
				</ul>
			</div>

			<div className="w-full h-full flex ml-64 items-center justify-center">
				<div className="w-full max-w-xl my-10 rounded-lg bg-black/70 p-8 shadow-lg">
					<h1 className="mb-8 text-center text-3xl font-bold text-white">
						Cadastro de Funcionário
					</h1>

					<div className="mb-8">
						<h2 className="mb-6 border-b pb-2 text-center text-xl font-semibold text-white">
							Informações Pessoais
						</h2>
						<div className="mb-6">
							<label
								htmlFor="cpf"
								className="mb-2 block font-medium text-white"
							>
								CPF:
							</label>
							<input
								type="text"
								id="cpf"
								placeholder="Digite o CPF"
								value={form.cpf}
								onChange={handleChange}
								className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="nome"
								className="mb-2 block font-medium text-white"
							>
								Nome Completo:
							</label>
							<input
								type="text"
								id="nome"
								placeholder="Digite o Nome Completo"
								value={form.nome}
								onChange={handleChange}
								className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="dataNascimento"
								className="mb-2 block font-medium text-white"
							>
								Data de Nascimento:
							</label>
							<input
								type="date"
								id="dataNascimento"
								value={form.dataNascimento}
								onChange={handleChange}
								className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
							/>
						</div>
					</div>

					<div className="mb-8">
						<h2 className="mb-6 border-b pb-2 text-center text-xl font-semibold text-white">
							Informações da Empresa
						</h2>
						<div className="mb-6">
							<label
								htmlFor="empresa"
								className="mb-2 block font-medium text-white"
							>
								Nome da Empresa:
							</label>
							<input
								type="text"
								id="empresa"
								placeholder="Digite o Nome da Empresa"
								value={form.empresa}
								onChange={handleChange}
								className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="cnpj"
								className="mb-2 block font-medium text-white"
							>
								CNPJ:
							</label>
							<input
								type="text"
								id="cnpj"
								placeholder="Digite o CNPJ"
								value={form.cnpj}
								onChange={handleChange}
								className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
							/>
						</div>
					</div>

					<div className="mb-8">
						<h2 className="mb-6 border-b pb-2 text-center text-xl font-semibold text-white">
							Informações de Função
						</h2>
						<div className="mb-6">
							<label
								htmlFor="setor"
								className="mb-2 block font-medium text-white"
							>
								Setor:
							</label>
							<input
								type="text"
								id="setor"
								placeholder="Digite o Setor"
								value={form.setor}
								onChange={handleChange}
								className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="funcao"
								className="mb-2 block font-medium text-white"
							>
								Função:
							</label>
							<input
								type="text"
								id="funcao"
								placeholder="Digite a Função"
								value={form.funcao}
								onChange={handleChange}
								className="w-full rounded-md border border-gray-300 p-3 focus:border-blue-500 focus:ring focus:ring-blue-200"
							/>
						</div>
					</div>
					<div className="text-center">
						<button
							className="rounded-lg bg-pink-600 px-6 py-3 font-bold text-white hover:scale-110 focus:outline-none"
							onClick={handleSave}
						>
							Salvar Informações
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cadastro;
