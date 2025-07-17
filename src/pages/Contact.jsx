import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = form;

    // Format WhatsApp message
    const text = `*Contact Inquiry*%0A
*Name:* ${name}%0A
*Email:* ${email}%0A
*Phone:* ${phone}%0A
*Message:* ${message}`;

    // Your WhatsApp number with country code (no + symbol)
    const phoneNumber = "916352207050";

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-semibold mb-10 text-center">Contact Us</h1>

      <form onSubmit={handleSend} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="border rounded-lg px-4 py-3 w-full focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            onChange={handleChange}
            className="border rounded-lg px-4 py-3 w-full focus:outline-none"
          />
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 w-full focus:outline-none"
        />

        <textarea
          rows="5"
          name="message"
          placeholder="Comment"
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 w-full focus:outline-none"
        ></textarea>

        <div className="text-center">
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-black group transition-all duration-300"
          >
            <span className="inline-block transition-transform duration-300 group-hover:scale-110">
              Send
            </span>
          </button>

        </div>
      </form>
    </div>
  );
};

export default Contact;
