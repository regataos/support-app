import { Translation } from "../Translation";
import { ActionButtons } from "../ActionButtons"
import "./style.css";

export const HomePage = () => {
    // Check the size of the sidebar and, if necessary, adjust the home page.
    let sidebarHide = sessionStorage.getItem("sidebarHide");
    let hideText: string = "";

    if (sidebarHide === "true") {
        hideText = sidebarHide;
    };

    return (
        <div id="home-container" className={hideText ? "reduce-element showElement" : "showElement"}>
            <h1>{Translation("home-title")}</h1>
            <h2>{Translation("home-desc")}</h2>
            <h2>{Translation("home-desc-forum")}
                <span id="community-access">{Translation("forum-link")}</span>
            </h2>
            <div id="solution-options">
                <ActionButtons />
                <ActionButtons />
                <ActionButtons />
                <ActionButtons />
            </div>
        </div>
    );
};
