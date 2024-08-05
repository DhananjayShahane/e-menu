const Footer = () => {
  return (
    <footer className="p-4 bg-primary conatiner-max sm:p-6 w-full">
  <div className="flex justify-center md:justify-start items-center">
    <div className="mb-3 md:mb-0"></div>
  </div>
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-4 justify-center justify-items-center">
    <div className="sm:col-span-1">
      <a
        data-testid="logo"
        className="text-xl md:text-4xl font-semibold flex items-center"
        href="/"
      >
        🍔 <span className="font-bold text-2xl">King Food</span>
      </a>
    </div>

    <div>
      <p className="font-semibold">Opening Hours</p>

      <div className="flex flex-col items-start mt-5 space-y-2">
        <p className="transition-colors duration-300 text-gray-400">
          Monday - Friday
        </p>
        <p className="transition-colors duration-300 text-gray-400">
          10:00 AM - 08:00 PM
        </p>
        <p className="transition-colors duration-300 text-gray-400">
          Tel: 010-02-0340
        </p>
      </div>
    </div>

    <div>
      <p className="font-semibold">Contact us</p>

      <div className="flex flex-col items-start mt-5 space-y-2">
        <a
          href="#"
          className="transition-colors duration-300 text-gray-400 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
        >
          Help &amp; Support
        </a>
        <a
          href="#"
          className="transition-colors duration-300 text-gray-400 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
        >
          Partner with us
        </a>
        <a
          href="#"
          className="transition-colors duration-300 text-gray-400 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
        >
          Ride with us
        </a>
      </div>
    </div>

    <div>
      <p className="font-semibold">Legal</p>

      <div className="flex flex-col items-start mt-5 space-y-2">
        <a
          href="#"
          className="transition-colors duration-300 text-gray-400 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
        >
          Terms &amp; Conditions
        </a>
        <a
          href="#"
          className="transition-colors duration-300 text-gray-400 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
        >
          Cookie Policy
        </a>
        <a
          href="#"
          className="transition-colors duration-300 text-gray-400 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  </div>
  <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
    <span className="text-sm text-gray-500 text-center dark:text-gray-400">
      © 2024 KingFood™. All Rights Reserved.
    </span>
    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 md:text-xl">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/qbentil"
        className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:bentilzone@gmail.com"
        className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 12.713l-11.42-8.562A1.994 1.994 0 0 1 2 4h20c.37 0 .718.103 1.02.281L12 12.713zM22 6.26V18c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V6.26l10 7.5 10-7.5z"></path>
        </svg>
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;
