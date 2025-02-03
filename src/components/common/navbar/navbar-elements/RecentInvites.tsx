const RecentInvites = () => {
    return (
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
    )
}
export default RecentInvites;