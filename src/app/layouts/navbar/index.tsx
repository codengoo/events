import { TbBrandSafari, TbFlower, TbHeart, TbMapPin, TbSpeakerphone } from "react-icons/tb";
import { Icon } from "../../components";
import NavItem from "./nav_item";

export default function Navbar() {
    return (
        <div className="h-full flex flex-col justify-center w-fit">
            <nav className="bg-white/20 rounded-r-lg flex flex-col p-3">
                <NavItem icon={TbMapPin} name="Place" />
                <NavItem icon={TbSpeakerphone} name="Event" />
                <NavItem icon={TbBrandSafari} name="Explore" active/>
                <NavItem icon={TbHeart} name="Interested" />
                <NavItem icon={TbFlower} name="Explore" />
            </nav>
        </div>
    )
}