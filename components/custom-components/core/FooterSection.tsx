export function FooterSection() {
    return (
        <footer className="bg-orange-500">
            <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-6 gap-4 text-white">
                {/* Logo and brand name */}
                <div className="col-span-1 flex items-center space-x-2">
                    <h1 className="text-xl font-bold">Logo</h1>
                    <p>Shipway</p>
                </div>
                {/* Address */}
                <div className="col-span-2">
                    <h2 className="text-lg font-semibold">Address</h2>
                    <address className="not-italic">
                        011, 1st Floor, 2nd Cross Rd, 1st Main Road, Koramangala 7th Block,
                        <br /> Koramangala, Bengaluru, Karnataka 560095
                    </address>
                </div>
                {/* Navigation Links */}
                <div className="col-span-1">
                    <h2 className="text-lg font-semibold">Navigation</h2>
                    <nav className="flex flex-col space-y-1">
                        <a href="#home" className="hover:underline">Home</a>
                        <a href="#about" className="hover:underline">About</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </nav>
                </div>
                {/* Social Media Links (optional) */}
                <div className="col-span-1 flex items-center justify-center space-x-4">
                    {/* Add your social media icons here */}
                    <a href="#facebook" className="hover:text-blue-500">FB</a>
                    <a href="#twitter" className="hover:text-blue-400">TW</a>
                    <a href="#instagram" className="hover:text-pink-500">IG</a>
                </div>
                {/* Spacer to align items at the start on large screens */}
                <div className="hidden md:block col-span-1"></div>
            </div>
            <div className="bg-orange-500 text-center py-3">
                <p className="text-slate-900 text-base">Copyright © 2022 Shipway. All rights reserved.</p>
            </div>
        </footer>
    );
}
