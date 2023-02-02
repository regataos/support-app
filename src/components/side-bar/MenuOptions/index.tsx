import "./style.css";
import Images from "./Images";
import { Translation } from "../Translation";

const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const homePage: Element | null = document.querySelector("#home-container");
    const webView: Element | null = document.querySelector("#webview-container");

    let goLink: string = event.currentTarget.id;

    if (goLink === "solutions") {
        if (homePage)
            homePage.classList.add('showElement');

        if (webView)
            webView.classList.remove('showElement');

    } else {
        const webViewLinks = {
            "support": "link-aqui",
            "forum": "link-aqui"
        };

        if (homePage)
            homePage.classList.remove('showElement');

        if (webView)
            webView.classList.add('showElement');

        console.log(webViewLinks[goLink as keyof typeof webViewLinks]);
    };
};

interface Props {
    menuOption: string
};

export const MenuOptions = (props: Props) => {
    return (
        <div className="menu-option" id={props.menuOption} onClick={handleClick} >
            <img
                className="option-icon"
                src={Images[props.menuOption as keyof typeof Images]}
                alt={Translation(props.menuOption)}
                title={Translation(props.menuOption)}
            />
            <span className="option-description">{Translation(props.menuOption)}</span>
        </div >
    );
};
