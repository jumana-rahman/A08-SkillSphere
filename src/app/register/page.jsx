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
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast, ToastContainer } from "react-toastify";

export default function RegisterPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const {data, error} = await authClient.signUp.email({
            name,
            image,
            email,
            password
        });

        // Error Alert
        if (error) {
            toast.error(error.message || "Registration Failed!", {
                position: "top-center",
            });

            return;
        }

        // Success Alert
        if (data) {
            // Remove automatic session
            await authClient.signOut();
            
            toast.success("Registration Successful! Redirecting to login...", {
            position: "top-center",
        });

        e.target.reset();

        setTimeout(() => {
            router.push('/login');
        }, 1500);
        }
    };

    const handleGoogleSignUp = async () => {
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
                            Register
                        </h1>

                        {/* Shine Effect */}
                        <span className="absolute top-0 -left-[120%] w-[60%] h-full bg-white/40 blur-md rotate-12 animate-shine"></span>

                    </div>

                    <p className="mt-5 text-gray-600 leading-7 max-w-md mx-auto">
                        Create your account and start learning high-demand skills
                        with interactive online courses.
                    </p>

                </div>

                {/* Form */}
                <Form
                    className="mt-10 flex flex-col gap-6"
                    onSubmit={onSubmit}
                >

                    {/* Name */}
                    <TextField isRequired name="name" type="text">

                        <Label className="text-gray-700 font-semibold mb-2">
                            Name
                        </Label>

                        <Input
                            placeholder="Enter your name"
                            className="w-full bg-purple-50 border border-purple-100 rounded-2xl h-14 px-4"
                        />

                        <FieldError />

                    </TextField>

                    {/* Image URL */}
                    <TextField isRequired name="image" type="text">

                        <Label className="text-gray-700 font-semibold mb-2">
                            Image URL
                        </Label>

                        <Input
                            placeholder="Enter image URL"
                            className="w-full bg-purple-50 border border-purple-100 rounded-2xl h-14 px-4"
                        />

                        <FieldError />

                    </TextField>

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
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {

                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }

                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >

                        <Label className="text-gray-700 font-semibold mb-2">
                            Password
                        </Label>

                        <Input
                            placeholder="Enter your password"
                            className="w-full bg-purple-50 border border-purple-100 rounded-2xl h-14 px-4"
                        />

                        <Description className="text-sm text-gray-500 mt-2">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>

                        <FieldError />

                    </TextField>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">

                        <Button
                            type="submit"
                            className="w-full bg-purple-700 text-white rounded-2xl h-14 text-base font-semibold hover:bg-purple-800 transition-all duration-300"
                        >
                            <Check />
                            Register
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
                            onClick={handleGoogleSignUp}
                            className="w-full border border-purple-300 bg-white rounded-2xl h-14 text-purple-800 font-semibold mt-5 transition-all duration-300 hover:bg-purple-700 hover:text-white"
                        >
                            <GrGoogle/>
                            Register with Google
                        </Button>
                    </div>

                </Form>

                {/* Login Redirect */}
                <p className="mt-8 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link href={"/login"} className="text-purple-700 font-semibold cursor-pointer">
                        Login
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