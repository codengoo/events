import { IconType } from "react-icons";
import { Icon } from "../../components";

interface NavItemProps {
    icon: IconType,
    name: string,
    active?: boolean
}

export default function NavItem({ icon, name, active }: NavItemProps) {
    return (
        <div className="flex items-center">
            <div className="h-14 w-14 flex justify-center items-center">
                <Icon icon={icon} size={28} color={active ? "white": "gray"}/>
            </div>
            <label className={active ? "text-white": "text-gray-500"}>{name}</label>
        </div>
    )
}