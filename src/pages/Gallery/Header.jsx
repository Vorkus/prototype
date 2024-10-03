import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const asideRef = useRef(null); // This will reference the <aside> element

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle clicks outside the aside
  const handleClickOutside = (event) => {
    if (asideRef.current && !asideRef.current.contains(event.target)) {
      setIsOpen(false); // Close the menu if click is outside
    }
  };

  // Add event listener when component mounts and clean it up when it unmounts
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    // Cleanup event listener when component unmounts or isOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <header className="m-4 flex items-center justify-between rounded-3xl bg-teal-50/50 p-2 lg:mx-20 lg:my-6 lg:p-4">
        <img
          className="ml-2 w-8 lg:w-10"
          src={"/prototype/logo.png"}
          alt="logo"
        />

        {/*Burguer*/}
        <div className="mr-3 block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex h-6 w-6 flex-col justify-center space-y-1 focus:outline-none"
          >
            <span className={"block h-0.5 w-full bg-black"} />
            <span className={"block h-0.5 w-full bg-black"} />
            <span className={"block h-0.5 w-full bg-black"} />
          </button>
        </div>

        {/*Horizontal menu*/}
        <nav className={`mr-14 hidden md:flex`}>
          <ul className="flex flex-row space-x-8 space-y-0 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/editor">Editor</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/*Vertical menu*/}
      <aside
        ref={asideRef}
        className={` ${isOpen ? "translate-x-0" : "translate-x-full"} fixed bottom-0 right-0 top-0 w-3/4 transform divide-y bg-white transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="m-4 flex items-center justify-between">
          <div>
            <img
              className="ml-2 w-8 lg:w-10"
              src={"/prototype/logo.png"}
              alt="logo"
            />
          </div>
          <button
            onClick={toggleMenu}
            className="flex h-5 w-5 flex-col justify-center focus:outline-none"
          >
            <span
              className={
                "block h-0.5 w-full translate-y-0.5 rotate-45 bg-black"
              }
            />
            <span className={"block h-0.5 w-full -rotate-45 bg-black"} />
          </button>
        </div>

        <nav className="flex flex-col items-start font-semibold">
          <ul className="px-8 py-6">
            <li className="p-4 text-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 text-lg">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="p-4 text-lg">
              <Link to="/editor">Editor</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Header;
