import { toast } from "@/components/Toast/ToastContainer";
import { baseUrl } from "@/lib/const";
import { TPresets } from "@/lib/types";
import { makeAutoObservable } from "mobx";

class PresetStore {
    isLoading: boolean = false;
    isSingleLoading: boolean = false;
    presets: TPresets[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addPreset(preset: TPresets) {
        this.presets.push(preset);
    }

    removePreset(id: string) {
        this.presets = this.presets.filter((preset) => preset.id !== id);
    }

    setPresets(presets: TPresets[]) {
        this.presets = presets;
    }

    lstPresets = async () => {
        this.isLoading = true;
        try {
            const response = await fetch(`${baseUrl}/presets`);
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch presets (status ${response.status})`
                );
            }
            const data = await response.json();
            presetStore.setPresets(data?.data || []);
        } catch (error) {
            console.error(error);
            toast.error("Failed to fetch presets");
        } finally {
            this.isLoading = false;
        }
    };

    getSinglePreset = async (id: string): Promise<TPresets | null> => {
        this.isSingleLoading = true;

        try {
            const response = await fetch(`${baseUrl}/presets/${id}`);

            if (!response.ok) {
                throw new Error(
                    `Failed to fetch preset (status ${response.status})`
                );
            }

            const data = await response.json();
            return data?.data ?? null;
        } catch (error) {
            console.error(error);
            toast.error("Preset not found.");
            return null;
        } finally {
            this.isSingleLoading = false;
        }
    };

    savePreset = async (preset: Omit<TPresets, "id">) => {
        this.isLoading = true;
        try {
            const response = await fetch(`${baseUrl}/presets`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(preset),
            });
            if (!response.ok) {
                throw new Error(
                    `Failed to save preset (status ${response.status})`
                );
            }
            const data = await response.json();
            this.addPreset(data?.data);

            await this.lstPresets();
        } catch (error) {
            console.error(error);
            toast.error("Failed to save preset");
        } finally {
            this.isLoading = false;
        }
    };
}

export const presetStore = new PresetStore();
