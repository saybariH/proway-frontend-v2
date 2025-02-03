import { Outlet } from "react-router";

const CoachLayout: React.FC = () => {
    return (

        <div className="w-screen h-screen  py-[1.56%] px-[1.56%] bg-bg-gradient bg-opacity-100">
            <div className="w-full h-full grid grid-cols-[13%_86%] gap-[1%]">
                <div className="w-full h-full bg-red">
                    <h1 className="text-white">LEFT SIDE</h1>
                </div>
                <div className="w-full h-full grid grid-rows-[8%_90%] gap-[2%]">
                    <div className="bg-green">
                        <h1 className="text-white">TOP SIDE</h1>
                    </div>
                    <div className="">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CoachLayout