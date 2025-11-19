import { initToast } from "@/components/Toast/ToastContainer";
import DragableContainer from "@/layout/DragableContainer";
import Sidebar from "@/layout/Sidebar/Sidebar";
import React, { useEffect } from "react";

type Props = {
    children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
    useEffect(() => {
        initToast();
    }, []);

    return (
        <DragableContainer>
            <div className="flex font-inter bg-ollyo-body-bg text-white">
                <Sidebar />
                <main className="w-full h-screen">{children}</main>
            </div>
        </DragableContainer>
    );
};

export default Layout;
