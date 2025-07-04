import Image from "next/image";

export default function HeroSection() {
	return (
		<div className="bg-black py-12 xs:py-28 md:py-18 lg:py-0">
			<div className="relative flex flex-col justify-center items-center">
				<div className="relative w-full max-w-[433px] xs:max-w-[321px] md:max-w-[472px] lg:max-w-[703px] xl:max-w-[846px]">
					<Image
						width={846}
						height={352}
						src="/images/hero_apple_intelligence_headline__fwxxapju9a6i_xlarge_2x.png"
						alt="Apple Intelligence Headline"
						className="w-full h-auto"
						priority
					/>
				</div>
				<div className="absolute top-1/4 inset-x-0 flex justify-center font-bold text-xl md:text-2xl lg:text-3xl z-20">
					iPhone 16 Pro
				</div>
			</div>
		</div>
	);
}
