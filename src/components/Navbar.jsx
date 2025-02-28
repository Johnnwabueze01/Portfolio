import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); 
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">John Nwabueze</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {["home", "about", "project", "skills", "contact"].map((item) => (
            <button
              key={item}
              className="cursor-pointer hover:text-blue-500 transition"
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          
          {/* Resume Download Button */}
          <a
          id="resume"
            href="/Resume.pdf"
            download="John Nwabueze Resume.pdf"
            className=" text-black px-4 py-2 rounded-md font-bold transition"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 p-4 space-y-4 text-center">
          {["home", "about", "project", "skills", "contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}

          {/* Resume Download Button for Mobile */}
          <li>
            <a
            id="resume"
              href="/Resume.pdf"
              download="John Nwabueze Resume.pdf"
              className="block text-black font-bold px-4 py-2 rounded-md transition w-full text-center"
            >
              Download Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;