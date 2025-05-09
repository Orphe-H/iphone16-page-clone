import Link from "next/link";

export default function Header() {
	return (
		<header>
			<MobileNav />
			<DesktopNav />
		</header>
	);
}

export function MobileNav() {
	return (
		<nav className="bg-black h-[46px] flex items-center justify-center ml:hidden">
			<div className="w-full max-w-5xl flex items-center justify-between">
				<Link href="/">
					<div className="px-1 mx-3 text-gray-300 hover:text-gray-100">
						<span>
							<i className="fa-brands fa-apple text-[21px]"></i>
						</span>
					</div>
				</Link>

				<div className="flex items-center gap-8 text-gray-300 text-lg pr-4">
					<div>
						<Link
							href="#"
							className="hover:text-gray-100 focus:text-gray-100"
						>
							<i className="fa-solid fa-magnifying-glass"></i>
						</Link>
					</div>
					<div>
						<Link
							href="#"
							className="hover:text-gray-100 focus:text-gray-100"
						>
							<i className="fa-solid fa-bag-shopping"></i>
						</Link>
					</div>
					<div>
						<Link
							href="#"
							className="text-gray-400 hover:text-gray-200 focus:text-gray-200"
						>
							<i className="fa-solid fa-bars"></i>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export function DesktopNav() {
	return (
		<nav className="bg-black h-[46px] hidden min-ml:flex items-center justify-center">
			<div className="w-full max-w-5xl flex items-center justify-between">
				<Link href="/">
					<div className="px-1 mx-4 text-gray-300 hover:text-gray-100">
						<span>
							<i className="fa-brands fa-apple text-lg"></i>
						</span>
					</div>
				</Link>

				<div className="flex items-center justify-evenly gap-4 text-gray-300 text-xs w-full pr-5">
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>Store</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>Mac</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>iPad</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>iPad</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>iPhone</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>Watch</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>Vision</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>AirPods</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>TV & Maison</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>Divertissement</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>Accessoires</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<span>Assistance</span>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<i className="fa-solid fa-magnifying-glass text-sm"></i>
						</Link>
					</div>
					<div>
						<Link href="#" className="hover:text-gray-100">
							<i className="fa-solid fa-bag-shopping text-sm"></i>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}
