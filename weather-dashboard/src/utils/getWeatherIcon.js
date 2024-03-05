import WeatherDefaultIcon from "./../assets/icon/weather-default.svg";
import ThunderIcon from "./../assets/icon/thunder.svg";
import CLoudyIcon from "./../assets/icon/cloudy.svg";
import RainyIcon from "./../assets/icon/rainy.svg";
import SunnyIcon from "./../assets/icon/sunny.svg";
import SnowyIcon from "./../assets/icon/snowy.svg";
import HazeIcon from "./../assets/icon/haze.svg";

export default function getWeatherIcon(climate) {
    switch (climate) {
        case "Clouds":
            return CLoudyIcon;
        case "Rain":
            return RainyIcon;
        case "Clear":
            return SunnyIcon;
        case "Thunderstorm":
            return ThunderIcon;
        case "Haze":
            return HazeIcon;
        case "Snow":
            return SnowyIcon;
        case "Drizzle":
            return RainyIcon;
        case "Mist":
            return HazeIcon;
        case "Smoke":
            return HazeIcon;
        case "Fog":
            return HazeIcon;
        default:
            return WeatherDefaultIcon;
    }
}
