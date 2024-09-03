import React, { useEffect, useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button';
import Navbar from '../shared/Navbar';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useGetCompanyById from '@/hooks/useGetCompanyById';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

function CompanySetup() {
    const params = useParams();
    useGetCompanyById(params.id);
    const [input, setInput] = useState({
        name: "",
        description: "",
        website: "",
        location: "",
        file: null
    });
    const {singleCompany} = useSelector(store=>store.company);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        const file = e.target.files?.[0];
        setInput({ ...input, file });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", input.name);
        formData.append("description", input.description);
        formData.append("website", input.website);
        formData.append("location", input.location);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            setLoading(true);
            const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate("/admin/companies");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setInput({
            name: singleCompany.name || "",
            description: singleCompany.description || "",
            website: singleCompany.website || "",
            location: singleCompany.location || "",
            file: singleCompany.file || null
        })
    },[singleCompany]);

  return (
    <div>
      <Navbar />
      <div className="max-w-lg mx-auto ">
        {/* <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1> */}
        <div className='flex '>
        <div className='flex flex-col items-start  pt-8 pl-4 pb-5 '>
                        <Button onClick={() => navigate("/admin/companies")} variant="outline" className="flex items-center gap-2 text-gray-500 font-semibold">
                            <ArrowLeft />
                            <span>Back</span>
                        </Button>
                     
                        <h1 className='text-3xl text-center font-semibold mt-4 '>Company Setup</h1>
                    </div>
        </div>
        <form onSubmit={submitHandler} className="border border-grey-200 rounded-xl p-4 ">
        
          <div>
            <Label>Company Name</Label>
            <Input
              type="text"
              name="name"
              value={input.name}
              onChange={changeEventHandler}
              
            />
          </div>
          <div>
            <Label>Description</Label>
            <Input
              type="text"
              name="description"
              value={input.description}
              onChange={changeEventHandler}
              
            />
          </div>
          <div>
            <Label>Website</Label>
            <Input 
              type="text"
              name="website"
              value={input.website}
              onChange={changeEventHandler} />
          </div>
          <div>
            <Label>Location</Label>
            <Input
              type="text"
              name="location"
              value={input.location}
              onChange={changeEventHandler}
             
            />
          </div>
          
          <div className="flex flex-col   sm:flex-row justify-between ">
           

            <div className=" border">
              <div className="flex items-center mt-3 gap-2 ">
                <Label>Company Logo</Label>
                <Input
                  accept="image/*"
                  type="file"
                  onChange={changeFileHandler}
                  className="cursor-pointer"
                 
                />
              </div>
            </div>
          </div>
          {
            loading? <Button className="w-full my-4"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button> :<Button className="bg-black text-white p-3 rounded-lg uppercase hover:opacity-60 w-full mt-4 ">
            Update
          </Button>
          }
          
        </form>
      </div>
    </div>
  )
}

export default CompanySetup