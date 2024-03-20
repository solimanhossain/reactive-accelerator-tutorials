import { useContext, useState } from "react";
import DashboardLogo from "../assets/logo/dashboard.svg";
import SearchLogo from "../assets/logo/search.svg";
import { LocationContext } from "../contexts";

export default function Navbar() {
    const [searchWord, setSearchWord] = useState("");
    const { setCity } = useContext(LocationContext);
    function handleSearch(e) {
        e.preventDefault();
        setCity(searchWord);
        setSearchWord("");
    }

    return (
        <nav className="container flex items-center justify-between py-6 text-white">
            <a href="/">
                <img className="h-9" src={DashboardLogo} alt="Weather App" />
            </a>

            <div>
                <form action="#">
                    <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 ">
                        <input
                            className="bg-transparent placeholder:text-white  w-full text-xs md:text-base outline-none border-none"
                            type="search"
                            value={searchWord}
                            onChange={(e) => setSearchWord(e.target.value)}
                            placeholder="Search location..."
                            required
                        />
                        <button type="submit" onClick={handleSearch}>
                            <img src={SearchLogo} />
                        </button>
                    </div>
                </form>
            </div>
        </nav>
    );
}
