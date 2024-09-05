import logo from "../assets/logo.png";
import uc from "../assets/uc4.png";
import Contact from "../components/Contact";
import ErrorImage from "../components/ErrorImage";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";

function Medias({ themeColor }) {
  return (
    <div className={themeColor}>
      <div className="p-4">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <img
            src={logo}
            alt=""
            className="hidden h-[108px] w-[400px] md:block"
          />
          <div className="w-full">
            <div className="flex h-[43px] flex-col items-center justify-between md:flex-row">
              <Contact />
              <SocialMedia />
            </div>
            <Navbar />
          </div>
        </div>
        <div className=" Pagebg mt-4 h-[calc(100vh-156px)] items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="m-4 text-4xl text-gray-700">
              This page is currently under Construction
            </div>
            <div className="text-2xl text-gray-600">
              Don't forget to visit us soon!
            </div>
            <ErrorImage src={uc} altText={"Under Construction page"} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Medias;
