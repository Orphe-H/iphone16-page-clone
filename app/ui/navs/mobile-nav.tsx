"use client";

import { useState } from "react";
import Link from "next/link";

const menus = [
	{
		key: "store",
		label: "Store",
		links: [
			{ label: "Tout derniers produits", href: "#" },
			{ label: "Mac", href: "#" },
			{ label: "iPad", href: "#" },
			{ label: "iPhone", href: "#" },
			{ label: "Apple Watch", href: "#" },
			{ label: "Apple Vision Pro", href: "#" },
			{ label: "Accessoires", href: "#" },
		],
		comparisonBlock: [],
		footerBlocks: [
			{
				title: "Liens rapides",
				links: [
					{ label: "Trouver un magasin", href: "#" },
					{ label: "État de votre commande", href: "#" },
					{ label: "Apple Trade In", href: "#" },
					{ label: "Financement", href: "#" },
					{ label: "Configuration personnalisée", href: "#" },
				],
			},
			{
				title: "Acheter - Programmes spéciaux",
				links: [
					{ label: "Produits reconditionnés", href: "#" },
					{ label: "Éducation", href: "#" },
					{ label: "Entreprises", href: "#" },
				],
			},
		],
	},
	{
		key: "mac",
		label: "Mac",
		links: [
			{ label: "Découvrir tous les Mac", href: "#" },
			{ label: "MacBook Air", href: "#" },
			{ label: "MacBook Pro", href: "#" },
			{ label: "iMac", href: "#" },
			{ label: "Mac Mini", href: "#" },
			{ label: "Mac Studio", href: "#" },
			{ label: "Mac Pro", href: "#" },
			{ label: "Écrans", href: "#" },
		],
		comparisonBlock: [
			{ label: "Comparer les Mac", href: "#" },
			{ label: "Passer du PC au Mac", href: "#" },
		],
		footerBlocks: [
			{
				title: "Acheter - Mac",
				links: [
					{ label: "Acheter un Mac", href: "#" },
					{ label: "Accessoires pour Mac", href: "#" },
					{ label: "Apple Trade In", href: "#" },
					{ label: "Financement", href: "#" },
				],
			},
			{
				title: "Autour du Mac",
				links: [
					{ label: "Assistance Mac", href: "#" },
					{ label: "AppleCare+ pour Mac", href: "#" },
					{ label: "macOS Sequola", href: "#" },
					{ label: "Apple Intelligence", href: "#" },
					{ label: "Apps signées Apple", href: "#" },
					{ label: "Continuité", href: "#" },
					{ label: "iCloud+", href: "#" },
					{ label: "Mac en entreprise", href: "#" },
					{ label: "Education", href: "#" },
				],
			},
		],
	},
	{
		key: "ipad",
		label: "iPad",
		links: [
			{ label: "Découvrir tous les iPad", href: "#" },
			{ label: "iPad Pro", href: "#" },
			{ label: "iPad Air", href: "#" },
			{ label: "iPad", href: "#" },
			{ label: "iPad mini", href: "#" },
			{ label: "Apple Pencil", href: "#" },
			{ label: "Claviers", href: "#" },
		],
		comparisonBlock: [
			{ label: "Comparer les iPad", href: "#" },
			{ label: "Pourquoi iPad", href: "#" },
		],
		footerBlocks: [
			{
				title: "Acheter - iPad",
				links: [
					{ label: "Acheter un iPad", href: "#" },
					{ label: "Accessoires pour iPad", href: "#" },
					{ label: "Apple Trade In", href: "#" },
					{ label: "Financement", href: "#" },
				],
			},
			{
				title: "Autour de l’iPad",
				links: [
					{ label: "Assistance iPad", href: "#" },
					{ label: "AppleCare+ pour iPad", href: "#" },
					{ label: "iPadOS 18", href: "#" },
					{ label: "Apple Intelligence", href: "#" },
					{ label: "Pour les familles", href: "#" },
					{ label: "Apps signées Apple", href: "#" },
					{ label: "iCloud+", href: "#" },
					{ label: "Éducation", href: "#" },
				],
			},
		],
	},
	{
		key: "iphone",
		label: "iPhone",
		links: [
			{ label: "Découvrir tous les iPhone", href: "#" },
			{ label: "iPhone 16 Pro", href: "#" },
			{ label: "iPhone 16", href: "#" },
			{ label: "iPhone 16e", href: "#" },
			{ label: "iPhone 15", href: "#" },
		],
		comparisonBlock: [
			{ label: "Comparer les iPhone", href: "#" },
			{ label: "Passer à l’iPhone", href: "#" },
		],
		footerBlocks: [
			{
				title: "Acheter - iPhone",
				links: [
					{ label: "Acheter un iPhone", href: "#" },
					{ label: "Accessoires pour iPhone", href: "#" },
					{ label: "Apple Trade In", href: "#" },
					{ label: "Financement", href: "#" },
				],
			},
			{
				title: "Autour de l’iPhone",
				links: [
					{ label: "Assistance iPhone", href: "#" },
					{ label: "AppleCare+ pour iPhone", href: "#" },
					{ label: "iOS 18", href: "#" },
					{ label: "Apple Intelligence", href: "#" },
					{ label: "Pour les familles", href: "#" },
					{ label: "Apps signées Apple", href: "#" },
					{ label: "iPhone et confidentialité", href: "#" },
					{ label: "iCloud+", href: "#" },
					{ label: "Apple Pay", href: "#" },
					{ label: "Siri", href: "#" },
				],
			},
		],
	},
	{
		key: "watch",
		label: "Watch",
		links: [
			{ label: "Découvrir toutes les Apple Watch", href: "#" },
			{ label: "Apple Watch Series 10", href: "#" },
			{ label: "Apple Watch Ultra 2", href: "#" },
			{ label: "Apple Watch SE", href: "#" },
			{ label: "Apple Watch Nike", href: "#" },
			{ label: "Apple Watch Hermès", href: "#" },
		],
		comparisonBlock: [
			{ label: "Comparer les Apple Watch", href: "#" },
			{ label: "Pourquoi Apple Watch", href: "#" },
		],
		footerBlocks: [
			{
				title: "Acheter - Apple Watch",
				links: [
					{ label: "Acheter une Apple Watch", href: "#" },
					{ label: "Apple Watch Studio", href: "#" },
					{ label: "Bracelets Apple Watch", href: "#" },
					{ label: "Accessoires pour Apple Watch", href: "#" },
					{ label: "Apple Trade In", href: "#" },
					{ label: "Financement", href: "#" },
				],
			},
			{
				title: "Autour de l’Apple Watch",
				links: [
					{ label: "Assistance Apple Watch", href: "#" },
					{ label: "AppleCare+", href: "#" },
					{ label: "watchOS 11", href: "#" },
					{ label: "Apple Watch pour vos enfants", href: "#" },
					{ label: "Apps signées Apple", href: "#" },
					{ label: "Apple Fitness+", href: "#" },
				],
			},
		],
	},
	{
		key: "vision",
		label: "Vision",
		links: [{ label: "Découvrir Apple Vision Pro", href: "#" }],
		comparisonBlock: [
			{ label: "Visite guidée", href: "#" },
			{ label: "Caractéristiques", href: "#" },
		],
		footerBlocks: [
			{
				title: "Acheter - Vision",
				links: [
					{ label: "Acheter un Apple Vision Pro", href: "#" },
					{ label: "Accessoires pour Apple Vision Pro", href: "#" },
					{ label: "Réserver une démo", href: "#" },
					{ label: "Financement", href: "#" },
				],
			},
			{
				title: "Autour du Vision",
				links: [
					{ label: "Assistance Vision Pro", href: "#" },
					{ label: "AppleCare+", href: "#" },
					{ label: "visionOS 2", href: "#" },
				],
			},
		],
	},
	{
		key: "airpods",
		label: "AirPods",
		links: [
			{ label: "Découvrir tous les AirPods", href: "#" },
			{ label: "AirPods 4", href: "#" },
			{ label: "AirPods 2", href: "#" },
			{ label: "AirPods Max", href: "#" },
		],
		comparisonBlock: [{ label: "Comparer les AirPods", href: "#" }],
		footerBlocks: [
			{
				title: "Acheter - AirPods",
				links: [
					{ label: "Acheter des AirPods", href: "#" },
					{ label: "Accessoires AirPods", href: "#" },
				],
			},
			{
				title: "Autour des AirPods",
				links: [
					{ label: "Assistance AirPods", href: "#" },
					{
						label: "AppleCare+ pour casques et écouteurs",
						href: "#",
					},
					{ label: "Santé auditive", href: "#" },
					{ label: "Apple Music", href: "#" },
				],
			},
		],
	},
	{
		key: "tv_maison",
		label: "TV & Maison",
		links: [
			{ label: "Découvrir TV & Maison", href: "#" },
			{ label: "Apple TV 4K", href: "#" },
			{ label: "HomePod", href: "#" },
			{ label: "HomePod mini", href: "#" },
		],
		comparisonBlock: [],
		footerBlocks: [
			{
				title: "Acheter - TV & Maison",
				links: [
					{ label: "Acheter une Apple TV 4K", href: "#" },
					{ label: "Acheter un HomePod", href: "#" },
					{ label: "Acheter un HomePod mini", href: "#" },
					{ label: "Acheter une Siri Remote", href: "#" },
					{ label: "Accessoires TV & Maison", href: "#" },
				],
			},
			{
				title: "Autour de la maison",
				links: [
					{ label: "Assistance Apple TV", href: "#" },
					{ label: "Assistance HomePod", href: "#" },
					{ label: "AppleCare+", href: "#" },
					{ label: "App Apple TV", href: "#" },
					{ label: "Apple TV+", href: "#" },
					{ label: "Apple TV+", href: "#" },
					{ label: "App Maison", href: "#" },
					{ label: "Apple Music", href: "#" },
					{ label: "Siri", href: "#" },
					{ label: "AirPlay", href: "#" },
				],
			},
		],
	},
	{
		key: "divertissements",
		label: "Divertissements",
		links: [
			{ label: "Découvrir les services de divertissement", href: "#" },
			{ label: "Apple One", href: "#" },
			{ label: "Apple TV+", href: "#" },
			{ label: "Apple Music", href: "#" },
			{ label: "Apple Arcade", href: "#" },
			{ label: "Apple Fitness+", href: "#" },
			{ label: "Apple Podcasts", href: "#" },
			{ label: "Apple Books", href: "#" },
			{ label: "Apple Store", href: "#" },
		],
		comparisonBlock: [],
		footerBlocks: [
			{
				title: "Assistance",
				links: [
					{ label: "Assistance Apple TV+", href: "#" },
					{ label: "Assistance Apple Music", href: "#" },
				],
			},
		],
	},
	{
		key: "accessoires",
		label: "Accessoires",
		links: [
			{ label: "Voir tous les accessoires", href: "#" },
			{ label: "Mac", href: "#" },
			{ label: "iPad", href: "#" },
			{ label: "iPhone", href: "#" },
			{ label: "Apple Watch", href: "#" },
			{ label: "Apple Vision Pro", href: "#" },
			{ label: "AirPods", href: "#" },
			{ label: "TV & Maison", href: "#" },
		],
		comparisonBlock: [],
		footerBlocks: [
			{
				title: "Découvrir les accessoires",
				links: [
					{ label: "Signés Apple", href: "#" },
					{ label: "Beats by Dr.Dre", href: "#" },
					{ label: "AirTag", href: "#" },
				],
			},
		],
	},
	{
		key: "assistance",
		label: "Assistance",
		links: [
			{ label: "iPhone", href: "#" },
			{ label: "Mac", href: "#" },
			{ label: "iPad", href: "#" },
			{ label: "Watch", href: "#" },
			{ label: "Apple Vision Pro", href: "#" },
			{ label: "AirPods", href: "#" },
			{ label: "Musique", href: "#" },
			{ label: "TV", href: "#" },
		],
		comparisonBlock: [
			{ label: "En savoir plus sur l'assistance", href: "#" },
		],
		footerBlocks: [
			{
				title: "Communauté de l'aide",
				links: [
					{ label: "Communauté d’assistance Apple", href: "#" },
					{ label: "Consulter votre couverture", href: "#" },
					{ label: "Réparation", href: "#" },
				],
			},
			{
				title: "Rubriques utiles",
				links: [
					{ label: "Souscrire l'AppleCare+", href: "#" },
					{ label: "Compte Apple et mot de passe", href: "#" },
					{ label: "Facturation et abonnements", href: "#" },
					{ label: "Accessibilité", href: "#" },
				],
			},
		],
	},
];

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
				<div className="fixed inset-0 bg-background z-50 flex flex-col text-gray-200">
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

					{/* display comparison here like */}
					{/* <div className="grid grid-cols-16">
						<ul className="col-span-14 col-start-2 flex flex-col text-2xl font-medium">
							<li className="py-1">Label</li>
						</ul>
					</div> */}

					{activeSubMenu === "store" && (
						<div className="grid grid-cols-16">
							<ul className="col-span-14 col-start-2 flex flex-col text-2xl font-semibold">
								<li className="py-2">
									<Link href="#" className="block w-full">
										Tout derniers produits
									</Link>
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
										Apple Watch
									</Link>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										Apple Vision Pro
									</Link>
								</li>
								<li className="py-2">
									<Link href="#" className="block w-full">
										Accessoires
									</Link>
								</li>
							</ul>

							<div className="col-span-14 col-start-2 mt-10 flex space-x-20 text-lg">
								<div>
									<div className="text-gray-400 mb-3">
										Liens rapides
									</div>
									<ul className="font-medium">
										<li className="py-1">
											<Link
												href="#"
												className="block w-full"
											>
												Trouver un magasin
											</Link>
										</li>
										<li className="py-1">
											<Link
												href="#"
												className="block w-full"
											>
												Etat de votre commande
											</Link>
										</li>
										<li className="py-1">
											<Link
												href="#"
												className="block w-full"
											>
												Apple Trade In
											</Link>
										</li>
										<li className="py-1">
											<Link
												href="#"
												className="block w-full"
											>
												Financement
											</Link>
										</li>
										<li className="py-1">
											<Link
												href="#"
												className="block w-full"
											>
												Configuration personnalisée
											</Link>
										</li>
									</ul>
								</div>
								<div>
									<div className="text-gray-400 text-lg">
										Acheter - Programmes spéciaux
									</div>
									<ul className="font-medium">
										<li className="py-1">
											<Link
												href="#"
												className="block w-full"
											>
												Produits reconditionnés
											</Link>
										</li>
										<li className="py-1">
											<Link
												href="#"
												className="block w-full"
											>
												Éducation
											</Link>
										</li>
										<li className="py-1">
											<Link
												href="#"
												className="block w-full"
											>
												Entreprises
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
				</div>
			)}
		</>
	);
}
