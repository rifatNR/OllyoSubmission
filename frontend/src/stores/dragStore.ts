import { TDragDeviceInfo } from "@/lib/types";
import { makeAutoObservable } from "mobx";

class DragStore {
    deviceInfo: TDragDeviceInfo = {
        id: "",
        width: 100,
        type: "light",
        text: "Light",
    };
    mousePos = { x: 0, y: 0 };
    offset = { x: 0, y: 0 };
    isDragging = false;
    isOverDropzone = false;
    dropzoneRef: React.RefObject<HTMLDivElement> | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setDeviceInfo(deviceInfo: TDragDeviceInfo) {
        this.deviceInfo = deviceInfo;
    }

    setMousePos(x: number, y: number) {
        this.mousePos = { x, y };
    }

    setOffset(x: number, y: number) {
        this.offset = { x, y };
    }

    setIsDragging(isDragging: boolean) {
        this.isDragging = isDragging;
    }

    setIsOverDropzone(isOver: boolean) {
        this.isOverDropzone = isOver;
    }
}

export const dragStore = new DragStore();
