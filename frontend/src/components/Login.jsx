import React, { useState } from 'react'
import { Eye, EyeOff, User, Lock } from 'lucide-react'
import { Link } from 'react-router'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!email) e.email = 'Email is required'
    else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(email)) e.email = 'Enter a valid email'
    if (!password) e.password = 'Password is required'
    else if (password.length < 6) e.password = 'Password must be at least 6 characters'
    return e
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    setLoading(true)
    // simulate async login
    setTimeout(() => {
      setLoading(false)
      alert(`Logged in as ${email}`)
    }, 900)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: branding / illustration */}
        <div className="hidden md:flex flex-col gap-6 pl-6">
          <div className="text-white">
            <h1 className="text-4xl font-extrabold leading-tight">Medio</h1>
            <p className="mt-2 text-slate-200 max-w-xs">AI-powered symptom checker & health guidance — secure, private, and designed for clarity.</p>
          </div>

          <div className="mt-auto text-slate-300 text-sm">Designed with accessibility and modern UX in mind. Your health, simplified.</div>
        </div>

        {/* Right: floating form card */}
        <div className="relative">
          <div className="absolute -left-6 top-6 w-36 h-36 rounded-2xl bg-white/5 blur-lg transform rotate-12" />
          <div className="p-8 bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl text-white font-semibold">Welcome back</h2>
              <p className="text-slate-300 text-sm">Sign in to continue to Medio</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {/* Email - floating */}
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`text-white peer w-full rounded-xl bg-white/5 border border-white/8 px-4 pt-6 pb-2 outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(99,102,241,0.08)] ${errors.email ? 'ring-1 ring-rose-500' : ''}`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                <label htmlFor="email" className="pointer-events-none absolute left-4 top-2 text-sm text-slate-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                  <div className="flex items-center gap-2">
                    <User size={14} /> <span>Email</span>
                  </div>
                </label>
                {errors.email && <p id="email-error" className="mt-1 text-rose-300 text-xs">{errors.email}</p>}
              </div>

              {/* Password - floating with toggle */}
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`text-white peer w-full rounded-xl bg-white/5 border border-white/8 px-4 pt-6 pb-2 outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(99,102,241,0.08)] ${errors.password ? 'ring-1 ring-rose-500' : ''}`}
                  aria-invalid={errors.password ? 'true' : 'false'}
                  aria-describedby={errors.password ? 'password-error' : undefined}
                />
                <label htmlFor="password" className="pointer-events-none absolute left-4 top-2 text-sm text-slate-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                  <div className="flex items-center gap-2">
                    <Lock size={14} /> <span>Password</span>
                  </div>
                </label>

                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-3 rounded-md p-1 text-slate-300 hover:text-white focus:outline-none"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>

                {errors.password && <p id="password-error" className="mt-1 text-rose-300 text-xs">{errors.password}</p>}
              </div>

              <div className="flex items-center justify-between gap-4">
                <label className="inline-flex items-center gap-2 text-sm text-slate-300">
                  <input type="checkbox" className="h-4 w-4 rounded border-white/10 bg-white/5" />
                  Remember me
                </label>
                <a href="#" className="text-sm text-indigo-300 hover:underline">Forgot password?</a>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium shadow-lg hover:scale-[1.01] active:scale-99 transition-transform disabled:opacity-60"
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-white/8" />
                <div className="text-sm text-slate-300">Or continue with</div>
                <div className="h-px flex-1 bg-white/8" />
              </div>

              <div className="flex gap-3">
                <button type="button" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/8 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
                  Continue with Google
                </button>
                <button type="button" className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/8 px-4 py-2 text-sm text-slate-200 hover:bg-white/5">
                  Continue with Apple
                </button>
              </div>

              <p className="text-center text-slate-300 text-sm">Don't have an account? <Link to="/sign-up" className="text-indigo-300 hover:underline">Sign up</Link></p>
            </form>
          </div>

          {/* subtle floating card shadow */}
          <div className="absolute -right-6 bottom-6 w-24 h-24 rounded-2xl bg-indigo-600/10 blur-md" />
        </div>
      </div>

      {/* small style helper for inputs to remove browser placeholder influence */}
      <style>{`
        input::placeholder { color: transparent; }
      `}</style>
    </div>
  )
}
