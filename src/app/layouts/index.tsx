import useTheme from "../hooks/useTheme";
import Navbar from "./navbar";
import Titlebar from "./titlebar";

export default function MainLayout() {
    const { background } = useTheme();

    return (
        <div className="w-screen h-screen p-7 font-poppins">
            <div className="h-full w-full rounded-2xl overflow-hidden shadow-x relative">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover"
                    style={{
                        backgroundImage: `url(${background})`
                    }}>
                    <div className="bg-gradient-to-b from-red-800 via-transparent to-red-700 h-full w-full"></div>
                </div>
                <div className="relative h-full">
                    <Titlebar />
                    <div className="h-full">
                        <Navbar />
                    </div>
                </div>
            </div>
        </div>
    )
}