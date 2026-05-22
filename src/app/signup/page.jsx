'use client'
import React from 'react';
import { Card, Button, Form, TextField, Input, Label, FieldError } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import toast from 'react-hot-toast';

const SignUpPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const users = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signUp.email({
            name: users.name,
            image: users.image,
            email: users.email,
            password: users.password,
        })
        console.log(data);


        if (data) {
            toast.success('Sign up Successful');
            router.push("/");
        }
        if (error) {
            toast.error(error.message);
        }
    }

    const handleGoogleBtn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
        router.push("/");
    }

    return (
        <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6 py-12">

            <Card className="w-full max-w-md bg-[#1E293B] border border-slate-700 shadow-2xl rounded-[32px] p-10 relative overflow-hidden">

                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black text-white tracking-tight mb-2">
                        Join <span className="text-amber-500">StudyNook</span>
                    </h1>
                    <p className="text-slate-400 text-sm">Create your account to start booking</p>
                </div>

                <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
                    <div className="space-y-5">
                        {/* Name Field */}
                        <TextField isRequired name="name" type="text">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-widest ml-1 mb-2 block">Full Name</Label>
                            <Input
                                placeholder="Enter Your Name"
                                className="bg-[#0F172A] border-slate-700 text-white rounded-2xl h-12 focus:border-amber-500 transition-all"
                            />
                            <FieldError className="text-red-400 text-xs mt-1" />
                        </TextField>


                        <TextField isRequired name="email" type="email">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-widest ml-1 mb-2 block">Email Address</Label>
                            <Input
                                placeholder="your@email.com"
                                className="bg-[#0F172A] border-slate-700 text-white rounded-2xl h-12"
                            />
                            <FieldError className="text-red-400 text-xs mt-1" />
                        </TextField>


                        <TextField isRequired name="image" type="url">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-widest ml-1 mb-2 block">Profile Image URL</Label>
                            <Input
                                placeholder="https://image-link.com"
                                className="bg-[#0F172A] border-slate-700 text-white rounded-2xl h-12"
                            />
                            <FieldError className="text-red-400 text-xs mt-1" />
                        </TextField>


                        <TextField
                            isRequired
                            minLength={6}
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 6) {
                                    return "Password must be at least 6 characters";
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
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-widest ml-1 mb-2 block">Password</Label>
                            <Input
                                placeholder="Enter 6 digit Password"
                                className="bg-[#0F172A] border-slate-700 text-white rounded-2xl h-12"
                            />
                            <FieldError className="text-red-400 text-xs mt-1" />
                        </TextField>
                    </div>


                    <Button
                        type="submit"
                        className="w-full py-7 bg-amber-500 hover:bg-amber-600 text-[#0F172A] font-black rounded-2xl shadow-lg shadow-amber-500/20 transition-all uppercase tracking-widest text-xs mt-4"
                    >
                        Create Account
                    </Button>
                </Form>


                <div className="flex items-center gap-4 my-8">
                    <div className="h-px bg-slate-700 flex-1" />
                    <span className="text-slate-500 text-[10px] font-bold tracking-[0.2em]">OR</span>
                    <div className="h-px bg-slate-700 flex-1" />
                </div>


                <Button
                    onClick={handleGoogleBtn}
                    className="w-full py-7 bg-transparent border-2 border-slate-700 text-white hover:bg-slate-800 rounded-2xl flex items-center justify-center gap-3 transition-all font-bold text-sm"
                >
                    <FcGoogle className="text-xl" />
                    Continue with Google
                </Button>


                <p className="text-center text-slate-400 text-sm mt-10 font-medium">
                    Already have an account?{' '}
                    <Link href="/login" className="text-amber-500 font-bold hover:underline transition-all">
                        Log in
                    </Link>
                </p>
            </Card>
        </div>
    );
};

export default SignUpPage;