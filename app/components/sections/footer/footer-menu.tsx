"use client";

import { FOOTER_COLUMNS } from "@/libs/consts";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function FooterMenu() {
	const BLOCKS = FOOTER_COLUMNS.flatMap((column) => column.blocks);

	const [openIndexes, setOpenIndexes] = useState<Record<number, boolean>>({});

	const toggleBlock = (index: number) => {
		setOpenIndexes((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

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

			{/* mobile */}
			<div className="mb-8 text-xs">
				<div className="flex flex-col md:hidden divide-y divide-[#454547]">
					{BLOCKS.map((block, key) => (
						<div key={key}>
							<div
								className="py-3 flex justify-between cursor-pointer text-[#ededed] hover:text-gray-100"
								onClick={() => toggleBlock(key)}
							>
								<div>{block.title}</div>
								<div>
									<i
										className={`fa-solid fa-chevron-down text-[#9b9b9c] transition-transform duration-600 ${
											openIndexes[key] ? "rotate-x-180" : ""
										}`}
									></i>
								</div>
							</div>
							<AnimatePresence>
								{openIndexes[key] && (
									<motion.ul
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{
											duration: 0.3,
											ease: "easeInOut",
										}}
										className="text-[#ededed] mb-4 pl-3"
									>
										{block.links.map(
											(link: string, i: number) => (
												<li
													key={i}
													className="py-2 hover:underline"
												>
													<Link
														href="#"
														className="block w-full"
													>
														{link}
													</Link>
												</li>
											)
										)}
									</motion.ul>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>

				{/* desktop */}
				<div className="hidden md:grid grid-cols-5">
					{FOOTER_COLUMNS.map((col, key) => (
						<div key={key} className="space-y-8">
							{col.blocks.map((block, index) => (
								<div key={index}>
									<div className="font-semibold mb-2">
										{block.title}
									</div>
									<ul className="text-[#cccccd] mb-2">
										{block?.links.map(
											(link: string, index: number) => (
												<li
													key={index}
													className="py-1 hover:text-foreground"
												>
													<Link
														href="#"
														className="block w-full"
													>
														{link}
													</Link>
												</li>
											)
										)}
									</ul>
								</div>
							))}
						</div>
					))}
				</div>
			</div>

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
