import { useState } from 'react';
import fulllogo from '../../assets/images/full-logo-white.svg';

const FeedBack = () => {
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(true);
    };

    return (
        <div className="bg-bg-gradient font-lufga p-[35px] md:p-[90px]">
            <img
                src={fulllogo}
                alt="logo"
                className="w-[169px] h-[42px] mb-[30px] md:mb-[120px]"
            />

            {success ? (
                <div className="w-full h-screen font-lufga md:justify-start justify-center flex items-center flex-col">
                    <h1 className='text-[24px] md:text-[36px] font-medium mb-[14px] md:mb-[10px]'>Thank You ! Feedback sent.</h1>
                    <p className='text-[15px] md:text-[22px] font-regular text-gray w-[350px] md:w-[603px] text-center mb-[14px] md:mb-[30px]'>We appreciate your time to send us a suggestion to develop our plateform</p>
                    <button className="text-white text-[16px] md:text-[24px] w-[350px] bg-primary md:w-[500px] h-[52px] md:h-[75px] rounded-[14px] md:rounded-[20px] flex items-center justify-center gap-2">
                        <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_574_30142)">
                                <path d="M4.36463 13.8055C4.14867 14.0215 4.02734 14.3144 4.02734 14.6199C4.02734 14.9254 4.14867 15.2183 4.36463 15.4344L10.8815 21.9512C11.0988 22.1611 11.3898 22.2772 11.6918 22.2746C11.9939 22.272 12.2828 22.1508 12.4964 21.9372C12.71 21.7236 12.8311 21.4347 12.8338 21.1326C12.8364 20.8306 12.7203 20.5396 12.5104 20.3223L7.96003 15.7719H23.216C23.5215 15.7719 23.8145 15.6505 24.0306 15.4345C24.2466 15.2185 24.368 14.9254 24.368 14.6199C24.368 14.3144 24.2466 14.0214 24.0306 13.8053C23.8145 13.5893 23.5215 13.4679 23.216 13.4679H7.96003L12.5104 8.91752C12.7203 8.70025 12.8364 8.40925 12.8338 8.1072C12.8311 7.80515 12.71 7.51621 12.4964 7.30262C12.2828 7.08903 11.9939 6.96788 11.6918 6.96525C11.3898 6.96263 11.0988 7.07874 10.8815 7.28859L4.36463 13.8055Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_574_30142">
                                    <rect width="27.648" height="27.648" fill="white" transform="translate(0.175781 0.796021)" />
                                </clipPath>
                            </defs>
                        </svg>

                        Back to Login
                    </button>

                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col items-center justify-center h-full overflow-hidden"
                >
                    <h1 className="font-lufga mb-[10px] font-medium text-2xl md:text-4xl text-secondary">
                        Welcome to Feedback
                    </h1>
                    <p className="w-full font-regular text-[15px] md:text-[22px] md:w-[516px] text-center text-gray mb-[30px]">
                        We appreciate your time to send us a suggestion to improve our platform.
                    </p>

                    <div className="w-full flex items-center md:w-[516px] h-[52px] md:h-[75px] rounded-[20px] border-none bg-[#4772FF]/10 p-5">
                        <select
                            className="bg-transparent text-gray text-[14px] md:text-[20px] outline-none w-full"
                            name="suggestion"
                        >
                            <option value="feature">Select your Suggestion</option>
                            <option value="bug">Report a Bug</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="w-full mt-7 md:w-[516px]">
                        <label className="block text-primary text-[15px] md:text-[22px] mb-[10px]">
                            Email
                        </label>
                        <input
                            className="w-full text-gray bg-gray/5 text-[14px] md:text-[20px] md:w-[516px] h-[52px] md:h-[75px] focus:border-2 focus:border-primary outline-none rounded-[20px] px-7 py-3"
                            type="email"
                            name="email"
                            placeholder="Type your email address..."
                        />
                    </div>

                    <div className="w-full mt-4 md:w-[516px] grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray text-[15px] md:text-[20px] mb-[10px]">
                                First Name
                            </label>
                            <input
                                className="w-full md:w-[245px] h-[52px] md:h-[75px] text-[14px] md:text-[20px] bg-gray/5 focus:border-2 focus:border-primary outline-none rounded-[20px] px-7 py-2"
                                type="text"
                                name="firstName"
                                placeholder="Samad"
                            />
                        </div>
                        <div>
                            <label className="block text-gray text-[15px] md:text-[20px] mb-[10px]">
                                Last Name
                            </label>
                            <input
                                className="w-full md:w-[245px] h-[52px] md:h-[75px] text-[14px] md:text-[20px] bg-gray/5 rounded-[20px] focus:border-2 focus:border-primary outline-none px-7 py-2"
                                type="text"
                                name="lastName"
                                placeholder="e.g. BENBOU"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-[516px] mt-4">
                        <label className="block text-primary md:text-[22px] mb-[10px]">
                            Subject
                        </label>
                        <input
                            className="w-full text-gray bg-gray/5 text-[14px] md:text-[20px] md:w-[516px] h-[52px] md:h-[75px] focus:border-2 focus:border-primary rounded-[20px] outline-none px-7 py-3"
                            type="text"
                            name="subject"
                            placeholder="Type your subject title"
                        />
                    </div>

                    <div className="w-full md:w-[516px] mt-4">
                        <label className="block text-primary text-[15px] md:text-[22px] mb-[10px]">
                            Message
                        </label>
                        <textarea
                            className="w-full text-gray bg-gray/5 text-[14px] md:text-[20px] p-[30px] md:w-[516px] h-[152px] md:h-[217px] focus:border focus:border-primary rounded-[20px] outline-none mb-[21px] md:mb-[30px]"
                            placeholder="Please enter the details of your request."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-[516px] h-[52px] md:h-[75px] text-[16px] md:text-[24px] text-white bg-blue rounded-[14px] md:rounded-[20px] hover:bg-blue mb-[30px] md:mb-[120px]"
                    >
                        Submit
                    </button>

                    
                </form>
            )}
            <div className="flex items-center justify-center gap-[93px] md:gap-[133px] text-[11px] md:text-[16px] text-center text-secondary">
                        <a href="#">Proway</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                    </div>
        </div>
    );
};

export default FeedBack;
