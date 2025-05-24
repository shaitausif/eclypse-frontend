import { useState } from "react";

const GridSection = () => {
    const originalImageUrl = 'https://res.cloudinary.com/dhrkajjwf/image/upload/v1747828464/eclypse_psnxez.jpg'
    const hoverImageUrl = 'https://res.cloudinary.com/dhrkajjwf/image/upload/v1747835330/Eclypse_emajau.png'
   

    const [currentImageSrc, setcurrentImageSrc] = useState(originalImageUrl)
    const [isHovered, setisHovered] = useState(false)


    const handleMouseEnter = () => {
        setcurrentImageSrc(hoverImageUrl)
        setisHovered(true)
    }

    const handleMouseLeave = () => {
        setcurrentImageSrc(originalImageUrl)
        setisHovered(false)
    }

    


  return (
    <div className="grid grid-cols-3 gap-3 md:gap-6 w-full px-4 md:px-12 mx-auto mt-10">
      {/* First row: span each item across 3/2 = 1.5 cols (but grid only allows full integers, so we use col-span-2 and col-span-1 for layouting) */}
      <div className="col-span-3 md:col-span-2 text-white  text-center rounded-sm md:rounded-lg"><video
      autoPlay controls={false} muted loop
      className="group rounded-lg h-fit md:h-[80vh] w-full object-cover"
      src="https://res.cloudinary.com/dhrkajjwf/video/upload/v1748109551/5977122-hd_1280_720_50fps_lnsq5j.mp4"></video>
    
      </div>

     <div className="col-span-1 group h-[25vh] md:h-[80vh] w-full relative text-white  text-center rounded-sm md:rounded-lg">
  <img
    className="rounded-sm md:rounded-lg h-[25vh] md:h-[80vh] w-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-60"
    src="https://res.cloudinary.com/dhrkajjwf/image/upload/v1747828524/pexels-karolina-grabowska-4863066_l8mw02.jpg"
    alt=""
  />
  <span className="absolute md:bottom-5 bottom-2 md:left-10 text-start md:right-15 text-sm md:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    Premium wool blend in signature vermilion
  </span>
</div>


      {/* Second row: each item takes 1 column (3 items) */}
      <div className="col-span-1 group relative h-[25vh] md:h-[60vh] text-white  text-center rounded-lg"><img
      className="md:h-[60vh] w-full h-[25vh] object-cover rounded-sm md:rounded-lg transition-opacity duration-500 opacity-100 group-hover:opacity-60"
      src="https://res.cloudinary.com/dhrkajjwf/image/upload/v1747828485/pexels-cottonbro-4937352_hmc3wv.jpg" alt="" />
      <span className="absolute bottom-2 md:left-10 text-start md:right-15 md:text-3xl text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    Discreate side pockets with clean finish
  </span>
      </div>

      <div 
      
      className="col-span-1 h-[25vh] md:h-[60vh] group relative text-white  text-center rounded-lg"><img
      className="w-full h-[25vh] md:h-[60vh] object-cover rounded-lg transition-opacity duration-500 opacity-100 group-hover:opacity-60"
      src="https://res.cloudinary.com/dhrkajjwf/image/upload/v1747828509/pexels-pavel-danilyuk-6461113_qagz1g.jpg" alt="" />
      <span className="absolute bottom-2 md:left-10 text-start md:right-15 text-sm md:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
    Hand-cut and assembled in small batches
  </span>
      </div>

      <div 
       className="col-span-1 md:h-[60vh] group relative text-white  text-center rounded-lg"><img
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      className={`w-full h-[60vh] object-cover md:block hidden rounded-lg transition-opacity duration-500 ease-in-out ${isHovered ? 'opacity-60':'opacity-100'}`} 
      src={currentImageSrc} alt="" />
      </div>
    </div>
  );
};

export default GridSection;
