import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav className="bg-black h-[48px] flex items-center justify-center">
				<div className="w-full max-w-5xl flex items-center justify-between">
					<Link href="/">
						<div className="p-2">
							<i className="fa-brands fa-apple text-gray-300 text-xl"></i>
						</div>
					</Link>

					<div className="flex items-center gap-4 text-gray-300 text-lg">
						<Link href="#">
							<div className="p-2">
								<i className="fa-solid fa-magnifying-glass"></i>
							</div>
						</Link>
						<Link href="#">
							<div className="p-2">
								<i className="fa-solid fa-bag-shopping"></i>
							</div>
						</Link>
						<Link href="#">
							<div className="p-2">
								<i className="fa-solid fa-bars text-gray-400"></i>
							</div>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}

export function MobileNav() {
	return <nav></nav>;
}

export function DesktopNav() {
	return <nav></nav>;
}
