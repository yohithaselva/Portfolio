import theme from "../assets/assets/theme_pattern.svg"
import service from "../assets/assets/services_data.js"
import arrow from "../assets/assets/arrow_icon.svg"
const Service = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[80px] m-[80px_170px] ">
      <div className="relative">
        <h1 className="p-[0px_30px] relative text-[80px] font-semibold z-[2]">My Service</h1>
        <img src={theme} alt="" className="absolute bottom-0 right-0 z-[1]"/>
      </div>
      <div className="grid grid-cols-3 gap-[40px] mb-[80px] ">
          {service.map((service,index)=>{
            return <div key={index} className="hover:border-[#ff00ff] hover:scale-[1.05] hover:bg-custom-hover-gradient flex flex-col justify-center gap-[20px] p-[30px] rounded-[10px] border-[2px] border-white transition ease-in duration-0.5s cursor-pointer">
                <h3 className="text-[28px] font-semibold">{service.s_no}</h3>
                <h2 className="text-[38px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-[#DF8908] from-[#B415FF]">{service.s_name}</h2>
                <p className="text-[#d4d4d4] text-[20px] max-w-[300px] leading-[40px]">{service.s_desc}</p>
                <div className="flex gap-[20px] items-center mt-[20px]  ">
                    <p>Read More</p>
                    <img src={arrow} alt=""/>
                </div>
            </div>
          })}
      </div>
    </div>
  )
}

export default Service
