import "./style.css"
import { Translation } from "../Translation";
import Image from "./Image";

interface Props {
    actionOption: string
};

export const ActionOptionIcon = (props: Props) => {
    return (
        <img
            src={Image[props.actionOption as keyof typeof Image]}
            alt={Translation(props.actionOption)}
            title={Translation(props.actionOption)}
        />
    );
};
