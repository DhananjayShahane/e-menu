import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className="p-4 conatiner-max sm:p-6 w-full">
      <div className="border-t border-default-200">
        <div className="container">
          <div className="grid items-center gap-6 py-6 lg:grid-cols-3 lg:py-10">
            <div className="flex items-center justify-center">
              <Logo />
            </div>
            <div className="lg:col-span-2">
              <div className="mb-6 grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 font-semibold text-default-950">About</h5>
                  <div className="text-default-600">
                    <a href="#">About Us</a>
                  </div>
                  <div className="text-default-600">
                    <a href="#">Features</a>
                  </div>
                  <div className="text-default-600">
                    <a href="#">Services</a>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 font-semibold text-default-950">Company</h5>
                  <div className="text-default-600">
                    <a href="#">Our Team</a>
                  </div>
                  <div className="text-default-600">
                    <a href="#">Partner with Us</a>
                  </div>
                  <div className="text-default-600">
                    <a href="#">FAQs</a>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 font-semibold text-default-950">Support</h5>
                  <div className="text-default-600">
                    <a href="">About</a>
                  </div>
                  <div className="text-default-600">
                    <a href="#">Support Center</a>
                  </div>
                  <div className="text-default-600">
                    <a href="#">Feedback</a>
                  </div>
                  <div className="text-default-600">
                    <a href="#">Contact Us</a>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="mb-3 font-semibold text-default-950">
                    Get in touch
                  </h5>
                  <div className="text-default-600">
                    <a href="tel:+1234567891012">(+123) 456 789 123</a>
                  </div>
                  <div className="text-default-600">
                    <a href="mailto:example@mail.com">example@mail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <a className="cursor-pointer" href="#">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-default-600 transition-all hover:text-primary"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </a>
                    <a className="cursor-pointer" href="#">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-default-600 transition-all hover:text-primary"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a className="cursor-pointer" href="#">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-default-600 transition-all hover:text-primary"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a className="cursor-pointer" href="#">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="text-default-600 transition-all hover:text-primary"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full border-t border-default-200 p-6 hide-in-print">
        <div className="container">
          <div className="mb-20 md:mb-3">
            <p className="text-default-600 text-center">
              Powered by BR Tech Solution Pvt Ltd
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
