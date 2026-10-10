import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import FormInput from "./components/FormInput";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Connect the login API here.
    console.log("Login form data:", formData);
  };

  return (
    <main
      className="relative flex min-h-screen items-center justify-center
      overflow-hidden bg-slate-200 px-4 py-10"
    >
      <section
        className="relative w-full max-w-100 rounded-3xl
        border border-white/80 bg-white/90 p-7 shadow-xl
        shadow-slate-200/70 backdrop-blur-xl sm:p-9"
      >
        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-2xl text-center  font-bold tracking-tight text-slate-700">
            Login in to Your Account
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Enter your details to continue..
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
          />

      
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2
              rounded-xl bg-indigo-500 px-4 py-3.5 text-sm font-semibold
              text-white shadow-lg shadow-indigo-600/20 transition
              hover:-translate-y-0.5 hover:bg-indigo-700
              focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
            >
              Sign in
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
         
        </form>

        <p className="text-center text-sm text-slate-500 mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Create an account
          </Link>
        </p>
      </section>
    </main>
  );
}
