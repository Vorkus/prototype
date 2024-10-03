import { useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Gallery() {
  // Using an effect beacause this change is out of scope of React (<body>) and isn't a specific event
  useEffect(() => {
    document.body.classList.add("bg-gallery");

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("bg-gallery");
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1 className="text-3xl font-bold underline">Gallery!</h1>
      </main>
      <Footer />
    </>
  );
}

export default Gallery;
