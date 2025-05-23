import { DesktopNav } from "./navs/desktop-nav";
import { MobileNav } from "./navs/mobile-nav";

export default function Header() {
	return (
		<header>
			<MobileNav />
			<DesktopNav />
		</header>
	);
}
