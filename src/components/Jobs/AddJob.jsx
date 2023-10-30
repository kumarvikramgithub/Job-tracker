import {useState} from 'react'
const jobInitialState = {
  position: "",
  company: "",
  source: "",
  offer: '',
  expected: '',
};
const AddJob = () => {
  const [job,setJob] = useState(jobInitialState);
  const updateJob = (e) =>{
    setJob({
      ...job,
      [e.target.name]:
        e.target.name === "offer" || e.target.name === "expected"
          ? Number(e.target.value)
          : e.target.value
    });
  }

  const addNewJob = (e) =>{
    e.preventDefault();
    console.log(job);
  }

  return (
    <div className="px-16 py-5">
      <div className="p-8  flex flex-col items-center bg-slate-400 rounded-md addNewJob">
        <span className="text-center text-4xl text-purple-500 font-semibold">
          Add New Job
        </span>
        <div className="my-2 w-1/2 pt-5">
          <input
            type="text"
            placeholder="Job Name"
            name="position"
            value={job.position}
            onChange={(e) => updateJob(e)}
            className={`w-full outline-none p-2 border border-solid border-slate-500 rounded shadow placeholder:text-purple-500 text-slate-500`}
          />
        </div>
        <div className="my-2 w-1/2 pt-3">
          <input
            type="text"
            placeholder="Job Company"
            name="company"
            value={job.company}
            onChange={(e) => updateJob(e)}
            className={`w-full outline-none p-2 border border-solid border-slate-500 rounded shadow placeholder:text-purple-500 text-slate-500`}
          />
        </div>
        <div className="my-2 w-1/2 pt-3">
          <input
            type="text"
            placeholder="Job Source"
            name="source"
            value={job.source}
            onChange={(e) => updateJob(e)}
            className={`w-full outline-none p-2 border border-solid border-slate-500 rounded shadow placeholder:text-purple-500 text-slate-500`}
          />
        </div>
        <div className="my-2 w-1/2 pt-3 flex justify-between">
          <input
            type="number"
            placeholder="Job Package"
            name="offer"
            value={job.offer}
            onChange={(e) => updateJob(e)}
            className={`w-full mr-2 outline-none p-2 border border-solid border-slate-500 rounded shadow placeholder:text-purple-500 text-slate-500`}
          />
          <input
            type="number"
            placeholder="Package Expected"
            name="expected"
            value={job.expected}
            onChange={(e) => updateJob(e)}
            className={`w-full ml-2 outline-none p-2 border border-solid border-slate-500 rounded shadow placeholder:text-purple-500 text-slate-500`}
          />
        </div>
        <div className="my-2 w-1/2 pt-3 flex justify-between">
          <button
            className="bg-sky-500 text-white p-2 rounded-md tracking-wider"
            onClick={(e) => addNewJob(e)}
          >
            Add Job
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddJob
