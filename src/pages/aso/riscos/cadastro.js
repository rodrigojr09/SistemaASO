import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getRiscos } from "@/utils";

function Cadastro() {
	const handleSave = async () => {
		const res = await fetch("http://192.168.3.32:3001/aso/update/riscos", {
			method: "POST",
			body: JSON.stringify({ riscos: selecionados }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (res.ok) {
			const data = await res.json();
			location.href = "/aso/riscos/exames/cadastro";
		} else {
			alert(
				"Erro ao enviar informações ao servidor!\n" + (await res.text())
			);
		}
	};
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

	const [search, setSearch] = useState("");
	const [riscos] = useState(getRiscos());
	const [selecionados, setSelecionados] = useState([]);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const filteredRiscos = riscos.filter(
		(risco) =>
			search !== "" &&
			risco.risco.toLowerCase().includes(search.toLowerCase())
	);

	const handleSelect = (risco) => {
		if (selecionados.includes(risco)) {
			setSelecionados((prev) => prev.filter((a) => a !== risco));
		} else {
			setSelecionados((prev) => [risco, ...prev]);
		}
	};

	return (
		<div className="w-screen flex h-min mt-[5%] justify-center">
			<div className="w-full max-w-xl h-min bg-black/70 rounded-lg p-4 shadow-lg">
				<h1 className="mb-6 text-center text-3xl font-bold text-white">
					Selecionar Riscos
				</h1>
				<div className="mb-6">
					<label
						htmlFor="procurar-risco"
						className="block mb-2 text-white font-medium"
					>
						Digite o nome do risco:
					</label>
					<input
						type="text"
						id="procurar-risco"
						placeholder="Ex.: Químico, Físico"
						value={search}
						onChange={handleChange}
						className="w-full p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
					/>
				</div>
				<div className="grid grid-cols-3 gap-4">
					{filteredRiscos.map((risco, index) => (
						<button
							key={index}
							onClick={() => handleSelect(risco)}
							title={risco.risco}
							className={
								"rounded-lg bg-[#00a44f] text-sm text-start p-2 text-white font-bold hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-900 " +
								(selecionados.includes(risco)
									? "bg-green-800"
									: "")
							}
						>
							{risco.risco.length > 50
								? risco.risco.slice(0, 50) + "..."
								: risco.risco}
							<br />
							<span className="opacity-50">{risco.tipo}</span>
						</button>
					))}
					{filteredRiscos.length === 0 && (
						<p className="col-span-3 text-center text-white">
							Nenhum risco encontrado.
						</p>
					)}
				</div>
			</div>
			<div className="w-[30%] h-min bg-black/70 rounded-lg ml-4 p-2 shadow-lg">
				{selecionados.map((risco, index) => (
					<button
						key={index}
						onClick={() => handleSelect(risco)}
						className={
							"rounded-lg bg-[#00a44f] w-full mb-4 text-sm text-start p-2 text-white font-bold hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-900 " +
							(selecionados.includes(risco) ? "bg-green-800" : "")
						}
					>
						{risco.risco}
						<br />
						<span className="opacity-50">{risco.tipo}</span>
					</button>
				))}
				{selecionados.length === 0 && (
					<p className="text-center text-white">
						Nenhum risco selecionado.
					</p>
				)}
				<div className="text-center">
					<button
						className="rounded-lg bg-blue-500  px-4 py-2 my-2 font-bold text-white hover:scale-110 focus:outline-none"
						onClick={handleSave} //azul fica melhor po (:
					>
						Salvar Informações
					</button>
				</div>
			</div>
		</div>
	);
}
export default Cadastro;
