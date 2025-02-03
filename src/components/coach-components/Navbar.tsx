const NavBar: React.FC = () => {
    return (
        <div className="w-full h-full px-[40px] py-[10px] bg-white bg-opacity-[75%]  rounded-[30px] flex flex-row   justify-between items-center ">
            {/* welcoming and user name**/}
            <div className="w-auto h-auto ">
                <div className="w-auto flex flex-row  items-center gap-2.5 font-lufga text-[20px] text-[#7C829C]">
                    Good Morning
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_i_556_3570)">
                            <circle cx="11.5906" cy="9.6" r="9.6" fill="url(#paint0_linear_556_3570)" />
                        </g>
                        <mask id="path-2-inside-1_556_3570" fill="white">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3376 8.31158C11.5126 5.71595 9.13191 3.84009 6.32363 3.84009C2.83118 3.84009 0 6.74128 0 10.3201C0 13.8989 2.83118 16.8001 6.32363 16.8001L6.32362 16.8001H13.4482V16.8001C13.4482 16.8001 13.4482 16.8001 13.4483 16.8001C15.7765 16.8001 17.664 14.866 17.664 12.4801C17.664 10.0942 15.7765 8.16009 13.4483 8.16009C13.0639 8.16009 12.6915 8.21281 12.3376 8.31158Z" />
                        </mask>
                        <g filter="url(#filter1_i_556_3570)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.3376 8.31158C11.5126 5.71595 9.13191 3.84009 6.32363 3.84009C2.83118 3.84009 0 6.74128 0 10.3201C0 13.8989 2.83118 16.8001 6.32363 16.8001L6.32362 16.8001H13.4482V16.8001C13.4482 16.8001 13.4482 16.8001 13.4483 16.8001C15.7765 16.8001 17.664 14.866 17.664 12.4801C17.664 10.0942 15.7765 8.16009 13.4483 8.16009C13.0639 8.16009 12.6915 8.21281 12.3376 8.31158Z" fill="url(#paint1_linear_556_3570)" />
                        </g>
                        <path d="M12.3376 8.31158L12.2919 8.32612L12.3059 8.37027L12.3505 8.35782L12.3376 8.31158ZM6.32363 16.8001L6.3704 16.8109L6.38396 16.7521H6.32363V16.8001ZM6.32362 16.8001L6.27685 16.7893L6.26328 16.8481H6.32362V16.8001ZM13.4482 16.8001V16.8481H13.4962V16.8001H13.4482ZM13.4482 16.8001V16.7521H13.4002V16.8001H13.4482ZM12.3834 8.29704C11.5524 5.68269 9.15406 3.79209 6.32363 3.79209V3.88809C9.10976 3.88809 11.4728 5.7492 12.2919 8.32612L12.3834 8.29704ZM6.32363 3.79209C2.80358 3.79209 -0.048 6.71588 -0.048 10.3201H0.048C0.048 6.76668 2.85879 3.88809 6.32363 3.88809V3.79209ZM-0.048 10.3201C-0.048 13.9243 2.80358 16.8481 6.32363 16.8481V16.7521C2.85879 16.7521 0.048 13.8735 0.048 10.3201H-0.048ZM6.27685 16.7893L6.27685 16.7893L6.37039 16.8109L6.3704 16.8109L6.27685 16.7893ZM6.32362 16.8481H13.4482V16.7521H6.32362V16.8481ZM13.4962 16.8001V16.8001H13.4002V16.8001H13.4962ZM13.4483 16.7521C13.4483 16.7521 13.4483 16.7521 13.4483 16.7521C13.4483 16.7521 13.4483 16.7521 13.4483 16.7521C13.4483 16.7521 13.4483 16.7521 13.4483 16.7521H13.4483H13.4482C13.4482 16.7521 13.4482 16.7521 13.4482 16.7521C13.4482 16.7521 13.4482 16.7521 13.4482 16.7521C13.4482 16.7521 13.4482 16.7521 13.4482 16.7521C13.4482 16.7521 13.4482 16.7521 13.4482 16.7521H13.4482H13.4482C13.4482 16.7521 13.4482 16.7521 13.4482 16.7521C13.4482 16.7521 13.4482 16.7521 13.4482 16.7521C13.4482 16.7521 13.4482 16.7521 13.4482 16.7521V16.8481C13.4482 16.8481 13.4482 16.8481 13.4482 16.8481C13.4482 16.8481 13.4482 16.8481 13.4482 16.8481C13.4482 16.8481 13.4482 16.8481 13.4482 16.8481H13.4482H13.4482C13.4482 16.8481 13.4482 16.8481 13.4482 16.8481C13.4482 16.8481 13.4482 16.8481 13.4482 16.8481C13.4482 16.8481 13.4482 16.8481 13.4482 16.8481C13.4482 16.8481 13.4482 16.8481 13.4482 16.8481H13.4483H13.4483C13.4483 16.8481 13.4483 16.8481 13.4483 16.8481C13.4483 16.8481 13.4483 16.8481 13.4483 16.8481C13.4483 16.8481 13.4483 16.8481 13.4483 16.8481V16.7521ZM17.616 12.4801C17.616 14.8406 15.7489 16.7521 13.4483 16.7521V16.8481C15.8042 16.8481 17.712 14.8914 17.712 12.4801H17.616ZM13.4483 8.20809C15.7489 8.20809 17.616 10.1196 17.616 12.4801H17.712C17.712 10.0688 15.8042 8.11209 13.4483 8.11209V8.20809ZM12.3505 8.35782C12.7002 8.26021 13.0683 8.20809 13.4483 8.20809V8.11209C13.0594 8.11209 12.6827 8.16542 12.3247 8.26535L12.3505 8.35782Z" fill="black" fillOpacity="0.05" mask="url(#path-2-inside-1_556_3570)" />
                        <defs>
                            <filter id="filter0_i_556_3570" x="1.9906" y="0" width="19.2" height="20.16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="0.96" />
                                <feGaussianBlur stdDeviation="1.68" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                                <feBlend mode="overlay" in2="shape" result="effect1_innerShadow_556_3570" />
                            </filter>
                            <filter id="filter1_i_556_3570" x="0" y="3.84009" width="17.6641" height="15.295" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2.33505" />
                                <feGaussianBlur stdDeviation="1.44" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_556_3570" />
                            </filter>
                            <linearGradient id="paint0_linear_556_3570" x1="11.5906" y1="0" x2="11.5906" y2="19.2" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFD358" />
                                <stop offset="1" stopColor="#FA6C21" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_556_3570" x1="1.23746" y1="3.84009" x2="17.9671" y2="16.4034" gradientUnits="userSpaceOnUse">
                                <stop stopColor="white" />
                                <stop offset="1" stopColor="#C1C1C1" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="font-lufga font-medium text-[20px]  text-secondary">
                    Hamza SAYBARI
                </div>
            </div>
            {/* Date **/}
            <div className="w-auto h-auto flex flex-row items-center gap-2">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5815 0.131836C15.8636 0.131873 16.136 0.235465 16.3468 0.422964C16.5577 0.610463 16.6924 0.868827 16.7254 1.14905L16.7335 1.28384V2.43584H19.0375C19.6187 2.43565 20.1786 2.65518 20.6048 3.05042C21.031 3.44566 21.2921 3.9874 21.3357 4.56704L21.3415 4.73984V18.5638C21.3417 19.1451 21.1221 19.705 20.7269 20.1312C20.3316 20.5574 19.7899 20.8185 19.2103 20.8621L19.0375 20.8678H2.90947C2.3282 20.868 1.76834 20.6485 1.34212 20.2532C0.915899 19.858 0.654824 19.3163 0.611229 18.7366L0.605469 18.5638V4.73984C0.605285 4.15856 0.824817 3.5987 1.22006 3.17248C1.6153 2.74627 2.15703 2.48519 2.73667 2.4416L2.90947 2.43584H5.21347V1.28384C5.21379 0.990215 5.32623 0.707799 5.52779 0.494292C5.72935 0.280784 6.00484 0.152301 6.29796 0.135094C6.59107 0.117886 6.8797 0.213253 7.10486 0.401709C7.33002 0.590165 7.47473 0.857485 7.5094 1.14905L7.51747 1.28384V2.43584H14.4295V1.28384C14.4295 0.978306 14.5508 0.685291 14.7669 0.469249C14.9829 0.253207 15.2759 0.131836 15.5815 0.131836ZM19.0375 10.4998H2.90947V18.5638H19.0375V10.4998ZM19.0375 4.73984H2.90947V8.19584H19.0375V4.73984Z" fill="#193AF9" />
                </svg>
                <div className="font-lufga flex flex-col -space-y-1">
                    <span className="font-regular text-[16px] text-[#7C829C]">Date</span>
                    <span className="font-medium text-[18px] text-secondary">Jan 14, 2025 – 16:01 GMT+1</span>
                </div>
            </div>
            {/* Invitation Button & recent invitations **/}
            <div className="w-auto h-auto flex flex-row items-center gap-2.5">
                <div className="w-auto h-auto flex flex-row items-center -space-x-[17px]">
                    <div className="w-[55px] h-[55px] rounded-full bg-white border-2 border-white justify-center items-center flex">
                        <img src="/public/images/profile-img1.png" alt="Profile" className="w-full h-full rounded-full" />
                    </div>
                    <div className="w-[55px] h-[55px] rounded-full bg-white border-2 border-white  justify-center items-center flex">
                        <img src="/public/images/profile-img2.png" alt="Profile" className="w-full h-full rounded-full" />
                    </div>
                    <div className="w-[55px] h-[55px] rounded-full bg-white border-2 border-white  justify-center items-center flex">
                        <img src="/public/images/profile-img3.png" alt="Profile" className="w-full h-full  rounded-full" />
                    </div>
                </div>
                <button className="w-[192px] h-[55px] bg-primary rounded-[50px] p-[20px]  flex flex-row items-center justify-center gap-2.5 ">
                    <svg width="27" height="27" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_574_28345)">
                            <path d="M23.3469 4.7447C23.552 4.69166 23.7678 4.6962 23.9705 4.75784C24.1732 4.81947 24.3549 4.93581 24.4958 5.09406C24.6367 5.25231 24.7312 5.44634 24.7689 5.65481C24.8066 5.86328 24.7862 6.07812 24.7097 6.27571L17.7977 24.1317C17.7293 24.3086 17.6184 24.4658 17.4747 24.5895C17.3309 24.7132 17.1589 24.7995 16.9739 24.8407C16.7888 24.882 16.5964 24.8769 16.4138 24.826C16.2311 24.775 16.0639 24.6798 15.9269 24.5487L12.0308 20.822L10.6449 22.2067C9.91228 22.9394 8.6589 22.421 8.6589 21.3842V17.5964L2.67887 11.8767C2.5305 11.7348 2.42276 11.5558 2.36682 11.3582C2.31088 11.1606 2.30876 10.9517 2.36069 10.753C2.41262 10.5543 2.5167 10.3732 2.66217 10.2282C2.80764 10.0833 2.9892 9.97989 3.18805 9.9287L23.3469 4.7447ZM20.9116 9.70406L11.6979 17.3153L16.2713 21.6906L20.9116 9.70406ZM19.0937 8.21798L5.76853 11.6429L10.0217 15.7094L19.0937 8.21568V8.21798Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_574_28345">
                                <rect width="27.648" height="27.648" fill="white" transform="translate(0.019043 0.675781)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="font-lufga font-regular text-white text-[16px]">
                        Invite a Client
                    </span>
                </button>
            </div>
            {/* Profile, Notification and chat**/}
            <div className="w-auto h-auto flex flex-row items-center gap-2.5">
                {/* Chat **/}
                <div className="w-[55px] h-[55px] bg-white flex justify-center items-center p-2.5" >
                    <svg width="23" height="22" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1162 0.131836C16.7132 0.131836 19.2038 1.16349 21.0402 2.99985C22.8765 4.8362 23.9082 7.32684 23.9082 9.92384C23.9082 12.5208 22.8765 15.0115 21.0402 16.8478C19.2038 18.6842 16.7132 19.7158 14.1162 19.7158H13.5402V20.8563C13.5402 21.0092 13.51 21.1606 13.4515 21.3018C13.3929 21.4431 13.3071 21.5714 13.199 21.6795C13.0908 21.7875 12.9624 21.8732 12.8211 21.9316C12.6798 21.99 12.5284 22.02 12.3755 22.0198C9.54157 22.0175 6.67079 21.0717 4.49236 19.1352C2.29434 17.1791 0.870468 14.2726 0.868164 10.5102V9.92384C0.868164 7.32684 1.89982 4.8362 3.73617 2.99985C5.57253 1.16349 8.06316 0.131836 10.6602 0.131836H14.1162ZM14.1162 2.43584H10.6602C8.67422 2.43584 6.76962 3.22475 5.36535 4.62902C3.96108 6.03329 3.17216 7.9379 3.17216 9.92384L3.17332 10.6899C3.2194 13.7335 4.37255 15.9453 6.02452 17.413C7.45069 18.6825 9.29735 19.4394 11.2362 19.6525V18.5754C11.2362 17.9325 11.7569 17.4118 12.3997 17.4118H14.1162C16.1021 17.4118 18.0067 16.6229 19.411 15.2187C20.8153 13.8144 21.6042 11.9098 21.6042 9.92384C21.6042 7.9379 20.8153 6.03329 19.411 4.62902C18.0067 3.22475 16.1021 2.43584 14.1162 2.43584ZM8.35616 8.19584C8.81446 8.19584 9.25398 8.37789 9.57804 8.70196C9.90211 9.02602 10.0842 9.46554 10.0842 9.92384C10.0842 10.3821 9.90211 10.8217 9.57804 11.1457C9.25398 11.4698 8.81446 11.6518 8.35616 11.6518C7.89787 11.6518 7.45835 11.4698 7.13428 11.1457C6.81022 10.8217 6.62816 10.3821 6.62816 9.92384C6.62816 9.46554 6.81022 9.02602 7.13428 8.70196C7.45835 8.37789 7.89787 8.19584 8.35616 8.19584ZM16.4202 8.19584C16.8785 8.19584 17.318 8.37789 17.642 8.70196C17.9661 9.02602 18.1482 9.46554 18.1482 9.92384C18.1482 10.3821 17.9661 10.8217 17.642 11.1457C17.318 11.4698 16.8785 11.6518 16.4202 11.6518C15.9619 11.6518 15.5223 11.4698 15.1983 11.1457C14.8742 10.8217 14.6922 10.3821 14.6922 9.92384C14.6922 9.46554 14.8742 9.02602 15.1983 8.70196C15.5223 8.37789 15.9619 8.19584 16.4202 8.19584Z" fill="#193AF9" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default NavBar