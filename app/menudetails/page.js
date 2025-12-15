"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

function MenuDetails() {
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
    <div className="p-14">
      <h1 className="text-6xl font-bold mb-4">Menu Items</h1>

      <div className="grid grid-row md:grid-cols-2 gap-0  pt-20 px-20">
        {items.map((item) => (
          <div
            key={item.id}
            className=" text-center font-bold  pb-10 text-black"
          >
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
  );
}
export default MenuDetails;
