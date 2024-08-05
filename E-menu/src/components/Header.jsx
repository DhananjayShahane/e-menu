import Logo from "./Logo";
import {
  Bars3Icon,
  BuildingOfficeIcon,
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectItemsInCart } from "../features/cart/cartSlice";
import {
  closeLocationModal,
  openLocationModal,
  toggleMenu,
} from "../features/app/appSlice";
import LocationModal from "./LocationModal";
import { selectAddress } from "../features/address/addressSlice";
import MobileNavigation from "./MobileNavigation"



const Header = () => {
  const { isMenuOpen, isLocationModalOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const items = useSelector(selectItemsInCart);
  const { address } = useSelector(selectAddress);

  const handleToggleMenu = () => dispatch(toggleMenu());

  const handleCloseModal = () => dispatch(closeLocationModal());
  const handleOpenModal = () => dispatch(openLocationModal());

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-30 px-4 w-full items-center backdrop-blur transition-all border-b shadow-sm border-gray-100 duration-300 bg-transparent">
        <div className="flex h-14 items-center lg:h-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 items-center gap-4 lg:grid-cols-3">
              <div className="flex">
                <button className="block lg:hidden" onClick={handleToggleMenu}>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="me-4 text-default-600 "
                    height="28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                </button>
                <Logo/>
              </div>
              <ul className="menu relative hidden items-center justify-center lg:flex">
                <li>
                  <Link
                    to="/"
                    className="inline-flex items-center text-sm lg:text-base font-medium text-default-800 py-2 px-4 "
                    data-menu-key="home-page"
                    href="/yum_b/home"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="inline-flex items-center text-sm lg:text-base font-medium text-default-800 py-2 px-4 "
                    data-menu-key="about-page"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-flex items-center text-sm lg:text-base font-medium text-default-800 py-2 px-4 "
                    data-menu-key="contact-page"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="flex items-center justify-end gap-x-6">
                <li className="menu-item relative hidden 2xl:flex">
                  <form>
                    <div className="relative w-72">
                      <input
                        type="search"
                        placeholder="Search for items..."
                        className="form-input w-full rounded-full border-transparent border px-4 py-1.5 ps-10"
                        value=""
                        spellCheck="false"
                      />
                      <span className="absolute start-3 top-1/2 -translate-y-1/2">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary-500"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.3-4.3"></path>
                        </svg>
                      </span>
                    </div>
                    <button className="hidden" type="submit"></button>
                  </form>
                </li>
                <li className="menu-item flex">
                  <Link
                    className="relative flex text-base text-default-600 transition-all"
                    to="/cart"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="8" cy="21" r="1"></circle>
                      <circle cx="19" cy="21" r="1"></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </svg>
                    {
                      <p className="absolute -top-3 -right-3 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full">
                        {items.length}
                      </p>
                    }
                  </Link>
                </li>

                <li className="menu-item flex">
                  <div className="hs-dropdown relative inline-flex [--placement:bottom] [--trigger:hover]">
                    <div className="hs-dropdown-toggle relative flex cursor-pointer items-center text-base text-default-600 transition-all after:absolute after:inset-0  hover:after:-bottom-10">
                      {isLoading ? null : isAuthenticated ? (
                        <button
                          onClick={() => loginWithRedirect()}
                          className="ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 md:flex"
                        >
                          Logout{" "}
                        </button>
                      ) : (
                        <button
                          onClick={() => loginWithRedirect()}
                          className="ml-auto p-2 px-4 rounded-md items-center gap-2 md:flex"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              </ul>

              {!isMenuOpen ? (
                <div className="shadow-lg transition-all fixed top-full -left-[100%] bg-white h-screen p-4 px-8">
                  <>
                    <ul className="text-zinc-700 space-y-4">
                      <li>
                        <Link
                          to="/search"
                          className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                        >
                          <MagnifyingGlassIcon className="w-4 h-4 text-gray-700" />{" "}
                          <p>Search</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                        >
                          <HomeIcon className="w-4 h-4 text-gray-700" />{" "}
                          <p>Home</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                        >
                          <BuildingOfficeIcon className="w-4 h-4 text-gray-700" />{" "}
                          <p>About</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                        >
                          <PhoneIcon className="w-4 h-4 text-gray-700" />{" "}
                          <p>Contact</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cart"
                          className="p-2 relative md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                        >
                          <ShoppingBagIcon className="w-4 h-4 text-gray-700" />
                          <p>Cart</p>
                          {
                            <p className="absolute -top-1 -right-1 bg-orange-500 text-white flex justify-center items-center w-5 h-5 text-xs rounded-full">
                              {items.length}
                            </p>
                          }
                        </Link>
                      </li>
                    </ul>
                    {isLoading ? null : isAuthenticated ? (
                      <button
                        onClick={() => loginWithRedirect()}
                        className="ml-2 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex"
                      >
                        Logout{" "}
                      </button>
                    ) : (
                      <button
                        onClick={() => loginWithRedirect()}
                        className="ml-2 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex"
                      >
                        Login
                      </button>
                    )}
                  </>
                </div>
              ) : (
                <div className="shadow-lg transition-all md:hidden absolute top-full w-full left-0 bg-white h-screen p-4 px-8">
                  <>
                    <ul className="text-zinc-700 space-y-4 flex flex-col justify-center items-center">
                      <li>
                        <Link
                          to="/search"
                          className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                        >
                          <MagnifyingGlassIcon className="w-4 h-4 text-gray-700" />{" "}
                          <p>Search</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                        >
                          <HomeIcon className="w-4 h-4 text-gray-700" />{" "}
                          <p>Home</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                          className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                        >
                          <BuildingOfficeIcon className="w-4 h-4 text-gray-700" />{" "}
                          <p>About</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2"
                        >
                          <PhoneIcon className="w-4 h-4 text-gray-700" />{" "}
                          <p>Contact</p>
                        </Link>
                      </li>
                    </ul>
                    {isLoading ? null : isAuthenticated ? (
                      <button
                        onClick={() => loginWithRedirect()}
                        className="ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex"
                      >
                        Logout{" "}
                      </button>
                    ) : (
                      <button
                        onClick={() => loginWithRedirect()}
                        className="ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex"
                      >
                        Login
                      </button>
                    )}
                  </>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <MobileNavigation/>
    </>
  );
};
export default Header;
