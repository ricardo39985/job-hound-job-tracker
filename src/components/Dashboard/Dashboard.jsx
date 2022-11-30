import { useEffect, useState } from 'react';
import { getAll } from '../../utilities/jobs-api';
import Jobs from '../Jobs/Jobs';
import NewJob from '../NewJob/NewJob';

export default function Dashboard() {
    const [jobs, setJobs] = useState([])
    useEffect(function () {
        async function getJobs() {
            const allJobs = await getAll();
            setJobs(allJobs);
        }
        getJobs();
    }, [])

    return (
        <>
            <h1>All Jobs</h1>
            <NewJob setJobs={setJobs} jobs={jobs}/>
            <Jobs jobs={jobs} setJobs={setJobs}/>
        </>
    )
};

