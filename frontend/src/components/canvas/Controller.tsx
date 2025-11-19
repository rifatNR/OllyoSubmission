import ColorButton from "@/components/canvas/ColorButton";
import Slider from "@/components/Misc/Slider";
import Switch from "@/components/Misc/Switch";
import { TColor } from "@/lib/types";
import { useStore } from "@/stores/rootStore";
import { observer } from "mobx-react-lite";

const Controller = observer(() => {
    const { controllerStore: ctrlr } = useStore();

    const colors: TColor[] = ["yellow", "white", "blue", "red"];

    const handleSelect = (color: TColor) => {
        if (ctrlr.data) {
            ctrlr.setControllerInfo({
                ...ctrlr.data,
                color,
            });
        }
    };

    return ctrlr.data ? (
        <div className="bg-ollyo-controller-bg border border-ollyo-button-border rounded-2xl w-lg p-7">
            <div className="flex items-center justify-between">
                <div>Power</div>
                <Switch
                    checked={ctrlr.data?.isPoweredOn}
                    onChange={() => {
                        if (ctrlr.data) {
                            ctrlr.setControllerInfo({
                                ...ctrlr.data,
                                isPoweredOn: !ctrlr.data.isPoweredOn,
                            });
                        }
                    }}
                />
            </div>

            {ctrlr.data.type == "light" && (
                <div className="mt-5">
                    <div>Color Temperature</div>

                    <div className="flex items-center gap-2 mt-3">
                        {colors.map((color) => (
                            <ColorButton
                                key={color}
                                color={color}
                                selected={ctrlr.data?.color === color}
                                onSelect={handleSelect}
                            />
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-5">
                <div className="flex justify-between">
                    <div>
                        {ctrlr.data.type == "light" ? "Brightness" : "Speed"}
                    </div>
                    <div className="text-ollyo-button-icon">
                        {ctrlr.data.intensity}%
                    </div>
                </div>
                <Slider
                    defaultValue={ctrlr.data?.intensity}
                    onChange={(value) => {
                        if (ctrlr.data) {
                            ctrlr.setControllerInfo({
                                ...ctrlr.data,
                                intensity: value,
                            });
                        }
                    }}
                />
            </div>
        </div>
    ) : (
        <></>
    );
});

export default Controller;
