import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";


const Job = ({ job }) => {

    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job;

    return (

        <div>
            <div className="max-w-6xl mx-auto">
                <div className="card bg-neutral text-neutral-content w-4/5 mt-4 mb-4">
                    <figure className="px-10 pt-10">
                        <img
                            src={logo}
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body ">
                        <div> 
                            <h2 className="text-left text-lg font-bold">{job_title}</h2>
                            <h4 className="text-left">{company_name}</h4>
                        </div>

                        <div className="card-actions mt-4 ">
                            <button className="btn btn-ghost  border-indigo-600">{remote_or_onsite}</button>
                            <button className="btn btn-ghost border-indigo-600">{job_type}</button>
                        </div>
                        <div className="flex mt-4">
                            <div className="flex"><IoLocationOutline className="text-2xl"></IoLocationOutline>{location}
                            </div>
                            <div className="flex ml-2">
                                <HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>{salary}
                            </div>
                        </div>

                        <div className="card-actions">
                            <button className="btn btn-primary bg-indigo-500">View Details</button>
                        </div>
                    </div>

                </div>

            </div>

        </div>


    );
};

export default Job;
