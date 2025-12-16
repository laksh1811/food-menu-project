"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://perfect-serenity-6dad493eac.strapiapp.com/api/menu-items")
      .then((res) => {
        console.log(res.data.data);
        setItems(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-white text-white min-h-screen w-full">
      <section className="">
        <div className="grid grid-row md:grid-cols-  gap-1 w-full ">
          <h1 className="text-black  md:text-6xl font-bold  pl-10 pt-30">
            Our Menu
            <p className="text-gray-600 text-sm sm:font-serif w-90">
              This is a section of your menu. Give your section a brief
              description.
            </p>
          </h1>
          <img src="/image/menuleaf.png" className="w-100 absolute right-0 " />
        </div>
      </section>

      <div className=" mb-20 mt-20">
        <div className="grid grid-row md:grid-cols-2 gap-0 px-20">
          {items.slice(0, 4).map((item) => (
            <div key={item.id} className=" text-center  pb-10 text-black">
              {/* Price */}
              <div className="text-right text-black font-bold text-xl">
                ${item?.price}
              </div>

              {/* Title */}
              <h2 className="text-3xl font-semibold mt-2">{item?.name}</h2>

              {/* Description */}
              <p className="text-gray-600 mt-2">{item?.ingredients}</p>
            </div>
          ))}
        </div>
      </div>
      <Link href="/menudetails">
        <div className="  text-center py-3">
          <button className="text-black border border-black px-7 py-3 text-xl  hover:bg-[#b6bd90]  ">
            Read More
          </button>
        </div>
      </Link>
    </section>
  );
}

export default Menu;
