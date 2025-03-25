import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div
      className="w-[90%] md:w-[500px] border rounded-md border-[#A1A1A1]
    py-[40px] px-[50px]"
    >
      <div className="flex justify-center items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div></div>
      <form>
        <div className="mb-4 mt-8 px-auto ">
          <label className="floating-label ">
            <span>Email</span>
            <input
              type="text"
              placeholder="Email"
              className="input input-lg w-[400px]  h-[60px]"
              id="Email"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="floating-label">
            <span>Username</span>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-lg w-[400px]  h-[60px]"
              id="Full Name"
            />
          </label>
          </div>
          <div className="mb-4">
          <label className="floating-label">
            <span>Username</span>
            <input
              type="text"
              placeholder="username"
              className="input input-lg w-[400px]  h-[60px]"
              id="username"
            />
          </label>
           <div className="mb-4">
          <label className="floating-label">
            <span>Username</span>
            <input
              type="text"
              placeholder="username"
              className="input input-lg w-[400px]  h-[60px]"
              id="username"
            />
          </label>
          </div>
          <button
            className=" mt-4 btn btn-secondary btn-lg w-full"
            type="submit"
          >
            Login
          </button>
          <div className="flex items-center justify-center mt-4">
            <h2 className=" font-medium">Forgot Password ? </h2>
          </div>
        </div>
      </form>
      <div
        className="w-[90%] md:w-[400px] border rounded-md border-[#A1A1A1]
    py-[40px] px-[50px]"
      >
        <p>
          Don't have an account? <span className="text-pink-400">Sign up</span>
        </p>
      </div>
    </div>
  );
}
