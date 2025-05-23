import Link from "next/link";

export function Copyright() {
	return (
		<div className="py-4 text-xs space-y-4">
			<p className="text-[#9b9b9c]">
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

			<div className="ml:hidden">
				<Link href="#" className="hover:underline text-[#d1d1d2]">
					France
				</Link>
			</div>

			<div>
				<div className="flex ml:justify-between">
					<div className="text-[#9b9b9c]">
						Copyright © 2025 Apple Inc. Tous droits réservés.
					</div>
					<div className="hidden ml:flex">
						<Link
							href="#"
							className="hover:underline text-[#d1d1d2]"
						>
							France
						</Link>
					</div>
				</div>

				<div className="mt-1 text-[#d1d1d2] flex flex-wrap gap-y-1 gap-x-2 divide-x divide-gray-500">
					<Link
						href="#"
						className="hover:underline pr-2 whitespace-nowrap"
					>
						Engagement de confidentialité
					</Link>
					<Link
						href="#"
						className="hover:underline pr-2 whitespace-nowrap"
					>
						Utilisation de cookies
					</Link>
					<Link
						href="#"
						className="hover:underline pr-2 whitespace-nowrap"
					>
						Condition d&apos;utilisation
					</Link>
					<Link
						href="#"
						className="hover:underline pr-2 whitespace-nowrap"
					>
						Ventes et remboursements
					</Link>
					<Link
						href="#"
						className="hover:underline pr-2 whitespace-nowrap"
					>
						Mentions légales
					</Link>
					<Link
						href="#"
						className="hover:underline pr-2 whitespace-nowrap"
					>
						Plan du site
					</Link>
				</div>
			</div>
		</div>
	);
}
