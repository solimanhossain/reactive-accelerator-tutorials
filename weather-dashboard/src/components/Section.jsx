import { useContext } from "react";
import Condition from "./weather/Condition";
import Headline from "./weather/Headline";
import { WeatherContext } from "../contexts";

export default function Section() {
    const { loading, error } = useContext(WeatherContext);
    return (
        <section className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-8 lg:px-20 py-4 lg:py-8 min-h-[428px] max-w-[1000px] mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                <div className="md:col-span-2">
                    {error && (
                        <div className="flex items-center justify-center text-yellow-400 space-x-6">
                            <span className="bg-red-600 bg-opacity-50 border border-red-600 py-1 px-4 rounded-full">
                                {`⚠️ ${error.message} !`}
                            </span>
                        </div>
                    )}
                    {loading.state && (
                        <div className="flex items-center justify-center space-x-6">
                            <span className="bg-blue-600 bg-opacity-50 border border-blue-600 py-1 px-4 rounded-full">
                                {`⏳ ${loading.message} !`}
                            </span>
                        </div>
                    )}
                </div>
                <Headline />
                <Condition />
            </div>
            {error && <div></div>}
        </section>
    );
}
