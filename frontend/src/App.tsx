import MainCanvas from "@/components/canvas/MainCanvas";
import Layout from "@/layout/Layout";
import Topbar from "@/layout/Topbar";
import { rootStore, StoreContext } from "@/stores/rootStore";

export default function App() {
    return (
        <StoreContext.Provider value={rootStore}>
            <Layout>
                <div className="flex flex-col h-full p-5 w-full">
                    <Topbar />
                    <MainCanvas />
                </div>
            </Layout>
        </StoreContext.Provider>
    );
}
