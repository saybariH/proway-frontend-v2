import fulllogo from '@assets/images/full-logo-white.svg';
import NavigationItems from './sidebar-elements/NavigationItems';
const SideBar: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            {/* logo */}
            <div className='w-full h-[80px]'>
                <img src={fulllogo} alt="logo" className="w-[70%] max-w-full h-[50px]" />
            </div>
            {/* Cretae button */}
            <div className='w-full h-auto '>
                <button className='w-[60%] h-[55px] px-[20px] bg-primary text-white rounded-[20px] gap-2.5 flex items-center justify-center'>
                    <svg width="21" height="21" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.1716 20.0493C10.1716 20.3549 10.2929 20.6479 10.509 20.8639C10.725 21.08 11.018 21.2013 11.3236 21.2013C11.6291 21.2013 11.9221 21.08 12.1382 20.8639C12.3542 20.6479 12.4756 20.3549 12.4756 20.0493V11.9853H20.5396C20.8451 11.9853 21.1381 11.864 21.3542 11.6479C21.5702 11.4319 21.6916 11.1389 21.6916 10.8333C21.6916 10.5278 21.5702 10.2348 21.3542 10.0187C21.1381 9.8027 20.8451 9.68133 20.5396 9.68133H12.4756V1.61733C12.4756 1.3118 12.3542 1.01879 12.1382 0.802745C11.9221 0.586703 11.6291 0.465332 11.3236 0.465332C11.018 0.465332 10.725 0.586703 10.509 0.802745C10.2929 1.01879 10.1716 1.3118 10.1716 1.61733V9.68133H2.10757C1.80204 9.68133 1.50902 9.8027 1.29298 10.0187C1.07694 10.2348 0.955566 10.5278 0.955566 10.8333C0.955566 11.1389 1.07694 11.4319 1.29298 11.6479C1.50902 11.864 1.80204 11.9853 2.10757 11.9853H10.1716V20.0493Z" fill="white" />
                    </svg>
                    <span className='font-lufga font-regular text-[18px] text-white'>Create</span>
                </button>
            </div>
            {/* side bar items */}
            <NavigationItems />

            {/* copyright */}
            <div className='w-full h-auto '>
                <span className='font-lufga font-regular text-[13px] text-[#7C829C] opacity-[75%] text-center'>
                    © Proway. Copyright © 2025.
                </span>
            </div>
        </div>
    )
}
export default SideBar;