"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { apiUrl } from "@/constant";
import { toast } from "sonner";
import { useAuth } from "@/context/UserContext";
import { useState } from "react";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),

  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

interface AuthFormProps {
  title: string;
  type: "login" | "register";
}

const AuthForm = ({ title, type }: AuthFormProps) => {
  const navigate = useNavigate();
  const {setUser} = useAuth()


  const [loading,setLoading] = useState(false)

  const form = useForm<
    z.infer<typeof loginSchema> | z.infer<typeof registerSchema>
  >({
    resolver: zodResolver(type === "login" ? loginSchema : registerSchema),
    defaultValues: {
      email: "",
      password: "",
      ...(type === "register" && { name: "" }),
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(
    values: z.infer<typeof loginSchema> | z.infer<typeof registerSchema>
  ) {
    try {
      setLoading(true)
      const res = await axios.post(`${apiUrl}/api/users/${type}`, values);
      setUser(res.data)
      navigate("/")
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.error || "Something went wrong.");
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="max-w-sm w-full ">
      <h1 className="text-3xl mb-5">{title}</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {type === "register" && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={loading}>
            {
              loading ? <>
               <Spinner/>
               Please Wait...
              </> : 'Submit'
            }
          </Button>
        </form>
      </Form>
      <div className="text-sm mt-5">
        {type === "login" ? (
          <p>
            Don't have an account ?{" "}
            <Link to={"/register"} className="underline text-blue-500">
              Create here
            </Link>{" "}
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <Link to={"/login"} className="underline text-blue-500">
              Login
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
