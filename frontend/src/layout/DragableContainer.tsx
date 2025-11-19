import { presetStore } from "@/stores/presetStore";
import { useStore } from "@/stores/rootStore";
import { Fan, Lightbulb } from "lucide-react";
import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useCallback } from "react";

type Props = {
    children: React.ReactNode;
};
const DragableContainer = observer(({ children }: Props) => {
    const { dragStore, controllerStore: ctrlr } = useStore();

    const checkDropzone = useCallback(
        (x: number, y: number) => {
            if (!dragStore.dropzoneRef?.current) return false;
            const rect = dragStore.dropzoneRef.current.getBoundingClientRect();
            return (
                x >= rect.left &&
                x <= rect.right &&
                y >= rect.top &&
                y <= rect.bottom
            );
        },
        [dragStore.dropzoneRef]
    );

    const onMouseMove = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (dragStore.isDragging) {
                dragStore.setMousePos(
                    event.clientX - dragStore.offset.x,
                    event.clientY - dragStore.offset.y
                );
                dragStore.setIsOverDropzone(
                    checkDropzone(event.clientX, event.clientY)
                );
            }
        },
        [checkDropzone, dragStore]
    );

    const onMouseUp = useCallback(
        async (event: React.MouseEvent<HTMLDivElement>) => {
            if (dragStore.isDragging) {
                dragStore.setIsDragging(false);
                dragStore.setIsOverDropzone(false);
                if (checkDropzone(event.clientX, event.clientY)) {
                    if (
                        dragStore.deviceInfo.id == "main_light" ||
                        dragStore.deviceInfo.id == "main_fan"
                    ) {
                        console.log("Dropping...", toJS(dragStore.deviceInfo));
                        ctrlr.reassignControlInfo({
                            id: dragStore.deviceInfo.id,
                            type: dragStore.deviceInfo.type,
                            text: dragStore.deviceInfo.text,
                            color: "yellow",
                            intensity: 0,
                            isPoweredOn: false,
                        });
                    } else {
                        const preset = await presetStore.getSinglePreset(
                            dragStore.deviceInfo.id
                        );
                        if (preset) {
                            console.log("Dropping...", preset);
                            ctrlr.reassignControlInfo({
                                id: preset.id,
                                type: preset.device,
                                text: preset.name,
                                color: preset.settings?.color || "yellow",
                                intensity: preset.settings?.intensity || 0,
                                isPoweredOn:
                                    preset.settings?.isPoweredOn || false,
                            });
                        }
                    }
                }
            }
        },
        [checkDropzone, ctrlr, dragStore]
    );

    return (
        <div onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
            {dragStore.isDragging && (
                <button
                    className="
                            px-4 py-3 rounded-xl cursor-grabbing
                            bg-ollyo-button-bg border border-ollyo-button-border
                            flex items-center gap-2 z-drag-button opacity-50
                            "
                    style={{
                        position: "absolute",
                        left: dragStore.mousePos.x,
                        top: dragStore.mousePos.y,
                        width: dragStore.deviceInfo.width,
                    }}
                >
                    {dragStore.deviceInfo.type === "light" ? (
                        <Lightbulb
                            size={20}
                            className="text-ollyo-button-icon"
                        />
                    ) : (
                        <Fan size={20} className="text-ollyo-button-icon" />
                    )}
                    <span className="text-ollyo-button-color">
                        {dragStore.deviceInfo.text}
                    </span>
                </button>
            )}
            {children}
        </div>
    );
});

export default DragableContainer;
