import { createContext, useEffect, useState } from "react";
import { jobsData } from "../Asset/assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [jobSearch, setJobSearch] = useState("");
    const [locationSearch, setLocationSearch] = useState("");
    const [isSearched, setIsSearched] = useState(false);
    const [searchFilter, setSearchFilter] = useState({
        title: "",
        location: "",
    });

    const handleSearch = () => {
        setIsSearched(true);
        setSearchFilter({
            title: jobSearch,
            location: locationSearch,
        });
    };

    const[jobs,setJobs] = useState([])

    //function to fetch job data

    const fetchJobs = async () => {
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs()
    },[]
    )


    const value = {
        jobSearch,
        setJobSearch,
        locationSearch,
        setLocationSearch,
        isSearched,
        setIsSearched,
        searchFilter,
        setSearchFilter,
        handleSearch, // Provided here for Hero component
        jobs,
        setJobs
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
