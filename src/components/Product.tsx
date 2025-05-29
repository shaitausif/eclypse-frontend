import { IndianRupee } from "lucide-react";
import { useState, type ChangeEvent } from "react"; // Import useState and ChangeEvent
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { Bounce } from "react-toastify";
import { useProductContext } from "../context/productContext";
import axios from "axios";
import {useEffect} from 'react'


// Define the type for our available sizes
type Size = "XS" | "S" | "M" | "L" | "XL";


const sizes: Size[] = ["XS", "S", "M", "L", "XL"]; // Define available sizes

const Product = () => {

  const [imageUrls, setimageUrls] = useState([])

  // const imageUrls = [
  //   "https://res.cloudinary.com/dhrkajjwf/image/upload/v1747838102/pexels-luchik-14994091_kozary.jpg",
  //   "https://res.cloudinary.com/dhrkajjwf/image/upload/v1747838108/pexels-cottonbro-4937452_necmhs.jpg",
  //   "https://res.cloudinary.com/dhrkajjwf/image/upload/v1747838126/pexels-lepta-studio-333887315-13991626_hm8ymu.jpg",
  // ];

   // Due to some errors while deploying my express server on vercel I am unable to fetch the data from the server right now, due to time constraint I am submitting this project to you and I am also trying to solve that error and if it got resolved i will make the changes in the application also

  useEffect(() => {
    const fetchImages = async() => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/images`)
        setimageUrls(response.data)
        
      } catch (error) {
        console.error('Error fetching images:', error);
        throw new Error("failed to get images ")
      }  
    }

    fetchImages()
    
}); 

  const navigate = useNavigate()

  // State to hold the selected sizes directly within the Product component
  const [selectedSizes, setSelectedSizes] = useState<Size[]>([]);

  const {productDetails, setProductDetails} = useProductContext()

  // Handler function for when a size checkbox changes
  const handleSizeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, checked } = event.target;
    const selectedSize = value as Size; // Type assertion

    if (checked) {
      setSelectedSizes((prevSizes) => [...prevSizes, selectedSize]);
    } else {
      setSelectedSizes((prevSizes) =>
        prevSizes.filter((size) => size !== selectedSize)
      );
    }
  };

  // Example function to simulate adding to cart or submitting a form
  const handleAddToCart = () => {
    if (selectedSizes.length === 0) {
      toast.warning("Please select atleast one size before adding to cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
      return;
    }
    setProductDetails(prev => ({...prev, quantity : selectedSizes.length === 0 ? 1 : selectedSizes.length}))
    console.log("Adding product to cart with selected sizes:", selectedSizes);
    // This is where you'd send `selectedSizes` along with other product details
    // to an API, update a global state, or proceed with form submission.
    toast.success(`Successfully added product with sizes: ${selectedSizes.join(
        ", "
      )} to cart!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <div>
        <div className="px-4 md:px-12 mx-auto inter-font">
          <div className="my-18 md:my-40">
            <h1 className="text-xl md:text-5xl">Silhoutte No. 1 - Vermilion</h1>
          </div>
        </div>
        <div className="w-auto flex justify-between  text-black">
          <div>
            <img
              className="w-[50vw] hidden md:block md:h-[150vh] object-cover"
              src="https://res.cloudinary.com/dhrkajjwf/image/upload/v1747837509/No_BG_hfzuch.png"
              alt=""
            />
          </div>
          <div className="bg-white md:h-[150vh] max-w-screen md:w-[50vw] md:px-8">
            <div className="md:w-[80%] mx-auto">
              <img
                className="md:hidden block w-screen object-cover h-[30vh] mb-3"
                src="https://res.cloudinary.com/dhrkajjwf/image/upload/v1747862324/pexels-vlada-karpovich-8367782_zf2kv8.jpg"
                alt=""
              />
              <p className="font-semibold py-6 hidden md:block md:py-12 text-sm">
                A tailored composition in motion. Cut from structured wool with
                a sculpted shoulder and softened hem, this piece captures
                presence without force. Worn here in the stillness of a city in
                motion
              </p>
            </div>
            <div className="grid grid-cols-3 w-full px-4">
              {imageUrls.map((imageUrl, i) => (
                <div className="w-fit md:w-[14vw] h-[20vh] md:h-[35vh]" key={i}>
                  <img
                    className="md:w-[14vw] w-[30vw] rounded-sm h-[20vh] md:h-[35vh] object-cover"
                    src={imageUrl}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className=" w-full bg-gray-300 h-[1px] my-8 md:my-12"></div>
            <div className="price flex items-center text-xl md:text-3xl md:px-0 px-4">
              <IndianRupee /> <span className="font-semibold">{productDetails.price.toLocaleString('en-IN')}</span>
              <sub className="text-sm md:text-lg text-gray-500 px-5">
                MRP incl. of all taxes
              </sub>
            </div>
            <div className="size text-md md:text-2xl py-12 text-gray-600 md:px-0 px-4">
              <div>
                Please select a size
                <span className="px-5 text-sm md:text-xl hover:underline decoration-gray-400 cursor-pointer">
                  Size chart
                </span>
              </div>
              {/* Inlined Size Selection UI */}
              <div className="flex gap-4 w-fit mx-auto md:gap-8 flex-wrap justify-start mt-8 md:mt-12">
                {sizes.map((size) => (
                  <div key={size} className="relative">
                    {/* Hidden Input */}
                    <input
                      type="checkbox"
                      name="size"
                      id={size.toLowerCase()}
                      value={size}
                      checked={selectedSizes.includes(size)} // Check if this size is in the selectedSizes array
                      onChange={handleSizeChange} // Handle changes
                      className="sr-only peer" // Hide visually, enable peer styling
                    />
                    {/* Styled Label (Our "Button") */}
                    <label
                      htmlFor={size.toLowerCase()}
                      className="
                                                md:px-8 px-4 md:py-2 py-1
                                                bg-gray-200
                                                text-gray-500
                                                rounded-md
                                                cursor-pointer font-light
                                                border-2 border-transparent
                                                transition-all duration-300 ease-in-out-quad
                                                hover:bg-gray-300
                                                hover:border-blue-400
                                                peer-checked:bg-blue-600
                                                peer-checked:text-white
                                                peer-checked:border-blue-600
                                                peer-checked:scale-105
                                                peer-checked:shadow-lg
                                                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                                            "
                    >
                      <span className="font-semibold text-sm md:text-lg">
                        {size}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[1px] w-full md:block hidden md:my-10 bg-gray-300"></div>
            {/* Add to Cart button or any other form submission trigger */}
            <div className="buttons flex flex-col-reverse md:block items-center gap-2 md:gap-0 md:mb-0 mb-10">
              <button
                onClick={handleAddToCart}
                className="bg-white border rounded-lg w-fit md:w-auto px-17 md:px-10 py-3 md:py-4 hover:bg-gray-100 border-gray-400 font-semibold text-md md:text-lg" 
              >
                Add to Cart
              </button>
              <button onClick={() => {
                // if(selectedSizes.length === 0){
                //   toast.warn("Please select the size first");
                //   return;
                // }
                setProductDetails(prev => ({...prev, quantity : selectedSizes.length === 0 ? 1 : selectedSizes.length}))
                navigate('/checkout')
              }} className="bg-black hover:bg-[#E83F25] font-semibold text-md md:text-lg w-fit md:w-auto px-24 md:px-40 py-3 md:ml-10 md:py-4 text-white rounded-lg md:mb-0 mb-2">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
