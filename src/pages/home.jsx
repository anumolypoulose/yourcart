import banner1 from "../assets/images/banner1.png";
function home(){
    return(
        <>
            <div className="relative">
                <img src={banner1} className="w-full h-[100vh] object-cover object-center"/>
            </div>
        </>
    )
}
export default home;