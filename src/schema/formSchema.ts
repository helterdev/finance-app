import zod from "zod";

export const registerSchema = zod.object({
  username: zod
    .string({ required_error: "Username is required" })
    .min(3, { message: "The field must have a minimum of 3 characters" })
    .max(20),
  email: zod
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: zod
    .string({ required_error: "Password is required" })
    .min(6, { message: "The field must have a minimum of 6 characters" })
    .max(20),
});

export const loginSchema = zod.object({
  email: zod
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: zod
    .string({ required_error: "Password is required" })
    .min(6, { message: "The field must have a minimum of 6 characters" })
    .max(20),
});
