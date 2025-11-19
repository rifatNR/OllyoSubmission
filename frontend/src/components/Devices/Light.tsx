import LightOffSvg from "@/components/svgs/LightOffSvg";
import LightOnSvg from "@/components/svgs/LightOnSvg";
import { colorCodeMap } from "@/lib/const";
import { TColor } from "@/lib/types";
import { useStore } from "@/stores/rootStore";
import { observer } from "mobx-react-lite";

const Light = observer(() => {
    const { controllerStore: ctrlr } = useStore();

    const scale = 0.5 + (ctrlr.data?.intensity ?? 0) / 200;
    const rawOpacity = (ctrlr.data?.intensity ?? 0) / 100;
    const opacity = Math.min(Math.max(rawOpacity, 0.1), 0.8);

    return (
        <div>
            {ctrlr.data?.isPoweredOn && ctrlr.data.intensity > 0 && (
                <div className="absolute top-[20px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-light">
                    <div
                        className="h-[160px] w-[130px] rounded-full"
                        style={{
                            opacity: opacity,
                            transform: `scale(${scale})`,
                            backgroundColor:
                                colorCodeMap[ctrlr.data.color as TColor],
                            boxShadow: `
                            0 0 10px ${
                                colorCodeMap[ctrlr.data.color as TColor]
                            },
                            0 0 30px ${
                                colorCodeMap[ctrlr.data.color as TColor]
                            },
                            0 0 60px ${
                                colorCodeMap[ctrlr.data.color as TColor]
                            },
                            0 0 120px ${
                                colorCodeMap[ctrlr.data.color as TColor]
                            },
                            0 0 200px ${
                                colorCodeMap[ctrlr.data.color as TColor]
                            },
                            0 0 400px ${
                                colorCodeMap[ctrlr.data.color as TColor]
                            }
                            `,
                        }}
                    ></div>
                </div>
            )}

            {ctrlr.data?.isPoweredOn ? (
                <div className="absolute top-[18px] left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <LightOnSvg
                        color={colorCodeMap[ctrlr.data.color as TColor]}
                    />
                </div>
            ) : (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <LightOffSvg />
                </div>
            )}
        </div>
    );
});

export default Light;
