import { useState } from 'react'
import { add } from '../../utilities/jobs-api';
export default function NewJob({ setJobs, jobs }) {
  const [newJobForm, setNewJobForm] = useState({ company: "", from: 0, to: 0, link: "" })

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const job = await add(newJobForm);
      // Reset Form
      setNewJobForm({ company: "", from: 0, to: 0, link: "" })
      console.log(job)
      setJobs([...jobs, job])

    } catch {
      console.log('Log In Failed - Try Again');
    }
  }

  function handleChange(evt) {
    setNewJobForm({ ...newJobForm, [evt.target.name]: evt.target.value });
  }


  return (
    <div className="flex bg-gray-200 my-8 p-8 mx-auto w-[70%] md:w-[90%] sm:w-full justify-center">
      <form onSubmit={handleSubmit} >
        <div className='text-2xl font-bold text-gray-500'><h1>Track a new Job</h1></div>
        <div className="flex "><p></p>
          <p className='w-1/5'>Name</p>
          <p className='w-1/5'>From</p>
          <p className='w-1/5'>To</p>
          <p className='w-1/5'>Link</p><p className='w-1/5'></p></div>
        <div className='flex space-x-4 text-xl'>
          <input placeholder='Company Name' className='bg-gray-100 rounded-lg outline outline-1 outline-green-300' type="text" name="company" id="" value={newJobForm.company} onChange={handleChange} />
          <input className='bg-gray-100 rounded-lg outline outline-1 outline-green-300 mr-4' type="number" name="from" placeholder='From' value={newJobForm.from} onChange={handleChange} />
          <input className='bg-gray-100 rounded-lg outline outline-1 outline-green-300' type="number" name="to" id="" placeholder='To' value={newJobForm.to} onChange={handleChange} />
          <input className='bg-gray-100 rounded-lg outline outline-1 outline-green-300' type="url" name="link" id="url"
            placeholder="https://example.com"
            pattern="https://.*" value={newJobForm.link}
            required onChange={handleChange} />
          <input type="submit" value="Add" className='block bg-green-500 px-8 ' />
        </div>
      </form>
    </div>
  )
};

