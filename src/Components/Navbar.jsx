import logo from "../assets/images/logo.png"
const Navbar = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between my-[20px] mx-[170px] mt-0 ">
          <img src={logo} alt="" className="h-28 transform -rotate-6"/>
            <ul className=" flex items-center gap-[60px] text-[19px]">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="transition duration-[0.4s] cursor-pointer p-[18px_38px] rounded-[50px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] text-[20px] hover:transform hover:scale-110">
                Connect With Me
            </div>
      </div>
    </>
  )
}

export default Navbar
