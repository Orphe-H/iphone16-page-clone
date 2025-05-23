import { Copyright } from "./copyright";
import { RecoveryWarning } from "./recovery-warning";

export default function Footer() {
	return (
		<footer className="">
			{/* loan section */}
			{/* menu resume section */}
			<div className="flex justify-center">
				<div className="px-4 divide-y divide-[#9b9b9c] max-w-5xl w-full">
					<RecoveryWarning />
					{/* menu */}
					<Copyright />
				</div>
			</div>
		</footer>
	);
}
