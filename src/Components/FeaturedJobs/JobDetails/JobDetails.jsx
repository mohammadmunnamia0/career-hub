import { useLoaderData, useParams } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);

  console.log(job);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-serif">Job Details:{id}</h1>
      <div className=" grid gap-5 grid-cols-4 ">

        <div className="border col-span-3 p-4 rounded">

            <p>
               <b>Job Description:</b> {job.job_description}
            </p>
            <p>
               <b>Job Responsibility</b> {job.job_responsibility}
            </p>

        </div>

        <div className="border">
             <div>
                <h1 className="font-bold">Job Details</h1>
                <p>Job Title : {job.job_title}</p>
                <p className='flex'> Salary :<BsCurrencyDollar/>{job.salary}</p>
                <p>Job Status : {job.remote_or_onsite}</p>
          
             </div>
             <div className='mt-10'>
                <p>Phone:+8801587494</p>
                <p>Email:asas@Mzone.com</p>
                <p>Address:{job.location}</p>
             </div>
                 

            <div className="mt-20">
            <button className="btn w-full bg-indigo-400 text-zinc-200 font-bold">Add jobs</button>
            </div>

        
        </div>

      </div>
    </div>
  );
};

export default JobDetails;
