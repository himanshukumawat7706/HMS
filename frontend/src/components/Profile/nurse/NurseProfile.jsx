import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../../../assets/doct5.jpg";
import Swal from "sweetalert2";
import NurseSidebar from "./NurseSidebar";
import axiosInstance from "../../../../axiosInstance";

function NurseProfile() {
  const [userData, setuserData] = useState({}); // Initialize as an empty object
  const [name, setName] = useState("");
  const [phoneno, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [dob, setdateofBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchInfo = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setuserData(user);
        setName(user.name || "");
        setMobileNumber(user.phoneno || "");
        setAddress(user.address ? user.address.street || "" : "");
        setCity(user.address ? user.address.city || "" : "");
        setState(user.address ? user.address.state || "" : "");
        const formattedDateOfBirth = user.dob ? user.dob.split("T")[0] : "";
        setdateofBirth(formattedDateOfBirth);
        setGender(user.gender || "");
        setEmail(user.email || "");
      }
    };

    fetchInfo();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      axiosInstance
        .put("/nurse/profile-update", {
          userId: userData._id,
          updatedProfile: {
            email: email,
            name: name,
            phoneno: phoneno,
            address: {
              street: address,
              city: city,
              state: state,
            },
            gender: gender,
            dob: dob,
          },
        })
        .then((res) => {
          if (res.data.status === "Success") {
            Swal.fire({
              title: "Success",
              icon: "success",
              confirmButtonText: "Ok",
              text: "Profile Updated Successfully!",
            });
            const updatedUser = res.data.user;
            console.log(res.data);
            localStorage.setItem("user", JSON.stringify(updatedUser));
            //window.location.href = "/nurse-profile";
          }
        });
    } catch (err) {
      Swal.fire({
        title: "Error",
        icon: "error",
        confirmButtonText: "Ok",
        text: "Error Updating Profile! Please Try Again!",
      });
    }
  };

  return (
    <section className="bg-slate-300 flex justify-center items-center">
      <div className="h-[80%] w-[80%] bg-white shadow-xl p-2 flex">
        <NurseSidebar profilePic={profilePic} userName={userData?.name || "User"} />
        <div className=" w-[70%] ms-24 p-4 flex flex-col justify-around ">
          <p className="font-semibold text-3xl">Account Settings</p>
          <form action="" className="flex flex-col h-[80%] justify-between">
            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Name:</p>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Email:</p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Phone:</p>
                <input
                  value={phoneno}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your DOB:</p>
                <input
                  value={dob}
                  onChange={(e) => setdateofBirth(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  type="date"
                  placeholder="DOB"
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Gender:</p>
                <input
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  type="text"
                  placeholder="Male/Female/Others"
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your City:</p>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  type="text"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your State:</p>
                <input
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  type="text"
                  placeholder="State"
                />
              </div>
              <div className="flex flex-col w-[50%] justify-start">
                <p>Enter Your Address:</p>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="flex h-10 w-[90%] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  type="text"
                  placeholder="Address"
                />
              </div>
            </div>
            <button
              onClick={handleUpdate}
              className="bg-black w-[95%] text-white p-2 rounded-full"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default NurseProfile;
