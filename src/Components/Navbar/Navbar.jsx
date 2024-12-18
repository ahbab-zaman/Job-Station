import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="text-2xl font-semibold">JobStation</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <ul className="flex items-center justify-center gap-4">
            <li>
              <NavLink to="/"
                className={({ isActive }) =>
                  isActive ? "bg-[#c1c1c1cd] px-4 py-2 text-white rounded-md font-bold" : "bg-white text-black font-bold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/addJob"
                className={({ isActive }) =>
                  isActive ? "bg-[#c1c1c1cd] px-4 py-2 text-white rounded-md font-bold" : "bg-white text-black font-bold"
                }
              >
                Add Job
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://cdn-icons-png.freepik.com/256/2801/2801829.png?semt=ais_hybrid"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm space-y-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/profile">
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/myJob">My Posted Job</NavLink>
            </li>
            <li>
              <NavLink to="/bid">My Bid</NavLink>
            </li>
            <li>
              <NavLink to="/request">Bid Request</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
