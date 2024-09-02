import { TbDownload, TbLayoutSidebarLeftCollapse, TbPlus, TbSearch, TbSettings2, TbShare2, TbSquareRoundedMinus, TbSquareRoundedMinusFilled, TbSquareRoundedXFilled, TbUserCircle } from "react-icons/tb";
import { BtnIcon, Icon } from "../components/";

export default function Titlebar() {
    const handleCloseWindows = () => {
        window.electron.event.sendMessage('close-window');
    }
    const handleMinimizeWindows = () => {
        window.electron.event.sendMessage('minimize-window');
    }

    return (
        <div className="border-b border-gray-50/15 p-2 px-4 w-full flex flex-row justify-between title-frame font-poppins">
            <div className="flex flex-row gap-2">
                <BtnIcon
                    icon={TbShare2}
                />
                <BtnIcon
                    icon={TbUserCircle}
                />
                <BtnIcon
                    icon={TbSettings2}
                />
            </div>

            <div className="bg-border/20 rounded-md no-drag flex flex-row items-center px-2 gap-2">
                <Icon icon={TbSearch} size={18} />
                <input className="bg-transparent flex flex-grow focus:outline-none placeholder-gray-100 font-light w-[150px] focus:w-[250px] transition-[width] text-xs text-white" placeholder="Search something here" />

            </div>


            <div className="flex flex-row items-center">
                <BtnIcon
                    icon={TbSquareRoundedMinus}
                    onClick={handleMinimizeWindows}
                />
                <BtnIcon
                    icon={TbSquareRoundedXFilled}
                    iconHover={<Icon icon={TbSquareRoundedXFilled} color="red" />}
                    onClick={handleCloseWindows}
                    hoverEffect={false}
                />
            </div>

        </div>
    )
}