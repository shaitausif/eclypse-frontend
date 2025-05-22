// import axios from "axios";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
// import {useEffect} from 'react';

const DropBox = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  // const [values, setvalues] = useState([{
  //   subject : '',
  //   description : ''
  // }])

  const values = [
    {
      subject: "Size & Fit",
      description:
        "Getting the right fit is key! Our comprehensive size guide (link to size guide) provides detailed measurements and conversion charts to help you choose with confidence. Plus, each product page features specific fit notes from our team, letting you know if the item is designed for a relaxed, regular, or slim fit, and if it tends to run true to size, small, or large. Still unsure? Our customer service team is happy to help with personalized advice!",
    },
    {
      subject: "Delivery & Returns",
      description:
        "Delivery: We offer several convenient shipping options to get your new favorites to you quickly. Choose from standard, express, or expedited delivery at checkout. You'll receive tracking information as soon as your order ships.\n\nReturns: Not quite right? No problem! We offer free returns on eligible items within 30 days of purchase. Simply initiate a return through our easy online portal, and we'll guide you through the process for a refund or exchange. For full details on our return policy and eligibility, please visit our Returns & Exchanges page (link to policy).",
    },
    {
      subject: "How This Was Made",
      description:
        "Designed with passion and precision, this item showcases our dedication to quality craftsmanship. From the initial sketch to the final stitch, every detail was carefully considered. We work with skilled artisans who bring our visions to life, ensuring each piece is made to last and designed to be loved.",
    },
  ];

   // Due to some errors while deploying my express server on vercel I am unable to fetch the data from the server right now, due to time constraint I am submitting this project to you and I am also trying to solve that error and if it got resolved i will make the changes in the application also
  
  // useEffect(() => {
  //   const fetchTextData = async() => {
  //     try {
  //       const response = await axios.get('/api/v1/text-data')
  //       setvalues(response.data)
      
  //     } catch (error) {
  //       console.log("Error while fetching the data")
  //       throw new Error("Error while fetching the data")
  //     }
  //   }
  //     fetchTextData();
  // },[])



  const toggleDropBox = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="my-15 md:my-30 px-4 md:px-12 inter-font">
      {values.map((value, i) => (
        <div key={i}>
          <div
            className="flex py-2 md:py-8 items-center justify-between mt-4 md:mt-12 cursor-pointer"
            onClick={() => toggleDropBox(i)}
          >
            <h2 className="text-xl md:text-3xl">{value.subject}</h2>
            {openIndex === i ? (
              <ArrowUp className="md:h-12 h-8 w-8 md:w-12" />
            ) : (
              <ArrowDown className="md:h-12 h-8 w-8 md:w-12" />
            )}
          </div>

          <div
            className={`transition-all duration-500 overflow-hidden ${
              openIndex === i ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="md:px-10 px-4 border rounded-xl border-gray-800 py-4 bg-black/80">
              <p className="whitespace-pre-line">{value.description}</p>
            </div>
          </div>

          <div className="bg-gray-500 w-full h-[1px] mt-4"></div>
        </div>
      ))}
    </div>
  );
};

export default DropBox;
