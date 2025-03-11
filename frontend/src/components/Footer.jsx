import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#d4d8f0] text-black">
      <div className="max-w-screen-xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-16 md:gap-10">
        {/* Right Section */}
        <div className="basis-full md:basis-1/2 flex flex-row sm:flex-row gap-8 sm:gap-4">
          {/* Column 1 */}
          <div className="flex-1">
            <h4 className="mb-6 text-zinc-500 capitalize text-center">
              Socials
            </h4>
            {["instagram", "twitter", "facebook"].map((item, index) => (
              <Link
                key={index}
                to="/coming-soon"
                className="mt-2 block text-zinc-600 text-sm capitalize text-center"
              >
                {item === "instagram" && (
                  <FaInstagram className="inline-block mx-auto" />
                )}
                {item === "twitter" && (
                  <FaTwitter className="inline-block mx-auto" />
                )}
                {item === "facebook" && (
                  <FaFacebook className="inline-block mx-auto" />
                )}
              </Link>
            ))}
          </div>
          {/* Column 2 */}
          <div className="flex-1">
            <h4 className="mb-6 text-zinc-500 capitalize text-center sm:text-left">
              Links
            </h4>
            {["home", "about"].map((item, index) => (
              <Link
                to="/"
                key={index}
                className="mt-2 block text-zinc-600 text-sm capitalize text-center sm:text-left"
              >
                {item}
              </Link>
            ))}
          </div>
          {/* Column 3 */}
          <div className="flex-1">
            <h4 className="mb-6 text-zinc-500 capitalize text-center sm:text-left">
              Company
            </h4>
            <span>
              <Link
                to="/terms-and-conditions"
                className="mt-2 block text-zinc-600 text-sm capitalize text-center sm:text-left"
              >
                Terms and Conditions
              </Link>
              <Link
                to="/privacy-policy"
                className="mt-2 block text-zinc-600 text-sm capitalize text-center sm:text-left"
              >
                Privacy and Policy
              </Link>

              <Link
                to="/Cancellation-and-refund-policy"
                className="mt-2 block text-zinc-600 text-sm capitalize text-center sm:text-left"
              >
                Cancellation And RefundPolicy
              </Link>

              <Link
                to="/contact-us"
                className="mt-2 block text-zinc-600 text-sm capitalize text-center sm:text-left"
              >
                Contact us
              </Link>
            </span>
          </div>
        </div>
        <div className="basis-full md:basis-1/2 flex justify-center md:justify-end">
          <Link to={"/"} className="logo">
            <img
              src="https://d1wqzb5bdbcre6.cloudfront.net/30ffedd81ca2bb96e51bda32362bb0563bd2a702b40b62acdb7ee1dc8643ec4b/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878536a4e705530684a4d553534626d64585548673566475a6662476c325a5639795646553053466c495a466b77536a684c53584a4b6230517a636d747657474d30304b43447054784736"
              className="h-52 w-full"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
