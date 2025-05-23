import { Copyright } from "./copyright";
import { LoanSection } from "./loan-section";
import { MenuResume } from "./menu-resume";
import { RecoveryWarning } from "./recovery-warning";

export default function Footer() {
	return (
		<footer>
			<LoanSection />
			<MenuResume />
			<div className="flex justify-center bg-[#1d1d1f]">
				<div className="px-4 divide-y divide-[#9b9b9c] max-w-5xl w-full">
					<RecoveryWarning />
					{/* menu */}
					<Copyright />
				</div>
			</div>
		</footer>
	);
}
