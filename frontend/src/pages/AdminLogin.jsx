import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

import { loginUser } from "../services/authService";
import { useAuth } from "../hooks/useAuth";

const loginSchema = z.object({
    email: z
        .string()
        .email("Please enter a valid email"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),
});

function AdminLogin() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data) => {

        try {

            setLoading(true);

            const response = await loginUser(data, true);

            login(
                response.token,
                response.user
            );

            toast.success("Welcome Administrator!");

            setTimeout(() => {

                navigate("/admin");

            }, 1000);

        }

        catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Login Failed"
            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <AuthLayout>

            <ToastContainer position="top-right" />

            <AuthCard
                title="VNAverse Admin Portal"
                subtitle="Secure access for authorized administrators only."
            >

                <form onSubmit={handleSubmit(onSubmit)}>

                    <FormInput
                        label="Admin Email"
                        type="email"
                        placeholder="Enter your admin email"
                        error={errors.email?.message}
                        {...register("email")}
                    />

                    <PasswordInput
                        label="Password"
                        placeholder="Enter your password"
                        error={errors.password?.message}
                        {...register("password")}
                    />

                    <AuthButton
                        text="Admin Login"
                        loading={loading}
                    />

                </form>

            </AuthCard>

        </AuthLayout>

    );

}

export default AdminLogin;
