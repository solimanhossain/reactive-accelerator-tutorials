export default function BoxButton({ boxValue, onBoxClick }) {
    return (
        <>
            <button
                className="flex justify-center items-center h-32 w-32 rounded m-1 bg-white border border-gray-200 shadow-sm shadow-gray-400"
                onClick={onBoxClick}
            >
                {boxValue === "X" && <CrossButton />}
                {boxValue === "O" && <CircleButton />}
            </button>
        </>
    );
}

export function CircleButton() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                stroke="green"
                strokeDasharray={60}
                strokeDashoffset={60}
                strokeLinecap="round"
                strokeWidth={2}
                d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
            >
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.5s"
                    values="60;0"
                ></animate>
            </path>
        </svg>
    );
}

export function CrossButton() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
        >
            <g
                fill="none"
                stroke="blue"
                strokeDasharray={16}
                strokeDashoffset={16}
                strokeLinecap="round"
                strokeWidth={2}
            >
                <path d="M7 7L17 17">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.25s"
                        values="16;0"
                    ></animate>
                </path>
                <path d="M17 7L7 17">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.26s"
                        dur="0.25s"
                        values="16;0"
                    ></animate>
                </path>
            </g>
        </svg>
    );
}
