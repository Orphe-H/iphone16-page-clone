"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MENUS } from "@/libs/consts";

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

			// check if mouse is ouf max width
			if (navRef.current) {
				const navRect = navRef.current.getBoundingClientRect();
				if (e.clientX < navRect.left || e.clientX > navRect.right) {
					closeSubmenu();
					return;
				}
			}
		}

		function handleMouseLeave() {
			closeSubmenu();
		}

		// Stockez la référence courante dans une variable
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
		<div
			ref={wrapperRef}
			className="hidden min-ml:flex flex-col bg-black relative"
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
				className="h-[46px] flex items-center justify-center"
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
						<Link href="#" className="bag-icon hover:text-gray-100">
							<i className="fa-solid fa-bag-shopping text-sm"></i>
						</Link>
					</div>
				</div>
			</nav>

			{/* Submenu */}
			{activeMenu && (
				<div
					ref={submenuRef}
					className="bg-black flex justify-center absolute top-full left-0 right-0"
					onMouseEnter={() => openSubmenu(activeMenu.key)}
				>
					<div className="w-full max-w-5xl flex pt-10 pb-14">
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
									{activeMenu.comparisonBlock.map((link) => (
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
							)}
						</div>

						{/* footer block */}
						<div className="flex text-xs">
							{activeMenu.footerBlocks.map((block, index) => (
								<div
									key={index}
									className={
										index <
										activeMenu.footerBlocks.length - 1
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
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
