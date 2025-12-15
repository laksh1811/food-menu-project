import React from "react";

function Navbar() {
  return (
    <div className="bg-[#233000]  text-white ">
      <nav>
        <div className="flex flex-row items-center justify-between gap-8">
          <div className="flex flex-row gap-10">
            <img src="/image/image (2).png" className="w-40 mt-8 ml-20 " />
            <img src="/image/image (4).png" className="w-20 mt-8 mr-3" />
          </div>
          <div className="flex flex-row gap-10">
            <span className="text-xl mt-8 ml-160  gap-5  ">
              +86 852 346 000
            </span>
            <button className="border border-white px-7 py-3 mt-8 mr-30 rounded-sm">
              Reservations
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
