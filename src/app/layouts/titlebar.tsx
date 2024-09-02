import { TbDownload, TbLayoutSidebarLeftCollapse, TbPlus, TbSearch, TbShare2, TbSquareRoundedMinus, TbSquareRoundedMinusFilled, TbSquareRoundedXFilled } from "react-icons/tb";
import { BtnIcon, Icon } from "../components/";

export default function Titlebar() {
    const handleCloseWindows = () => {
        window.electron.event.sendMessage('close-window');
    }
    const handleMinimizeWindows = () => {
        window.electron.event.sendMessage('minimize-window');
    }

    return (
        <div className="relative border-b border-gray-50/15 p-2 px-4 w-full flex flex-row justify-between title-frame font-poppins">
            <div className="flex flex-row items-center">
                <BtnIcon
                    icon={TbSquareRoundedXFilled}
                    iconHover={<Icon icon={TbSquareRoundedXFilled} color="red" />}
                    onClick={handleCloseWindows}
                    hoverEffect={false}
                />
                <BtnIcon
                    icon={TbSquareRoundedMinus}
                    iconHover={<Icon icon={TbSquareRoundedMinusFilled} color="blue" />}
                    onClick={handleMinimizeWindows}
                    hoverEffect={false}
                />

                <div className="pl-3">
                    <BtnIcon
                        icon={TbLayoutSidebarLeftCollapse}
                    />
                </div>
            </div>

            <div className="bg-border/30 rounded-md w-1/3 no-drag flex flex-row items-center px-2 gap-2">
                <Icon icon={TbSearch} size={18}/>
                <input className="bg-transparent flex flex-grow focus:outline-none placeholder-gray-100 font-light text-sm" placeholder="Search something here" />

            </div>

            <div className="flex flex-row gap-2">
                <BtnIcon
                    icon={TbDownload}
                />
                <BtnIcon
                    icon={TbShare2}
                />
                <BtnIcon
                    icon={TbPlus}
                />
            </div>
        </div>
    )
}