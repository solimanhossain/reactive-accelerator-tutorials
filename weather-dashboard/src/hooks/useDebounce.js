import { useState, useEffect } from "react";

export default function useDebounce(input, delay) {
    const [value, setValue] = useState("");

    useEffect(() => {
        const handler = setTimeout(() => {
            setValue(input);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [input, delay]);

    return value;
}
