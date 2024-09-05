import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 border-t border-t-gray-200 py-20  bg-[#333333]">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-gray-300">Freshers JobPortal</h2>
            <p className="text-sm text-gray-300">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>

          <div className=" w-full flex justify-center  ">
          <div className="flex  justify-center md:justify-end space-x-4 mt-4 md:mt-0  w-full  ">
            <a
              href="https://www.instagram.com/_ruhul_amin007/"
              className="hover:text-gray-400 text-gray-300 "
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.849c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.053.07 5.72.13 4.44.396 3.352 1.484 2.264 2.572 1.998 3.852 1.938 5.185.88 8.332.88 15.668 1.938 18.815c.06 1.333.326 2.613 1.414 3.701s2.368 1.353 3.701 1.414c1.068.062 1.482.07 4.947.07s3.879-.008 4.947-.07c1.333-.06 2.613-.326 3.701-1.414s1.353-2.368 1.414-3.701c1.058-3.147 1.058-10.483 0-13.63-.06-1.333-.326-2.613-1.414-3.701C19.56.396 18.28.13 16.947.07 15.668.012 15.265 0 12 0zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.998 3.998 0 1 1 0-7.996 3.998 3.998 0 0 1 0 7.996zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/ruhulamintalukdar/"
              className="hover:text-gray-400 text-gray-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
              </svg>
            </a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
