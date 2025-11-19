import { controllerStore } from "@/stores/controllerStore";
import { dragStore } from "@/stores/dragStore";
import { presetStore } from "@/stores/presetStore";
import { createContext, useContext } from "react";

class RootStore {
    dragStore = dragStore;
    controllerStore = controllerStore;
    presetStore = presetStore;
}

const rootStore = new RootStore();
const StoreContext = createContext(rootStore);

export const useStore = () => useContext(StoreContext);
export { rootStore, StoreContext };
