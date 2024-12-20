import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getRiscos } from "@/utils";

function Cadastro() {
	const handleSave = () => {};

	const [search, setSearch] = useState("");
	const [selecionados, setSelecionados] = useState([]);
	const router = useRouter();
	useEffect(() => {
		async function starting() {
			const res = await fetch("http://192.168.3.32:3001/aso/get", {
				method: "GET",
			});

			if (res.ok) {
				const data = await res.json();
				if (data) {
					setSelecionados(data.riscos);
				}
			}
		}

		starting();
	}, [router.asPath]);
	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="w-screen flex h-min mt-[5%] justify-center">
			<div className="w-full max-w-xl h-min bg-black/70 rounded-lg p-4 shadow-lg">
				<h1 className="mb-6 text-center text-3xl font-bold text-white">
					Selecionar Exames
				</h1>
				<div className="grid grid-cols-1 gap-4">
					{selecionados.map((selecionado, i) => (
						<div
							key={i}
							className="bg-green-500 rounded-lg p-4 shadow-md"
						>
							<p className="text-center font-semibold text-white">
								{selecionado.risco}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="w-[30%] h-min bg-black/70 rounded-lg ml-4 p-2 shadow-lg">
				<div className="mb-6">
					<label
						htmlFor="procurar-risco-lateral"
						className="block mb-2 text-white font-medium"
					>
						Pesquisar Exames:
					</label>
					<input
						type="text"
						id="procurar-risco-lateral"
						placeholder="Ex.:Exames"
						value={search}
						onChange={handleChange}
						className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
					/>
				</div>
				<div className="text-center">
					<button
						className="rounded-lg bg-blue-500 px-4 py-2 my-2 font-bold text-white hover:scale-110 focus:outline-none"
						onClick={handleSave} // azul fica melhor po (:
					>
						Salvar Informações
					</button>
				</div>
			</div>
		</div>
	);
}
export default Cadastro;
