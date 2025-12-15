import React from "react";

function Footer() {
  return (
    <footer className="bg-[#233000] text-white py-12 ">
      <div className="flex flex-col md:flex-row justify-between gap-90  px-20 pb-10">
        <div>
          <h1 className="text-4xl font-serif leading-tight">
            Food <br /> Zero.
          </h1>
        </div>
        <div>
          <h2 className="text-lg font-semibold py-3">Contact</h2>
          <p className="text-sm">+1-86 852 346 000</p>
          <p className="text-sm mb-3">info@foodzero.com</p>

          <p className="text-sm">1959 Sepulveda Blvd.</p>
          <p className="text-sm">Culver City, CA, 90230</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold pb-8">Never Miss a Recipe</h2>

          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full px-8 py-3 bg-transparent border  focus:outline-none placeholder-white"
            />
            <button className="bg-[#6d770f] px-5 py-3 ml-3 text-white hover:bg-[#56610c]">
              Subscribe
            </button>
          </div>
          <p className="text-xs w-70 pt-5">
            Join our subscribers and get best recipe delivered each week!
          </p>
        </div>
      </div>
      <div>
        <img src="../image/footer line.png" className=" w-900  py-10" />
      </div>

      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col justify-between items-center">
          <p className="text-base text-white  px-12 py-7  ">
            © 2020 Zero Inc. All rights Reserved
          </p>
        </div>
        <img src="../image/footer icon.png" className="w-90  py-7 px-12" />
      </div>
    </footer>
  );
}

export default Footer;
