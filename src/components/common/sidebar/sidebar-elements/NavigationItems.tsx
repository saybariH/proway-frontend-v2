import { Link, useLocation } from "react-router";
import { bottomSideBarItems, topSideBarItems } from "src/utils/sideBarItems";

const NavigationItems = () => {
    const location = useLocation();
    return (
        <>
            {/* Top sidebar items dashboard, clients, projects and reports */}
            <div className="w-auto max-w-[167px] h-auto flex flex-col gap-2.5">
                {topSideBarItems.map((item) => {
                    const isActive = location.pathname === item.link;
                    return (
                        <Link
                            to={item.link}
                            key={item.id}
                            className={`w-[55px] hover:w-[167px] h-[55px] flex justify-start  items-center group gap-2.5 rounded-[50px]   transition-all duration-200 ease-in-out 
                            ${isActive ? 'bg-primary bg-opacity-100' : 'bg-white bg-opacity-[75%]'}`}
                        >
                            <img src={item.icon}
                                alt="icon"
                                className={`w-[22px] h-[21px] ml-[17px] group-hover:ml-6 transition-all duration-200 delay-150 ease-in-out
                                            ${isActive ? "filter brightness-0 invert" : "opacity-75"}`} 
                                            />
                            {/* Animated Span (Fade + Slide) */}
                            <span className={`hidden group-hover:inline-block transition-all duration-200 delay-150 ease-in-out font-lufga font-medium text-[16px] 
                            ${isActive ? 'text-white' : 'text-primary'}`}
                            >
                                {item.title}
                            </span>
                        </Link>
                        
                    )
                })}
            </div>

            {/* Bottom sidebar items, support, feedback and settings */}
            <div className="w-auto max-w-[167px] h-auto flex flex-col gap-2.5">
                {bottomSideBarItems.map((item) => {
                    const isActive = location.pathname === item.link;
                    return (
                        <Link
                            to={item.link}
                            key={item.id}
                            className={`w-[55px] hover:w-[167px] h-[55px] flex justify-start  items-center group gap-2.5 rounded-[50px]   transition-all duration-200 ease-in-out 
                            ${isActive ? 'bg-primary bg-opacity-100' : 'bg-white bg-opacity-[75%]'}`}
                        >
                            <img src={item.icon}
                                alt="icon"
                                className={`w-[22px] h-[21px] ml-[17px] group-hover:ml-6 transition-all duration-200 delay-150 ease-in-out
                                            ${isActive ? "filter brightness-0 invert" : "opacity-75"}`} 
                                            />
                            {/* Animated Span (Fade + Slide) */}
                            <span className={`hidden group-hover:inline-block transition-all duration-200 delay-150 ease-in-out font-lufga font-medium text-[16px] 
                            ${isActive ? 'text-white' : 'text-primary'}`}
                            >
                                {item.title}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </>
    );
};

export default NavigationItems;
