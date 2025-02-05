import { Link } from "react-router";
import { bottomSideBarItems, topSideBarItems } from "src/utils/sideBarItems";

const NavigationItems = () => {
    return (
        <>
            {/* Top sidebar items */}
            <div className="w-auto max-w-[167px] h-auto flex flex-col gap-2.5">
                {topSideBarItems.map((item) => (
                    <Link
                        to={item.link}
                        key={item.id}
                        className="w-[55px] hover:w-[167px] h-[55px] flex items-center group gap-4 rounded-[50px] bg-white bg-opacity-[75%] transition-all duration-300 ease-in-out overflow-hidden"
                    >
                        <img src={item.icon} alt="icon" className="w-[20px] h-[20px] ml-4" />
                        {/* Animated Span (Fade + Slide) */}
                        <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-150 ease-in-out font-lufga font-medium text-[16px] text-primary">
                            {item.title}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Bottom sidebar items */}
            <div className="w-full max-w-[167px] h-auto flex flex-col gap-2.5">
                {bottomSideBarItems.map((item) => (
                    <Link
                        to={item.link}
                        key={item.id}
                        className="w-[55px] hover:w-[167px] h-[55px] flex items-center group gap-4 rounded-[50px] bg-white bg-opacity-[75%] transition-all duration-300 ease-in-out overflow-hidden"
                    >
                        <img src={item.icon} alt="icon" className="w-[20px] h-[20px] ml-4" />
                        {/* Animated Span (Fade + Slide) */}
                        <span className="opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-150 ease-in-out font-lufga font-medium text-[16px] text-primary">
                            {item.title}
                        </span>
                    </Link>
                ))}
            </div>
        </>
    );
};

export default NavigationItems;
