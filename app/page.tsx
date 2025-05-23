import Footer from "./components/sections/footer/footer";
import Main from "./components/sections/main/main";
import Header from "./components/sections/header/header";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="flex-1">
				<Header />
				<Main />
			</div>
			<Footer />
		</div>
	);
}
