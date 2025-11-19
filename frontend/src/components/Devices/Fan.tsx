import { useEffect, useRef } from "react";
import FanSvg from "@/components/svgs/FanSvg";
import { cn } from "@/lib/utils";
import { useStore } from "@/stores/rootStore";
import { observer } from "mobx-react-lite";
import FanCenterSvg from "@/components/svgs/FanCenterSvg";

const Fan = observer(() => {
    const { controllerStore: ctrlr } = useStore();
    const fanRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);
    const rotationRef = useRef(0);
    const currentSpeedRef = useRef(0); // Current smoothed speed

    const rawIntensity = ctrlr.data?.intensity ?? 0;
    const isPoweredOn = ctrlr.data?.isPoweredOn ?? false;
    const targetSpeed = isPoweredOn && rawIntensity === 0 ? 1 : rawIntensity;

    console.log("targetSpeed", targetSpeed);

    useEffect(() => {
        const fanElement = fanRef.current;
        if (!fanElement) return;

        const SMOOTHING = 0.05;
        const MULTIPLIER = 0.2;

        const animate = () => {
            const desiredSpeed = isPoweredOn ? targetSpeed : 0;

            // Smoothly interpolate current speed toward desired speed
            currentSpeedRef.current +=
                (desiredSpeed - currentSpeedRef.current) * SMOOTHING;

            rotationRef.current += currentSpeedRef.current * MULTIPLIER;
            fanElement.style.transform = `translate(-50%, -50%) rotate(${rotationRef.current}deg)`;

            if (currentSpeedRef.current > 0.01) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                currentSpeedRef.current = 0;
                animationRef.current = null;
            }
        };

        // Start animation if not already running
        if (!animationRef.current) {
            animate();
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
            }
        };
    }, [isPoweredOn, targetSpeed]);

    return (
        <div>
            <div
                className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                )}
            >
                <div
                    ref={fanRef}
                    className={cn(
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-[0px_-7px]"
                    )}
                >
                    <FanSvg />
                </div>
                <FanCenterSvg />
            </div>
        </div>
    );
});

export default Fan;
