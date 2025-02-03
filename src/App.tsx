import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { TbCircleArrowUpRight } from 'react-icons/tb';
import { IoSearch } from "react-icons/io5";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { Pagination } from "../src/pages/coach-pages/Pagination"

type Card = {
  id: number;
  name: string;
  position: string;
  status: string;
  imageSrc: string;
};

function App() {
  const [stars, setStars] = useState<boolean[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  //Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [guestsPerPage] = React.useState(8); // Nombre de projects
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
  const currentProjects = cards.slice(indexOfFirstGuest, indexOfLastGuest);


  const filteredProjects = currentProjects?.filter((project: Card) => {
    const fullName = `${project.name}`.toLowerCase();
    const query = searchQuery.toLowerCase();

    // Match full name, individual names, or email/domain
    return fullName.includes(query) ||
      project.name.toLowerCase().includes(query)
    //email.includes(query)
  });
  // Handle toggle for each card's star button
  const handleToggle = (index: number) => {
    const newStars = [...stars];
    newStars[index] = !newStars[index];
    setStars(newStars);
  };


  return (
    <>
      <div className="w-full h-screen md:h-full bg-white p-[30px] font-lufga rounded-[40px]">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-start gap-[20px] justify-center mb-2">
            <div className='flex bg-gray-100 items-center justify-center rounded-full p-3 max-h-[55px] max-w-[55px]'>
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
        <div className="w-full h-screen p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-w-max">

            {filteredProjects.map((card, index) => (

              <div className="w-full h-[323px] text-center p-4 border border-gray-300 hover:bg-bg-light rounded-[20px]">
                <div key={card.id} className="flex">
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
            totalPages={10}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

    </>
  )
}

export default App
