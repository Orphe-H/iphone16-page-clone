import Link from "next/link";

export function FooterMenu() {
	return (
		<div className="py-4">
			<div className="mb-4 flex items-center space-x-2">
				<Link href="/">
					<div className="apple-icon text-gray-300 hover:text-gray-100">
						<span>
							<i className="fa-brands fa-apple text-lg"></i>
						</span>
					</div>
				</Link>
				<i className="fa-solid fa-chevron-right text-xs text-[#787879]"></i>
				<Link href="#" className="text-xs text-[#d1d1d2]">
					iPhone
				</Link>
				<i className="fa-solid fa-chevron-right text-xs text-[#787879]"></i>
				<span className="text-xs text-[#d1d1d2]">iPhone 16 Pro</span>
			</div>

			<div className="mb-8"></div>

			<p className="text-[#9b9b9c] text-xs hidden md:flex">
				Vous pouvez aussi faire vos achats
				<Link
					href="#"
					className="mx-1 underline text-blue-500 whitespace-nowrap"
				>
					dans un Apple Store
				</Link>
				ou
				<Link
					href="#"
					className="ml-1 underline text-blue-500 whitespace-nowrap"
				>
					chez un revendeur
				</Link>
				. Ou appeler le
				<Link
					href="tel:0800 046 046"
					className="ml-1 underline text-blue-500 whitespace-nowrap"
				>
					0800 046 046
				</Link>
				.
			</p>
		</div>
	);
}
