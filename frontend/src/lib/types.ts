export type TDragDeviceInfo = {
    id: string;
    width: number;
    type: "light" | "fan";
    text: string;
};

export type TControllerInfo = {
    id: string;
    type: "light" | "fan";
    text: string;
    isPoweredOn: boolean;
    intensity: number;
    color: string;
};

export type TPresets = {
    id: string;
    name: string;
    device: "light" | "fan";
    settings?: TControllerInfo;
};

export type TColor = "yellow" | "white" | "blue" | "red";
