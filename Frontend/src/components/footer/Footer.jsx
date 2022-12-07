import React from "react";
import styled from "styled-components";
const FooterStyles = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
`;
const Footer = () => {
  return (
    <FooterStyles>
      <div className="mx-auto max-w-[1200px] h-[100px] bg-black overflow-hidden flex items-center justify-center ">
        <span className="cursor-pointer font-semibold text-white hover:text-blue-700">Copyright © 2022 Hoang Hieu - CVS</span>
      </div>
    </FooterStyles>
  );
};

export default Footer;
