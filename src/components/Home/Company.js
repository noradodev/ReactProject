import React from "react";

function Companies() {
  const img1 =
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg";
  const img2 =
    "https://png.monster/wp-content/uploads/2020/11/Google-Amblem-7c49bdf3.png";
  const img3 =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png";

  const imageContainerStyle = {
    // Set a maximum width for the images
    display: "flex",
    justifyContent: "center", // Center the images horizontally
    alignItems: "center",
    // Center the images vertically
    filter: "grayscale(100%)",
    transition: "all 0.5s",
  };

  return (
    <div className="companies container mx-auto">
      <div className="flex flex-rows gap-10  justify-center py-12 ">
        <div style={imageContainerStyle} className="w-3/12 md:w-1/12">
          <img src={img1} alt="Amazon" />
        </div>
        <div style={imageContainerStyle} className="w-3/12 md:w-1/12">
          <img src={img2} alt="Google" />
        </div>
        <div style={imageContainerStyle} className="w-3/12 md:w-1/12">
          <img src={img3} alt="Microsoft" />
        </div>
      </div>
    </div>
  );
}

export default Companies;
