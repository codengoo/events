import Titlebar from "./titlebar";

export default function MainLayout() {
    return (
        <div className="w-screen h-screen p-7">
            <div className="h-full w-full rounded-3xl overflow-hidden shadow-xl bg-primary">
                <Titlebar />
            </div>
        </div>
    )
}