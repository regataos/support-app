import { Translation } from "../Translation";
import "./style.css"

export const HomePage = () => {
    const homePage: Element | null = document.querySelector("#home-container");

    return (
        <div id="home-container" className="showElement">
            <h1>{Translation("home-title")}</h1>
            <h2>{Translation("home-desc")}</h2>
            <h2>{Translation("home-desc-forum")}
                <span id="community-access">{Translation("forum-link")}</span>
            </h2>
        </div>
    );
};
