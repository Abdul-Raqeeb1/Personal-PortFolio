import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import StairTransition from "./StairTransition";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        RD Coder <span className="text-[#00e187]">.</span>
                    </h1>
                </Link>
                {/* desktop nav & hire me button*/}
                <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                <Button className="bg-[#00e187]">Hire me</Button>
                </Link>
                </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
                <StairTransition />
            </div>
            </div>
        </header>
    );
};

export default Header;