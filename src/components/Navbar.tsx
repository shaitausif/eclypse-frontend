import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const menus = [
    
    { name: "About Us", path: "/about" },
    { name: "Waitlist", path: "/waitlist" },
    { name: "Cart", path: "/checkout" },
  ];

  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 right-0 left-0 z-10 inter-font-200 w-full">
      <div className="flex justify-between items-center backdrop-blur-xl bg-black/40 px-4 md:px-10 py-4 md:py-4">
        {/* Logo */}
        <div onClick={() => navigate('/')} className="logo w-6 md:w-24">
          <img className="w-6 md:w-14 rounded-full" src="https://res.cloudinary.com/dhrkajjwf/image/upload/v1747930318/eclipse_mcoho9.jpg" alt="logo" />
        </div>

        {/* Menu */}
        <div className="flex gap-3 md:gap-10 items-center justify-center">
          <ul className="flex gap-3 md:gap-12 list-none text-sm md:text-lg lg:text-xl">
            {menus.map((menu, i) => (
              <li key={i} className="cursor-default">
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `relative after:block after:w-0 after:h-[2px] after:bg-white after:transition-all ${
                      isActive ? "after:w-full" : "after:w-0"
                    } after:duration-300 hover:after:w-full`
                  }
                >
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button onClick={() => navigate('/checkout')} className="rounded-xl bg-white hover:text-white hover:bg-[#E83F25] text-black w-16 md:w-24  h-8 md:h-10 text-sm md:text-base font-semibold">
            Buy
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
