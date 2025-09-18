import React, { useState } from 'react'
import { Eye, EyeOff, User, Lock, Mail, Home, UserCircle2 } from 'lucide-react'

import { Link } from 'react-router'


export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!name) e.name = 'Name is required'
    if (!email) e.email = 'Email is required'
    else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(email)) e.email = 'Enter a valid email'
    if (!password) e.password = 'Password is required'
    else if (password.length < 6) e.password = 'Password must be at least 6 characters'
    if (confirmPassword !== password) e.confirmPassword = 'Passwords do not match'
    if (!address) e.address = 'Address is required'
    if (!gender) e.gender = 'Gender is required'
    return e
  }

  const handleSubmit = (ev) => {
    // ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    // simulate async signup
    
    const createUser = async () => {
      
      
      try {
        setLoading(true)
        const request = await fetch(`${"http://localhost:3000"}/api/auth/create-user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username: name,
              email,
              password,
              address,
              gender
            })
          }
        );
        
        const data = await request.json();
        
        console.log(data);
        
        
        localStorage.setItem('auth-token',data.auth["auth-token"]);
        setLoading(false);
        
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
    }

    createUser();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full md:flex md:flex-col grid grid-cols-1 gap-8 items-center">
        {/* Left: branding */}
        <div className="hidden md:flex flex-col gap-6 pl-6 text-center">
          <div className="text-white">
            <h1 className="text-4xl font-extrabold leading-tight">Join Medio</h1>
            <p className="mt-2 text-slate-200 max-w-xs">Create your account to access AI-powered health guidance, securely and privately.</p>
          </div>
        </div>

        {/* Right: floating form card */}
        <div className="relative w-full">
          <div className="absolute -left-6 top-6 w-36 h-36 rounded-2xl bg-white/5 blur-lg transform rotate-12" />
          <div className="p-8 bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl shadow-2xl">
            <div className="mb-6">
              <h2 className="text-2xl text-white font-semibold">Create Account</h2>
              <p className="text-slate-300 text-sm">Sign up to get started with Medio</p>
            </div>

            <form className="space-y-5" noValidate>
              {/* Name */}
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`text-white peer w-full rounded-xl bg-white/5 border border-white/8 px-4 pt-6 pb-2 outline-none ${errors.name ? 'ring-1 ring-rose-500' : ''}`}
                />
                <label htmlFor="name" className="pointer-events-none absolute left-4 top-2 text-sm text-slate-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                  <div className="flex items-center gap-2"><User size={14} /> <span>Name</span></div>
                </label>
                {errors.name && <p className="mt-1 text-rose-300 text-xs">{errors.name}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`text-white peer w-full rounded-xl bg-white/5 border border-white/8 px-4 pt-6 pb-2 outline-none ${errors.email ? 'ring-1 ring-rose-500' : ''}`}
                />
                <label htmlFor="email" className="pointer-events-none absolute left-4 top-2 text-sm text-slate-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                  <div className="flex items-center gap-2"><Mail size={14} /> <span>Email</span></div>
                </label>
                {errors.email && <p className="mt-1 text-rose-300 text-xs">{errors.email}</p>}
              </div>

              {/* Address */}
              <div className="relative">
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={`text-white peer w-full rounded-xl bg-white/5 border border-white/8 px-4 pt-6 pb-2 outline-none ${errors.address ? 'ring-1 ring-rose-500' : ''}`}
                />
                <label htmlFor="address" className="pointer-events-none absolute left-4 top-2 text-sm text-slate-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                  <div className="flex items-center gap-2"><Home size={14} /> <span>Address</span></div>
                </label>
                {errors.address && <p className="mt-1 text-rose-300 text-xs">{errors.address}</p>}
              </div>

              {/* Gender */}
              <div className="relative">
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className={`peer w-full rounded-xl bg-white/5 border border-white/8 px-4 pt-6 pb-2 text-slate-100 outline-none ${errors.gender ? 'ring-1 ring-rose-500' : ''}`}
                >
                  <option value="" disabled hidden></option>
                  <option className='text-black' value="Male">Male</option>
                  <option className='text-black' value="Female">Female</option>
                  <option className='text-black' value="Other">Other</option>
                </select>
                <label htmlFor="gender" className="pointer-events-none absolute left-4 top-2 text-sm text-slate-300 transition-all peer-focus:top-2 peer-focus:text-sm">
                  <div className="flex items-center gap-2"><UserCircle2 size={14} /> <span>Gender</span></div>
                </label>
                {errors.gender && <p className="mt-1 text-rose-300 text-xs">{errors.gender}</p>}
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`text-white peer w-full rounded-xl bg-white/5 border border-white/8 px-4 pt-6 pb-2 outline-none ${errors.password ? 'ring-1 ring-rose-500' : ''}`}
                />
                <label htmlFor="password" className="pointer-events-none absolute left-4 top-2 text-sm text-slate-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                  <div className="flex items-center gap-2"><Lock size={14} /> <span>Password</span></div>
                </label>
                <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-3 top-3 text-slate-300 hover:text-white">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
                {errors.password && <p className="mt-1 text-rose-300 text-xs">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`text-white peer w-full rounded-xl bg-white/5 border border-white/8 px-4 pt-6 pb-2 outline-none ${errors.confirmPassword ? 'ring-1 ring-rose-500' : ''}`}
                />
                <label htmlFor="confirmPassword" className="pointer-events-none absolute left-4 top-2 text-sm text-slate-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm">
                  <div className="flex items-center gap-2"><Lock size={14} /> <span>Confirm Password</span></div>
                </label>
                {errors.confirmPassword && <p className="mt-1 text-rose-300 text-xs">{errors.confirmPassword}</p>}
              </div>

              <div>
                <Link onClick={handleSubmit} to={'/'}><button
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium shadow-lg hover:scale-[1.01] transition-transform disabled:opacity-60"
                >
                  {loading ? 'Creating account...' : 'Sign up'}
                  </button>
                </Link>
              </div>

              <p className="text-center text-slate-300 text-sm">Already have an account? <Link href="/log-in" className="text-indigo-300 hover:underline">Log in</Link></p>
            </form>
          </div>
          <div className="absolute -right-6 bottom-6 w-24 h-24 rounded-2xl bg-indigo-600/10 blur-md" />
        </div>
      </div>

      <style>{`input::placeholder { color: transparent; }`}</style>
    </div>
  )
}