import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from "sonner";
import axios from "axios";
function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();    //formdata object
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
        formData.append("file", input.file);
    }

    try {
        
        const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
            headers: { 'Content-Type': "multipart/form-data" },
            withCredentials: true,
        });
        // const data = await res.json();
        if (res.data.success) {
            navigate("/login");
            toast.success(res.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    } 
}
  return (
    <div>
      <Navbar />
      <div className="max-w-lg mx-auto ">
        <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
        <form onSubmit={submitHandler} className="border border-grey-200 rounded-xl p-4 ">
          <div>
            <Label>Full Name</Label>
            <Input
              type="text"
              name="fullname"
              placeholder="Write your Full Name here"
              value={input.fullname}
              onChange={changeEventHandler}
              required
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" 
            name="email"
            placeholder="Put your email here" 
            value={input.email}
            onChange={changeEventHandler}
            required />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Enter your Phonr Number here"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              required
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password here"
              value={input.password}
            onChange={changeEventHandler}
              required
            />
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
                    checked={input.role === 'student'}
                    onChange={changeEventHandler}
                    required
                  />
                  <Label htmlFor="option-one">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  {/* <RadioGroupItem value="option-two" id="option-two" /> */}
                  <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                    required
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
                  onChange={changeFileHandler}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-black text-white p-3 rounded-lg uppercase hover:opacity-60 w-full mt-4 "
          >
            Sign Up
          </button>
          <div className="flex gap-2 mt-5">
            <p>Already have an account?</p>
            <Link to={"/login"}>
              <span className="text-blue-700">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
