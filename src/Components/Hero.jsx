import profile from "../assets/images/Profile.jpg"
const Hero = () => {
  return (
    <div className="flex items-center flex-col gap-[25px]">
      <img src={profile} alt="" className="rounded-[100%] w-72 h-80 "/>
      <h1 className="font-semibold text-[80px] text-center w-[70%]"><span className="text-transparent bg-clip-text bg-gradient-to-r to-[#DF8908] from-[#B415FF]">I&apos;m Ram Pandiyar</span>, frontend developer based in India</h1>
      <p className="w-[65%] text-center text-[24px] leading-[30px]">I am a frontend developer from Tamil Nadu, India with 2 years of experience in multiple companies like Microsoft, Tesla, Apple</p>
      <div className="flex items-center gap-[25px] text-[24px] font-medium mb-[50px]">
          <div className="p-[20px_40px]  hover:duration-[0.5s] duration-[0.5s] rounded-[50px] bg-gradient-to-r to-[#DF8908] from-[#B415FF] cursor-pointer hover:scale-110">
              Connect with Me
          </div> 
          <div className="p-[20px_40px] hover:scale-110 rounded-[50px] border-[2px] border-white cursor-pointer hover:transition hover:duration-[0.5s] duration-[0.5s] hover:border-violet-800 hover:text-yellow-500 ">
              My Resume
          </div>
      </div>
    </div>
  )
}

export default Hero
