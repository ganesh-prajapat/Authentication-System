
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import FormInput from "./components/FormInput";
import  { signup} from "./apis/UserRegisterApi"
import { toast } from "react-toastify"

export default function Signup() {
  const navigate = useNavigate();
  const [Loading , setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
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

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    const data = await signup(formData);

    if (data.success === false) {
      toast.error( data.message|| "SignUp failed");
      throw new Error(data.message || "Signup failed");
      
    }

    navigate("/login", {
      state: {
        message: data.message || "Registration successful. Please log in.",
      },
    });
    toast.success("Registration successful. Please log in.")
  } catch (err) {
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="relative flex h-screen items-center justify-center
      overflow-hidden bg-slate-200 px-4 py-10m">


      <section className="relative w-full max-w-110 rounded-3xl
        border border-white/80 bg-white/90 p-7 shadow-xl
        shadow-slate-200/70 sm:p-9">

        {/* Heading */}
        <div className="mb-7">

          <h1 className="text-2xl text-center font-bold tracking-tight text-slate-700">
            Create your account
          </h1>

           <p className="mt-2 text-sm leading-6 text-slate-500">
            Enter your details to continue..
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Full name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />

          <FormInput
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />

          <FormInput
            label="Create password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
          />

          <button
            type="submit"
            disabled={Loading}
            className="group flex w-full items-center justify-center gap-2
              rounded-xl bg-indigo-500 px-4 py-3.5 text-sm font-semibold
              text-white shadow-lg shadow-indigo-600/20 transition
              hover:-translate-y-0.5 hover:bg-indigo-700
              focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
          >
           {Loading ? "Creating account..." : "Create account"}
            <ArrowRight size={17}
              className="transition-transform group-hover:translate-x-1" />
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-2">
          Already have an account?{" "}
          <Link to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-700">
            Sign in
          </Link>
        </p>

      </section>
    </main>
  );
}