import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";

function Navbar() {
  const user = false;
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-5">
        <div>
          <h1 className="text-md sm:text-3xl font-bold flex flex-wrap flex-col sm:flex-row items-center leading-tight ">
            Freshers&nbsp;<span className="text-[#F83002]  ">JobPortal</span>
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-5 font-medium text-sm sm:text-xl cursor-pointer">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
            <li className=" sm:inline text-slate-700 hover:underline">Jobs</li>
            <li className=" sm:inline text-slate-700 hover:underline">
              Browser
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-3">
              <Button className="bg-[#6A38C2] hover:bg-[#784fbe] text-white" variant="outline">Login</Button>
              <div>
              <Button className="hidden sm:inline " variant="outline">Sign Up</Button>
              </div>
              
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-52 mr-4 sm:w-80 bg-white  rounded-2xl">
                <div className=" pt-2 flex flex-col items-center ">
                  <Avatar className="cursor-pointer ">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div className="flex flex-col items-center">
                    <div className="pl-6 pr-6">
                      <h1 className=" text-sm sm:font-bold">
                        Ruhul Amin Takukdar
                      </h1>
                    </div>
                    <div className="pl-2 pr-2">
                      <p className="text-sm text-muted-foreground sm:text-md">
                        Lorem ipsum dolor sit, amet conjekf wjdwijwe jewkj elmdd{" "}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex  items-center">
                      <User2 />
                      <Button variant="link">View Profile</Button>
                    </div>
                    <div className="flex items-center ">
                      <LogOut />
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
