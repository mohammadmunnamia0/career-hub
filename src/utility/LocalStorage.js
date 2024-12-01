
//fetch job
const GetJobApplication = ( ) =>{
    const storeJobApplication = localStorage.getItem('Job-applications');
    if(storeJobApplication){
        return JSON.parse(storeJobApplication);

    }
    return [];
}


//save job
const SaveJobApplication = id =>{
    const storeJobsApplications = GetJobApplication();
    const exists = storeJobsApplications.find(jobID => jobID === id);
    if(!exists){
        storeJobsApplications.push(id);
        localStorage.setItem('Job-applications', JSON.stringify(storeJobsApplications));
    }

}

export {GetJobApplication , SaveJobApplication}