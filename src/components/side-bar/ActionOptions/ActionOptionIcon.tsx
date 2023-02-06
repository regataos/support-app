import "./style.css";
import { Translation } from "../Translation";
import Images from "./Images";

interface Props {
    actionOption: string
};

export const ActionOptionIcon = (props: Props) => {
    return (
        <img
            src={Images[props.actionOption as keyof typeof Images]}
            alt={Translation(props.actionOption)}
            title={Translation(props.actionOption)}
        />
    );
};
