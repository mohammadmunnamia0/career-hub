import { useEffect, useState } from "react";
import Job from "./Job/Job";


const FeaturedJobs = () => {

    const [jobs,setJobs]=useState([]);

    useEffect (
        ()=>{
            fetch('jobs.json')
            .then(res =>res.json())
            .then(data => setJobs(data));
        } ,[]
    )

    return (
        <div className="text-center">

            <h1 className="text-5xl font-bold text-amber-600">Featured Jobs:{jobs.length}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias voluptatum blanditiis incidunt. Quis illum, doloribus porro hic tempora modi?</p>


            <div className="grid grid-cols-2">
            {
                jobs.map(job =><Job key={job.id} job={job}></Job>)
                
            }
            </div>
           
        </div>
        
    );
};

export default FeaturedJobs;