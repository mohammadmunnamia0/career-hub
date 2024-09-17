import { useEffect, useState } from "react";

const FeaturedJobs = () => {

    const [jobs,setJobs]=useState([]);

    useEffect (
        ()=>{
            fetch('https://api.example.com/jobs')
            .then(res =>res.json())
            .then(data => setJobs(data))
        }
    )

    return (
        <div className="text-center">

            <h1 className="text-5xl font-bold text-amber-600">Featured Jobs {jobs.length}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias voluptatum blanditiis incidunt. Quis illum, doloribus porro hic tempora modi?</p>
        </div>
    );
};

export default FeaturedJobs;