import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { USER_API_END_POINT } from '@/utils/constant'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import { Button } from "../ui/button";
import { Loader, Loader2 } from "lucide-react";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
});
 const {loading} = useSelector(store=> store.auth)
const navigate = useNavigate();
const dispatch = useDispatch()

const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
}

const submitHandler = async (e) => {
    e.preventDefault();
    try {
        dispatch(setLoading(true))
        const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setUser(res.data.user))
            navigate("/");
            toast.success(res.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
    } finally{
      dispatch(setLoading(false))
    }
}
  return (
    <div>
      <Navbar />
      <div className="max-w-lg mx-auto ">
        <h1 className="text-3xl text-center font-semibold my-7">Login</h1>
        <form onSubmit={submitHandler} className="border border-grey-200 rounded-xl p-4 ">
          
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

           
          </div>
          {
            loading? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button> :<button className="bg-black text-white p-3 rounded-lg uppercase hover:opacity-60 w-full mt-4 ">
            Login
          </button>
          }
          
          <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={"/signup"}>
        <span className='text-blue-700'>Signup</span>
        </Link>
      </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
