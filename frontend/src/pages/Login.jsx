import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, UserCircle2, Stethoscope } from "lucide-react";

const Login = ({setauth}) => {
	const [userType, setUserType] = useState("select");
  const redirect = useNavigate();
	console.log(setauth)
	const handleSubmit = async (e, type) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;
		const res = await fetch(`http://localhost:8080/${type}/login`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email: email, password: password }),
		});
		const obj = await res.json();
    if(res.status === 200) {
		setauth(true)
      return redirect("/dashboard");
    }
	};

	const ProfileSelection = () => (
		<div className="space-y-6">
			<div className="text-center">
				<h3 className="text-lg font-medium">Choose your profile type</h3>
				<p className="mt-1 text-sm text-gray-600">
					Select how you want to sign in to CareCircle
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<button
					onClick={() => setUserType("user")}
					className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
				>
					<UserCircle2 className="h-8 w-8 text-blue-600 mx-auto" />
					<h4 className="mt-2 font-medium">Sign in as User</h4>
					<p className="mt-1 text-sm text-gray-600">
						Access your healthcare network and communities
					</p>
				</button>
				<button
					onClick={() => setUserType("doctor")}
					className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
				>
					<Stethoscope className="h-8 w-8 text-blue-600 mx-auto" />
					<h4 className="mt-2 font-medium">Sign in as Doctor</h4>
					<p className="mt-1 text-sm text-gray-600">
						Manage your practice and patient care
					</p>
				</button>
			</div>
		</div>
	);

	const LoginForm = (props) => (
		<form className="space-y-6" onSubmit={(e) => handleSubmit(e, props.type)}>
			<div className="rounded-md shadow-sm -space-y-px">
				<div>
					<label htmlFor="email-address" className="sr-only">
						Email address
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<Mail className="h-5 w-5 text-gray-400" />
						</div>
						<input
							id="email-address"
							name="email"
							type="email"
							autoComplete="email"
							required
							className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Email address"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="password" className="sr-only">
						Password
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<Lock className="h-5 w-5 text-gray-400" />
						</div>
						<input
							id="password"
							name="password"
							type="password"
							autoComplete="current-password"
							required
							className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
							placeholder="Password"
						/>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<input
						id="remember-me"
						name="remember-me"
						type="checkbox"
						className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
					/>
					<label
						htmlFor="remember-me"
						className="ml-2 block text-sm text-gray-900"
					>
						Remember me
					</label>
				</div>
				<div className="text-sm">
					<a href="#" className="font-medium text-blue-600 hover:text-blue-500">
						Forgot password?
					</a>
				</div>
			</div>
			<div>
				<button
					type="submit"
					className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
				>
					Sign in as {props.type === "user" ? "user" : "Doctor"}
				</button>
			</div>
		</form>
	);

	return (
		<div className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Don't have an account?{" "}
						<Link
							to="/signup"
							className="font-medium text-blue-600 hover:text-blue-500"
						>
							Sign up here
						</Link>
					</p>
				</div>
				{userType === "select" && <ProfileSelection />}
				{userType === "user" && <LoginForm type="user" />}
				{userType === "doctor" && <LoginForm type="doctor" />}
				{userType !== "select" && (
					<button
						onClick={() => setUserType("select")}
						className="mt-4 w-full text-sm text-gray-600 hover:text-blue-500"
					>
						← Change profile type
					</button>
				)}
			</div>
		</div>
	);
};

export default Login;
