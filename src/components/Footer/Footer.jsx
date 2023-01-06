import React, { useEffect } from "react";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollTop();
    const scrollup = document.getElementById("scroll");
    window.addEventListener("scroll", function () {
      let scrollPosition = window.pageYOffset;
      if (scrollPosition >= 120) {
        scrollup.classList.add("fixed");
        scrollup.classList.remove("hidden");
      } else {
        scrollup.classList.add("hidden");
      }
    });
  }, []);
  return (
    <footer className="bg-gray-50 py-8 mt-8">
      <button
        id="scroll"
        onClick={scrollTop}
        className="hidden animate-pulse duration-700 right-4 bottom-4 md:right-8 md:bottom-8 rounded-full p-3 bg-black/50 z-0 text-white scale-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
        <span className="sr-only">Back to the Top</span>
      </button>
      <div className="px-4 mx-auto container lg:max-w-6xl text-sm">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Blog</h3>
            <nav>
              <ul>
                <li className="flex">
                  <a className="py-2 w-full" href="/p/about">
                    About Us
                  </a>
                </li>
                <li className="flex">
                  <a className="py-2 w-full" href="/affiliates">
                    Affiliates
                  </a>
                </li>
                <li className="flex">
                  <a className="py-2 w-full" href="/p/contact">
                    Contact Us
                  </a>
                </li>
                <li className="flex">
                  <a className="py-2 w-full" href="/p/partners">
                    Partners
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <nav>
              <ul>
                <li className="flex">
                  <a
                    href="https://facebook.com/frul404t"
                    rel="nofollow noreferrer"
                    target="_blank"
                    className="py-2 w-full"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Legal</h3>
            <nav>
              <ul>
                <li className="flex">
                  <a className="py-2 w-full" href="/p/cookies">
                    Cookies Policy
                  </a>
                </li>
                <li className="flex">
                  <a className="py-2 w-full" href="/p/disclaimer">
                    Disclaimer
                  </a>
                </li>
                <li className="flex">
                  <a className="py-2 w-full" href="/p/privacy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-8">
          <p>Copyright 2022 © fajrul.id. All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
