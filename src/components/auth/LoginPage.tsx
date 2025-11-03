"use client";
import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Link } from "react-router";

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-16">
            <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10 relative overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-teal-200 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-teal-300 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>

                {/* Header */}
                <div className="text-center mb-10">
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-teal-100 text-teal-600 rounded-full shadow-md">
                            <LogIn size={28} />
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="text-gray-500 mt-2">Login to your account to continue</p>
                </div>

                {/* Form */}
                <form className="space-y-6">
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-500 outline-none transition shadow-sm hover:shadow-md"
                            required
                        />
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-teal-500 outline-none transition shadow-sm hover:shadow-md"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="accent-teal-500" />
                            Remember me
                        </label>
                        <Link to="#" className="text-teal-600 hover:text-teal-500 font-medium">
                            Forgot password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-500 text-white py-3 rounded-xl font-semibold text-lg transition-transform transform hover:scale-105 shadow-lg"
                    >
                        Login
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Don’t have an account?{" "}
                        <Link
                            to="/register"
                            className="text-teal-600 hover:underline font-medium"
                        >
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
}

export default LoginPage;
