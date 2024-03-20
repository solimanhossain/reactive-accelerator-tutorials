import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../contexts";

const initialWeather = {
    temprature: "",
    maxTemprature: "",
    minTemprature: "",
    cloudPercentage: "",
    humidity: "",
    wind: "",
    longitute: "",
    latitude: "",
    time: "",
    sunrise: "",
    sunset: "",
};

export default function useWeatherFetch() {
    const [weather, setWeather] = useState(initialWeather);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState({ state: false, message: "" });
    let { city } = useContext(LocationContext);

    useEffect(() => {
        setError(null);
        const getWeatherData = async (city) => {
            setLoading({
                ...loading,
                state: true,
                message: "Finding Weather Data...",
            });
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
                        import.meta.env.VITE_API_KEY
                    }&units=metric`
                );

                if (response.ok) {
                    const data = await response.json();
                    const updatedWeather = {
                        location: data?.name,
                        climate: data?.weather[0].main,
                        temprature: data?.main?.temp,
                        maxTemprature: data?.main.temp_max,
                        minTemprature: data?.main.temp_min,
                        cloudPercentage: data?.clouds.all,
                        humidity: data?.main.humidity,
                        wind: data?.wind.speed,
                        longitute: data?.coord.lon,
                        latitude: data?.coord.lat,
                        time: data?.dt,
                        sunrise: data?.sys?.sunrise,
                        sunset: data?.sys?.sunset,
                    };
                    setWeather({ ...weather, ...updatedWeather });
                } else {
                    setWeather(initialWeather);
                    throw new Error(response.statusText);
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading({ ...loading, state: false, message: "" });
            }
        };
        getWeatherData(city);
    }, [city]);

    return {
        weather,
        error,
        loading,
    };
}
