import { TControllerInfo } from "@/lib/types";
import { makeAutoObservable } from "mobx";

class ControllerStore {
    data: TControllerInfo | null = null;
    isChanged: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    // Used for when draggin from sidebar
    reassignControlInfo(controllerInfo: TControllerInfo) {
        this.data = controllerInfo;
        this.isChanged = false;
    }

    // used for updating controller state
    setControllerInfo(controllerInfo: TControllerInfo) {
        this.data = controllerInfo;
        this.isChanged = true;
    }

    clearControllerInfo() {
        this.data = null;
        this.isChanged = false;
    }
}

export const controllerStore = new ControllerStore();
