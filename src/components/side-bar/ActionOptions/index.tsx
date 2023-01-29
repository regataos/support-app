import "./style.css"
import { Translation } from "../Translation";
import Image from "./Image";

interface Props {
    actionOption: string
};

export const ActionOptions = (props: Props) => {
    return (
        <div className="action-option">
            <img
                src={Image[props.actionOption as keyof typeof Image]}
                alt={Translation(props.actionOption)}
                title={Translation(props.actionOption)}
            />
        </div>
    );
};
