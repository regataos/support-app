import { MenuOptions } from "../MenuOptions";
import { ActionOptions } from "../ActionOptions";

/* Check if the sidebar should display icons and text
or just icons when launching the app */
const sideBar: Element | null = document.querySelector("#side-bar");
let sidebarHide: string | null | void = sessionStorage.getItem("sidebarHide");
let hideText: string = "";

if (!sidebarHide) {
    sessionStorage.setItem("sidebarHide", "false");
    sidebarHide = sessionStorage.getItem("sidebarHide");

} else if (sidebarHide === "true") {
    hideText = sidebarHide;
}

export const SideBar = () => {
    return (
        <div id="side-bar" className={hideText ? "reduce-sidebar" : ""}>
            <ActionOptions />
            <div id="side-bar-menu" style={{ overflow: "hidden" }}>
                <MenuOptions menuOption="solutions" />
                <MenuOptions menuOption="support" />
                <MenuOptions menuOption="forum" />
            </div>
        </div >
    );
}
