import profile from "../assets/images/Profile.jpg"
import pattern from "../assets/assets/theme_pattern.svg"

const About = () => {
  return (
    <div className="py-2 flex flex-col items-center justify-center gap-[80px] m-[80px_170px]">
      <div className="relative">
          <h1 className="p-[0px_30px] relative text-[80px] font-semibold z-[2]">About Me</h1>
          <img src={pattern} alt="" className="absolute bottom-0 right-0 z-[1]"/>
      </div>
      <div className="flex gap-[80px]">
          <div>
              <img src={profile} alt="" className=""/>
          </div>
          <div className="flex flex-col gap-[80px]">
              <div className="flex flex-col gap-[20px] text-[24px] font-medium">
                  <p>I am an experienced frontend developer with over decade of Professional expertise in the field. Throughout my career, I have had the privilege of collaboarting with prestigious organisation, contributing to their success and growth.</p>
                  <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
              </div>
              <div className="flex flex-col gap-[20px]">
                  <div className="flex gap-[50px] items-center duration-[0.5s] hover:scale-[1.05]  hover:duration-[0.5s]">
                      <p className="min-w-[150px] text-[24px] font-medium">HTML & CSS</p><hr className="w-[50%] outline-none border-none h-[8px] bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.18%)] rounded-md"/>
                  </div>
                  <div className="flex gap-[50px] items-center duration-[0.5s] hover:scale-[1.05] hover:duration-[0.5s]">
                      <p className="min-w-[150px] text-[24px] font-medium">React Js</p><hr className="w-[70%] outline-none border-none h-[8px] bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.18%)] rounded-md"/>
                  </div>
                  <div className="flex gap-[50px] items-center duration-[0.5s] hover:scale-[1.05] hover:duration-[0.5s]">
                      <p className="min-w-[150px] text-[24px] font-medium">JavaScript</p><hr className="w-[60%] outline-none border-none h-[8px] bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.18%)] rounded-md"/>
                  </div>
                  <div className="flex gap-[50px] items-center duration-[0.5s] hover:scale-[1.05] hover:duration-[0.5s]">
                      <p className="min-w-[150px] text-[24px] font-medium">Angular Js</p><hr className="w-[50%] outline-none border-none h-[8px] bg-[linear-gradient(264deg,_#DF8908_-5.09%,_#B415FF_106.18%)] rounded-md"/>
                  </div>
              </div>
          </div>
      </div>
        <div className="flex w-full justify-around items-center mb-[80px]">
            <div className="text-center duration-[0.5s] hover:scale-[1.15] hover:duration-[0.5s]">
                <h1 className="text-[60px] font-medium text-transparent bg-clip-text bg-gradient-to-r to-[#DF8908] from-[#B415FF]">10+</h1>
                <p className="text-lg font-medium">YEARS OF EXPERIENCE</p>
            </div>
            <div className="h-[80px] border-l-[3px] border-gray-300"></div>
            <div className="text-center duration-[0.5s] hover:scale-[1.15] hover:duration-[0.5s]">
                <h1 className="text-[60px] font-medium text-transparent bg-clip-text bg-gradient-to-r to-[#DF8908] from-[#B415FF]">100+</h1>
                <p className="text-lg font-medium">PROJECTS COMPLETED</p>
            </div>
            <div className="h-[80px] border-l-[3px] border-gray-300"></div>
            <div className="text-center duration-[0.5s] hover:scale-[1.15] hover:duration-[0.5s]">
                <h1 className="text-[60px] font-medium text-transparent bg-clip-text bg-gradient-to-r to-[#DF8908] from-[#B415FF]">15+</h1>
                <p className="text-lg font-medium">HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
