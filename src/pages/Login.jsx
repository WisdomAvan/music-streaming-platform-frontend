import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, AuthError } from "../api/authService";
import { loginSchema } from "../features/auth/loginSchema";
import { loginSucceeded } from "../features/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError(null);

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const errors = {};
      for (const issue of result.error.issues) {
        errors[issue.path[0]] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const data = await loginUser(result.data.email, result.data.password);
      dispatch(loginSucceeded(data));
      // TODO: navigate to /home once routing is wired in
    } catch (err) {
      setServerError(err instanceof AuthError ? err.message : "Network error — please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-80 bg-neutral-900 p-8 rounded-2xl"
      >
        <h1 className="text-white text-xl font-semibold">Log in</h1>

        {serverError && <p className="text-red-400 text-sm">{serverError}</p>}

        <label className="flex flex-col gap-1 text-sm text-neutral-400">
          Email
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white"
          />
          {fieldErrors.email && <span className="text-red-400 text-xs">{fieldErrors.email}</span>}
        </label>

        <label className="flex flex-col gap-1 text-sm text-neutral-400">
          Password
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white"
          />
          {fieldErrors.password && <span className="text-red-400 text-xs">{fieldErrors.password}</span>}
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-teal-400 text-neutral-950 font-semibold rounded-full py-2 mt-2 disabled:opacity-50"
        >
          {isSubmitting ? "Logging in..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
