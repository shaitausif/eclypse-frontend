import { Quote, StepBack } from "lucide-react"


const Customers = () => {
  return (
    <div className="px-4 md:px-12 inter-font py-5 md:py-10">
        <div>
            <p className="uppercase tracking-[6px] text-gray-300 text-sm">our customers</p>
        </div>
        <div className="flex items-center justify-between gap-4 pt-8 md:py-16 md:px-5">
            <div className="flex items-start gap-2 md:gap-4 w-[60vw] md:w-[55vw]">
                <Quote className='transform rotate-180  fill-white w-10 h-10 md:w-15 md:h-15' />
            <h2 className="text-base md:text-5xl text-gray-200">Understand, but unforgettable. It feels like it was made for me</h2>
            </div>
            <div className="flex justify-center items-center gap-4 md:gap-12">
                <span><StepBack className="fill-white"/></span>
                <span><img
                className="h-15 w-15 md:w-40 md:h-40 object-cover rounded-full"
                src="https://res.cloudinary.com/dhrkajjwf/image/upload/v1747853298/profile2_x5dsaz.jpg" alt="" /></span>
            </div>
            

        </div>
        {/* second row */}
            <div className="flex justify-between items-center">
                <div className="ml-6 md:ml-16">
                    <p className="text-sm md:text-xl tracking-widest mb-2 md:mb-4 text-gray-300 ">Random Man</p>
                    <p className="text-gray-500 ml-1 md:text-base text-[12px]">NY, USA</p>
                </div>
                <div className="flex flex-col md:mt-0 mt-5 gap-4 items-center justify-center w-[15vw]">
                    <img 
                    className="rounded-full h-10 w-10 md:w-20 md:h-20 object-cover opacity-50"
                    src="https://res.cloudinary.com/dhrkajjwf/image/upload/v1747853293/profile1_slch3l.jpg" alt="" />
                    <img 
                    className="rounded-full md:w-20 md:h-20 h-10 w-10 object-cover opacity-50"
                    src="https://res.cloudinary.com/dhrkajjwf/image/upload/v1747853304/profile3_ngzwo6.jpg" alt="" />
                </div>
            </div>

            <div className="w-full h-[1px] my-10 md:my-12 bg-gray-600"></div>

    </div>
  )
}

export default Customers
