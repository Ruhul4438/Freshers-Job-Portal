import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";
import { Avatar, AvatarImage } from "./ui/avatar";

function UpdateProfileDialog({ open, setOpen }) {
  const { user } = useSelector((store) => store.auth);
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState(
    user?.profile?.profilePhoto || null
  );
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    // skills: user?.profile?.skills?.join(", ") || "",
    skills: user?.profile?.skills?.map((skill) => skill) || "",
    file: user?.profile?.resume || "",
    profilePhotoUrl: user?.profile?.profilePhoto || "",
  });

  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const your_upload_preset = "lwk9qofa";
    const your_cloud_name = "dnvrun5iv";
    // Upload to Cloudinary
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", your_upload_preset); // Replace with your Cloudinary preset
    formData.append("cloud_name", your_cloud_name); // Replace with your Cloudinary cloud name

    try {
      setLoading(true);
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${your_cloud_name}/image/upload`, // Replace with your Cloudinary URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },

          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);

            // Check if upload is complete
            if (percentCompleted === 100) {
              setUploadSuccess(true);
            }
          },
        }
      );

      if (res.data.secure_url) {
        setInput({ ...input, profilePhotoUrl: res.data.secure_url });
        setPreviewImage(res.data.secure_url);
        toast.success("Image uploaded successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Image upload failed.");
    } finally {
      setLoading(false);
      setUploadProgress(0);
    }
  };

  const fileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    formData.append("profilePhotoUrl", input.profilePhotoUrl);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        setUploadSuccess(false);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="sm:max-w-[425px] md:max-w-[600px] max-w-[90%] p-5"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col items-center justify-center gap-4 ">
            <div className="flex flex-col items-center ">
                
                <Input
                  id="file"
                  name="file"
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={fileChangeHandler}
                  
                />
                
                <Avatar
                  className="h-24 w-24"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <AvatarImage src={previewImage} alt="profile" />
                </Avatar>
                <Label htmlFor="file" className="text-right mt-4">
                  Click on the Profile Photo to update it
                </Label>
              </div>
              {uploadProgress > 0 && (
                <div className="flex flex-col items-center gap-1 ">
                  <Label className="text-right text-sm font-normal">
                    Uploading Progress
                  </Label>
                  <div className="col-span-3">{uploadProgress}%</div>
                </div>
              )}

              {uploadSuccess  && (
                <div className=" items-center gap-4 ">
                  <Label className="text-right"></Label>
                  <div className="col-span-3 text-green-600 font-medium">
                    Image upload successful!
                  </div>
                </div>
              )}

            </div>
          
            <div className="grid gap-4 py-4">
           
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="fullname"
                  type="text"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="number" className="text-right">
                  Number
                </Label>
                <Input
                  id="number"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  type="file"
                  accept="application/pdf"
                  onChange={fileHandler}
                  className="col-span-3"
                />
              </div>
             
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </Button>
              ) : (
                <Button type="submit" className="w-full my-4">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfileDialog;

