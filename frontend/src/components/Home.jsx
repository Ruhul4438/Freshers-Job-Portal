import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Footer from './shared/Footer'

function Home() {
  useGetAllJobs()
  const { user } = useSelector
  (store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen  mx-2 mb-2'>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestJobs/>
        </div>
        
        <Footer/>
    </div>
  )
}

export default Home