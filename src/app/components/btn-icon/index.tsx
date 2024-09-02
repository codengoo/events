import { IconType } from "react-icons";
import Icon from "../icon";
import { ReactElement, useState, useCallback } from "react";

interface IBtnIcon {
    icon: IconType;
    iconHover?: IconType | ReactElement;
    onClick?: () => void;
    hoverEffect?: boolean;
}

export default function BtnIcon({ icon, iconHover, onClick, hoverEffect = true }: IBtnIcon) {
    const [isHover, setHover] = useState(false);

    const handleMouseEnter = useCallback(() => setHover(true), []);
    const handleMouseLeave = useCallback(() => setHover(false), []);

    const displayedIcon = isHover && iconHover ? iconHover : icon;

    return (
        <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className={`p-1 rounded-lg no-drag ${hoverEffect ? "hover:bg-secondary/35" : ""}`}
        >
            <Icon icon={displayedIcon} />
        </button>
    );
}
