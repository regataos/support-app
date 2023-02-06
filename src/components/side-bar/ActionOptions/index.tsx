import "./style.css";
import { ActionOptionIcon } from "./ActionOptionIcon";

export const ActionOptions = () => {
    // Show only sidebar icons, hiding text
    const hideMenu = () => {
        // Get sidebar status
        const sideBar: Element | null = document.querySelector("#side-bar");
        const optionDesc: NodeListOf<Element> = document.querySelectorAll(".option-description");
        const webview: Element | null = document.querySelector("#webview");
        const homePage: Element | null = document.querySelector("#home-container");

        let sidebarHide: string | null = sessionStorage.getItem("sidebarHide");

        if (sidebarHide === "false") {
            for (let i = 0; i < optionDesc.length; i++) {
                optionDesc[i].classList.add('hide-text');
            }

            if (sideBar)
                sideBar.classList.add('reduce-sidebar');

            if (webview)
                webview.classList.add('reduce-element');

            if (homePage)
                homePage.classList.add('reduce-element');

            sessionStorage.setItem("sidebarHide", "true");

        } else if (sidebarHide === "true") {
            if (sideBar)
                sideBar.classList.remove('reduce-sidebar');

            if (webview)
                webview.classList.remove('reduce-element');

            if (homePage)
                homePage.classList.remove('reduce-element');

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
