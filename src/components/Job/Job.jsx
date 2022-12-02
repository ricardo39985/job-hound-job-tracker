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
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-blue-300 ">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <div className=' w-auto inline-block font-bold text-xl text-gray-500'>
                    <a href={currentJob.link} target="_blank" rel="noreferrer">
                        {currentJob.company[0]}
                    </a>
                </div>
            </th>
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {currentJob.company}
            </th>
            <td className="py-4 px-6">
                $ {currentJob.from}
            </td>
            <td className="py-4 px-6">
                $ {currentJob.to}
            </td>
            <td className="py-4 px-6">
                {moment(currentJob.createdAt).utc().format('MMM Do YY')}
            </td>
            <td className="py-4 px-6">
                {moment(currentJob.updatedAt).utc().format('MMM Do YY')}
                <p><small>{moment(currentJob.updatedAt).format('h:mm:ss a')}</small></p>
            </td>
            <td className="py-4 px-6">
                <select defaultValue={currentJob.status} name="status" id="status" onChange={handleChangeStatus} className="bg-white text-xl bg-green-100 outline outline-1 outline-gray-400 px-2 rounded-2xl">
                    {['applied', 'rejected', 'interviewed', 'offer', 'accepted', 'declined'].map((stat) => <option className='bg-gray-200 rounded-xl outline outline-green-400' key={stat} value={stat}>{stat}</option>)}
                </select>
            </td>
            <td className="py-4 px-6" >
                <button onClick={handleDelete} className="bg-red-500 px-6 text-white text-xl rounded-md">X</button>
            </td>
        </tr>
    </>
};

