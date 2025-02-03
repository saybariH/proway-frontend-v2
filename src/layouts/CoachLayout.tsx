import NavBar from "@components/common/navbar/Navbar";
import { Outlet } from "react-router";

const CoachLayout: React.FC = () => {
  return (
    <div className="w-screen h-screen p-[1.56%] bg-bg-gradient">
      <div className="w-full h-full grid grid-cols-[13%_86%] gap-[1%] overflow-hidden">
        
        <div className="bg-red w-full h-full">
          <h1 className="text-white">LEFT SIDE</h1>
        </div>

        <div className=" grid grid-rows-[auto_1fr] gap-[2%] h-full overflow-hidden">
          <div className="w-full h-full">
            <NavBar />
          </div>
          <div className="w-full h-full overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachLayout;
