import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/AuthCard";
import FormInput from "../components/FormInput";
import PasswordInput from "../components/PasswordInput";
import AuthButton from "../components/AuthButton";

import { registerUser } from "../services/authService";

const registerSchema = z
    .object({
        name: z
            .string()
            .min(3, "Name must be at least 3 characters"),

        email: z
            .string()
            .email("Please enter a valid email"),

        password: z
            .string()
            .min(6, "Password must be at least 6 characters"),

        confirmPassword: z.string(),
    })
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        }
    );

function Register() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);

            await registerUser({
                name: data.name,
                email: data.email,
                password: data.password,
            });

            toast.success(
                "Welcome to VNAverse! Your account has been created successfully."
            );

            setTimeout(() => {
                navigate("/login");
            }, 1500);
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Registration Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <ToastContainer position="top-right" />

            <AuthCard
                title="Create Your Account"
                subtitle="Start your AI-powered learning journey with VNAverse."
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                        label="Full Name"
                        placeholder="Enter your full name"
                        error={errors.name?.message}
                        {...register("name")}
                    />

                    <FormInput
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email address"
                        error={errors.email?.message}
                        {...register("email")}
                    />

                    <PasswordInput
                        label="Password"
                        placeholder="Create a secure password"
                        error={errors.password?.message}
                        {...register("password")}
                    />

                    <PasswordInput
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        error={errors.confirmPassword?.message}
                        {...register("confirmPassword")}
                    />

                    <AuthButton
                        text="Create Account"
                        loading={loading}
                    />
                </form>

                <hr />

                <p className="text-center mb-0">
                    Already a member of VNAverse?

                    <Link
                        to="/login"
                        className="ms-2"
                    >
                        Sign In
                    </Link>
                </p>
            </AuthCard>
        </AuthLayout>
    );
}

export default Register;