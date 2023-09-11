function TopSection() {
  return (
    <>
      <div className="top-section container mx-auto">
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center m-10 md:m-10">
            <div className="text-section font-satoshi">
              {/* Text */}
              <div className="top-text ">
                <h1 className="text-5xl font-bold">
                  Teams build better products with Align
                </h1>
                <p className="text-green-950">
                  Align is constantly improving to move forward through
                  dashboard, statistics, data and verify and superior human
                  resources.
                </p>
              </div>
              <div className="button-section mt-10 text-white">
                {/* Button */}d
                <div className="block md:inline">
                  <button
                    href="#"
                    className="bg-green-950 p-4 px-6 me-3 rounded"
                  >
                    Get Started
                  </button>
                </div>
                <div className="block md:inline mt-2 md:mt-0">
                  <button href="#" className="bg-green-300 p-4 px-6 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="img-section flex relative mt-10 md:mt-0">
              <div
                className="section absolute bottom-0"
                style={{ left: "-90px" }}
              >
                <div className="flex flex-row justify-center items-center bg-white drop-shadow-md px-10 rounded">
                  <div className="m-6">
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/3d-fluency/94/speech-bubble--v1.png"
                      alt="speech-bubble--v1"
                      className="bg-green-100 rounded p-3"
                    />
                  </div>
                  <div>
                    <h1 className="text-5xl font-bold">300+</h1>
                    <p>Customers</p>
                  </div>
                </div>
              </div>
              <img src="https://placekitten.com/300/500" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopSection;
