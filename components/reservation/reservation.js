"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../lip/firebase";

function Reservation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    person: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is call");

    try {
      await addDoc(collection(db, "reservations"), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        person: formData.person,
        createdAt: Timestamp.now(),
      });
      alert("Reservation booked successfully!");
    } catch (error) {
      console.error("Error saving reservation:", error);
      alert("Something went wrong!");
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-[#e6edd3] min-h-screen w-full px-50">
      {/* Header Section */}
      <div className="py-10 px-40 flex items-center gap-7">
        <img
          src="/image/reser.png"
          className="w-60 h-60 object-contain opacity-90"
          alt="Leaf"
        />

        <div>
          <h1 className="text-black text-4xl md:text-5xl font-serif font-bold">
            Make a Reservation
          </h1>
          <p className="text-gray-600 mt-1">Get in touch with restaurant</p>
        </div>
      </div>

      <div className="px-40 text-black">
        <form onSubmit={handleSubmit} className="w-full max-w-4xl space-y-6">
          <div className="grid grid-cols-1 text-black md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              className="border border-black text-black px-4 py-3 bg-transparent"
              placeholder="First Name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              className="border border-black px-4 py-3 bg-transparent"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>

          <input
            type="email"
            name="email"
            className="border border-black  px-4 py-3 w-full bg-transparent"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            className="border border-black text-black px-4 py-3 w-full bg-transparent"
            placeholder="Phone"
            onChange={handleChange}
          />

          <div className="grid grid-cols-1 text-black md:grid-cols-2 gap-6">
            <input
              type="date"
              name="date"
              className="border border-black px-4 py-3 bg-transparent"
              onChange={handleChange}
            />

            <div className="relative">
              <select
                name="time"
                className="border border-black px-4 py-3 bg-transparent w-full appearance-none"
                onChange={handleChange}
              >
                <option value="">Select Time</option>
                <option>5:00 pm</option>
                <option>6:00 pm</option>
                <option>7:00 pm</option>
                <option>8:00 pm</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-600" />
            </div>
          </div>

          {/* Person */}
          <div className="relative">
            <select
              name="person"
              className="border border-black px-4 py-3 text-black
               bg-transparent w-full appearance-none"
              onChange={handleChange}
            >
              <option value="">Select Person</option>
              <option>1 Person</option>
              <option>2 Person</option>
              <option>3 Person</option>
              <option>4 Person</option>
              <option>5 Person</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-600" />
          </div>

          {/* Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-12 py-3 bg-[#5b6517] text-white font-medium hover:bg-[#4a5412] transition mb-10"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Reservation;
