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
    <div className="flex outline outline-1 outline-green-300 my-2 mx-auto w-[40%] p-4 justify-center">
      <form onSubmit={handleSubmit} >
        <h1 className='text-[20px]'>Add a New Job</h1>
        <div className='flex'>
          <label htmlFor="company" className='mr-4 text-xl'>Company</label>
          <input className='bg-gray-100 rounded-lg outline outline-1 outline-green-300'type="text" name="company" id="" value={newJobForm.company} onChange={handleChange} />
        </div>
        <p className='text-2xl'>Salary</p>
        <div>

          <label htmlFor="from" className="mr-4">From</label>
          <input  className='bg-gray-100 rounded-lg outline outline-1 outline-green-300 mr-4' type="number" name="from" id="" value={newJobForm.from} onChange={handleChange} />
          <label htmlFor="to" className="mr-4 " >To</label>
          <input  className='bg-gray-100 rounded-lg outline outline-1 outline-green-300' type="number" name="to" id="" value={newJobForm.to} onChange={handleChange} />
        </div>
        <div className='flex my-4'>
          <label className='mr-4' htmlFor="link">Link</label>
          <input  className='bg-gray-100 rounded-lg outline outline-1 outline-green-300' type="url" name="link" id="url"
            placeholder="https://example.com"
            pattern="https://.*" value={newJobForm.link}
            required onChange={handleChange} />
        </div>
        <input type="submit" value="Add" className='block bg-green-500 px-8 text-lg rounded-xl' />
      </form>
    </div>
  )
};

