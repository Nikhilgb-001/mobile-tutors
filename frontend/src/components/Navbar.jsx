// // import { useState } from "react";
// // import { Link } from "react-router-dom";

// // const Navbar = () => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   };

// //   return (
// //     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
// //       <div className="container mx-auto flex items-center justify-between py-4 px-6">
// //         {/* Logo */}
// //         <div className="flex items-center space-x-2">
// //           <img
// //             src="https://mobiletutors.co.uk/wp-content/uploads/2021/12/cropped-Mobile-Tutors-Logo-B16-clear-background-300x146.png"
// //             alt="Logo"
// //             className="h-16"
// //           />
// //         </div>

// //         {/* Desktop Navigation Links */}
// //         <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
// //           <Link className="hover:text-gray-800 cursor-pointer">Home</Link>
// //           <Link className="hover:text-gray-800 cursor-pointer">About Us</Link>
// //           <Link className="relative group">
// //             <span className="hover:text-gray-800 cursor-pointer">Courses</span>
// //             {/* Dropdown */}
// //             <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 mt-1">
// //               <Link className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
// //                 Course 1
// //               </Link>
// //               <Link className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
// //                 Course 2
// //               </Link>
// //             </ul>
// //           </Link>
// //           <Link className="hover:text-gray-800 cursor-pointer">FAQs</Link>
// //           <Link className="hover:text-gray-800 cursor-pointer">
// //             Testimonials
// //           </Link>
// //           <Link className="hover:text-gray-800 cursor-pointer">Blog</Link>
// //         </ul>

// //         {/* Call-to-Action Buttons */}
// //         <div className="hidden md:flex items-center space-x-4">
// //           <Link
// //             to="/get-started"
// //             className="bg-[#4C47C0] text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600"
// //           >
// //             Get Started
// //           </Link>
// //           <button className="border border-gray-500 px-4 py-2 rounded-full font-medium hover:bg-gray-100">
// //             Log in
// //           </button>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div className="md:hidden flex items-center">
// //           <button
// //             onClick={toggleMobileMenu}
// //             className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
// //           >
// //             <svg
// //               xmlns="http://www.w3.org/2000/svg"
// //               className="h-6 w-6"
// //               fill="none"
// //               viewBox="0 0 24 24"
// //               stroke="currentColor"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M4 6h16M4 12h16m-7 6h7"
// //               />
// //             </svg>
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMobileMenuOpen && (
// //         <div className="md:hidden bg-white px-6 py-4 shadow-md">
// //           <ul className="space-y-4 text-gray-600 font-medium">
// //             <li className="hover:text-gray-800 cursor-pointer">Home</li>
// //             <li className="hover:text-gray-800 cursor-pointer">About Us</li>
// //             <li className="hover:text-gray-800 cursor-pointer">Courses</li>
// //             <li className="hover:text-gray-800 cursor-pointer">FAQs</li>
// //             <li className="hover:text-gray-800 cursor-pointer">Testimonials</li>
// //             <li className="hover:text-gray-800 cursor-pointer">Blog</li>
// //             <li>
// //               <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600">
// //                 Get Started
// //               </button>
// //             </li>
// //             <li>
// //               <button className="w-full border border-gray-500 px-4 py-2 rounded-full font-medium hover:bg-gray-100">
// //                 Log in
// //               </button>
// //             </li>
// //           </ul>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="container mx-auto flex items-center justify-between py-3 px-6">
//         <div className="flex items-center space-x-2">
//           <img
//             src="https://mobiletutors.co.uk/wp-content/uploads/2021/12/cropped-Mobile-Tutors-Logo-B16-clear-background-300x146.png"
//             alt="Logo"
//             className="h-16"
//           />
//         </div>

//         <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
//           <Link to="/" className="hover:text-gray-800 cursor-pointer">
//             Home
//           </Link>
//           <Link to="/" className="hover:text-gray-800 cursor-pointer">
//             About Us
//           </Link>
//           <Link to="/" className="relative group">
//             <span className="hover:text-gray-800 cursor-pointer">Courses</span>
//             <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg py-2 mt-1">
//               <Link
//                 to="/"
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               >
//                 Course 1
//               </Link>
//               <Link
//                 to="/"
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               >
//                 Course 2
//               </Link>
//             </ul>
//           </Link>
//           <Link to="/" className="hover:text-gray-800 cursor-pointer">
//             FAQs
//           </Link>
//           <Link to="/" className="hover:text-gray-800 cursor-pointer">
//             Testimonials
//           </Link>
//           <Link to="/" className="hover:text-gray-800 cursor-pointer">
//             Blog
//           </Link>
//         </ul>

//         <div className="hidden md:flex items-center space-x-4">
//           <Link
//             to="/get-started"
//             className="bg-[#4C47C0] text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600"
//           >
//             Get Started
//           </Link>
//           <button className="border border-gray-500 px-4 py-2 rounded-full font-medium hover:bg-gray-100">
//             Log in
//           </button>
//         </div>

//         <div className="md:hidden flex items-center">
//           <button
//             onClick={toggleMobileMenu}
//             className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white px-6 py-4 shadow-md">
//           <ul className="space-y-4 text-gray-600 font-medium">
//             <li>
//               <Link to="/" className="hover:text-gray-800 cursor-pointer">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/" className="hover:text-gray-800 cursor-pointer">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/" className="hover:text-gray-800 cursor-pointer">
//                 Courses
//               </Link>
//             </li>
//             <li>
//               <Link to="/" className="hover:text-gray-800 cursor-pointer">
//                 FAQs
//               </Link>
//             </li>
//             <li>
//               <Link to="/" className="hover:text-gray-800 cursor-pointer">
//                 Testimonials
//               </Link>
//             </li>
//             <li>
//               <Link to="/" className="hover:text-gray-800 cursor-pointer">
//                 Blog
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/get-started"
//                 className="w-full bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600"
//               >
//                 Get Started
//               </Link>
//             </li>
//             <li>
//               <button className="w-full border border-gray-500 px-4 py-2 rounded-full font-medium hover:bg-gray-100">
//                 Log in
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileContactDropdownOpen, setIsMobileContactDropdownOpen] =
    useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset mobile contact dropdown when closing the menu
    if (isMobileMenuOpen) {
      setIsMobileContactDropdownOpen(false);
    }
  };

  const toggleMobileContactDropdown = () => {
    setIsMobileContactDropdownOpen(!isMobileContactDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsMobileContactDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <div className="flex items-center space-x-2">
          <img
            src="https://d1wqzb5bdbcre6.cloudfront.net/30ffedd81ca2bb96e51bda32362bb0563bd2a702b40b62acdb7ee1dc8643ec4b/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878536a4e705530684a4d553534626d64585548673566475a6662476c325a5639795646553053466c495a466b77536a684c53584a4b6230517a636d747657474d30304b43447054784736"
            alt="Logo"
            className="h-16"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <li>
            <Link to="/" className="hover:text-gray-800 cursor-pointer">
              Home
            </Link>
          </li>
          <li className="relative group">
            <span className="cursor-pointer hover:text-gray-800">
              Contact Us
            </span>
            <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
              <li>
                <Link
                  to="/contact-us"
                  className="block px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/apply-for-tutor"
                  className="block px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Apply for Tutor
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/courses" className="hover:text-gray-800 cursor-pointer">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="hover:text-gray-800 cursor-pointer">
              FAQs
            </Link>
          </li>
          <li>
            <Link
              to="/testimonials"
              className="hover:text-gray-800 cursor-pointer"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-800 cursor-pointer">
              Blog
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/get-started"
            className="bg-[#4C47C0] text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600"
          >
            Get Started
          </Link>
          <button className="border border-gray-500 px-4 py-2 rounded-full font-medium hover:bg-gray-100">
            Log in
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md">
          <ul className="space-y-4 text-gray-600 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-gray-800 cursor-pointer"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={toggleMobileContactDropdown}
                className="w-full text-left hover:text-gray-800"
              >
                Contact Us
              </button>
              {isMobileContactDropdownOpen && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link
                      to="/contact-us"
                      className="hover:text-gray-800 cursor-pointer"
                      onClick={handleLinkClick}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/apply-for-tutor"
                      className="hover:text-gray-800 cursor-pointer"
                      onClick={handleLinkClick}
                    >
                      Apply for Tutor
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/courses"
                className="hover:text-gray-800 cursor-pointer"
                onClick={handleLinkClick}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="hover:text-gray-800 cursor-pointer"
                onClick={handleLinkClick}
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="hover:text-gray-800 cursor-pointer"
                onClick={handleLinkClick}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-gray-800 cursor-pointer"
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/get-started"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600"
                onClick={handleLinkClick}
              >
                Get Started
              </Link>
            </li>
            <li>
              <button className="w-full border border-gray-500 px-4 py-2 rounded-full font-medium hover:bg-gray-100">
                Log in
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
