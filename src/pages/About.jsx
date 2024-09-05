import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import uc from "../assets/uc1.png";
import Contact from "../components/Contact";
import ErrorImage from "../components/ErrorImage";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";

function About() {
  const [themeColor, setThemeColor] = useState("");

  useEffect(() => {
    // Fetching the theme color for the About page from the backend API
    axios
      .get("http://127.0.0.1:8000/themecolors/")
      .then((response) => {
        // Finding the color for the About page from the API response
        const aboutColor = response.data.find(
          (theme) => theme.page_name === "about",
        );
        if (aboutColor) {
          setThemeColor(aboutColor.color_code);
        } else {
          console.error("About page color not found in the API response");
        }
      })
      .catch((error) => {
        console.error("Error fetching theme color:", error);
      });
  }, []);

  return (
    <div className={themeColor}>
      <div className="p-4">
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <img
            src={logo}
            alt="Logo"
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
        <div className="Pagebg mt-4 h-[calc(100vh-156px)] items-center justify-center">
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

export default About;
