import { deleteJob } from '../../utilities/jobs-api'

export default function Job({ job }) {
    async function handleDelete() {
        deleteJob({id:job._id})
    }
    console.log(job)
    return <>
        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {job.company}
            </th>
            <td className="py-4 px-6">
                {job.from}
            </td>
            <td className="py-4 px-6">
                {job.to}
            </td>
            <td className="py-4 px-6">
                {job.updatedAt}
            </td>
            <td className="py-4 px-6">
                {job.status}
            </td>
            <td className="py-4 px-6" onClick={handleDelete}>
                X
            </td>
        </tr>
    </>
};

