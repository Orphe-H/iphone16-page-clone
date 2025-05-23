import Link from "next/link";

export default function Main() {
	return (
		<main>
			{/* promotion row */}
			<div className="flex justify-center items-center bg-[#1d1d1f] py-4 px-10 text-center text-white">
				<p className="text-sm">
					Get $170–$630 in credit toward iPhone 16 or iPhone 16 Pro
					when you trade in iPhone 12 or higher.*
					<Link
						href="#"
						className="inline-flex items-center text-blue-500 hover:underline ml-1"
						aria-label="Buy iPhone 16"
					>
						Buy
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
