import "@/styles/globals.css";
import { Footer, Navbar, ScrollToTop } from "@/components";
import { AnimatePresence } from "framer-motion";

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	const isWaitlist = router.pathname.startsWith('/waitlist');

	return (
		<>
			{!isWaitlist && <Navbar />}
			<AnimatePresence mode="wait">
				<Component
					key={router.route}
					{...pageProps}
				/>
			</AnimatePresence>
			{!isWaitlist && <Footer />}
			{!isWaitlist && <ScrollToTop />}
		</>
	);
}
