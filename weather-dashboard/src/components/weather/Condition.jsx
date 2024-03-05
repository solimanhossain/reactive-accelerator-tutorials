import TempMax from "../../assets/icon/temp-max.svg";
import TempMin from "../../assets/icon/temp-min.svg";
import Cloud from "../../assets/icon/cloud.svg";
import Humidity from "../../assets/icon/humidity.svg";
import Wind from "../../assets/icon/wind.svg";
import ConditionList from "./ConditionList";
import { useContext } from "react";
import { WeatherContext } from "../../contexts";

export default function Condition() {
    const { weather } = useContext(WeatherContext);
    const {
        climate,
        cloudPercentage,
        humidity,
        maxTemprature,
        minTemprature,
        wind,
    } = weather;

    return (
        <div className="ml-8 text-center">
            <p className="text-sm lg:text-lg font-bold border rounded-sm uppercase mb-4">
                {climate ? `Climate is ${climate} now` : "Error!"}
            </p>
            <ul className="space-y-1">
                <ConditionList
                    title="Temp max"
                    value={Math.round(maxTemprature) + "°c"}
                >
                    <img src={TempMax} alt="temp-max" />
                </ConditionList>

                <ConditionList
                    title="Temp min"
                    value={Math.round(minTemprature) + "°c"}
                >
                    <img src={TempMin} alt="temp-min" />
                </ConditionList>

                <ConditionList title="Humadity" value={humidity + "%"}>
                    <img src={Humidity} alt="humadity" />
                </ConditionList>

                <ConditionList title="Cloudy" value={cloudPercentage + "%"}>
                    <img src={Cloud} alt="cloudy" />
                </ConditionList>

                <ConditionList title="Wind" value={wind}>
                    <img src={Wind} alt="wind" />
                </ConditionList>
            </ul>
        </div>
    );
}
