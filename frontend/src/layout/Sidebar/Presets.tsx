import OllyoButton from "@/components/buttons/OllyoButton";
import { useStore } from "@/stores/rootStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

const Presets = observer(() => {
    const { presetStore } = useStore();

    useEffect(() => {
        presetStore.lstPresets();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex-1 h-full flex flex-col">
            <div className="mx-5">Saved Presets</div>

            <div className="relative flex-1 overflow-y-auto scrollbar-hide mt-5 flex flex-col gap-4">
                {presetStore.presets.length ? (
                    presetStore.presets.map((item) => (
                        <div key={item.id} className="mx-5">
                            <OllyoButton
                                id={item.id}
                                type={item.device}
                                text={item.name}
                            />
                        </div>
                    ))
                ) : (
                    <div
                        className="
                            px-4 py-3 rounded-xl cursor-pointer
                            text-ollyo-button-color bg-transparent border border-ollyo-button-border
                            flex items-center gap-2 mx-5
                            "
                    >
                        Nothing added yet
                    </div>
                )}
            </div>
        </div>
    );
});

export default Presets;
