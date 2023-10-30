import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="py-2 px-16 bg-purple-500 flex justify-center items-center">
      <div className="logo flex flex-col items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1468971050039-be99497410af?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          style={{ width: "50px", height: "50px" }}
          className="rounded-full shadow-2xl"
        />
        <Link
          to="/"
          className="text-xl tracking-widest font-semibold text-slate-100"
        >
          Job Tracker
        </Link>
      </div>
      <div className="List flex-grow">
        <ul className="flex justify-end items-center">
          <li>
            <Link
              to="/"
              className="text-white p-3 border-solid hover:border-b-2 border-sky-700 hover:text-sky-700  mx-3 rounded-md hover:font-semibold hover:bg-slate-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="task"
              className="text-white p-3 border-solid hover:border-b-2 border-sky-700 hover:text-sky-700  mx-3 rounded-md hover:font-semibold hover:bg-slate-200"
            >
              Task
            </Link>
          </li>
          <li>
            <Link
              to="job"
              className="text-white p-3 border-solid hover:border-b-2 border-sky-700 hover:text-sky-700  mx-3 rounded-md hover:font-semibold hover:bg-slate-200"
            >
              Job
            </Link>
          </li>
          <li>
            <Link
              to="login"
              className="text-white p-3 border-solid hover:border-b-2 border-sky-700 hover:text-sky-700  mx-3 rounded-md hover:font-semibold hover:bg-slate-200"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
