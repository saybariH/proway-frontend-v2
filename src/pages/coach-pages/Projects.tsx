import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { HiOutlinePresentationChartLine } from "react-icons/hi";

type Card = {
    id: number;
    name: string;
    position: string;
    status: string;
    imageSrc: string;
};

const Projects: React.FC = () => {
    const [stars, setStars] = useState<boolean[]>([]);

    const cards: Card[] = [
        {
            id: 1,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/image.png',
        },
        {
            id: 2,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'In Progress',
            imageSrc: '../../src/assets/images/image.png',
        },
        {
            id: 3,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/image.png',
        },
        {
            id: 4,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/image.png',
        },
        {
            id: 5,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/image.png',
        },
        {
            id: 6,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/image.png',
        },
        {
            id: 7,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/image.png',
        },
        {
            id: 8,
            name: 'Samad BENBOU',
            position: 'Sr. Product Designer, 3D Artist',
            status: 'Completed',
            imageSrc: '../../src/assets/images/image.png',
        },
    ];

    // Handle toggle for each card's star button
    const handleToggle = (index: number) => {
        const newStars = [...stars];
        newStars[index] = !newStars[index];
        setStars(newStars);
    };

    return (
        <section className="w-full bg-[#ffffff] h-[875px] max-w-1412 rounded-[40px] p-[30px]">

            <div className="w-full max-w-1352 flex items-center justify-between">
                <div className="flex items-start gap-[20px] justify-center">
                    <div className='flex bg-gray-100 items-center justify-center rounded-full p-3 h-[55px] w-[55px]'>
                        <HiOutlinePresentationChartLine className="text-primary w-[27px] h-[27px]" />
                    </div>
                    <div>
                        <h1 className="font-lufga text-[26px] font-bold text-secondary mb-2">
                            Projects Tracking
                        </h1>
                        <p className="font-lufga text-[16px] w-[412px] text-secondary">
                            Review your clients' projects and discover their progress.
                        </p>
                    </div>
                </div>

                <div className="relative max-w-md">
                    <IoSearch className="w-[27px] h-[27px] absolute left-7 top-1/2 transform -translate-y-1/2 text-primary dark:text-primary" />
                    <input
                        type="text"
                        placeholder="Search by name, email"
                        className="font-lufga text-[18px] text-gray-200 w-[370px] h-[55px] pl-16 rounded-[15px] border-none focus:outline-none bg-gray-100"
                    />
                </div>
            </div>

            <div className='w-full max-w-1352 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 mt-5 gap-[20px]'>
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className='flex flex-col font-lufga text-center w-[323px] border border-gray-300 hover:bg-bg-light rounded-[20px] h-[322px] p-5'
                    >
                        <div className='flex justify-between'>
                            <button
                                className='h-[20px] focus:outline-none'
                                onClick={() => handleToggle(index)} // Toggle the specific index
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
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_574_28533)">
                                        <path
                                            d="M10 13.7499C10.3315 13.7499 10.6495 13.8816 10.8839 14.116C11.1183 14.3504 11.25 14.6684 11.25 14.9999C11.25 15.3314 11.1183 15.6493 10.8839 15.8838C10.6495 16.1182 10.3315 16.2499 10 16.2499C9.66848 16.2499 9.35054 16.1182 9.11612 15.8838C8.8817 15.6493 8.75 15.3314 8.75 14.9999C8.75 14.6684 8.8817 14.3504 9.11612 14.116C9.35054 13.8816 9.66848 13.7499 10 13.7499ZM10 8.74988C10.3315 8.74988 10.6495 8.88157 10.8839 9.11599C11.1183 9.35041 11.25 9.66836 11.25 9.99988C11.25 10.3314 11.1183 10.6493 10.8839 10.8838C10.6495 11.1182 10.3315 11.2499 10 11.2499C9.66848 11.2499 9.35054 11.1182 9.11612 10.8838C8.8817 10.6493 8.75 10.3314 8.75 9.99988C8.75 9.66836 8.8817 9.35041 9.11612 9.11599C9.35054 8.88157 9.66848 8.74988 10 8.74988ZM10 3.74988C10.3315 3.74988 10.6495 3.88157 10.8839 4.11599C11.1183 4.35041 11.25 4.66836 11.25 4.99988C11.25 5.3314 11.1183 5.64934 10.8839 5.88376C10.6495 6.11818 10.3315 6.24988 10 6.24988C9.66848 6.24988 9.35054 6.11818 9.11612 5.88376C8.8817 5.64934 8.75 5.3314 8.75 4.99988C8.75 4.66836 8.8817 4.35041 9.11612 4.11599C9.35054 3.88157 9.66848 3.74988 10 3.74988Z"
                                            fill="#7C829C"
                                        />
                                    </g><defs><clipPath id="clip0_574_28533"><rect width="20" height="20" fill="white" /></clipPath></defs>
                                </svg>
                            </button>
                        </div>
                        <p className='font-semibold text-[22px] text-secondary'>{card.name}</p>
                        <span className='text-gray-500 text-[12px] mb-4'>{card.position}</span>

                        <div className={`font-lufga px-3 py-2 gap-1 rounded-[40px] mx-auto flex items-center justify-center ${card.status === 'In Progress' ? 'bg-bg-blue text-blue' : 'bg-bg-green text-green'
                            }`}>
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

                        <div className='font-lufga flex items-center bg-gray-100 mx-auto text-primary rounded-[5px] mt-4 w-[165px] h-[22px] gap-[5px] pl-2'>
                            <MdOutlineAccessTime className='w-[13px]' />
                            <span className='text-[10px]'>Last updated: 15 Jan, 2025</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
