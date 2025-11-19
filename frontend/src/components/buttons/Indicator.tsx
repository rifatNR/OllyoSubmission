import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
const Indicator = () => {
    const [indicatorState, setIndicatorState] = useState("hidden");

    useEffect(() => {
        setTimeout(() => {
            setIndicatorState("down");
            setTimeout(() => {
                setIndicatorState("up");
                setTimeout(() => {
                    setIndicatorState("stale");
                    setTimeout(() => {
                        setIndicatorState("hidden");
                    }, 2500);
                }, 300);
            }, 300);
        }, 500);
    }, []);

    return (
        <div
            className={cn(
                `z-indicator
                absolute top-15 left-[calc(100%+25px)]
                origin-[-7%_50%]
                transition-all duration-500
                -rotate-45 opacity-0
                `,
                {
                    "rotate-12 opacity-100": indicatorState == "down",
                    "-rotate-12 opacity-100": indicatorState == "up",
                    "rotate-0 opacity-100": indicatorState == "stale",
                }
            )}
        >
            <div
                className={cn(
                    `
                    absolute -left-5 top-1/2 -translate-y-1/2
                    w-6 h-6 bg-ollyo-button-bg-blue/80
                    [clip-path:polygon(0%_50%,100%_0%,100%_100%)]
                    `
                )}
            ></div>
            <div
                className={cn(
                    `
                    rounded-xl bg-ollyo-button-bg-blue
                    flex items-center justify-center overflow-hidden
                    w-56 h-16 p-5
                    `
                )}
            >
                <div className="truncate">Drag Items from here</div>
            </div>
        </div>
    );
};

export default Indicator;
