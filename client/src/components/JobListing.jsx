import React, { useContext,useEffect } from 'react'
import { useState } from 'react';
import { AppContext } from '../context/AppContext'
import cross from '../Asset/assets/cross_icon.svg'
import { Experience, JobCategories, JobLocations, WorkingSchedule, WorkMode } from '../Asset/assets/assets'
import JobCard from './JobCard'
import { assets } from '../Asset/assets/assets';

const JobListing =()=>{

    const {isSearched,searchFilter,setSearchFilter,jobs} = useContext(AppContext)

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategories,setselectedCategories] = useState([]);
    const [selectedLocations,setselectedLocations] = useState([]);
    const [selectedWorkingSchedule, setselectedWorkingSchedule] = useState([]);
    const [selectedWorkMode, setselectedWorkMode] = useState([]);
    const [selectedExperience, setselectedExperience] = useState([]);
    const[filteredJobs,setfilterestJobs] = useState(jobs);

    const handleCategoryChange = (category) => {
        setselectedCategories(
            prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
        )
    }

    const handleLocationChange = (location) => {
        setselectedLocations(
            prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev,location]
        )
    }
    const handleWorkingScheduleChange = (schedule) => {
        setselectedWorkingSchedule(
            prev => prev.includes(schedule) ? prev.filter(c => c !== schedule) : [...prev,schedule]
                )
                }
    const handleWorkModeChange = (mode) => {
        setselectedWorkMode(
            prev => prev.includes(mode) ? prev.filter(c => c !== mode) : [...prev,mode]
                            )
                            }
    const handleExperienceChange = (Experience) => {
        setselectedExperience(
            prev => prev.includes(Experience) ? prev.filter(c => c !== Experience) : [...prev, Experience]
                                        )
                                        }

    useEffect(()=>{

        const matchesCategory= job=> selectedCategories.length ===0 || selectedCategories.includes(job.category)
        const matchesLocation= job=> selectedLocations.length ===0 || selectedLocations.includes(job.location)
        const matchesSchedule= job=> selectedWorkingSchedule.length ===0 || selectedWorkingSchedule.includes(job.WorkingSchedule)
        const matchesMode= job=> selectedWorkMode.length ===0 || selectedWorkMode.includes(job.WorkMode)
        const matchesExperience= job=> selectedExperience.length ===0 || selectedExperience.includes(job.Experience)

        const matchesTitle = job => searchFilter.title === ""|| job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
        const matchesSearchLocation = job => searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase())
        const newFilteredJobs = jobs.slice().reverse().filter(
            job=> matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)
        && matchesSchedule(job) && matchesMode(job) && matchesExperience(job))

        setfilterestJobs(newFilteredJobs)
        setCurrentPage(1)
    },[jobs,selectedCategories,selectedLocations,searchFilter,selectedWorkMode,selectedWorkingSchedule,selectedExperience])


    return(
        <div className='container 2xl:px-20 flex flex-xol lg:flex-row max-lg:space-y-8 py-8'>
         
        {/*sidebar*/}
        <div className='w-full lg:w-1/4 bg-white px-4'>

            {/* search filter from hero section */}
            {
                isSearched && (searchFilter.title !=="" || searchFilter.location !=="") && (
                <>
                <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                <div className='mb-4 text-gray-500 '>
                    {searchFilter.title && (
                        <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                            {searchFilter.title}
                            <img onClick={e=> setSearchFilter(prev => ({...prev,title:""}))} className='cursor-pointer' src={cross} alt="cross" />
                        </span>
                    )}
                    {searchFilter.location && (
                        <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                            {searchFilter.location}
                            <img onClick={e=> setSearchFilter(prev => ({...prev,location:""}))} className='cursor-pointer' src={cross} alt="cross" />
                        </span>
                    )}
                </div>
                </>
                )
            }

            {/*work mode filter*/}
    <div className='max-lg:hidden py-2'>
            <h4 className='font-medium text-lg'>Work Mode</h4>
            <ul className='text-gray-600'>
                {
                    WorkMode.map((WorkMode,index)=>(
                        <li className='flex gap-3 items-center' key={index}>
                            <input className='scale-125' type="checkbox"
                            onChange={()=> handleWorkModeChange(WorkMode)}
                            checked={selectedWorkMode.includes(WorkMode)}/>
                                {WorkMode}
                        </li>
                    ))
                }
            </ul>
        </div> 

              {/*workschedule  filter*/}
    <div className='max-lg:hidden py-2'>
            <h4 className='font-medium text-lg'>Working Schedule</h4>
            <ul className='text-gray-600'>
                {
                    WorkingSchedule.map((WorkingSchedule,index)=>(
                        <li className='flex gap-3 items-center' key={index}>
                            <input className='scale-125' type="checkbox" 
                            onChange={()=> handleWorkingScheduleChange(WorkingSchedule)}
                            checked={selectedWorkingSchedule.includes(WorkingSchedule)} />
                                {WorkingSchedule}
                        </li>
                    ))
                }
            </ul>
        </div> 
         
         {/*workexperience  filter*/}
    <div className='max-lg:hidden py-2'>
            <h4 className='font-medium text-lg'>Work Experience</h4>
            <ul className='text-gray-600'>
                {
                    Experience.map((Experience,index)=>(
                        <li className='flex gap-3 items-center' key={index}>
                            <input className='scale-125' type="checkbox" 
                            onChange={()=> handleExperienceChange(Experience)}
                            checked={selectedExperience.includes(Experience)}/>
                                {Experience}
                        </li>
                    ))
                }
            </ul>
        </div> 


        {/*category filter*/}
        <div className='max-lg:hidden py-2'>
            <h4 className='font-medium text-lg'>Job Categories</h4>
            <ul className='text-gray-600'>
                {
                    JobCategories.map((category,index)=>(
                        <li className='flex gap-3 items-center' key={index}>
                            <input className='scale-125' type="checkbox" 
                            onChange={()=> handleCategoryChange(category)}
                            checked={selectedCategories.includes(category)}/>
                                {category}
                        </li>
                    ))
                }
            </ul>
        </div>

        {/*location filter*/}
        <div className='max-lg:hidden py-2'>
            <h4 className='font-medium text-lg'>Location</h4>
            <ul className='text-gray-600'>
                {
                    JobLocations.map((location,index)=>(
                        <li className='flex gap-3 items-center' key={index}>
                            <input className='scale-125' type="checkbox" name="" id=""
                             onChange={()=> handleLocationChange(location)}
                             checked={selectedLocations.includes(location)} />
                                {location}
                        </li>
                    ))
                }
            </ul>
        </div>

     

        </div>

        {/*JOB LISTINGS*/ }
        <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4 pr-4'>
            <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
            <p className='mb-8 '>Get your desired job from top companies</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 '>
                {filteredJobs.slice((currentPage-1)*9,currentPage*9).map((job,index)=>(
                    <JobCard key={index} job={job}></JobCard>
                ))}
            </div>

            {/*Pagination */}
            {
                filteredJobs.length > 0 && (
                    <div className='flex items-center justify-center space-x-2 mt-10 '>
                        <a href='#job-list' >
                            <img onClick={()=> setCurrentPage(Math.max(currentPage-1),1)} src={assets.left_arrow_icon} />
                        </a>
                        {
                            Array.from({length:Math.ceil(filteredJobs.length/9)}).map((_,index)=>(
                                <a key={index} href='#job-list'>
                                    <button onClick={()=> setCurrentPage(index+1)} className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage ===index +1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500 '}`}>{index + 1}</button>
                                </a>
                            ))
                        }
                        <a href='#job-list'>
                            <img onClick={()=> setCurrentPage(Math.min(currentPage+1),Math.ceil(filteredJobs.length/9))} src={assets.right_arrow_icon} />
                        </a>
                    </div>
            )}

        </section>
        </div>
    )

}

export default JobListing