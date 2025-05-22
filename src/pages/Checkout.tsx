import { ArrowLeft, CircleDot } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressFormSchema } from "../schemas/AddressForm";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import { useProductContext } from "../context/productContext";

const Checkout = () => {
  const [active, setactive] = useState(true);

  const toggleColor = () => setactive(!active);
  const [address, setaddress] = useState({});
  const [isAddressSaved, setisAddressSaved] = useState(false)


  type AddressFormData = z.infer<typeof addressFormSchema>;
  const navigate = useNavigate();
  const {productDetails} = useProductContext()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddressFormData>({
    defaultValues: {
      firstname: "",
      lastname: "",
      streetaddress: "",
      apartmentnumber: "",
      state: "",
      
    },
    resolver: zodResolver(addressFormSchema),
  });

  const onSubmit = (data: AddressFormData) => {
    // We can either save this data in the database by creating a model for it
    setaddress(data);
    console.log(address)
    setisAddressSaved(true)
    toast.success("Address saved successfully", {
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
    reset();
    setaddress({})
  
  };


  const placeOrder = () => {
    if(!isAddressSaved){
      toast.warn("Enter your Address First!", {
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
    toast.success("Order Placed successfully", {
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

    
    setisAddressSaved(false)
    navigate('/')
  }

  const productPrize = productDetails.price * productDetails.quantity
  const taxRate = 22;
  const priceBeforeTax = productPrize / (1 + taxRate / 100);
  const taxCollected = productPrize - Math.floor(priceBeforeTax)

  return (
    <div className="bg-white py-15 md:py-30 md:px-12 px-4  inter-font text-black">
      <div className="flex gap-4 items-center my-5">
        <span
          className="hover:bg-gray-300 rounded-full p-1 md:p-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft />
        </span>
        <h3 className="md:text-xl text-md ">Shipping Address</h3>
      </div>
      <div className="flex gap-4 md:flex-row flex-col">
        {/* here the form  */}
        <div className="border border-gray-400 rounded-lg md:w-[60%] md:py-10 max-h-fit md:px-10 py-5 px-4 ">
          <div className="cursor-pointer" onClick={toggleColor}>
            <h4 className="flex gap-2 md:gap-5">
              <span className="">
                <CircleDot className={active ? "text-[#ec7622]" : ""} />
              </span>
              <span className={active ? "text-[#ec7622]" : ""}>
                Add New Address
              </span>
            </h4>
          </div>
          {active && (
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="flex gap-5 py-4 md:text-base text-sm">
                <div className="flex flex-col">
                  <label className="text-sm pb-1" htmlFor="firstname">
                    First Name
                  </label>
                  <input
                    className="border border-gray-400 rounded-lg w-full px-2 md:px-4 outline-none py-2"
                    type="text"
                    {...register("firstname")}
                  />
                  {errors.firstname && (
                    <p className="text-[10px] md:text-sm text-red-500">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col ">
                  <label className="text-sm pb-1" htmlFor="lastname">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-400 rounded-lg  px-2 md:px-4  outline-none py-2"
                    {...register("lastname")}
                  />
                  {errors.lastname && (
                    <p className="text-[10px] md:text-sm text-red-500">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm pb-1" htmlFor="streetaddress">
                  Street Address
                </label>
                <input
                  className="border border-gray-400 rounded-lg  px-2 md:px-4  outline-none py-2"
                  type="text"
                  {...register("streetaddress")}
                />
                {errors.streetaddress && (
                  <p className="text-[10px] md:text-sm text-red-500">
                    {errors.streetaddress.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-3 gap-3 my-4">
                {/* apt number */}
                <div className="flex col-span-1 flex-col">
                  <label className="text-sm pb-1" htmlFor="apartmentnumber">
                    Apt Number
                  </label>
                  <input
                    className="border border-gray-400 rounded-lg  px-2 md:px-4  outline-none py-2"
                    type="text"
                    {...register("apartmentnumber")}
                  />
                  {errors.apartmentnumber && (
                    <p className="text-[10px] md:text-sm text-red-500">
                      {errors.apartmentnumber.message}
                    </p>
                  )}
                </div>
                {/* state */}
                <div className="flex col-span-1 flex-col">
                  <label className="text-sm pb-1" htmlFor="state">
                    State
                  </label>
                  <input
                    className="border border-gray-400 rounded-lg  px-2 md:px-4  outline-none py-2"
                    type="text"
                    {...register("state")}
                  />
                  {errors.state && (
                    <p className="text-[10px] md:text-sm text-red-500">
                      {errors.state.message}
                    </p>
                  )}
                </div>
                {/* zip */}
                <div className="flex col-span-1 flex-col">
                  <label className="text-sm pb-1" htmlFor="zip">
                    Zip
                  </label>
                  <input
                    type="number"
                    {...register("zip")}
                    className="border border-gray-400 rounded-lg  px-2 md:px-4  outline-none py-2"
                  />
                  {errors.zip && (
                    <p className="text-[10px] md:text-sm text-red-500">{errors.zip.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex gap-3 md:gap-5 md:flex-row flex-col-reverse">
                {/* cancel button */}
                <div className="text-center w-full md:w-1/4">
                  <button
                    onClick={() => navigate(-1)}
                    type="button"
                    className="bg-white w-full border rounded-lg px-8 md:px-0 py-3 md:py-4 hover:bg-gray-100 border-gray-400 font-semibold md:text-md"
                  >
                    Cancel
                  </button>
                </div>

                {/* save this address button */}
                <div className="text-center w-full md:w-3/4">
                  <button
                    type="submit"
                    className="bg-black w-full hover:bg-[#E83F25] px-12 text-white py-4 rounded-lg font-semibold md:text-md "
                  >
                    Save This Address
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
        {/* Here there will be order summary, Now currently all the values will be hardcoded but as per the need the values can be taken as per the product price and quantity with some tax calculation */}
        <div className="md:w-[40%] bg-gray-200 rounded-lg md:py-6  md:px-10 py-5 px-4">
          <div className="w-[90%]">
            <p className="md:text-base text-[12px]">
              By placing your order, you agree to our company{" "}
              <span className="font-semibold cursor-pointer">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="font-semibold cursor-pointer">
                Conditions of use
              </span>
            </p>
          </div>
          <div className="w-full h-[1px] bg-gray-400 my-3 md:my-5"></div>
          <div>
            <h2 className=" md:text-lg tracking-wider font-medium">
              Order Summary
            </h2>
          </div>
          <div className="text-gray-800 my-5 md:my-6 md:text-base text-sm">
            {/* prices */}
            <div className="flex justify-between">
              <p>Items - Silhoutte No. 1 - Vermilion - ({productDetails.quantity})</p>
              <p>{productPrize.toLocaleString('en-IN')}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping and handling:</p>
              <p>200</p>
            </div>
            <div className="flex justify-between">
              <p>Before Tax:</p>
              <p>{Math.floor(priceBeforeTax).toLocaleString("en-IN")}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax Collected:</p>
              <p>{taxCollected}</p>
            </div>
          </div>
          {/* horizontal line */}
          <div className="w-full h-[1px] bg-gray-400  my-5 mt-10"></div>
          <div className="flex justify-between font-medium text-md md:text-lg">
            <h3>Order Total:</h3>
            <p>{(productPrize + 200 + taxCollected).toLocaleString('en-IN')}</p>
          </div>
          {/* Place Order button */}
          <div className="w-full mx-auto mb-2 mt-8">
            <button onClick={placeOrder} className="bg-black text-md w-full hover:bg-[#E83F25] px-12 text-white py-4 rounded-lg">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
