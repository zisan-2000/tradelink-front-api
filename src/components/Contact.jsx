import React, { useEffect, useState } from "react";

function Contact() {
  const [contact, setContact] = useState({ phone: "", email: "" });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/contact/")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setContact(data[0]);
        }
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-between pl-6 text-center text-sm text-white md:w-[400px] md:flex-row md:text-left">
      <div>Tel: {contact.phone}</div>
      <div>Email: {contact.email}</div>
    </div>
  );
}

export default Contact;
