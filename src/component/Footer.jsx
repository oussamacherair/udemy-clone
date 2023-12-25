import React from 'react';
import { CiGlobe } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-8">
      <div className="container mx-auto flex flex-wrap justify-between">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h4 className="text-lg font-bold mb-4">Column 1</h4>
          <ul>
            <li className="hover:underline py-2">Udemy Business</li>
            <li className="hover:underline py-2">Teach on Udemy</li>
            <li className="hover:underline py-2">Get the app</li>
            <li className="hover:underline py-2">About us</li>
            <li className="hover:underline py-2">Contact us</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h4 className="text-lg font-bold mb-4">Column 2</h4>
          <ul>
            <li className="hover:underline py-2">Careers</li>
            <li className="hover:underline py-2">Blog</li>
            <li className="hover:underline py-2">Help and Support</li>
            <li className="hover:underline py-2">Affiliate</li>
            <li className="hover:underline py-2">Investors</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <h4 className="text-lg font-bold mb-4">Column 3</h4>
          <ul>
            <li className="hover:underline py-2">Terms</li>
            <li className="hover:underline py-2">Privacy policy</li>
            <li className="hover:underline py-2">Sitemap</li>
            <li className="hover:underline py-2">Accessibility statement</li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-4">
         <div className='border-2 md:w-1/2 border-white flex items-center py-3 px-4'>
            <CiGlobe className='text-3xl'/>
            <span className='mr-2'>English</span>
         </div>
        </div>
      </div>

      <div className="text-center md:text-right my-8">
        <p>&copy; 2023 Your Company. All Rights Reserved.</p>
      </div>
      <div>
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"  className='h-9 object-contain cursor-pointer' alt='udemy' />
      </div>
    </footer>
  );
};

export default Footer;