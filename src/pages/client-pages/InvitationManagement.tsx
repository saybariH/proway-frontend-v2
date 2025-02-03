import React, { useState } from "react";
import { Pagination } from "./Pagination";
import { GuestRow } from "./GuestRow";

export interface GuestData {
    id: string;
    name: string;
    email: string;
    sentDate: string;
    expirationDate: string;
    status: 'Registred' | 'Pending' | 'Incomplet';
    avatarUrl: string;
}

export interface StatusBadgeProps {
    status: GuestData['status'];
}

export interface GuestRowProps {
    guest: GuestData;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
const mockGuests: GuestData[] = [
    // Repeat similar data structure for other guests
    {
        id: '1',
        name: 'Samad BENBOU',
        email: 'Samadbenbou@gmail.com',
        sentDate: 'Jan 22, 2025',
        expirationDate: 'Jan 22, 2025',
        status: 'Pending',
        avatarUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adb1acd4f95f2a58f8da2c44debea9bb3a4181564c5dd66a313e740aca7ad16b?placeholderIfAbsent=true&apiKey=c954eb84ba4d40a9a189795a2cb391b3'
    },
    {
        id: '2',
        name: 'Samad BENBOU',
        email: 'Samadbenbou@gmail.com',
        sentDate: 'Jan 22, 2025',
        expirationDate: 'Jan 22, 2025',
        status: 'Incomplet',
        avatarUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adb1acd4f95f2a58f8da2c44debea9bb3a4181564c5dd66a313e740aca7ad16b?placeholderIfAbsent=true&apiKey=c954eb84ba4d40a9a189795a2cb391b3'
    },
    {
        id: '3',
        name: 'Samad BENBOU',
        email: 'Samadbenbou@gmail.com',
        sentDate: 'Jan 22, 2025',
        expirationDate: 'Jan 22, 2025',
        status: 'Registred',
        avatarUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adb1acd4f95f2a58f8da2c44debea9bb3a4181564c5dd66a313e740aca7ad16b?placeholderIfAbsent=true&apiKey=c954eb84ba4d40a9a189795a2cb391b3'
    },
    {
        id: '4',
        name: 'Hiba BENBOU',
        email: 'Samadbenbou@gmail.com',
        sentDate: 'Jan 22, 2025',
        expirationDate: 'Jan 22, 2025',
        status: 'Registred',
        avatarUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adb1acd4f95f2a58f8da2c44debea9bb3a4181564c5dd66a313e740aca7ad16b?placeholderIfAbsent=true&apiKey=c954eb84ba4d40a9a189795a2cb391b3'
    },
    {
        id: '24',
        name: 'Samad BENBOU',
        email: 'Samadbenbou@gmail.com',
        sentDate: 'Jan 22, 2025',
        expirationDate: 'Jan 22, 2025',
        status: 'Registred',
        avatarUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adb1acd4f95f2a58f8da2c44debea9bb3a4181564c5dd66a313e740aca7ad16b?placeholderIfAbsent=true&apiKey=c954eb84ba4d40a9a189795a2cb391b3'
    },
    {
        id: '44',
        name: 'Samad BENBOU',
        email: 'Samadbenbou@gmail.com',
        sentDate: 'Jan 22, 2025',
        expirationDate: 'Jan 22, 2025',
        status: 'Registred',
        avatarUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adb1acd4f95f2a58f8da2c44debea9bb3a4181564c5dd66a313e740aca7ad16b?placeholderIfAbsent=true&apiKey=c954eb84ba4d40a9a189795a2cb391b3'
    },
    {
        id: '14',
        name: 'Samad BENBOU',
        email: 'Samadbenbou@gmail.com',
        sentDate: 'Jan 22, 2025',
        expirationDate: 'Jan 22, 2025',
        status: 'Registred',
        avatarUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/adb1acd4f95f2a58f8da2c44debea9bb3a4181564c5dd66a313e740aca7ad16b?placeholderIfAbsent=true&apiKey=c954eb84ba4d40a9a189795a2cb391b3'
    },
];
const InvitationManagement: React.FC = () => {
    const [selectedGuests, setSelectedGuests] = React.useState<Set<string>>(new Set());
    const [currentPage, setCurrentPage] = React.useState(1);
    const [guestsPerPage] = React.useState(3); // Nombre d'invités par page
    const indexOfLastGuest = currentPage * guestsPerPage;
    const indexOfFirstGuest = indexOfLastGuest - guestsPerPage;
    const currentGuests = mockGuests.slice(indexOfFirstGuest, indexOfLastGuest);
    const handleGuestSelect = (id: string) => {
        const newSelected = new Set(selectedGuests);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedGuests(newSelected);
    };
    return (
            <div className="bg-[#ECFEE2] shadow-custom-blue bg-opacity-[25%] w-full h-full rounded-[40px]   ">
                <div className="sm:grid sm:grid-rows lg:grid lg:grid-cols-[64.63%_35.37%]  border-black w-full py-10 px-[34px]">
                    <div className="flex gap-5 ">
                    <div className="flex gap-2.5 justify-center items-center px-2.5 bg-white h-[55px] min-h-[55px] rounded-[50px] w-[55px]">
                             <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_574_27872)">
                                     <path d="M24.1253 4.62066C24.333 4.56694 24.5515 4.57154 268 4.63396C24.9621 4.69638 25.1462 4.8142 25.2888 4.97446C25.4315 5.13472 25.5272 5.33122 25.5654 5.54235C25.6036 5.75348 25.5829 5.97105 25.5055 6.17116L18.5055 24.2545C18.4362 24.4336 18.3239 24.5928 18.1783 24.7181C18.0328 24.8433 17.8585 24.9307 17.6711 24.9725C17.4837 25.0143 17.2889 25.0092 17.1039 24.9576C16.9189 24.906 16.7496 24.8096 16.6108 24.6768L12.6651 20.9027L11.2616 22.305C10.5196 23.047 9.25031 22.522 9.25031 21.472V17.636L3.19414 11.8435C3.04388 11.6997 2.93477 11.5184 2.87812 11.3183C2.82146 11.1182 2.81932 10.9066 2.87191 10.7055C2.9245 10.5043 3.02991 10.3208 3.17723 10.174C3.32454 10.0272 3.50842 9.9225 3.70981 9.87066L24.1253 4.62066ZM21.659 9.64316L12.328 17.3513L16.9596 21.7823L21.659 9.64316ZM19.818 8.13816L6.32314 11.6067L10.6305 15.725L19.818 8.13582V8.13816Z" fill="#193AF9" />
                                 </g>
                                 <defs>
                                     <clipPath id="clip0_574_27872">
                                         <rect width="28" height="28" fill="white" transform="translate(0.5 0.5)" />
                                     </clipPath>
                                 </defs>
                             </svg>

                        </div>
                        <div className="flex flex-col w-[412px] text-[#090933] gap-4 pl-2">
                             <h1 className="font-lufga text-[1.625rem] sm:text-[1.5rem] md:text-[1.375rem] lg:text-[1.25rem] font-bold">Invitation Management</h1>
                             <p className="text-[1rem] sm:text-[0.9375rem] md:text-[1rem] lg:text-[1.125rem] font-lufga font-regular">
                                 Organize all your clients' invitations in one place and track each
                                 step of their journey.
                             </p>
                         </div>
                    </div>
                
                    <div className="flex bg-[#7C829C] bg-opacity-[5%] px-[30px] py-[10px] w-[83%] h-[50%] gap-[10px] rounded-[20px] mb-[31px]">
                     <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8060010b074a8743ace297e6bee2264fa4147d5818f58f476d04f3c3d932178b?placeholderIfAbsent=true&apiKey=c954eb84ba4d40a9a189795a2cb391b3"
                            alt="Search icon"
                            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-[1.04]"
                        />
                        <input
                            type="search"
                            placeholder="Search by name, email"
                            aria-label="Search by name or email"
                            className="flex-1 font-lufga text-[20px] bg-transparent border-none outline-none"
                        />
                    </div>
                    {/* <button aria-label="Additional options">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_574_27885)">
                                <path d="M14.2926 2.01611C14.4759 2.01611 14.6517 2.08894 14.7813 2.21856C14.911 2.34819 14.9838 2.524 14.9838 2.70731V8.23691C14.9838 8.42023 14.911 8.59604 14.7813 8.72567C14.6517 8.85529 14.4759 8.92811 14.2926 8.92811C14.1093 8.92811 13.9335 8.85529 13.8038 8.72567C13.6742 8.59604 13.6014 8.42023 13.6014 8.23691V4.37587L10.2596 7.7221C10.1292 7.84801 9.95463 7.91768 9.7734 7.9161C9.59217 7.91453 9.41881 7.84183 9.29066 7.71368C9.1625 7.58553 9.08981 7.41216 9.08824 7.23093C9.08666 7.0497 9.15633 6.87511 9.28224 6.74474L12.624 3.39851H8.76298C8.57966 3.39851 8.40385 3.32569 8.27423 3.19607C8.1446 3.06644 8.07178 2.89063 8.07178 2.70731C8.07178 2.524 8.1446 2.34819 8.27423 2.21856C8.40385 2.08894 8.57966 2.01611 8.76298 2.01611H14.2926Z" fill="#193AF9" />
                                <path d="M3.14736 14.3999C2.96405 14.3999 2.78824 14.3271 2.65861 14.1975C2.52898 14.0678 2.45616 13.892 2.45616 13.7087L2.45616 8.1791C2.45616 7.99578 2.52899 7.81997 2.65861 7.69035C2.78824 7.56072 2.96405 7.4879 3.14736 7.4879C3.33068 7.4879 3.50649 7.56072 3.63612 7.69035C3.76574 7.81997 3.83856 7.99578 3.83856 8.1791L3.83856 12.0401L7.18035 8.69392C7.31071 8.56801 7.48531 8.49834 7.66654 8.49991C7.84777 8.50149 8.02113 8.57418 8.14928 8.70234C8.27744 8.83049 8.35013 9.00385 8.35171 9.18508C8.35328 9.36631 8.28361 9.54091 8.1577 9.67127L4.81592 13.0175L8.67696 13.0175C8.86028 13.0175 9.03609 13.0903 9.16572 13.22C9.29534 13.3496 9.36816 13.5254 9.36816 13.7087C9.36816 13.892 9.29534 14.0678 9.16572 14.1975C9.03609 14.3271 8.86028 14.3999 8.67696 14.3999L3.14736 14.3999Z" fill="#193AF9" />
                            </g>
                            <defs>
                                <clipPath id="clip0_574_27885">
                                    <rect width="16.5888" height="16.5888" fill="white" transform="translate(0.411133)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </button> */}
                 </div>   
                     <div className="justify-between p-10  bg-white h-[77.8%] rounded-[40px] ">
                     <div className="overflow-x-auto w-full">
                     <div className="min-w-[1000px] max-w-full">

                     <div className="grid grid-cols ">
                         <div className="flex flex-wrap gap-2 justify-between items-center p-4 bg-[#7C829C] bg-opacity-[5%]   rounded-[30px] min-w-[90%]">
                             <button className="flex justify-center items-center self-stretch my-auto w-[77px]">
                                 <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                     <path fillRule="evenodd" clipRule="evenodd" d="M9.33838 0.436035C9.67687 0.436123 10.0068 0.54271 10.2813 0.740699C10.5559 0.938688 10.7612 1.21804 10.8681 1.53919L11.306 2.85524H13.951C14.1649 2.85524 14.37 2.9402 14.5212 3.09142C14.6724 3.24265 14.7574 3.44776 14.7574 3.66164C14.7574 3.87551 14.6724 4.08062 14.5212 4.23185C14.37 4.38308 14.1649 4.46804 13.951 4.46804H13.1446V14.1448C13.1446 14.7864 12.8897 15.4018 12.436 15.8555C11.9823 16.3092 11.367 16.564 10.7254 16.564H4.27419C3.63258 16.564 3.01724 16.3092 2.56355 15.8555C2.10987 15.4018 1.85499 14.7864 1.85499 14.1448V4.46804H1.04859C0.834717 4.46804 0.629606 4.38308 0.478377 4.23185C0.327147 4.08062 0.242188 3.87551 0.242188 3.66164C0.242188 3.44776 0.327147 3.24265 0.478377 3.09142C0.629606 2.9402 0.834717 2.85524 1.04859 2.85524H3.69358L4.13145 1.53919C4.23846 1.21791 4.44388 0.938464 4.71859 0.740463C4.99331 0.542462 5.32337 0.435954 5.662 0.436035H9.33838ZM11.5318 4.46804H3.46779V14.1448C3.46779 14.3587 3.55275 14.5638 3.70398 14.715C3.85521 14.8663 4.06032 14.9512 4.27419 14.9512H10.7254C10.9393 14.9512 11.1444 14.8663 11.2956 14.715C11.4468 14.5638 11.5318 14.3587 11.5318 14.1448V4.46804ZM9.33838 2.04884H5.6612L5.39266 2.85524H9.60691L9.33838 2.04884Z" fill="#FC5185" />
                                 </svg>

                             </button>
                             <div className="font-lufga my-auto text-sm font-semibold text-[#7C829C] w-[12%] ">
                                 Guest Name
                             </div>
                             <div className="font-lufga my-auto text-sm font-semibold text-center text-[#7C829C] w-[15%] ">
                                 Email
                             </div>
                             <div className="font-lufga my-auto text-sm font-semibold text-center text-[#7C829C] w-[10%]">
                                 Sent Date
                             </div>
                             <div className="font-lufga my-auto text-sm font-semibold text-center text-[#7C829C] w-[10%] ">
                                 Expiration Date
                             </div>
                             <div className="font-lufga my-auto text-sm font-semibold text-center text-[#7C829C] w-[10%]">
                                 Status
                             </div>
                             <div className="font-lufga my-auto text-sm font-semibold text-center text-[#7C829C] w-[8%]">
                                 Action
                             </div>
                         </div>
                                 {currentGuests.length === 0 && <div className="flex flex-col p-[30px] items-center self-center mx-auto w-full max-w-[745px] h-full max-h-[275px]  ">
                                     <svg  width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M51.4691 8.9772C51.9217 8.86016 52.3977 8.87019 52.8449 9.00618C53.2921 9.14216 53.6932 9.39884 54.004 9.74799C54.3148 10.0971 54.5233 10.5252 54.6065 10.9852C54.6898 11.4451 54.6446 11.9191 54.4759 12.3551L39.2259 51.7509C39.0751 52.1411 38.8303 52.488 38.5132 52.7609C38.1961 53.0338 37.8166 53.2242 37.4082 53.3152C36.9999 53.4062 36.5755 53.395 36.1725 53.2826C35.7695 53.1703 35.4005 52.9602 35.0983 52.671L26.5023 44.4487L23.4447 47.5038C21.8282 49.1203 19.0629 47.9765 19.0629 45.689V37.332L5.8691 24.7127C5.54174 24.3995 5.30404 24.0045 5.18062 23.5686C5.05719 23.1327 5.05252 22.6717 5.16709 22.2334C5.28166 21.795 5.5113 21.3953 5.83225 21.0756C6.15319 20.7558 6.55377 20.5276 6.99251 20.4147L51.4691 8.9772ZM46.096 19.9191L25.7678 36.7119L35.8582 46.3651L46.096 19.9191ZM42.0853 16.6403L12.6858 24.1967L22.0697 33.1688L42.0853 16.6352V16.6403Z" fill="#2C3D85" fill-opacity="0.2" />
                                     </svg>
                                     <div className="text-[20px] pt-[10px] font-lufga font-medium text-center w-[226px]"> Invitation Management </div>
                                    <div className="font-lufga text-center pt-[10px]  text-[12px] text-[#7C829C] font-regular w-[240px]"> Invitation area here helps you adapt with invitations to be so easy for you  </div>
                                     <div className="text-center pt-[10px] text-[15px]"><a href="/" className="font-lufga text-[#193AF9] pt-[10px] font-semibold ">Create New</a></div>
                                 </div>}

                         {currentGuests.length != 0 && 
                         <div className="flex flex-col mt-5 w-full max-md:max-w-full">
                                 {currentGuests.map((guest) => (
                                <GuestRow
                                    key={guest.id}
                                    guest={guest}
                                    isSelected={selectedGuests.has(guest.id)}
                                    onSelect={handleGuestSelect}
                                />
                            ))}

                           

                        </div>}
                        
                    </div>
                    
                    </div>
                    
                </div>                 
                <Pagination
                                currentPage={currentPage}
                                totalPages={10}
                                onPageChange={setCurrentPage}
                            />                
                </div> 
                 </div>
                    
        
            
    );

}
export default InvitationManagement;