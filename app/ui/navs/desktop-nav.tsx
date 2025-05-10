"use client";

import { useState } from "react";
import Link from "next/link";
import { MENUS } from "@/libs/consts";

export function DesktopNav() {
	const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

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

	return (
		<>
			<nav className="bg-black h-[46px] hidden min-ml:flex items-center justify-center">
				<div className="w-full max-w-5xl flex items-center justify-between">
					<Link href="/">
						<div className="px-1 mx-4 text-gray-300 hover:text-gray-100">
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
								onMouseLeave={closeSubmenu}
							>
								<span>{menu.label}</span>
							</Link>
						))}
						<Link href="#" className="hover:text-gray-100">
							<i className="fa-solid fa-magnifying-glass text-sm"></i>
						</Link>
						<Link href="#" className="hover:text-gray-100">
							<i className="fa-solid fa-bag-shopping text-sm"></i>
						</Link>
					</div>
				</div>
			</nav>

			{/* Submenu */}
			{activeMenu && (
				<div
					className="bg-black hidden min-ml:flex justify-center"
					onMouseEnter={() => openSubmenu(activeMenu.key)}
					onMouseLeave={closeSubmenu}
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
		</>
	);
}
