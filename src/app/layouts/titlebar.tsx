import { TbDownload, TbLayoutSidebarLeftCollapse, TbPlus, TbShare2, TbSquareRoundedMinus, TbSquareRoundedMinusFilled, TbSquareRoundedX, TbSquareRoundedXFilled } from "react-icons/tb";
import { BtnIcon, Icon } from "../components/";

export default function Titlebar() {
    const handleCloseWindows = () => {
        window.electron.event.sendMessage('close-window');
    }
    const handleMinimizeWindows = () => {
        window.electron.event.sendMessage('minimize-window');
    }

    return (
        <div className="border-b-2 border-border p-3 px-4 w-full flex flex-row justify-between title-frame">
            <div className="flex flex-row items-center">
                <BtnIcon
                    icon={TbSquareRoundedX}
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

            <div className="flex flex-row gap-4">
                <Icon icon={TbDownload} />
                <Icon icon={TbShare2} />
                <Icon icon={TbPlus} />
            </div>
        </div>
    )
}