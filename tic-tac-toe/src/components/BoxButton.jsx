import { ButtonX, ButtonO } from "./ButtonIcon";

export default function BoxButton({ boxValue, onBoxClick }) {
    return (
        <>
            <button
                className="flex justify-center items-center h-32 w-32 rounded m-1 bg-white border border-gray-200 shadow-sm shadow-gray-400"
                onClick={onBoxClick}
            >
                {boxValue === "X" && <ButtonX />}
                {boxValue === "O" && <ButtonO />}
            </button>
        </>
    );
}
