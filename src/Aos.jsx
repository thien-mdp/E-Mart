import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aos = () => {
  React.useEffect(() => {
    AOS.init();
  });
};

export default Aos;
