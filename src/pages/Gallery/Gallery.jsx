import { useEffect } from "react";

function Gallery() {
  // Using an effect beacause this change is out of scope of React (<body>) and isn't a specific event
  useEffect(() => {
    document.body.classList.add("bg-gallery");

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("bg-gallery");
    };
  }, []);

  return <p>Gallerya!</p>;
}

export default Gallery;
