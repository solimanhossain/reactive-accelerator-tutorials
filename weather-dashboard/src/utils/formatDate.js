export default function formatDate(date, type) {
    if (type === "time") return new Date(date * 1000).toUTCString();
    else if (type === "sunrise")
        return new Date(date * 1000).toLocaleTimeString();
    else if (type === "sunset")
        return new Date(date * 1000).toLocaleTimeString();
    return;
}
