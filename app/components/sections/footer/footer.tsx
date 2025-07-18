import { CopyrightSection } from "./copyright-section";
import { FooterMenuSection } from "./footer-menu-section";
import { LoanSection } from "./loan-section";
import { MenuResumeSection } from "./menu-resume-section";
import { RecoveryWarningSection } from "./recovery-warning-section";

export default function Footer() {
	return (
		<footer>
			<LoanSection />
			<MenuResumeSection />
			<div className="flex justify-center bg-[#1d1d1f]">
				<div className="px-4 divide-y divide-[#454547] max-w-5xl w-full">
					<RecoveryWarningSection />
					<FooterMenuSection />
					<CopyrightSection />
				</div>
			</div>
		</footer>
	);
}
