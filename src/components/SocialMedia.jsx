import React, { useEffect, useState } from "react";

const SocialMedia = () => {
  const [socialLinks, setSocialLinks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/socialmedia/")
      .then((response) => response.json())
      .then((data) => setSocialLinks(data));
  }, []);

  return (
    <div className="flex justify-center space-x-3 py-2 text-white md:justify-end">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          className="text-xl hover:text-gray-300"
        >
          <img src={link.icon} alt={link.name} className="h-[22px] w-[22px]" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
