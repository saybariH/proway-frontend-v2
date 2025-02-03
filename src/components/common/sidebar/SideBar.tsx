import fulllogo from '../../../assets/images/full-logo-white.svg';
const SideBar : React.FC = () => {
    return (
        <div className="w-full h-full">
            {/* logo */}
            <div >
            <img src={fulllogo} alt="logo" className="w-[200px] h-[50px]"/>
            </div>
        </div>
    )
}
export default SideBar;