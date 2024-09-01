import { ReactElement } from "react";
import { IconBaseProps, IconType } from "react-icons";

interface IIcons extends IconBaseProps {
    icon: IconType | ReactElement;
}

export default function Icon({ icon: IconComp, ...props }: IIcons) {
    return typeof IconComp === "function" ? (
        <IconComp size={22} color="#6A6868" {...props} />
    ) : (
        IconComp
    )
}