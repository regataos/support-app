import "./style.css";
import Images from "./Images";
import { Translation } from "../Translation";

interface Props {
    menuOption: string
};

export const MenuOptions = (props: Props) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const homePage: Element | null = document.querySelector("#home-container");
        const webviewContainer: Element | null = document.querySelector("#webview-container");
        const webview: Element | null = document.querySelector("#webview");

        let goLink: string = event.currentTarget.id;

        if (goLink === "solutions") {
            if (webview)
                webview.remove();

            if (homePage)
                homePage.classList.add("showElement");

            if (webviewContainer)
                webviewContainer.classList.remove("showElement");

        } else {
            if (webview)
                webview.remove();

            const webviewContainerLinks = {
                "support": "https://suporte.regataos.com.br/",
                "forum": "https://regataos.forumeiros.com/"
            };

            const newElement = document.createElement("webview");
            newElement.id = "webview";

            let sidebarHide: string | null = sessionStorage.getItem("sidebarHide");
            if (sidebarHide === "true") {
                newElement.classList.add('reduce-webview');
            }

            newElement.setAttribute("src", webviewContainerLinks[goLink as keyof typeof webviewContainerLinks]);
            newElement.setAttribute("autosize", "on");
            newElement.setAttribute("partition", "persist:webview");

            if (webviewContainer)
                webviewContainer.appendChild(newElement);

            if (homePage)
                homePage.classList.remove("showElement");

            if (webviewContainer)
                webviewContainer.classList.add("showElement");
        };
    };

    return (
        <div className="menu-option" id={props.menuOption} onClick={handleClick} >
            <img
                className="option-icon"
                src={Images[props.menuOption as keyof typeof Images]}
                alt={Translation(props.menuOption)}
                title={Translation(props.menuOption)}
            />
            <span className="option-description">{Translation(props.menuOption)}</span>
        </div>
    );
};
