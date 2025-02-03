import * as React from 'react';
import { StatusBadge } from './StatusBadge';
import { GuestRowProps } from './InvitationManagement';
import { useState } from 'react';

export const GuestRow: React.FC<GuestRowProps> = ({ guest, isSelected, onSelect }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(prevOpen => !prevOpen)
  }
  return (
    <div className={`flex flex-col justify-between px-10 py-2  mt-2.5  h-[50px] max-md:max-w-full ${isSelected ? 'bg-indigo-400 bg-opacity-10 rounded-xl' : ''}`}>
      <div className="flex flex-wrap gap-3.5 justify-between w-full max-md:max-w-full">
        <div className="flex justify-center items-center h-full ">
          <div
            onClick={() => onSelect(guest.id)}
            role="checkbox"
            aria-checked={isSelected}
            tabIndex={0}
            className="flex justify-center  rounded-[3.5px] border border-solid bg-indigo-400 bg-opacity-10 border-slate-500 h-[20px] min-h-[20px] w-[20px]"
          >
            {isSelected && <div className="flex my-auto w-3 bg-blue rounded-[1.4px] h-[12px]" />}
          </div>
        </div>
        <div className="flex gap-2 items-center  text-sm font-medium h-[30px] text-slate-500 w-[230px]">
          <img
            loading="lazy"
            src={guest.avatarUrl}
            alt={`Avatar of ${guest.name}`}
            className="object-contain shrink-0 gap-2.5 self-stretch my-auto aspect-square min-h-[30px] rounded-[40px] w-[30px]"
          />
          <div className="font-lufga font-medium my-auto ">{guest.name}</div>
        </div>
        <div className="font-lufga font-regular text-center text-slate-500 ">{guest.email}</div>
        <div className="font-lufga font-regular text-center text-slate-500 ">{guest.sentDate}</div>
        <div className="font-lufga font-regular text-center text-slate-500 ">{guest.expirationDate}</div>
        <StatusBadge status={guest.status} />
        <div className='relative'>
          <button  onClick={handleOpen} > <svg width="19" height="4" viewBox="0 0 19 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.58701 0.271851C3.04534 0.271851 3.48489 0.45392 3.80898 0.778006C4.13307 1.10209 4.31513 1.54165 4.31513 1.99997C4.31513 2.4583 4.13307 2.89786 3.80898 3.22194C3.48489 3.54603 3.04534 3.7281 2.58701 3.7281C2.12868 3.7281 1.68913 3.54603 1.36504 3.22194C1.04096 2.89786 0.858887 2.4583 0.858887 1.99997C0.858887 1.54165 1.04096 1.10209 1.36504 0.778006C1.68913 0.45392 2.12868 0.271851 2.58701 0.271851ZM9.49951 0.271851C9.95783 0.271851 10.3974 0.45392 10.7215 0.778006C11.0456 1.10209 11.2276 1.54165 11.2276 1.99997C11.2276 2.4583 11.0456 2.89786 10.7215 3.22194C10.3974 3.54603 9.95783 3.7281 9.49951 3.7281C9.04118 3.7281 8.60162 3.54603 8.27754 3.22194C7.95345 2.89786 7.77138 2.4583 7.77138 1.99997C7.77138 1.54165 7.95345 1.10209 8.27754 0.778006C8.60162 0.45392 9.04118 0.271851 9.49951 0.271851ZM16.412 0.271851C16.8703 0.271851 17.3099 0.45392 17.634 0.778006C17.9581 1.10209 18.1401 1.54165 18.1401 1.99997C18.1401 2.4583 17.9581 2.89786 17.634 3.22194C17.3099 3.54603 16.8703 3.7281 16.412 3.7281C15.9537 3.7281 15.5141 3.54603 15.19 3.22194C14.8659 2.89786 14.6839 2.4583 14.6839 1.99997C14.6839 1.54165 14.8659 1.10209 15.19 0.778006C15.5141 0.45392 15.9537 0.271851 16.412 0.271851Z" fill="#7C829C" />
        </svg>
        </button>
        {open &&
          <div className='absolute right-0 mt-2 bg-white shadow-lg rounded-[10px] px-[20px] py-[10px] space-y-[10px] w-[150px] '>
        <button className='flex items-center space-x-2 w-full hover:bg-gray-100 px-2 py-1 rounded '>  
            <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.3386 5.08606C14.6771 5.08615 15.007 5.19273 15.2816 5.39072C15.5561 5.58871 15.7614 5.86807 15.8684 6.18921L16.3062 7.50526H18.9512C19.1651 7.50526 19.3702 7.59022 19.5214 7.74145C19.6727 7.89268 19.7576 8.09779 19.7576 8.31166C19.7576 8.52553 19.6727 8.73064 19.5214 8.88187C19.3702 9.0331 19.1651 9.11806 18.9512 9.11806H18.1448V18.7949C18.1448 19.4365 17.89 20.0518 17.4363 20.5055C16.9826 20.9592 16.3672 21.2141 15.7256 21.2141H9.27443C8.63282 21.2141 8.01749 20.9592 7.5638 20.5055C7.11011 20.0518 6.85523 19.4365 6.85523 18.7949V9.11806H6.04883C5.83496 9.11806 5.62985 9.0331 5.47862 8.88187C5.32739 8.73064 5.24243 8.52553 5.24243 8.31166C5.24243 8.09779 5.32739 7.89268 5.47862 7.74145C5.62985 7.59022 5.83496 7.50526 6.04883 7.50526H8.69382L9.1317 6.18921C9.23871 5.86794 9.44413 5.58849 9.71884 5.39049C9.99355 5.19249 10.3236 5.08598 10.6622 5.08606H14.3386ZM16.532 9.11806H8.46803V18.7949C8.46803 19.0087 8.55299 19.2138 8.70422 19.3651C8.85545 19.5163 9.06056 19.6013 9.27443 19.6013H15.7256C15.9395 19.6013 16.1446 19.5163 16.2958 19.3651C16.4471 19.2138 16.532 19.0087 16.532 18.7949V9.11806ZM14.3386 6.69886H10.6614L10.3929 7.50526H14.6072L14.3386 6.69886Z" fill="#FC5185" />
            </svg>
            <span className='text-[#FC5185] font-lufga font-regular text-[16px]'>Delete</span>
          </button>
          <button className='flex items-center space-x-2 w-full hover:bg-gray-100 px-2 py-1 rounded '><svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_560_642)">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.1687 16.3805C10.7567 16.7588 9.25808 16.6464 7.91821 16.0619C6.57834 15.4774 5.47661 14.4553 4.79339 13.163C4.69362 12.9737 4.52275 12.8318 4.31836 12.7685C4.11398 12.7052 3.89282 12.7257 3.70354 12.8255C3.51427 12.9252 3.37238 13.0961 3.30909 13.3005C3.2458 13.5049 3.2663 13.7261 3.36607 13.9153C5.0837 17.1732 8.87862 18.9319 12.5864 17.9393C16.8886 16.7861 19.4408 12.3638 18.2885 8.06248C17.1353 3.76033 12.7139 1.20808 8.41252 2.36042C6.70824 2.81703 5.20067 3.81982 4.12081 5.21516C3.04095 6.6105 2.44837 8.32141 2.43387 10.0857C2.42822 10.8139 3.23624 11.2163 3.81523 10.8268L5.97074 9.37449C6.78359 8.82614 6.23846 7.55928 5.28207 7.77298L4.4289 7.96329C4.80498 6.91957 5.44386 5.99047 6.28383 5.26573C7.1238 4.541 8.13647 4.04513 9.22403 3.82603C10.3116 3.60692 11.4373 3.67198 12.4923 4.01493C13.5474 4.35787 14.4962 4.9671 15.2471 5.78378C15.998 6.60046 16.5256 7.59698 16.7789 8.67708C17.0322 9.75718 17.0027 10.8844 16.6933 11.9497C16.3838 13.0151 15.8048 13.9827 15.0122 14.7589C14.2197 15.5352 13.2403 16.094 12.1687 16.3813V16.3805Z" fill="#193AF9" />
            </g>
            <defs>
              <clipPath id="clip0_560_642">
                <rect width="19.3536" height="19.3536" fill="white" transform="translate(0.822998 0.473022)" />
              </clipPath>
            </defs>
          </svg>
          <span className='text-[#193AF9] font-lufga font-regular text-[16px]'>Resend</span>
          </button>
          
        </div>}
        </div>
      
      </div>
    </div>
  );
};