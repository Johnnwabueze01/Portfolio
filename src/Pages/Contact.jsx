import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(false);
    setError(false);
    setLoading(true); 

    emailjs
      .send(
        "service_6nnh49c", 
        "template_9fabb6x",
        formData,
        "modk31nZ48pATynwX" 
      )
      .then(
        (response) => {
          console.log("Message sent successfully!", response);
          setLoading(false);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" }); 
          setTimeout(() => {
            setIsSent(false);
          }, 3000);
        },
        (error) => {
          console.error("Failed to send message", error);
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="flex items-center justify-center md:min-h-screen">
      {/*Loader */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-90 z-50">
          <FontAwesomeIcon icon={faSpinner} spin className="text-white text-6xl"/>
        </div>
      )}

      {/* Confirmation Modal*/}
      {isSent && !loading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-80 z-50">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-7xl animate-bounce" />
          <h2 className="text-3xl font-bold text-green-700 mt-4">Message Sent!</h2>
          <p className="text-white mt-2">Thank you for reaching out. I'll get back to you soon!</p>
        </div>
      )}

      {/* Contact Form */}
      {!isSent && !loading && (
        <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center text-white">Contact Me</h2>
          <p className="text-center mb-6 text-white">Let's build something awesome together!</p>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 bg-red-100 p-3 rounded-md text-center">
              ❌ Failed to send message. Check your internet connection and try again.
            </p>
          )}

          <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
                required
              />
            </div>

            <div>
              <label className="block font-medium  text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
                required
              />
            </div>

            <div>
              <label className="block font-medium  text-white">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium border-2 border-white transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Contact;
