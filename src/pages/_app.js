import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";

export default function App({ Component, pageProps }) {
	return (
		<div className="bg-gradient-to-r from-black via-[#00a44f] to-black min-h-screen flex">
			<Sidebar />
			<Component {...pageProps} />
		</div>
	);
}
