import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(1, "Name id required"),
    email: z.string().min(1, "Email is required").email("Provide a valid email address"),
    password: z.string().min(1, "Please confirm your password"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
})

.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});