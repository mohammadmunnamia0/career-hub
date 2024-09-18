const Job = ({job}) => {

    const{logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description}= job;

    return (
        <div className="mt-20">
       <p align='center'><img src={logo} alt="" /></p> 
        {job_title} <br />
        {company_name} <br />
        {remote_or_onsite}  <br />
        {location} <br />
        {job_type} <br />
        {salary} <br /> <br />
        <button className="btn btn-outline" >Full Details</button>
    </div>
    );
};

export default Job;
