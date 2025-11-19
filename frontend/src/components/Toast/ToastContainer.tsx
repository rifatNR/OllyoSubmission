import { Check, Info, TriangleAlert, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

const ToastContainer: React.FC = () => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    useEffect(() => {
        // Subscribe to toast events
        const handleToast = (
            event: CustomEvent<{ message: string; type: ToastType }>
        ) => {
            const newToast: Toast = {
                id: Math.random().toString(36).substr(2, 9),
                message: event.detail.message,
                type: event.detail.type,
            };

            setToasts((prev) => [...prev, newToast]);

            // Auto remove after 3 seconds
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
            }, 3000);
        };

        window.addEventListener("show-toast" as any, handleToast);
        return () =>
            window.removeEventListener("show-toast" as any, handleToast);
    }, []);

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };

    const getToastIcon = (type: ToastType) => {
        switch (type) {
            case "success":
                return <Check size={14} className="text-[#242C32] font-bold" />;
            case "error":
                return <X size={14} className="text-[#242C32] font-bold" />;
            case "warning":
                return (
                    <TriangleAlert
                        size={14}
                        className="text-[#242C32] font-bold"
                    />
                );
            case "info":
                return <Info size={14} className="text-[#242C32] font-bold" />;
        }
    };

    const getIconBgColor = (type: ToastType) => {
        switch (type) {
            case "success":
                return "bg-[#00DF80]";
            case "error":
                return "bg-red-500";
            case "warning":
                return "bg-yellow-500";
            case "info":
                return "bg-blue-500";
        }
    };

    const getGlowColor = (type: ToastType) => {
        switch (type) {
            case "success":
                return "bg-[#00DF80]/10";
            case "error":
                return "bg-red-500/10";
            case "warning":
                return "bg-yellow-500/10";
            case "info":
                return "bg-blue-500/10";
        }
    };

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-2000 flex flex-col gap-2 pointer-events-none">
            {toasts.map((toast) => (
                <div
                    onClick={() => removeToast(toast.id)}
                    key={toast.id}
                    className="relative overflow-hidden min-w-80 shadow-xl bg-[#242C32]/50 backdrop-blur-2xl p-4 flex items-center justify-center gap-5 rounded-xl animate-slide-in pointer-events-auto"
                >
                    <div
                        className={`absolute -left-28 blur-xl h-64 w-64 ${getGlowColor(
                            toast.type
                        )} rounded-full`}
                    ></div>
                    <div className="p-2 bg-[#303746] rounded-full">
                        <div
                            className={`p-1 ${getIconBgColor(
                                toast.type
                            )} rounded-full`}
                        >
                            {getToastIcon(toast.type)}
                        </div>
                    </div>

                    <div className="text-lg font-bold text-white">
                        {toast.message}
                    </div>
                </div>
            ))}
            <style>
                {`
                @keyframes slide-in {
                from {
                    transform: translateY(-400px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
                }
                .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
                }
                `}
            </style>
        </div>
    );
};

// Global toast function
export const toast = (message: string, type: ToastType = "info") => {
    const event = new CustomEvent("show-toast", {
        detail: { message, type },
    });
    window.dispatchEvent(event);
};

// Additional helper functions
toast.success = (message: string) => toast(message, "success");
toast.error = (message: string) => toast(message, "error");
toast.warning = (message: string) => toast(message, "warning");
toast.info = (message: string) => toast(message, "info");

// Initialize toast container
let toastRoot: any = null;

export const initToast = () => {
    if (!toastRoot) {
        const container = document.createElement("div");
        document.body.appendChild(container);
        toastRoot = createRoot(container);
        toastRoot.render(<ToastContainer />);
    }
};
