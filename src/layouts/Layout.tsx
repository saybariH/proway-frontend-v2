import { Outlet } from "react-router";

const CoachLayout: React.FC = () => {
    return (

        <div className="w-screen h-screen max-w-[1920px] max-h-[1117px] pt-[30px] pr-[30px] pl-[32px] pb-[29px] bg-bg-gradient opacity-100">
            <div className="w-full h-full grid grid-cols-[13%_86%] gap-[20px]">
                <div className="w-full h-full bg-red">
                    <h1 className="text-white">LEFT SIDE</h1>
                </div>
                <div className="w-full h-full bg-white grid grid-rows-[8%_90%] gap-[20px]">
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