import "./style.css";
import { ActionOptionIcon } from "./ActionOptionIcon";

// Show only sidebar icons, hiding text
const hideMenu = () => {
    // Get sidebar status
    let sidebarStatus: string | null = localStorage.getItem("sidebarStatus");

    const sideBar: Element | null = document.querySelector("#side-bar");
    const optionDesc: NodeListOf<Element> = document.querySelectorAll(".option-description");

    if (sidebarStatus === "true") {
        for (let i = 0; i < optionDesc.length; i++) {
            optionDesc[i].classList.add('hide-text');
        }

        if (sideBar) {
            sideBar.classList.add('reduce-sidebar');
        }

        localStorage.setItem("sidebarStatus", "false");

    } else if (sidebarStatus === "false") {
        if (sideBar) {
            sideBar.classList.remove('reduce-sidebar');
        }

        for (let i = 0; i < optionDesc.length; i++) {
            setTimeout(function () {
                optionDesc[i].classList.remove('hide-text');
            }, 200);
        }

        localStorage.setItem("sidebarStatus", "true");
    }
};

const returnPage = () => {
    console.log("Return Page")
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
