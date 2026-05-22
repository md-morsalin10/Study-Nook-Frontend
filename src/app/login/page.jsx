'use client'
import React from 'react';
import { Card, Button, Form, TextField, Input, Label, FieldError } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import { redirect, useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import toast from 'react-hot-toast';

const LoginPage = () => {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const users = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: users.email,
            password: users.password,
        });
        console.log(data, "data");
        if (data) {
            toast.success('Login Successful');
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
    }

    return (
        <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-6 py-12">
    
            <Card className="w-full max-w-md bg-[#1E293B] border border-slate-700 shadow-2xl rounded-[32px] p-10 relative overflow-hidden">


                <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/10 blur-[80px] rounded-full" />


                <div className="text-center mb-10 relative z-10">
                    <h1 className="text-3xl font-black text-white tracking-tight mb-2">
                        Welcome <span className="text-amber-500">Back</span>
                    </h1>
                    <p className="text-slate-400 text-sm font-medium">Please enter your details to login</p>
                </div>

                <Form className="flex flex-col gap-6 relative z-10" onSubmit={onSubmit}>
                    <div className="space-y-5">

                        <TextField isRequired name="email" type="email">
                            <Label className="text-slate-300 text-xs font-bold uppercase tracking-[0.15em] ml-1 mb-2 block">Email Address</Label>
                            <Input
                                placeholder="john@example.com"
                                className="bg-[#0F172A] border-slate-700 text-white rounded-2xl h-14 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-inner"
                            />
                            <FieldError className="text-red-400 text-xs mt-1" />
                        </TextField>


                        <TextField isRequired name="password" type="password">
                            <div className="flex justify-between items-center mb-2 px-1">
                                <Label className="text-slate-300 text-xs font-bold uppercase tracking-[0.15em] block">Password</Label>
                                <Link href="#" className="text-amber-500/80 text-[10px] font-bold uppercase tracking-wider hover:text-amber-500">Forgot?</Link>
                            </div>
                            <Input
                                placeholder="••••••••"
                                className="bg-[#0F172A] border-slate-700 text-white rounded-2xl h-14 transition-all"
                            />
                            <FieldError className="text-red-400 text-xs mt-1" />
                        </TextField>
                    </div>


                    <Button
                        type="submit"
                        className="w-full py-7 bg-amber-500 hover:bg-amber-600 text-[#0F172A] font-black rounded-2xl shadow-xl shadow-amber-500/20 transition-all uppercase tracking-[0.2em] text-xs mt-4"
                    >
                        Login to Account
                    </Button>
                </Form>

                <div className="flex items-center gap-4 my-8 relative z-10">
                    <div className="h-px bg-slate-700 flex-1" />
                    <span className="text-slate-500 text-[10px] font-bold tracking-[0.3em]">OR</span>
                    <div className="h-px bg-slate-700 flex-1" />
                </div>


                <Button
                    onClick={handleGoogleBtn}
                    className="w-full py-7 bg-transparent border-2 border-slate-700 text-white hover:bg-slate-800 rounded-2xl flex items-center justify-center gap-3 transition-all font-bold text-sm mb-2"
                >
                    <FcGoogle className="text-xl" />
                    <span>Continue with Google</span>
                </Button>


                <p className="text-center text-slate-400 text-sm mt-10 font-medium relative z-10">
                    Dont have an account?{' '}
                    <Link href="/signup" className="text-amber-500 font-bold hover:underline underline-offset-4 decoration-2 transition-all">
                        Create One
                    </Link>
                </p>
            </Card>
        </div>
    );
};

export default LoginPage;