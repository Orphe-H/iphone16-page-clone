"use client";

import { useState } from "react";
import Link from "next/link";
import { MENUS } from "@/libs/consts";
import { motion, AnimatePresence, Variants } from "motion/react";

export function MobileNav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
	const [direction, setDirection] = useState<"forward" | "backward">(
		"forward"
	);

	const openMenu = () => setIsMenuOpen(true);
	const closeMenu = () => {
		setIsMenuOpen(false);
		setActiveSubMenu(null);
	};

	const goToSubMenu = (menuKey: string) => {
		setDirection("forward");
		setActiveSubMenu(menuKey);
	};

	const goBack = () => {
		setDirection("backward");
		setActiveSubMenu(null);
	};

	const currentMenu = MENUS.find((menu) => menu.key === activeSubMenu);

	const variants: Variants = {
		enter: (direction: "forward" | "backward") => ({
			x: direction === "forward" ? 40 : -40,
			opacity: 0,
			position: "absolute",
		}),
		center: {
			x: 0,
			opacity: 1,
			position: "relative",
		},
		exit: (direction: "forward" | "backward") => ({
			x: direction === "forward" ? -40 : 40,
			opacity: 0,
			position: "absolute",
		}),
	};

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

			{/* overlay */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						key="mobile-menu"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="fixed inset-0 bg-background z-50 flex flex-col text-gray-200 overflow-y-auto w-full"
					>
						{/* back and close overlay actions */}
						<div className="grid grid-cols-16 py-3 sticky top-0 bg-background z-10">
							<AnimatePresence mode="wait" initial={false}>
								{activeSubMenu && (
									<motion.button
										initial={{ opacity: 0, x: 40 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0 }}
										transition={{
											duration: 0.3,
											ease: "easeInOut",
										}}
										className="col-span-1 cursor-pointer"
										onClick={goBack}
									>
										<i className="fa-solid fa-chevron-left text-xl"></i>
									</motion.button>
								)}
							</AnimatePresence>

							<button
								className="col-span-1 col-start-16 cursor-pointer"
								onClick={closeMenu}
							>
								<i className="fa-solid fa-xmark text-xl"></i>
							</button>
						</div>

						{/* animated menu content */}
						<div className="flex-1 overflow-y-auto pb-4 relative">
							<AnimatePresence
								mode="wait"
								initial={false}
								custom={direction}
							>
								<motion.div
									key={activeSubMenu || "main"}
									custom={direction}
									variants={variants}
									initial="enter"
									animate="center"
									exit="exit"
									transition={{
										duration: 0.3,
										ease: "easeInOut",
									}}
									className="absolute inset-0"
								>
									{/* base menu */}
									{!activeSubMenu && (
										<div className="grid grid-cols-16">
											<ul className="col-span-14 col-start-2 flex flex-col text-2xl font-semibold">
												{MENUS.map((menu) => (
													<li
														key={menu.key}
														className="py-2"
													>
														{menu.links.length >
														0 ? (
															<button
																onClick={() =>
																	goToSubMenu(
																		menu.key
																	)
																}
																className="block w-full text-left cursor-pointer"
															>
																{menu.label}
															</button>
														) : (
															<Link
																href="#"
																className="block w-full"
															>
																{menu.label}
															</Link>
														)}
													</li>
												))}
											</ul>
										</div>
									)}

									{/* sub menus */}
									{currentMenu && (
										<>
											{/* main links */}
											<div className="grid grid-cols-16 mt-4">
												<ul className="col-span-14 col-start-2 flex flex-col text-2xl font-semibold">
													{currentMenu.links.map(
														(link, index) => (
															<li
																key={index}
																className="py-2"
															>
																<Link
																	href={
																		link.href
																	}
																	className="block w-full"
																>
																	{link.label}
																</Link>
															</li>
														)
													)}
												</ul>
											</div>

											{/* comparison block */}
											{currentMenu.comparisonBlock
												.length > 0 && (
												<div className="grid grid-cols-16 mt-4">
													<ul className="col-span-14 col-start-2 flex flex-col text-lg font-medium">
														{currentMenu.comparisonBlock.map(
															(item, index) => (
																<li
																	key={index}
																	className="py-1"
																>
																	<Link
																		href={
																			item.href
																		}
																		className="block w-full"
																	>
																		{
																			item.label
																		}
																	</Link>
																</li>
															)
														)}
													</ul>
												</div>
											)}

											{/* footer blocks */}
											{currentMenu.footerBlocks.length >
												0 && (
												<div className="grid grid-cols-16 mt-4">
													<div className="col-span-14 col-start-2 mt-10 flex flex-wrap gap-10 text-lg">
														{currentMenu.footerBlocks.map(
															(block, index) => (
																<div
																	key={index}
																>
																	<div className="text-gray-400 mb-3">
																		{
																			block.title
																		}
																	</div>
																	<ul className="font-medium">
																		{block.links.map(
																			(
																				link,
																				linkIndex
																			) => (
																				<li
																					key={
																						linkIndex
																					}
																					className="py-1"
																				>
																					<Link
																						href={
																							link.href
																						}
																						className="block w-full"
																					>
																						{
																							link.label
																						}
																					</Link>
																				</li>
																			)
																		)}
																	</ul>
																</div>
															)
														)}
													</div>
												</div>
											)}
										</>
									)}
								</motion.div>
							</AnimatePresence>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
