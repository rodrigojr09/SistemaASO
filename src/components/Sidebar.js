import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
	const router = useRouter();
	function SideItem({ disabled, rota, text }) {
		if (router.asPath.startsWith(rota) || disabled) rota = "#";
		return (
			<li>
				<Link
					className={
						"w-full text-left font-semibold " +
						(disabled ? "text-gray-500" : "")
					}
					href={rota}
				>
					{text}
				</Link>
			</li>
		);
	}
	let level = 1;
	if (router.asPath.startsWith("/aso/cadastro")) level = 1;
	if (router.asPath.startsWith("/aso/riscos/cadastro")) level = 2;
	if (router.asPath.startsWith("/aso/riscos/exames/cadastro")) level = 3;
	if(router.asPath !== "/") return (
		<div className="w-64 min-h-screen bg-black/80 text-white flex flex-col p-6 shadow-lg">
			<h2 className="mb-4 text-xl font-bold">Menu</h2>
			<ul className="space-y-4">
				<SideItem
					disabled={level < 1}
					rota="/aso/cadastro"
					text={"1. Informações Básicas"}
				/>
				<SideItem
					disabled={level < 2}
					rota="/aso/riscos/cadastro"
					text={"2. Riscos"}
				/>
				<SideItem
					disabled={level < 3}
					rota="/aso/riscos/exames/cadastro"
					text={"3. Exames"}
				/>
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
