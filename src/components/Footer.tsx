import { ArrowUp, ArrowUpRight } from "lucide-react";


const Footer = () => {
  return (
    <div className="px-4 md:px-12">
      <div className="flex justify-between inter-font">
        <h2 className="text-xl md:text-3xl flex text-gray-400 font-semibold">
          Eclypse
          <sup>
            <ArrowUpRight className="md:w-5 w-3 h-3 md:h-5" />
          </sup>
        </h2>
        <span className="px-2 py-2 rounded-full bg-white">
        <a href="#main"><ArrowUp className='text-black' /></a>
      </span>
      </div>

        <div className="flex justify-between items-center py-4 md:py-12">
            <div className="grid grid-cols-2 w-[70%] md:w-[30%] gap-5 md:gap-12">
                <div className="row-span-1 pt-12 md:text-base text-[12px] text-gray-300">Home /  About  /  Buy  /  Our Customers / Contacts 

                </div>
                <div className="row-span-2 ">
                    <div className="contact py-8">
                        <div className="pb-1">
                        <p className="uppercase text-[10px] md:text-[12px] text-gray-500 tracking-widest">contact</p>
                    </div>
                    <div className="text-[12px]">
                        +91 123-456-789
                    </div>
                    </div>
                    <div className="email">
                        <div className="pb-1">
                            <p className="uppercase text-gray-500 tracking-widest text-[10px] md:text-[12px]">email</p>
                        </div>
                        <div className="text-gray-400 text-sm text-[12px]">
                            eclypse@gmail.com
                        </div>
                    </div>
                </div>

            </div>
            <p className="text-[10px] text-gray-400">&copy; Eclypse 2025</p>
        </div>
    </div>
  );
};

export default Footer;
