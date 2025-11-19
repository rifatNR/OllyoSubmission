import { useState, useRef } from "react";

const DragExample = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [isOverDropzone, setIsOverDropzone] = useState(false);
    const dropzoneRef = useRef<HTMLDivElement>(null);

    const checkDropzone = (x: number, y: number) => {
        if (!dropzoneRef.current) return false;
        const rect = dropzoneRef.current.getBoundingClientRect();
        return (
            x >= rect.left &&
            x <= rect.right &&
            y >= rect.top &&
            y <= rect.bottom
        );
    };

    return (
        <div
            onMouseMove={(event) => {
                if (isDragging) {
                    setMousePos({
                        x: event.clientX - offset.x,
                        y: event.clientY - offset.y,
                    });
                    setIsOverDropzone(
                        checkDropzone(event.clientX, event.clientY)
                    );
                }
            }}
            onMouseUp={() => {
                setIsDragging(false);
                setIsOverDropzone(false);
            }}
            className="h-screen w-screen relative"
        >
            <button
                onMouseDown={(event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    setOffset({
                        x: event.clientX - rect.left,
                        y: event.clientY - rect.top,
                    });
                    setMousePos({
                        x: rect.left,
                        y: rect.top,
                    });
                    setIsDragging(true);
                }}
                className="p-4 text-white bg-black absolute top-20 left-20"
            >
                Download
            </button>
            {isDragging && (
                <button
                    className="p-4 text-white bg-black opacity-50 pointer-events-none z-10"
                    style={{
                        position: "absolute",
                        left: mousePos.x,
                        top: mousePos.y,
                    }}
                >
                    Download
                </button>
            )}

            <div
                ref={dropzoneRef}
                className={`absolute bottom-8 right-8 w-96 h-96 border-2 border-dashed transition-colors ${
                    isOverDropzone
                        ? "border-blue-500 bg-blue-100"
                        : "border-gray-500 bg-gray-100"
                }`}
            />
        </div>
    );
};

export default DragExample;
