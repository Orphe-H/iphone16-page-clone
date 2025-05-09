"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => {
		setIsMenuOpen(false);
		setActiveSubMenu(null);
	};

	const goToSubMenu = (menu: string) => setActiveSubMenu(menu);
	const goBack = () => setActiveSubMenu(null);

	return (
		<>
			<nav className="bg-black h-[46px] flex items-center justify-center ml:hidden">
				<div className="w-full max-w-5xl flex items-center justify-between">
					<Link href="/">
						<div className="px-1 mx-3 text-gray-300 hover:text-gray-100">
							<i className="fa-brands fa-apple text-[21px]"></i>
						</div>
					</Link>

					<div className="flex items-center gap-8 text-gray-300 text-lg pr-4">
						<Link href="#">
							<i className="fa-solid fa-magnifying-glass hover:text-gray-100"></i>
						</Link>
						<Link href="#">
							<i className="fa-solid fa-bag-shopping hover:text-gray-100"></i>
						</Link>
						<button onClick={openMenu} className="cursor-pointer">
							<i className="fa-solid fa-bars text-gray-400 hover:text-gray-200"></i>
						</button>
					</div>
				</div>
			</nav>

			{isMenuOpen && (
				<div className="fixed inset-0 bg-background z-50 flex flex-col">
					<div className="grid grid-cols-16 py-3">
						{activeSubMenu && (
							<button
								className="col-span-1 cursor-pointer"
								onClick={goBack}
							>
								<i className="fa-solid fa-chevron-left text-xl"></i>
							</button>
						)}

						<button
							className="col-span-1 col-start-16 cursor-pointer"
							onClick={closeMenu}
						>
							<i className="fa-solid fa-xmark text-xl"></i>
						</button>
					</div>

					{!activeSubMenu && (
						<div className="grid grid-cols-16">
							<ul className="col-span-14 col-start-2 flex flex-col text-2xl font-semibold">
								<li className="py-2">
									<button
										onClick={() => goToSubMenu("store")}
										className="block w-full text-left cursor-pointer"
									>
										Store
									</button>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										Mac
									</Link>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										iPad
									</Link>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										iPhone
									</Link>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										Watch
									</Link>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										Vision
									</Link>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										AirPods
									</Link>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										TV & Maison
									</Link>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										Divertissements
									</Link>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										Accessoires
									</Link>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										Assistance
									</Link>
								</li>
							</ul>
						</div>
					)}

					{activeSubMenu === "store" && (
						<div className="grid grid-cols-16 px-4">
							<ul className="col-start-2 col-span-14 flex flex-col gap-6 text-lg">
								<li>
									<Link href="#">Apple Music</Link>
								</li>
								<li>
									<Link href="#">iCloud</Link>
								</li>
								<li>
									<Link href="#">Apple TV+</Link>
								</li>
							</ul>
						</div>
					)}
				</div>
			)}
		</>
	);
}
