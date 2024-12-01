import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { GetJobApplication } from "../../utility/LocalStorage";
import { useState } from "react";

const Applied = () => {
  const jobs = useLoaderData();

  const [JobsApplied, SetJobsApplied] = useState([]);

  //Filter
  const [JobsDisplay,SetJobsDisplay] = useState([]);

  const HandleJobFiler = filter =>{
    if(filter === "All")
    {
        SetJobsDisplay(JobsApplied);
       
    }
    else if(filter === "Remote"){
        const remoteJobs = JobsApplied.filter(job => job.remote_or_onsite === "Remote")
        SetJobsDisplay(remoteJobs);
    }
    else if (filter === "Onsite"){
        const onsiteJobs = JobsApplied.filter(job => job.remote_or_onsite === "Onsite")
        SetJobsDisplay(onsiteJobs);
    }
  }


  useEffect(() => {
    const storeJobIds = GetJobApplication();
    if (jobs.length > 0) 
        {
      const AppliedJobs = [];
      for (const id of storeJobIds) {
        // get the ids from the local storage
        const job = jobs.find((job) => job.id === id); //match the local storage id with the jobs id
        if (job) {
          AppliedJobs.push(job);
        }
      }
      // console.log(jobs,storeJobIds,AppliedJobs);
      SetJobsApplied(AppliedJobs);
      SetJobsDisplay(AppliedJobs);
    }
  }, []);

  return (
    <div>
      <h1>Applied Jobs : {JobsApplied.length}</h1>

      {/* //Filter */}

      <details className="dropdown">
        <summary tabIndex={0} role="button" className="btn m-1">Filter By</summary>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={()=> HandleJobFiler('Remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=> HandleJobFiler('Onsite')}>
            <a>On-Site</a>
          </li>
          <li onClick={()=> HandleJobFiler('All')}>
            <a>All</a>
          </li>
        </ul>
      </details>

      {JobsDisplay.map((job) => (
        <li key={job.id}>
          <div className="mt-4 card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie"
              />
            </figure>
            <div className=" flex w-full justify-between">
              <div className="mt-14 ml-20 text-2xl">
                <h1 className="font-bold">{job.job_title}</h1>
                <p>{job.company_name}</p>
                <p>{job.remote_or_onsite}</p>
                <p>{job.job_type}</p>
                <p>{job.address}</p>
                <p>{job.salary}</p>
              </div>
              <div>
                <div className="mt-32 ">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Applied;
