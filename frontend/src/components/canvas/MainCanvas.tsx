import Controller from "@/components/canvas/Controller";
import Fan from "@/components/Devices/Fan";
import Light from "@/components/Devices/Light";
import { useStore } from "@/stores/rootStore";
import { Loader } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useRef } from "react";

const MainCanvas = observer(() => {
    const { dragStore, controllerStore: ctrlr, presetStore } = useStore();

    const dropzoneRef = useRef(null);
    dragStore.dropzoneRef = dropzoneRef;

    return (
        <div
            ref={dropzoneRef}
            className="relative flex-1 bg-ollyo-canvas-bg border border-ollyo-canvas-border rounded-xl mt-5 overflow-hidden"
        >
            {(dragStore.isOverDropzone ||
                !ctrlr.data ||
                presetStore.isSingleLoading) && (
                <div className="h-full w-full flex flex-col items-center justify-center text-gray-700">
                    {dragStore.isOverDropzone ? (
                        <div>Dropping...</div>
                    ) : presetStore.isSingleLoading ? (
                        <div className="flex flex-col items-center gap-2 text-gray-500">
                            <Loader size={30} className="animate-spin" />
                            <div>Loading...</div>
                        </div>
                    ) : (
                        <div>Drag anything here</div>
                    )}
                </div>
            )}

            {!dragStore.isOverDropzone &&
                ctrlr.data &&
                !presetStore.isSingleLoading && (
                    <>
                        <div className="absolute top-60 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            {ctrlr.data.type == "light" ? (
                                <Light />
                            ) : ctrlr.data?.type == "fan" ? (
                                <Fan />
                            ) : (
                                <></>
                            )}
                        </div>

                        <div className="h-full w-full flex flex-col items-center justify-end pb-10">
                            <Controller />
                        </div>
                    </>
                )}
        </div>
    );
});

export default MainCanvas;
