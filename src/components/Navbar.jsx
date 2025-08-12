import { useEffect, useState } from 'react';

export default function Navbar({ currentPath }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: 'https://unicrawl.wbsoftech.com/price/' },
    { label: 'Blogs', href: 'https://unicrawl.wbsoftech.com/blog/' },
  ];

  const [path, setPath] = useState(currentPath || "/");
  useEffect(() => {
    // Update on client so window.location is correct
    if (typeof window !== "undefined") setPath(window.location.pathname);
  }, []);

  const isActive = (href) => {
    try {
      if (href.startsWith("http")) {
        // external absolute URL — compare pathname only
        const u = new URL(href);
        return u.pathname === path;
      }
      return href === path;
    } catch (err) {
      return href === path;
    }
  };

  return (
    <div className="relative  flex-col flex items-center justify-center mx-auto ">
      {/* Main Nav */}
      <nav className="bg-white rounded-full min-w-xs fixed shadow-md px-8 py-4 top-4 md:w-8/12 md:max-w-screen-2xl mx-auto mt-6 z-80 flex items-center justify-between">
        <div className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          UNICRAWL
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
           <li className="relative px-16"></li>
          {navLinks.map(({ label, href }) => (
            <li key={href} className="relative">
              <a
                href={href}
                className={`text-gray-700 font-medium hover:text-blue-600 transition duration-200 ${
                  isActive(href) ? 'text-blue-600' : ''
                }`}
              >
                {label}
              </a>
              {isActive(href) && (
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full h-[3px] bg-blue-500 rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/#" className="text-gradient font-medium hover:underline">
            Sign Up
          </a>
          <a
            href="/#"
            className="primary-gradient w-42 text-white px-8 py-2 rounded-full text-center shadow-md hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden focus:outline-none"
        >
         <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
<path d="M8.25 9.625H15.125C15.4897 9.625 15.8394 9.76987 16.0973 10.0277C16.3551 10.2856 16.5 10.6353 16.5 11C16.5 11.3647 16.3551 11.7144 16.0973 11.9723C15.8394 12.2301 15.4897 12.375 15.125 12.375H8.25C7.88533 12.375 7.53559 12.2301 7.27773 11.9723C7.01987 11.7144 6.875 11.3647 6.875 11C6.875 10.6353 7.01987 10.2856 7.27773 10.0277C7.53559 9.76987 7.88533 9.625 8.25 9.625ZM17.875 20.625H24.75C25.1147 20.625 25.4644 20.7699 25.7223 21.0277C25.9801 21.2856 26.125 21.6353 26.125 22C26.125 22.3647 25.9801 22.7144 25.7223 22.9723C25.4644 23.2301 25.1147 23.375 24.75 23.375H17.875C17.5103 23.375 17.1606 23.2301 16.9027 22.9723C16.6449 22.7144 16.5 22.3647 16.5 22C16.5 21.6353 16.6449 21.2856 16.9027 21.0277C17.1606 20.7699 17.5103 20.625 17.875 20.625ZM8.25 15.125H24.75C25.1147 15.125 25.4644 15.2699 25.7223 15.5277C25.9801 15.7856 26.125 16.1353 26.125 16.5C26.125 16.8647 25.9801 17.2144 25.7223 17.4723C25.4644 17.7301 25.1147 17.875 24.75 17.875H8.25C7.88533 17.875 7.53559 17.7301 7.27773 17.4723C7.01987 17.2144 6.875 16.8647 6.875 16.5C6.875 16.1353 7.01987 15.7856 7.27773 15.5277C7.53559 15.2699 7.88533 15.125 8.25 15.125Z" fill="url(#paint0_linear_126_66)"/>
<defs>
<linearGradient id="paint0_linear_126_66" x1="16.5" y1="9.625" x2="16.5" y2="23.375" gradientUnits="userSpaceOnUse">
<stop stopColor="#02A6FF"/>
<stop offset="1" stopColor="#3C54DF"/>
</linearGradient>
</defs>
</svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-90 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex justify-between items-center ">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
            UNICRAWL
          </span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-2xl text-gray-700">
            &times;
          </button>
        </div>

        <ul className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-gray-800 font-medium text-lg hover:text-blue-600 transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex  items-center gap-6 px-6 mt-4">
          <a href="/signup" className="text-gradient font-medium ">
            Sign Up
          </a>
          <a
            href="/get-started"
            className="primary-gradient text-white text-center px-6 py-2 rounded-full shadow-md hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
