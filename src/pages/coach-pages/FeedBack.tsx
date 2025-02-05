import fulllogo from '../../assets/images/full-logo-white.svg'

const FeedBack = () => {
    return (
        <div className='bg-bg-gradient font-lufga p-[35px] md:p-[90px]'>
            <img src={fulllogo} alt="logo" className="w-[169px] h-[42px] mb-[30px] md:mb-[120px]" />
            <div className='w-full flex flex-col items-center justify-content h-full overflow-hidden'>
                <h1 className='font-lufga mb-[10px] font-medium text-2xl md:text-4xl text-secondary'>Welcome to Feedback</h1>
                <p className='w-full font-regular text-[15px] md:text-[22px] md:w-[516px] text-center text-gray mb-[30px]'>We're appreciate your time to send us a suggestion to develop our platform</p>
                <div className="w-full flex items-center md:w-[516px] h-[75px] rounded-[20px] border-none bg-[#4772FF]/10 p-5">
                    <div className="flex justify-between items-center w-full md:w-[516px]">
                        <select className="bg-transparent text-gray text-[14px] md:text-[20px] outline-none w-full" name="suggestion">
                            <option value="feature">Select your Suggestion</option>
                            <option value="bug">Report a Bug</option>
                            <option value="other">Other</option>
                        </select>

                    </div>
                </div>


                <div className="w-full mt-7 md:w-[516px]">
                    <label className="block text-primary text-[15px] md:text-[22px] mb-[10px]">Email</label>
                    <input className='w-full text-gray bg-gray/5 text-[14px] md:text-[20px] md:w-[516px] h-[75px] focus:border-2 focus:border-primary outline-none rounded-[20px] px-7 py-3' type="email" name="email" placeholder="type your email address..." />
                </div>

                <div className="w-full mt-4 md:w-[516px] grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray text-[15px] md:text-[20px] mb-[10px]">First Name</label>
                        <input className='w-full md:w-[245px] h-[75px] text-[14px] md:text-[20px] bg-gray/5 focus:border-2 focus:border-primary outline-none rounded-[20px] px-7 py-2' type="text" name="firstName" placeholder="Samad" />
                    </div>
                    <div>
                        <label className="block text-gray text-[15px] md:text-[20px] mb-[10px]">Last Name</label>
                        <input className='w-full md:w-[245px] h-[75px] text-[14px] md:text-[20px] bg-gray/5 rounded-[20px] focus:border-2 focus:border-primary outline-none px-7 py-2' type="text" name="lastName" placeholder="e.g. BENBOU" />
                    </div>
                </div>

                <div className="w-full md:w-[516px] mt-4">
                    <label className="block text-primary md:text-[22px] mb-[10px]">Subject</label>
                    <input className='w-full text-gray bg-gray/5 text-[14px] md:text-[20px] md:w-[516px] h-[75px] focus:border-2 focus:border-primary rounded-[20px] outline-none px-7 py-3' type="email" name="email" placeholder="type your subject title" />
                </div>

                <div className="w-full md:w-[516px] mt-4">
                    <label className="block text-primary text-[15px] md:text-[22px] mb-[10px]">Message</label>
                    <textarea className='w-full text-gray bg-gray/5 text-[14px] md:text-[20px] p-[30px] md:w-[516px] h-[217px] focus:border focus:border-primary rounded-[20px] outline-none mb-[30px]' placeholder='Please enter the details of your request.' />
                </div>

                <button className="w-full md:w-[516px] h-[75px] text-[16px] md:text-[24px] text-white bg-blue rounded-[20px] hover:bg-blue mb-[30px] md:mb-[120px]">Submit</button>

                <div className='flex items-center gap-[93px] md:gap-[133px] text-[11px] md:text-[16px] text-center text-secondary'>
                    <a href='#'>Proway</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms of Use</a>
                </div>
            </div>

        </div>
    )
}

export default FeedBack

