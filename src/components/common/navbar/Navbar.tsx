import GreeningSection from "./navbar-elements/GreetingSection"
import DateDisplay from "./navbar-elements/DateDsiplay"
import RecentInvites from "./navbar-elements/RecentInvites"
import ActionButtons from "./navbar-elements/ActionButtons"

const NavBar: React.FC = () => {
    return (
        <div className="w-full h-full px-[40px] py-[10px] bg-white bg-opacity-[50%] backdrop-blur-lg shadow-custom-blue  rounded-[30px] flex flex-row   justify-between items-center ">
            {/* welcoming and user name**/}
            <GreeningSection />
            {/* Date **/}
            <DateDisplay />
            {/* Invitation Button & recent invitations **/}
            <RecentInvites />
            {/* Profile, Notification and chat**/}
            <ActionButtons />
        </div>
    )
}

export default NavBar