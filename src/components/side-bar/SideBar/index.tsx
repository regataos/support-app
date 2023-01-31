import { MenuOptions } from "../MenuOptions";
import { ActionOptions } from "../ActionOptions";

/* Check if the sidebar should display icons and text
or just icons when launching the app */
const sideBar: Element | null = document.querySelector("#side-bar");
let sidebarStatus: string | null | void = localStorage.getItem("sidebarStatus");
let hideText: string = "";

if (!sidebarStatus) {
    localStorage.setItem("sidebarStatus", "true");
    sidebarStatus = localStorage.setItem("sidebarStatus", "true");

} else if (sidebarStatus === "true") {
    hideText = sidebarStatus;
}

export const SideBar = () => {
    return (
        <div id="side-bar" className={hideText ? "" : "reduce-sidebar"}>
            <ActionOptions />
            <div id="side-bar-menu" style={{ overflow: "hidden" }}>
                <MenuOptions menuOption="solutions" />
                <MenuOptions menuOption="support" />
                <MenuOptions menuOption="forum" />
            </div>
        </div >
    );
}
