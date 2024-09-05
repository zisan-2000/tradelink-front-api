import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import CarouselDefault from "../components/CarouselDefault";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import SocialMedia from "../components/SocialMedia";

function HomePage() {
  const [themeColor, setThemeColor] = useState("");

  useEffect(() => {
    // Fetching the theme color for the homepage from the backend API
    axios
      .get("http://127.0.0.1:8000/themecolors/")
      .then((response) => {
        // Finding the color for the homepage from the API response
        const homepageColor = response.data.find(
          (theme) => theme.page_name === "homepage",
        );
        if (homepageColor) {
          setThemeColor(homepageColor.color_code);
        } else {
          console.error("Homepage color not found in the API response");
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
        <div className="pt-4">
          <CarouselDefault />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
