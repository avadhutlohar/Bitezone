// ContactUs.js
import React from "react";

function Contact() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">
        Have questions, suggestions, or just want to say hello? We'd love to
        hear from you! Feel free to reach out to us through the following
        channels:
      </p>
      <div className="mt-4">
        <p className="text-lg">
          <strong>Email:</strong> info@bitezone.com
        </p>
        <p className="text-lg">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p className="text-lg">
          <strong>Address:</strong> 123 Street, Cityville, State, 12345
        </p>
      </div>
    </div>
  );
}

export default Contact;
