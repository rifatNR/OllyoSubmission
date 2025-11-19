import Modal from "@/components/Misc/Modal";
import { toast } from "@/components/Toast/ToastContainer";
import { useStore } from "@/stores/rootStore";
import { Loader2, X } from "lucide-react";
import { observer } from "mobx-react-lite";
import { useCallback, useState } from "react";

const Topbar = observer(() => {
    const { controllerStore: ctrlr, presetStore } = useStore();

    const [name, setName] = useState("");
    const [open, setOpen] = useState(false);

    const onSavePreset = useCallback(async () => {
        if (name.trim() === "") {
            toast.error("Set a name for the preset.");
            return;
        }

        if (!ctrlr.data) {
            toast.error("No controller data available.");
            return;
        }

        toast.success("Preset saved successfully!");

        await presetStore.savePreset({
            name,
            device: ctrlr.data.type,
            settings: ctrlr.data,
        });

        setName("");
        setOpen(false);
    }, [name, ctrlr.data, presetStore]);

    return (
        <div className="flex items-center justify-between w-full h-[42px]">
            <div>Testing Canvas</div>
            {ctrlr.isChanged && (
                <div className="flex gap-4">
                    <button
                        onClick={() => ctrlr.clearControllerInfo()}
                        className="
                            px-4 py-2 rounded-lg cursor-pointer
                            bg-ollyo-button-bg border border-ollyo-button-border
                            flex items-center gap-2
                            "
                    >
                        Clear
                    </button>
                    <div className="">
                        <button
                            className="
                            px-4 py-2 rounded-lg cursor-pointer
                            bg-ollyo-button-bg-blue border border-ollyo-button-border
                            flex items-center gap-2
                            "
                            onClick={() => setOpen(true)}
                        >
                            Save Preset
                        </button>

                        <Modal open={open} onClose={() => setOpen(false)}>
                            <div className="rounded-xl shadow w-[500px] bg-ollyo-modal-bg border border-ollyo-modal-border">
                                <div className="p-5 flex items-center justify-between border-b border-ollyo-modal-border">
                                    <div className="text-xl font-bold">
                                        Give me a name
                                    </div>
                                    <X
                                        onClick={() => setOpen(false)}
                                        size={18}
                                        className="text-ollyo-modal-icon cursor-pointer "
                                    />
                                </div>
                                <div className="p-5">
                                    <input
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        type="text"
                                        placeholder="Name it"
                                        className="
                                            w-full px-4 py-3 rounded-xl
                                            text-ollyo-button-color border border-ollyo-modal-border bg-ollyo-modal-input-bg
                                            flex items-center gap-2
                                            "
                                    ></input>
                                    <div className="text-sm text-ollyo-modal-color mt-4 px-1">
                                        By adding this effect as a present you
                                        can reuse this anytime.
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-2 p-5">
                                    <button
                                        className="
                                            px-4 py-2 rounded-lg cursor-pointer
                                            bg-ollyo-button-bg border border-ollyo-button-border
                                            flex items-center gap-2
                                            "
                                        onClick={() => setOpen(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="
                                            px-4 py-2 rounded-lg cursor-pointer
                                            bg-ollyo-button-bg-blue border border-ollyo-button-border
                                            flex items-center justify-center gap-2
                                            min-w-32
                                            "
                                        onClick={onSavePreset}
                                    >
                                        {presetStore.isLoading ? (
                                            <Loader2 className="animate-spin" />
                                        ) : (
                                            <div className="w-full text-center">
                                                Save Preset
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            )}
        </div>
    );
});

export default Topbar;
