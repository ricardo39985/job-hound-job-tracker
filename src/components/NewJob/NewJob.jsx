import { useState } from 'react'
import { add } from '../../utilities/jobs-api';
export default function NewJob({setJobs, jobs}) {
    const [newJobForm, setNewJobForm] = useState({ company: "", from: 0, to: 0, link: "" })
    function handleChange(evt) {
        setNewJobForm({ ...newJobForm, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
          const job = await add(newJobForm);
          console.log(job)
          setJobs([...jobs,job])
        //   setNewJobForm({...{company: "", from: 0, to: 0, link: ""} })

        } catch {
          console.log('Log In Failed - Try Again');
        }
      }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="" onChange={handleChange}/>
            <p>Salary</p><br />
            <label htmlFor="from">From</label>
            <input type="number" name="from" id="" onChange={handleChange}/>
            <label htmlFor="to">To</label>
            <input type="number" name="to" id="" onChange={handleChange} />

            <label htmlFor="link">Link</label>
            <input type="url" name="link" id="url"
                placeholder="https://example.com"
                pattern="https://.*"
                required onChange={handleChange} ></input>
            <input type="submit" value="Add" />
        </form>
    )
};

