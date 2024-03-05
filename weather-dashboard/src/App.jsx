import Footerbar from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { LocationProvider, WeatherProvider } from "./provier";

function App() {
    return (
        <>
            <LocationProvider>
                <WeatherProvider>
                    <header className="top-0">
                        <Navbar />
                    </header>
                    <main className="m-8">
                        <Section />
                    </main>
                </WeatherProvider>
            </LocationProvider>

            <footer className=" bottom-0">
                <Footerbar />
            </footer>
        </>
    );
}

export default App;
