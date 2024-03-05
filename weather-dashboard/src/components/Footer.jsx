export default function Footerbar() {
    return (
        <footer className="p-2 mt-2 text-gray-200 ">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src="weather.svg" className="h-6" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap">
                        Open Weather Map
                    </span>
                </a>
                <ul className="flex flex-wrap items-center text-sm font-medium sm:mb-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">
                            Licensing
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-4 border-gray-400" />
            <span className="block text-sm sm:text-center">
                © 2024{" "}
                <a
                    href="https://solimanhossain.github.io/"
                    className="hover:underline"
                >
                    Soliman Hossain
                </a>
                . All Rights Reserved.
            </span>
        </footer>
    );
}
