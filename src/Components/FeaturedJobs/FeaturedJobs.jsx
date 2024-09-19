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



    // হোম পেজ এ first 4 ta data show korbo then view all a click korle 6 tai show kore , aita best way na cause data kom tai amra aita kortasi

    const[DataLength, SetDataLength] = useState(4);






    return (
        <div className="text-center">

            <h1 className="text-5xl font-bold text-amber-600">Featured Jobs:{jobs.length}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias voluptatum blanditiis incidunt. Quis illum, doloribus porro hic tempora modi?</p>


            <div className="grid grid-cols-2">
            {
                jobs.slice(0, DataLength).map(job =><Job key={job.id} job={job}></Job>)

                //slice(0, DataLength) ---> remove this and check the output u will see the difference
                
            }
            </div>
            <div className={DataLength === jobs.length ? 'hidden' : ''} >

                {/* conditional Class name when to hide the View All Jobs after load all jobs */}

                <button onClick={()=> SetDataLength(jobs.length)} 

                // onClick={()=> SetDataLength(jobs.length)} ---> click korle jobs ar full length 6ta data show korbe home a 
                
                className="btn btn-primary hover:bg-orange-700 text-white font-bold">View All Jobs</button>
            </div>
           
        </div>
        
    );
};

export default FeaturedJobs;