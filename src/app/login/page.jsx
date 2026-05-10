"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";

import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";

export default function LoginPage() {

    const onSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const {data, error} = await authClient.signIn.email({
            email,
            password,
            callbackURL: '/'
        });

        // Error Alert
        if (error) {
            toast.error(error.message || "Incorrect Credentials", {
                position: "top-center",
            });

            return;
        }

        // Success Alert
        if (data) {
            toast.success("Logged in! Welcome Back!", {
                position: "top-center",
            });

            e.target.reset();
        }
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google',
        })
    }

    return (
        <section className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-100 flex items-center justify-center px-4 py-10 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-10 right-10 w-72 h-72 bg-fuchsia-400/20 blur-3xl rounded-full"></div>

            <Card className="relative z-10 w-full max-w-xl rounded-[2rem] border border-purple-100 bg-white/90 backdrop-blur-xl shadow-2xl px-6 md:px-10 py-10">

                {/* Heading */}
                <div className="text-center">

                    <div className="relative inline-block overflow-hidden mt-5">

                        <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-900 via-fuchsia-700 to-indigo-700 py-2 bg-clip-text text-transparent">
                            Login
                        </h1>

                        {/* Shine Effect */}
                        <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>

                    </div>

                    <p className="mt-5 text-gray-600 leading-7 max-w-md mx-auto">
                        Welcome back! Continue your learning journey.
                    </p>

                </div>

                {/* Form */}
                <Form
                    className="mt-10 flex flex-col gap-6"
                    onSubmit={onSubmit}
                >


                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {

                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >

                        <Label className="text-gray-700 font-semibold mb-2">
                            Email
                        </Label>

                        <Input
                            placeholder="john@example.com"
                            className="w-full bg-purple-50 border border-purple-100 rounded-2xl h-14 px-4"
                        />

                        <FieldError />

                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                    >

                        <Label className="text-gray-700 font-semibold mb-2">
                            Password
                        </Label>

                        <Input
                            placeholder="Enter your password"
                            className="w-full bg-purple-50 border border-purple-100 rounded-2xl h-14 px-4"
                        />

                        <FieldError />

                    </TextField>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">

                        <Button
                            type="submit"
                            className="w-full bg-purple-700 text-white rounded-2xl h-14 text-base font-semibold hover:bg-purple-800 transition-all duration-300"
                        >
                            Login
                        </Button>

                        <Button
                            type="reset"
                            variant="bordered"
                            className="w-full border-purple-300 text-purple-700 rounded-2xl h-14 text-base font-semibold"
                        >
                            Reset
                        </Button>

                    </div>

                    <div>
                        <p className="text-center text-gray-800">Or</p>

                        <Button
                            onClick={handleGoogleSignIn}
                            className="w-full border border-purple-300 bg-white rounded-2xl h-14 text-purple-800 font-semibold mt-5 transition-all duration-300 hover:bg-purple-700 hover:text-white"
                        >
                            <GrGoogle/>
                            Sign in with Google
                        </Button>
                    </div>

                </Form>

                {/* Login Redirect */}
                <p className="mt-8 text-center text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link href={"/register"} className="text-purple-700 font-semibold cursor-pointer">
                        Register
                    </Link>
                </p>

                {/* Animation */}
                <style jsx>{`
                    @keyframes shine {
                        0% {
                            left: -120%;
                        }

                        100% {
                            left: 150%;
                        }
                    }

                    .animate-shine {
                        animation: shine 3s linear infinite;
                    }
                `}</style>

            </Card>

            <ToastContainer
            position="top-center"
            autoClose={3000}
            theme="colored"
            />
        </section>

        
    );
}