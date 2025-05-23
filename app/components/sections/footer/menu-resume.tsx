import { MENUS } from "@/libs/consts";
import Link from "next/link";

export function MenuResume() {
	const menu = MENUS.find((menu) => menu.key === "iphone");

	return (
		<div className="bg-background py-24 px-10 md:px-30">
			<div className="text-3xl md:text-5xl font-semibold mb-8">
				iPhone
			</div>
			<div className="gap-y-8 gap-x-10 flex max-md:flex-col">
				<div>
					<div className="text-[#9b9b9c] mb-2">{menu?.prelabel}</div>
					<ul className="font-semibold text-xl md:text-2xl text-gray-200 mb-2">
						{menu?.links.map((link) => (
							<li
								key={link.label}
								className="py-1 hover:text-foreground"
							>
								<Link href={link.href} className="block w-full">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<ul className="font-semibold text-gray-200 ">
						{menu?.comparisonBlock.map((link) => (
							<li
								key={link.label}
								className="py-1 hover:text-foreground"
							>
								<Link href={link.href} className="block w-full">
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				{menu?.footerBlocks.map((block, index) => (
					<div key={index}>
						<div className="text-[#9b9b9c] mb-2">
							{block?.title}
						</div>
						<ul className="font-semibold text-gray-200 mb-2">
							{block?.links.map((link) => (
								<li
									key={link.label}
									className="py-1 hover:text-foreground"
								>
									<Link
										href={link.href}
										className="block w-full"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
