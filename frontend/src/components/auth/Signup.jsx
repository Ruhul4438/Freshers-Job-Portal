import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <Navbar />
      <div className="max-w-lg mx-auto ">
        <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
        <form action="" className="border border-grey-200 rounded-xl p-4 ">
          <div>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Write your Full Name here" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="Put your email here" />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="text" placeholder="Enter your Phonr Number here" />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="Enter your password here" />
          </div>
          <div className="flex flex-col   sm:flex-row justify-between ">
            <div className="flex flex-col sm:flex-row  ">
              <RadioGroup className="flex items-center  gap-4 mt-3">
                <div className="flex items-center space-x-2">
                  {/* <RadioGroupItem value="option-one" id="option-one" /> */}
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="option-one">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  {/* <RadioGroupItem value="option-two" id="option-two" /> */}
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="option-two">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="sm:pl-16">
              <div className="flex items-center mt-3 gap-2 ">
                <Label>Profile</Label>
                <Input
                  accept="image/*"
                  type="file"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <button className="bg-black text-white p-3 rounded-lg uppercase hover:opacity-60 w-full mt-4 ">
            Sign Up
          </button>
          <div className='flex gap-2 mt-5'>
        <p>Already have an account?</p>
        <Link to={"/login"}>
        <span className='text-blue-700'>Login</span>
        </Link>
      </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
