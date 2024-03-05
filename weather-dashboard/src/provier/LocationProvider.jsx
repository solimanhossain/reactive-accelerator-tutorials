import { useState } from "react";
import { LocationContext } from "../contexts";

export default function LocationProvider({ children }) {
    const [city, setCity] = useState("bangladesh");
    return (
        <LocationContext.Provider value={{ city, setCity }}>
            {children}
        </LocationContext.Provider>
    );
}
