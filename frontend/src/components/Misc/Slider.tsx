import React, { useEffect, useMemo, useState } from "react";

type Props = {
    defaultValue?: number;
    onChange?: (value: number) => void;
};

const Slider = ({ defaultValue, onChange }: Props) => {
    const [value, setValue] = useState(0);

    const fillAmount = useMemo(() => {
        if (value < 30) return value + 2;
        if (value > 70) return value - 2;
        return value;
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.valueAsNumber;
        setValue(newValue);
        onChange?.(newValue);
    };

    useEffect(() => {
        if (defaultValue !== undefined) {
            setValue(defaultValue);
        }
    }, [defaultValue]);

    return (
        <div>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                className="w-full mt-3 rounded-lg appearance-none cursor-pointer slider-thumb"
                style={{
                    background: `linear-gradient(to right, #2B7FFF ${fillAmount}%, #364153 ${fillAmount}%)`,
                }}
            />
        </div>
    );
};

export default Slider;
