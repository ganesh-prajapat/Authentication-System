import { useState } from "react";
import {Eye} from "lucide-react"

export default function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="space-y-2">
     
      <div className="relative">
        <input
          id={name}
          name={name}
          type={isPassword && showPassword ? "text" : type}
          placeholder={label}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required
          className="w-full rounded-xl border border-slate-200
            bg-white px-4 py-3 text-sm text-slate-900
            outline-none transition placeholder:text-slate-400
            hover:border-slate-300
            focus:border-indigo-500 focus:ring-4
            focus:ring-indigo-500/10"
        />

        {isPassword && (
          <button
            type="button"
            disabled={!value}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2
              rounded-md px-2 py-1 text-xs font-medium
              text-slate-500 hover:text-indigo-600"
          >
            {showPassword ?<Eye className="h-5 w-5 text-slate-500"/> : <Eye className="h-5 w-5 text-slate-400"/>}
          </button>
        )}
      </div>
    </div>
  );
}
