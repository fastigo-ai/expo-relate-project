import React, { useState } from "react";
import pdf from "/public/stand-portfolio.pdf";
import { SplitText } from "./SplitText";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  files: File[];
  consent: boolean;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    files: [],
    consent: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        files: Array.from(e.target.files || []),
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen ">
      {/* Top Section - White Background */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h1 className="text-8xl md:text-9xl lg:text-10xl font-black mb-5">
              <SplitText text="Contact" />
            </h1>
          </div>

          <div className="flex justify-between gap-20 items-center">
            <div className="flex-1">
              <p className="text-gray-600 leading-relaxed mb-2">Sector 63-</p>
              <p className="text-gray-600 leading-relaxed mb-2">123456 Noida</p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Uttar Pradesh
              </p>

              <div className="mt-8">
                <p className="text-gray-600 leading-relaxed mb-2">
                  tel.: 0120 4382524
                </p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  email: info@nakashi.co
                </p>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-gray-600 mb-8 leading-relaxed">
                tell us more
                <br />
                about your expectations
              </p>

              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-gray-900 font-bold text-lg hover:underline"
                >
                  fill brief
                </a>

                <a
                  href="/stand-portfolio.pdf"
                  download
                  className="block text-gray-900 font-bold text-lg hover:underline"
                >
                  download the stand portfolio
                </a>

                <a
                  href="/lighting-catalog.pdf"
                  download
                  className="block text-gray-900 font-bold text-lg hover:underline"
                >
                  download the lighting catalog
                </a>

                <a
                  href="/equipment-catalog.pdf"
                  download
                  className="block text-gray-900 font-bold text-lg hover:underline"
                >
                  download the equipment catalog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Black Background */}
      <div className="bg-black text-white py-20 pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-3">HOW CAN WE HELP YOU?</h2>
            <h3 className="text-3xl font-normal text-gray-300">CONTACT US</h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto text-white"
          >
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-10 mb-10">
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  placeholder="name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 text-white text-lg py-4 pl-3 outline-none focus:border-white placeholder-gray-400"
                  required
                />
              </div>

              <div className="flex-1">
                <input
                  type="text"
                  name="company"
                  placeholder="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 text-white text-lg py-4 pl-3 outline-none focus:border-white placeholder-gray-400"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-10 mb-10">
              <div className="flex-1">
                <input
                  type="tel"
                  name="phone"
                  placeholder="phone*"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 text-white text-lg py-4  pl-3 outline-none focus:border-white placeholder-gray-400"
                  required
                />
              </div>

              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  placeholder="e-mail*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 text-white text-lg py-4 pl-3 outline-none focus:border-white placeholder-gray-400"
                  required
                />
              </div>
            </div>

            {/* File Upload */}
            <div className="my-16">
              <label className="block text-gray-400 text-sm mb-4">
                Add files:
                <br />
                (brief, inspiration photos,
                <br />
                photos of previous stands, design in PDF)
              </label>

              <div className="border border-dashed border-gray-600 p-20 text-center cursor-pointer hover:border-white transition-colors">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-5xl text-gray-400 hover:text-white transition">
                    +
                  </div>
                </label>
              </div>
            </div>

            {/* Consent */}
            <div className="my-10">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="mt-1 scale-125 accent-white"
                  required
                />
                <p className="text-xs text-gray-400 leading-relaxed">
                  I consent to the processing of my personal data by Smart
                  Design Expo Sp. z o.o. in accordance with GDPR.
                  <a href="#" className="underline ml-1 hover:text-white">
                    Read more
                  </a>
                </p>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end mb-16">
              <button
                type="submit"
                className="border border-gray-600 px-12 py-4 font-bold hover:bg-white hover:text-black transition-all"
              >
                SEND
              </button>
            </div>

            {/* Footer */}
            <div className="flex flex-col md:flex-row justify-between mt-20 pt-10 border-t border-gray-700 text-gray-400">
              <div>
                <a
                  href="#"
                  className="text-white font-bold block mb-2 hover:underline"
                >
                  fill brief
                </a>
                <a
                  href={pdf}
                  download
                  className="text-white font-bold block mb-6 hover:underline"
                >
                  download stand portfolio
                </a>

                <p>Sector 63-</p>
                <p>123456 Noida</p>
                <p>Uttar Pradesh</p>
              </div>

              <div className="text-right mt-10 md:mt-0">
                <p>tel.: 0120 4382524</p>
                <p>email: info@nakashi.co</p>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
