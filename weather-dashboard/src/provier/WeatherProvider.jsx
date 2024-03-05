import { WeatherContext } from "../contexts";
import { useWeatherFetch } from "../hooks";

export default function WeatherProvider({ children }) {
    const { weather, error, loading } = useWeatherFetch();
    return (
        <WeatherContext.Provider value={{ weather, error, loading }}>
            {children}
        </WeatherContext.Provider>
    );
}
