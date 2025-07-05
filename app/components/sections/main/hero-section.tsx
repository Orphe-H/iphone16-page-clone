"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function HeroSection() {
	return (
		<div className="bg-black py-12 xs:py-28 md:py-18 lg:py-0">
			<div className="relative flex flex-col justify-center items-center">
				<motion.div
					className="relative w-full max-w-[433px] xs:max-w-[321px] md:max-w-[472px] lg:max-w-[703px] xl:max-w-[846px]"
					initial={{ opacity: 0, scale: 1.2 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1.7, ease: "easeOut" }}
				>
					<Image
						width={846}
						height={352}
						src="/images/hero/hero_apple_intelligence_headline__fwxxapju9a6i_xlarge_2x.png"
						alt="Apple Intelligence Headline"
						className="w-full h-auto z-20"
						priority
					/>
				</motion.div>
				<div className="absolute z-10 top-1/4 lg:top-24 xl:top-32 flex justify-center font-bold text-xl md:text-2xl lg:text-3xl">
					iPhone 16 Pro
				</div>
			</div>
		</div>
	);
}
