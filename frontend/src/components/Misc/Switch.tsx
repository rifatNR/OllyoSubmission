import React from "react";

type SwitchProps = {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    className?: string;
};

const Switch: React.FC<SwitchProps> = ({
    checked,
    defaultChecked = false,
    onChange,
    disabled = false,
    label,
    className = "",
}) => {
    const [internalChecked, setInternalChecked] =
        React.useState(defaultChecked);

    const isControlled = checked !== undefined;
    const currentChecked = isControlled ? checked : internalChecked;

    const toggle = () => {
        if (disabled) return;
        const newValue = !currentChecked;
        if (!isControlled) setInternalChecked(newValue);
        onChange?.(newValue);
    };

    return (
        <button
            type="button"
            role="switch"
            aria-checked={currentChecked}
            disabled={disabled}
            onClick={toggle}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle();
                }
            }}
            className={`relative inline-flex h-6 w-10 items-center rounded-full transition-colors 
        ${
            currentChecked
                ? "bg-ollyo-controller-fill"
                : "bg-ollyo-controller-empty"
        } 
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} 
        ${className}`}
        >
            <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform  shadow-lg
          ${currentChecked ? "translate-x-[18px]" : "translate-x-[2px]"}`}
            />
            {label && (
                <span className="ml-3 select-none text-sm text-gray-200">
                    {label}
                </span>
            )}
        </button>
    );
};

export default Switch;
