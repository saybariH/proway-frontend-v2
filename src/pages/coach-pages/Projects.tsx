import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { TbCircleArrowUpRight } from 'react-icons/tb';
import { IoSearch } from "react-icons/io5";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { Pagination } from "./Pagination"

type Card = {
    id: number;
    name: string;
    position: string;
    status: string;
    imageSrc: string;
};
export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Projects: React.FC = () => {
    const [stars, setStars] = useState<boolean[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    //Pagination
    const [currentPage, setCurrentPage] = React.useState(1);
    // Nombre de projects
    const [guestsPerPage, setGuestsPerPage] = React.useState(
        window.innerWidth < 640 ? 4 : 8
      ); 
      React.useEffect(() => {
        const updateGuestsPerPage = () => {
          setGuestsPerPage(window.innerWidth < 640 ? 4 : 8);
        };
      
        window.addEventListener("resize", updateGuestsPerPage);
        return () => window.removeEventListener("resize", updateGuestsPerPage);
      }, []);
    
    const indexOfLastGuest = currentPage * guestsPerPage;
    const indexOfFirstGuest = indexOfLastGuest - guestsPerPage;
    const cards: Card[] = [
        {
            id: 1,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 2,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'In Progress',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 3,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 4,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 5,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 6,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 7,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 8,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 9,
            name: 'Soukaina Sekkat',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 10,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'In Progress',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 11,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 12,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 13,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 14,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 15,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
        {
            id: 16,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/profile-img.png',
        },
    ];

    const filteredProjects = cards.filter((project: Card) => {
        const fullName = project.name.toLowerCase();
        const query = searchQuery.toLowerCase();
        return fullName.includes(query);
    });
    
    // Apply pagination AFTER filtering
    const totalPages = Math.ceil(filteredProjects.length / guestsPerPage);
    const paginatedProjects = filteredProjects.slice(indexOfFirstGuest, indexOfLastGuest);
    
    // Handle toggle for each card's star button
    const handleToggle = (index: number) => {
        const newStars = [...stars];
        newStars[index] = !newStars[index];
        setStars(newStars);
    };


    return (
        <>
            <div className="w-full bg-white shadow-custom-blue p-[30px] font-lufga rounded-[40px]">
                <div className="w-full flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-start gap-[20px] justify-center mb-2">
                        <div className='flex bg-gray-100 items-center justify-center rounded-full p-3 h-[55px] w-[55px]'>
                            <HiOutlinePresentationChartLine className="text-primary w-[27px] h-[27px]" />
                        </div>
                        <div>
                            <h1 className="font-lufga sm:text-[18px] md:text-[26px] font-bold text-secondary mb-2">
                                Projects Tracking
                            </h1>
                            <p className="font-lufga text-[16px] sm:text-[16px] text-[11px] max-w-[412px] text-secondary">
                                Review your clients' projects and discover their progress.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <IoSearch className="w-[27px] h-[27px] absolute left-7 top-1/2 transform -translate-y-1/2 text-primary dark:text-primary" />
                        <input
                            type="text"
                            placeholder="Search by name, email"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-[70vw] sm:max-w-[370px] h-[55px] font-lufga sm:text-[12px] md:text-[18px] text-gray-200 pl-16 rounded-[15px] border-none focus:outline-none bg-gray-100"
                        />
                    </div>
                </div>
                <div className="w-full">
                    {paginatedProjects.length === 0 ?
                        <div className='flex flex-col items-center justify-center h-screen'>
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_574_28401)">
                                    <path d="M48.7355 7.2644C49.3465 7.2644 49.9326 7.50715 50.3647 7.93923C50.7967 8.37131 51.0395 8.95735 51.0395 9.5684C51.0395 10.1795 50.7967 10.7655 50.3647 11.1976C49.9326 11.6297 49.3465 11.8724 48.7355 11.8724V37.2164C48.7355 38.4385 48.25 39.6106 47.3858 40.4748C46.5217 41.3389 45.3496 41.8244 44.1275 41.8244H32.4808L37.7638 47.1075C38.1835 47.542 38.4158 48.124 38.4105 48.7281C38.4053 49.3322 38.1629 49.9101 37.7358 50.3373C37.3086 50.7645 36.7307 51.0068 36.1266 51.012C35.5225 51.0173 34.9405 50.785 34.506 50.3653L27.9903 43.8496L21.4722 50.3653C21.0377 50.785 20.4557 51.0173 19.8516 51.012C19.2475 51.0068 18.6696 50.7645 18.2425 50.3373C17.8153 49.9101 17.573 49.3322 17.5677 48.7281C17.5625 48.124 17.7947 47.542 18.2144 47.1075L23.4975 41.8244H11.8715C10.6494 41.8244 9.47729 41.3389 8.61312 40.4748C7.74896 39.6106 7.26347 38.4385 7.26347 37.2164V11.8724C6.65241 11.8724 6.06638 11.6297 5.6343 11.1976C5.20221 10.7655 4.95947 10.1795 4.95947 9.5684C4.95947 8.95735 5.20221 8.37131 5.6343 7.93923C6.06638 7.50715 6.65241 7.2644 7.26347 7.2644H48.7355ZM44.1275 11.8724H11.8715V37.2164H44.1275V11.8724ZM41.0332 16.8767C41.4651 17.3088 41.7078 17.8947 41.7078 18.5056C41.7078 19.1166 41.4651 19.7025 41.0332 20.1346L31.2735 29.8943C30.8371 30.3304 30.2454 30.5755 29.6284 30.5755C29.0114 30.5755 28.4197 30.3304 27.9833 29.8943L23.115 25.0236L18.2282 29.9127C17.7959 30.345 17.2095 30.5879 16.5981 30.5879C15.9867 30.5879 15.4004 30.345 14.968 29.9127C14.5357 29.4804 14.2928 28.894 14.2928 28.2826C14.2928 27.9799 14.3525 27.6801 14.4683 27.4005C14.5842 27.1208 14.754 26.8666 14.968 26.6526L21.4699 20.1553C21.9063 19.7191 22.498 19.4741 23.115 19.4741C23.732 19.4741 24.3237 19.7191 24.76 20.1553L29.6284 25.0213L37.7753 16.8767C38.2074 16.4448 38.7933 16.2021 39.4043 16.2021C40.0152 16.2021 40.6011 16.4448 41.0332 16.8767Z" fill="#2C3D85" fill-opacity="0.2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_574_28401">
                                        <rect width="55.296" height="55.296" fill="white" transform="translate(0.352051 0.352051)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h1 className='font-lufga font-medium text-secondary text-[24px]'>Project Tracking</h1>
                            <p className='text-center font-regular text-[#7C829C] max-w-[266px]'>Nothing to show here, please send invitations to see update here.</p>
                        </div>
                        :
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 min-w-max p-0 mt-5">

                                {paginatedProjects.map((card, index) => (

                                    <div key={card.id} className="w-full h-[323px] text-center p-4 border border-gray-300 hover:bg-bg-light rounded-[20px]">
                                        <div  className="flex">
                                            <button
                                                className='h-[20px] focus:outline-none'
                                                onClick={() => handleToggle(index)}
                                                aria-label='Toggle Star'
                                            >
                                                <svg
                                                    width='22'
                                                    height='20'
                                                    viewBox='0 0 22 20'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M9.75934 2.39018C9.85769 2.23279 9.99857 2.10221 10.1679 2.01145C10.3373 1.92069 10.5292 1.87292 10.7245 1.87292C10.9199 1.87292 11.1118 1.92069 11.2812 2.01145C11.4505 2.10221 11.5914 2.23279 11.6898 2.39018L14.1877 6.38893L19.0387 7.36903C19.2295 7.4077 19.4062 7.49234 19.551 7.6145C19.6958 7.73667 19.8037 7.8921 19.864 8.06529C19.9243 8.23849 19.9349 8.4234 19.8947 8.6016C19.8545 8.77979 19.7649 8.94505 19.6348 9.08088L16.3281 12.5321L16.8286 17.1367C16.8483 17.318 16.8167 17.501 16.7369 17.6674C16.6571 17.8337 16.5319 17.9777 16.3738 18.0848C16.2157 18.1919 16.0302 18.2585 15.8359 18.2779C15.6416 18.2972 15.4452 18.2687 15.2664 18.1952L10.7245 16.3283L6.18272 18.1952C6.0039 18.2687 5.80753 18.2972 5.6132 18.2779C5.41888 18.2585 5.2334 18.1919 5.0753 18.0848C4.91719 17.9777 4.79198 17.8337 4.71218 17.6674C4.63238 17.501 4.60077 17.318 4.62051 17.1367L5.12099 12.5321L1.81427 9.08172C1.68399 8.94589 1.5942 8.78057 1.55385 8.60226C1.51351 8.42396 1.52403 8.2389 1.58435 8.06557C1.64468 7.89224 1.75271 7.7367 1.89765 7.61448C2.0426 7.49225 2.21939 7.40762 2.41037 7.36903L7.26142 6.38893L9.75934 2.39018Z'
                                                        fill={stars[index] ? 'none' : '#FAD000'}
                                                        stroke={stars[index] ? '#7C829C' : 'none'}
                                                        strokeWidth='1.5'
                                                    />
                                                </svg>
                                            </button>
                                            <img
                                                className='w-[91px] h-[91px] mx-auto mb-2'
                                                src={card.imageSrc}
                                                alt={card.name}
                                            />
                                            <button className='cursor-pointer h-[20px]'>
                                                <TbCircleArrowUpRight className='text-primary text-bold w-[20px] h-[20px]' />

                                            </button>

                                        </div>
                                        <p className='font-semibold text-[22px] text-secondary'>{card.name}</p>
                                        <span className='text-gray-500 text-[12px]'>{card.position}</span>
                                        <div className={`font-lufga px-3 py-2 gap-1 max-w-[103px] rounded-[40px] mt-4 mx-auto flex items-center justify-center ${card.status === 'In Progress' ? 'bg-bg-blue text-blue' : 'bg-bg-green text-green'}`}>
                                            <FaRegEye className="w-[13px]" />
                                            <span className="font-medium text-[10px]">{card.status}</span>
                                        </div>

                                        <div className='flex items-center justify-between text-primary font-lufga font-medium mt-4'>
                                            <span className='text-[16px]'>5/32</span>
                                            <div className='w-[50%] bg-gray-200 rounded-full h-1.5'>
                                                <div className='w-[74%] bg-primary h-1.5 rounded-full'></div>
                                            </div>
                                            <span className='text-[10px]'>74% Completed</span>
                                        </div>

                                        <div className='w-full max-w-[165px] font-lufga flex items-center bg-gray-100 mx-auto text-primary rounded-[5px] mt-4 gap-[5px] pl-2'>
                                            <MdOutlineAccessTime className='w-[13px]' />
                                            <span className='text-[10px]'>Last updated: 15 Jan, 2025</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </>
                    }

                </div>
            </div>

        </>
    )


}
export default Projects;

