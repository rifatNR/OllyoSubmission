import { colorCodeMap } from "@/lib/const";
import { TColor } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ColorButtonProps {
    color: TColor;
    selected?: boolean;
    onSelect: (color: TColor) => void;
}

const ColorButton = ({ color, selected, onSelect }: ColorButtonProps) => {
    return (
        <button
            onClick={() => onSelect(color)}
            style={{
                backgroundColor: colorCodeMap[color],
            }}
            className={cn(
                "flex-1 border-2 rounded-lg h-12 cursor-pointer",
                "border-ollyo-controller-border",
                {
                    "border-ollyo-controller-border-selected": selected,
                }
            )}
        />
    );
};

export default ColorButton;
