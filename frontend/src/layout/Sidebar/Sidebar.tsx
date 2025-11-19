import Indicator from "@/components/buttons/Indicator";
import OllyoButton from "@/components/buttons/OllyoButton";
import Presets from "@/layout/Sidebar/Presets";

const Sidebar = () => {
    return (
        <aside>
            <div className="flex flex-col w-60 h-screen bg-ollyo-sidebar-bg py-5">
                <div className="px-5">Devices</div>

                <div className="relative mt-5 flex flex-col gap-4 px-5">
                    <Indicator />
                    <OllyoButton id="main_light" type="light" text="Light" />
                    <OllyoButton id="main_fan" type="fan" text="Fan" />
                </div>

                <div className="flex-1 overflow-hidden flex flex-col mt-10">
                    <Presets />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
