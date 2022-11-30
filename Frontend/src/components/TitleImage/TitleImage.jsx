import React from "react";

const TitleImage = ({img = "bg-control-board", margin = "my-5", children}) => {
  return (
    <div
      className={`title-image ${img} overflow-hidden  bg-center bg-no-repeat bg-cover ${margin} flex items-center justify-center h-[10vh]  sm:h-[15vh] md:h-[15vh] mx-3`}
    >
      <div className="title  text-white   leading-3 text-[15px] sm:text-[25px] md:text-[30px] drop-shadow-lg font-semibold">
        {children}
      </div>
    </div>
  );
};

export default TitleImage;
