import Link from "next/link";

export default function Main() {
	return (
		<main>
			{/* promotion row */}
			<div className="flex justify-center items-center bg-[#1d1d1f] py-4 px-10 text-center">
				<p className="text-sm max-w-5xl">
					Jusqu’au 18 juin, profitez d’une meilleure valeur de reprise
					pour l’achat d’un nouvel iPhone*.
					<Link
						href="#"
						className="inline-flex items-center text-blue-500 hover:underline ml-1"
						aria-label="Buy iPhone 16"
					>
						Acheter un iPhone
						<i
							className="fa fa-chevron-right text-xs ml-1"
							aria-hidden="true"
						></i>
					</Link>
				</p>
			</div>
		</main>
	);
}
