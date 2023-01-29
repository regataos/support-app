import { MenuOptions } from "../MenuOptions";
import { ActionOptions } from "../ActionOptions";

export const SideBar = () => {
    return (
        <div id="side-bar">
            <div id="action-options">
                <ActionOptions actionOption="return" />
                <ActionOptions actionOption="menu" />
            </div>
            <div id="side-bar-menu">
                <MenuOptions menuOption="solutions" />
                <MenuOptions menuOption="support" />
                <MenuOptions menuOption="forum" />
            </div>
        </div>
    );
}
