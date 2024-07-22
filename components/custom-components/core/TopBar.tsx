export const TopBar = () => {
    return (
        <div className="w-screen fixed text-white flex justify-center  items-center py-2 fixed top-0 z-50">
            <div className="flex items-center text-center space-x-4">
                <span className="text-sm">Call: +123 456 7890</span>
                <span className="text-sm">Email: support@example.com</span>
            </div>
        </div>
    );
};