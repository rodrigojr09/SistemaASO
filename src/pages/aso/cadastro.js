import React, { useState } from "react";
import { validacaoDetamanho, validarCNPJ, validarIdade } from "@/utils";
import { useRouter } from "next/router";

function Cadastro() {
	const router = useRouter();
	const [form, setForm] = useState({});
	validacaoDetamanho;
	validarCNPJ;
	validarIdade;
	const handleChange = (e) => {
		const { id, value } = e.target;
		setForm({ ...form, [id]: value });
	};
	const handleSave = () => {
		console.log("Informações Salvas:", form);
		fetch("http://192.168.3.32:3001/aso/create", {
			method: "POST", // Método da requisição
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				funcionario: {
					nome: form.nome,
					nascimento: form.dataNascimento,
					cpf: form.cpf,
				},
				empresa: {
					nome: form.nome,
					cnpj: form.cnpj,
				},
				funcao: form.funcao,
				setor: form.setor,
			}), // Dados enviados no corpo da requisição
		})
			.then(async (response) => {
				if (!response.ok) throw await response.text();

				return response.json();
			})
			.then(() => {
				return navigateTo("/aso/riscos/cadastro");
			})
			.catch((error) => {
				console.error("Erro:", error);
				alert(error);
			});
	};

	const navigateTo = (section) => {
		console.log(`Navegando para: ${section}`);
		router.push(section);
	};

	return (
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
						className="rounded-lg bg-blue-500 px-6 py-3 font-bold text-white hover:scale-110 focus:outline-none"
						onClick={handleSave} //aul fica mias bonito (:
					>
						Salvar Informações
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cadastro;
