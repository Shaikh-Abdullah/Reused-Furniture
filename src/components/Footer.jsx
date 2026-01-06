import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-20 mt-5">
      {/* Top Footer */}
      <div className="section-container flex flex-col md:flex-row gap-8 px-8">
        {/* First Div – 50% */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Panto</h2>
          <p className="md:pr-12">
            YourCompany is dedicated to providing the best quality products to
            enhance your home and lifestyle. We combine style and comfort to
            transform your living spaces into modern sanctuaries.
          </p>
        </div>

        {/* Second Div – 25% */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Third Div – 25% */}
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <FaFacebookF /> <span>Facebook</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <FaTwitter /> <span>Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <FaInstagram /> <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 section-container flex flex-col sm:flex-row justify-center items-center sm:items-center gap-4 px-8 border-t border-gray-300 pt-4">
        <p>
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
