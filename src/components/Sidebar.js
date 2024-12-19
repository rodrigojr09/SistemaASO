export default function Sidebar({ level }) {
	return (
		<div className="w-64 min-h-screen fixed bg-black/80 text-white flex flex-col p-6 shadow-lg">
			<h2 className="mb-4 text-xl font-bold">Menu</h2>
			<ul className="space-y-4">
				<li>
					<button
						className="w-full text-left font-semibold"
						id="info-basicas-btn"
						disabled
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
	);
}
