import React, { useState } from "react";
import { SplitText } from "./SplitText";

const QuickQuery = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Query submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#862422]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-black/5 blur-2xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            <SplitText text="Quick Query" />
          </h1>
          <p className="text-gray-600 tracking-wide max-w-xl mx-auto">
            Tell us about your exhibition or event.  
            Our experts will contact you within 24 hours.
          </p>
        </div>

        {/* Form Card */}
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2">
          
          {/* Left Side */}
          <div className="bg-black text-white p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Let’s build something extraordinary
              </h2>
              <p className="text-gray-300 leading-relaxed mb-10">
                Share your project details and get a custom
                exhibition stand concept from our design team.
              </p>
            </div>

            <div className="space-y-3 text-gray-400 text-sm">
              <p>📍 Sector 63 Noida</p>
              <p>📞 0120 4382524</p>
              <p>✉️ info@nakashi.co</p>
            </div>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit}
            className="p-12 grid gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="border-b border-gray-300 py-3 outline-none focus:border-black transition"
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="border-b border-gray-300 py-3 outline-none focus:border-black transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="border-b border-gray-300 py-3 outline-none focus:border-black transition"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="border-b border-gray-300 py-3 outline-none focus:border-black transition"
            />

            <textarea
              name="message"
              placeholder="Tell us about your project"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="border-b border-gray-300 py-3 outline-none focus:border-black transition resize-none"
            />

            <button
              type="submit"
              className="mt-6 bg-black text-white py-4 font-bold tracking-widest hover:bg-[#862422] transition"
            >
              SEND QUERY →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickQuery;
