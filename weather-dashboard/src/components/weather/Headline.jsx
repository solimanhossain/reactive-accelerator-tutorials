import { useContext } from "react";
import { WeatherContext } from "../../contexts";
import formatDate from "../../utils/formatDate";

import PinLogo from "../../assets/logo/pin.svg";
import TimeLogo from "../../assets/logo/time.svg";
import getWeatherIcon from "../../utils/getWeatherIcon";

export default function Headline() {
    const { weather } = useContext(WeatherContext);
    const { climate, location, temprature, time, sunrise, sunset } = weather;

    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10 mr-8">
                <img src={getWeatherIcon(climate)} alt={climate} />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                        {Math.round(temprature)}°c
                    </h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={PinLogo} />
                        <h2 className="text-2xl lg:text-[40px]">
                            {location || "Unknown"}
                        </h2>
                    </div>
                </div>
            </div>
            {time && (
                <>
                    <div className="flex text-sm lg:text-lg">
                        <img src={TimeLogo} className="mr-2" />
                        {formatDate(time, "time")}
                    </div>
                    <div className="text-sm mt-2 p-1">
                        <span className="p-2 border">
                            Sunrise {formatDate(sunrise, "sunrise")}
                        </span>
                        <span className=" p-2 border">
                            Sunset {formatDate(sunset, "sunset")}
                        </span>
                    </div>
                </>
            )}
        </div>
    );
}
