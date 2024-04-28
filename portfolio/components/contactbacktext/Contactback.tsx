const Contactback = ({textback}:{textback:string}) =>{
    return(
        <div className="pt-[6rem]">
            <div className="relative   text-white ">
 
  <h1 className="lg:text-[94px] md:text-[80px] text-[54px] font-bold con text-center" style={{fontWeight:"750"}}>{textback}</h1>


  <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 pt-4  lg:pt-7 text-[1.5rem] font-medium text-center text-[#ffc107] md:pt-6">{textback}</h2>
 
  <div className="pt-4 md:pt-0 lg:pt-0">
  <hr className="absolute top-1/2 lg:w-[170px] w-[130px] md:w-[150px] h-[2px] left-1/2 transform -translate-x-1/2 border-t border border-[#3f455a]"  />



  <hr className="absolute top-1/2 lg:w-[70px] w-[50px] md:w-[60px] h-[2px] left-1/2 transform -translate-x-1/2 border-t border border-[#ffc107]" />
  </div>


</div>
            

        </div>
    )
}
export default Contactback;