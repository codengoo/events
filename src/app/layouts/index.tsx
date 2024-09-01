import Titlebar from "./titlebar";

export default function MainLayout() {
    return (
        <div className="w-screen h-screen p-7">
            <div className="h-full w-full rounded-2xl overflow-hidden shadow-x relative">
                <div 
                className="absolute top-0 left-0 w-full h-full bg-cover" 
                style={{
                    backgroundImage: `url(${"https://i.ex-cdn.com/nongnghiep.vn/files/hieupt/2021/08/19/ttxvn_quoc_khanh_1-173930_946.jpg"})` }}>
                    <div className="bg-gradient-to-br from-primary via-transparent to-primary to-90% h-full w-full"></div>
                </div>
                <Titlebar />
            </div>
        </div>
    )
}