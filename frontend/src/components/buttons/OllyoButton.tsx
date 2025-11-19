import { cn } from "@/lib/utils";
import { useStore } from "@/stores/rootStore";
import { Fan, Lightbulb } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";

type Props = {
    id: string;
    type: "light" | "fan";
    text: string;
};
const OllyoButton = observer(({ id, type, text }: Props) => {
    const { dragStore, controllerStore: ctrlr } = useStore();

    const isSelected = useMemo(() => ctrlr.data?.id === id, [ctrlr.data, id]);

    return (
        <button
            onMouseDown={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();

                dragStore.setDeviceInfo({
                    id: id,
                    width: rect.width,
                    type: type,
                    text: text,
                });
                dragStore.setOffset(
                    event.clientX - rect.left,
                    event.clientY - rect.top
                );
                dragStore.setMousePos(rect.left, rect.top);
                dragStore.setIsDragging(true);
            }}
            className={cn(
                `
                relative
                w-full px-4 py-3 rounded-xl cursor-grab active:cursor-grabbing
                bg-ollyo-button-bg text-ollyo-button-icon
                border border-ollyo-button-border
                flex items-center gap-2
                `,
                {
                    "bg-ollyo-button-bg-selected text-white": isSelected,
                }
            )}
        >
            {isSelected && (
                <div
                    className={`
                absolute -left-4 top-1/2 -translate-y-1/2
                    bg-ollyo-button-bg-blue h-2 w-2 rounded-full
                `}
                ></div>
            )}
            {type === "light" ? <Lightbulb size={20} /> : <Fan size={20} />}
            <span className="text-ollyo-button-color truncate">{text}</span>
        </button>
    );
});

export default OllyoButton;
