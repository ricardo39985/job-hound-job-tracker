import moment from 'moment/moment'
import { useState } from 'react'
import { changeStatus, deleteJob } from '../../utilities/jobs-api'
export default function Job({ job, jobs, setJobs }) {

    async function handleDelete() {
        const jobId = await deleteJob({ id: job._id })
        setJobs(jobs.filter((job) => job._id !== jobId.id))

    }
    const [currentJob, setCurrentJob] = useState(job)
    async function handleChangeStatus(evt) {
        const updatedJob = await changeStatus({ id: job._id, status: evt.target.value })
        setCurrentJob(updatedJob)

    }


    return <>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {currentJob.company}
            </th>
            <td className="py-4 px-6">
                {currentJob.from}
            </td>
            <td className="py-4 px-6">
                {currentJob.to}
            </td>
            <td className="py-4 px-6">
                {moment(currentJob.createdAt).utc().format('MMM Do YY')}
            </td>
            <td className="py-4 px-6">
                {moment(currentJob.updatedAt).utc().format('MMM Do YY')}
                <p><small>{moment(currentJob.updatedAt).format('h:mm:ss a')}</small></p>
            </td>
            <td className="py-4 px-6">
                <select defaultValue={currentJob.status} name="status" id="status" onChange={handleChangeStatus}>
                    {['applied', 'rejected', 'interviewed', 'offer', 'accepted', 'declined'].map((stat) => <option key={stat} value={stat}>{stat}</option>)}
                </select>
            </td>
            <td className="py-4 px-6" >
                <button onClick={handleDelete}>X</button>
            </td>
        </tr>
    </>
};

