import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,

  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10 text-gray-700 text-sm" id="footer">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center md:text-left">

        {/* MJ Jewellery */}
        <div>
          <h3 className="text-lg font-semibold mb-2 relative inline-block after:block after:h-1 after:bg-bgColorPink after:w-10 after:mt-1">
            Macerick Jewellery
          </h3>
          <p className="mt-2 max-w-xs">
            Where timeless craftsmanship meets bold innovation.
            We are a luxury jewelry brand redefining elegance through original design, ethical sourcing, and masterful artistry. From bespoke engagement rings to avant-garde statement pieces, every creation reflects our maverick spirit—fearless, refined, and personal.

            ✨ Jewelry for the Bold. Elegance for the Visionary.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2 relative inline-block after:block after:h-1 after:bg-bgColorPink after:w-10 after:mt-1">
            Contact Us
          </h3>
          <p className="font-bold mt-2">Macerick Jewellars</p>
          {/* <p>Office No. Tower-G 710</p> */}
          <p>Surat, Gujarat</p>
          <p>India</p>
          <p className="mt-1">Phone: +91 8140240253 </p>
          <p>Email: Info@maverickjewels.com</p>


        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2 relative inline-block after:block after:h-1 after:bg-bgColorPink after:w-10 after:mt-1">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl mt-4">
          <Link to={`https://www.facebook.com/share/14ETQysgDpB/`}>

            <FaFacebookF className="hover:text-bgColorPink cursor-pointer" />
          </Link>

            <Link to={`https://www.instagram.com/maverick.jewels?igsh=N3plMDd4MDBzZXJ4`}>
              <FaInstagram className="hover:text-bgColorPink cursor-pointer" /></Link>
            <Link to={`https://www.linkedin.com/company/maverick-jewels/`}>  <FaLinkedin className="hover:text-bgColorPink cursor-pointer" /></Link>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
