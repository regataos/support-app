import "./style.css";
import Image from "./Image";
import { Translation } from "../Translation";

interface Props {
    menuOption: string
};

export const MenuOptions = (props: Props) => {
    return (
        <div className="menu-option">
            <img
                className="option-icon"
                src={Image[props.menuOption as keyof typeof Image]}
                alt={Translation(props.menuOption)}
                title={Translation(props.menuOption)}
            />
            <span className="option-description">{Translation(props.menuOption)}</span>
        </div>
    );
};
