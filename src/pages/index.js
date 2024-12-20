import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-gradient-to-r from-black via-[#00a44f] to-black min-h-screen flex items-center justify-center space-x-4 w-full">
			<Link
				href="/aso/cadastro"
				className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br via-[#00a44f] group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
			>
				<span className="relative flex items-center justify-center w-80 h-40 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					NOVO ASO
				</span>
			</Link>

			<button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 via-[#00a44f] group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
				<span className="relative flex items-center justify-center w-80 h-40 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
					CARREGAR ASO
				</span>
			</button>
		</div>
	);
}
