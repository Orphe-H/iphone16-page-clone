"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MENUS } from "@/libs/consts";
import { motion, AnimatePresence } from "motion/react";

export function DesktopNav() {
	const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const navRef = useRef<HTMLDivElement>(null);
	const submenuRef = useRef<HTMLDivElement>(null);

	const openSubmenu = (menuKey: string) => {
		setActiveSubMenu(menuKey);
	};

	const closeSubmenu = () => {
		setActiveSubMenu(null);
	};

	const getActiveMenuData = () => {
		return MENUS.find((menu) => menu.key === activeSubMenu);
	};

	const activeMenu = getActiveMenuData();

	const submenuVariants = {
		hidden: { opacity: 0, y: -10, transition: { duration: 0.1 } },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.2,
				when: "beforeChildren",
				staggerChildren: 0.05,
			},
		},
		exit: { opacity: 0, y: -10, transition: { duration: 0.1 } },
	};

	const contentVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	useEffect(() => {
		function handleMouseMove(e: MouseEvent) {
			if (!wrapperRef.current) return;

			// check if mouse is out of wrapper
			if (!wrapperRef.current.contains(e.target as Node)) {
				closeSubmenu();
				return;
			}

			// check if mouse hover icons
			const target = e.target as HTMLElement;
			const isOnIcons =
				target.closest(".search-icon") ||
				target.closest(".bag-icon") ||
				target.closest(".apple-icon");

			if (isOnIcons) {
				closeSubmenu();
				return;
			}
		}

		function handleMouseLeave() {
			closeSubmenu();
		}

		const currentWrapperRef = wrapperRef.current;

		if (activeSubMenu && currentWrapperRef) {
			document.addEventListener("mousemove", handleMouseMove);
			currentWrapperRef.addEventListener("mouseleave", handleMouseLeave);
		}

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			if (currentWrapperRef) {
				currentWrapperRef.removeEventListener(
					"mouseleave",
					handleMouseLeave
				);
			}
		};
	}, [activeSubMenu]);

	return (
		<>
			<div
				ref={wrapperRef}
				className="hidden min-ml:flex flex-col bg-black relative z-50"
				onMouseLeave={() => {
					// close when mouse is out of the wrappers
					if (!submenuRef.current?.contains(document.activeElement)) {
						closeSubmenu();
					}
				}}
			>
				{/* main nav */}
				<nav
					ref={navRef}
					className="h-[46px] flex items-center justify-center relative z-50"
				>
					<div className="w-full max-w-5xl flex items-center justify-between">
						<Link href="/">
							<div className="apple-icon px-1 mx-4 text-gray-300 hover:text-gray-100">
								<span>
									<i className="fa-brands fa-apple text-lg"></i>
								</span>
							</div>
						</Link>

						<div className="flex items-center justify-evenly gap-4 text-gray-300 text-xs w-full pr-5">
							{MENUS.map((menu) => (
								<Link
									key={menu.key}
									href="#"
									className={`hover:text-gray-100 ${
										activeSubMenu === menu.key
											? "text-gray-100"
											: ""
									}`}
									onMouseEnter={() => openSubmenu(menu.key)}
								>
									<span>{menu.label}</span>
								</Link>
							))}
							<Link
								href="#"
								className="search-icon hover:text-gray-100"
							>
								<i className="fa-solid fa-magnifying-glass text-sm"></i>
							</Link>
							<Link
								href="#"
								className="bag-icon hover:text-gray-100"
							>
								<i className="fa-solid fa-bag-shopping text-sm"></i>
							</Link>
						</div>
					</div>
				</nav>

				{/* Submenu */}
				<AnimatePresence>
					{activeMenu && (
						<motion.div
							key={activeMenu.key}
							ref={submenuRef}
							className="bg-black flex justify-center absolute top-full left-0 right-0 z-50"
							onMouseEnter={() => openSubmenu(activeMenu.key)}
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={submenuVariants}
							layout // layout animation
							transition={{ duration: 0.1, ease: "easeInOut" }}
						>
							<motion.div
								className="w-full max-w-5xl flex pt-10 pb-14"
								variants={contentVariants}
								layout
							>
								<div className="mr-20">
									{/* prelabel */}
									<div className="text-xs text-gray-400 mb-3">
										{activeMenu.prelabel}
									</div>
									{/* links */}
									<ul className="font-semibold text-2xl text-gray-200 mb-3">
										{activeMenu.links.map((link) => (
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

									{/* comparison block  */}
									{activeMenu.comparisonBlock.length > 0 && (
										<ul className="text-xs text-gray-200 font-semibold">
											{activeMenu.comparisonBlock.map(
												(link) => (
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
												)
											)}
										</ul>
									)}
								</div>

								{/* footer block */}
								<div className="flex text-xs">
									{activeMenu.footerBlocks.map(
										(block, index) => (
											<div
												key={index}
												className={
													index <
													activeMenu.footerBlocks
														.length -
														1
														? "mr-10"
														: ""
												}
											>
												<div className="text-gray-400 mb-3">
													{block.title}
												</div>
												<ul className="text-gray-200 font-semibold">
													{block.links.map((link) => (
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
										)
									)}
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>

			{/* overlay blur */}
			{activeMenu && (
				<div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 pointer-events-none" />
			)}
		</>
	);
}
