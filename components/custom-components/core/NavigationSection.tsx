import Link from "next/link";
import { Button } from "@/components/ui/button"
import { TopBar } from "./TopBar";

const navList = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Product",
        href: "/product"
    },
    {
        name: "Location",
        href: "/location"
    },
    {
        name: "About",
        href: "/about"
    }
]



export function NavigationSection() {
    return (
        <nav className="w-screen fixed z-50 px-10 bg-orange-500">
            <TopBar />
            <div className="relative h-16">
                <div className="container  absolute bottom-[-30px] right-0 left-0 flex justify-between py-2 items-center z-50 bg-background rounded-md text-white">
                    
                    <p className="text-2xl font-bold  text-orange-500">Shipway</p>
                    <ul className="flex items-center gap-4">
                        {
                            navList.map((nav) =>
                            (
                                <li key={nav.name}>
                                    <Link href={nav.href} className="text-slate-700 hover:underline hover:text-slate-500" >{nav.name}</Link>
                                </li>
                            )
                            )
                        }
                    </ul>
                    <div>
                        <Button className="bg-orange-500" asChild>
                            <Link href="/contact">Contact</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )

}