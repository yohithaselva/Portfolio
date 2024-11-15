import theme from "../assets/assets/theme_pattern.svg"
import work from "../assets/assets/mywork_data"
import arrow from "../assets/assets/arrow_icon.svg"
const Mywork = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[80px] m-[80px_170px]0">
      <div className="relative">
          <h1 className="p-[0px_30px] relative text-[80px] font-semibold z-[2]">My Latest Work</h1>
          <img src={theme} alt="Theme Pattern" className="absolute bottom-0 right-0 z-[1]"/>
      </div>
      <div className="grid grid-cols-3 gap-[40px]">
          {work.map((work,index)=>{
            return <img key={index} src={work.w_img} alt="" className="border-box w-[419px] h-[280px] duration-[0.3s] cursor-pointer"/>
          })}
      </div>
      <div className="flex gap-[15px] rounded-[50px] border-[2px] p-[20px_40px] text-[22px] font-semibold mb-[80px] duration-[0.3s] hover:gap-[30px] hover:duration-[0.3s] cursor-pointer">
          <p>Show More</p>
          <img src={arrow} alt="" className="mt-1"/>
      </div>
    </div>
  )
}

export default Mywork
