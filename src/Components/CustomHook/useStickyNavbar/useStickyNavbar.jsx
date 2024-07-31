import { useEffect, useState } from "react";

const useStickyNavbar = (threshold = 70) => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isSticky;
};

export default useStickyNavbar;
