import Link from "next/link";

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
