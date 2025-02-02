import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero">
      <div className="hero-content w-3/4">
        <div className="card w-full shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <p className="text-center py-4">Don't Have an Account? <Link to="/register" className="font-semibold text-blue-500">Register</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
