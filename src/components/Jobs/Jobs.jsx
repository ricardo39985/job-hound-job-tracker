import { useEffect, useState } from 'react';
import { getAll } from '../../utilities/jobs-api';
import Job from '../Job/Job';
export default function Jobs({jobs,setJobs}) {


    return <>

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg outline outline-1 outline-green-400">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" className="py-3 px-6">
                            View Post
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Company
                        </th>
                        <th scope="col" className="py-3 px-6">
                            From
                        </th>
                        <th scope="col" className="py-3 px-6">
                            To
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Applied
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Updated
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Status
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Remove
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => <Job key={job._id} job={job} setJobs={setJobs} jobs={jobs}/>)}
                </tbody>
            </table>
        </div>

    </>
};

