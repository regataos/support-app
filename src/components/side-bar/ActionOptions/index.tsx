import "./style.css";
import { ActionOptionIcon } from "./ActionOptionIcon";

// Show only sidebar icons, hiding text
const hideMenu = () => {
    // Get sidebar status
    const sideBar: Element | null = document.querySelector("#side-bar");
    const optionDesc: NodeListOf<Element> = document.querySelectorAll(".option-description");

    let sidebarHide: string | null = sessionStorage.getItem("sidebarHide");

    if (sidebarHide === "false") {
        for (let i = 0; i < optionDesc.length; i++) {
            optionDesc[i].classList.add('hide-text');
        }

        if (sideBar)
            sideBar.classList.add('reduce-sidebar');

        sessionStorage.setItem("sidebarHide", "true");

    } else if (sidebarHide === "true") {
        if (sideBar)
            sideBar.classList.remove('reduce-sidebar');

        for (let i = 0; i < optionDesc.length; i++) {
            setTimeout(function () {
                optionDesc[i].classList.remove('hide-text');
            }, 200);
        }

        sessionStorage.setItem("sidebarHide", "false");
    };
};

const returnPage = () => {
    console.log("Return Page");
};

export const ActionOptions = () => {
    return (
        <div id="action-options">
            <div className="action-option" onClick={returnPage}>
                <ActionOptionIcon actionOption="return" />
            </div>
            <div className="action-option" onClick={hideMenu}>
                <ActionOptionIcon actionOption="hideMenu" />
            </div>
        </div>
    );
};
