import React from "react";
import { Link } from "react-router-dom";

 const MobileNavigation = () =>{
    return(
        <>
           <div className="flex lg:hidden">
        <div className="fixed inset-x-0 bottom-0 z-40 grid h-16 w-full grid-cols-3 items-center justify-items-center border-t border-default-200 bg-white dark:bg-default-50">
          <Link
            className="flex flex-col items-center justify-center gap-1 text-default-600"
            type="button"
            to="/"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center gap-1 text-default-600"
            type="button"
            to="/order"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
              <path d="M7 2v20"></path>
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
            </svg>
            <span className="text-xs font-medium">Food</span>
          </Link>
          <Link
            className="flex flex-col items-center justify-center gap-1 text-default-600"
            type="button"
            to="/wishlist"
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span className="text-xs font-medium">Wishlist</span>
          </Link>
        </div>
      </div>
        </>
    )
}

export default MobileNavigation;