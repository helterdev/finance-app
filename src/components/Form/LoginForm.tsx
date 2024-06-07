"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { loginSchema } from "@/schema/formSchema";
import Inputs from "./Inputs/Inputs";
import OauthButtons from "../OauthButtons/OauthButtons";
import Send from "./Send/Send";
import { IoIosSend } from "react-icons/io";
import { authLoginJWT } from "@/api/app-api";

type LoginSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      setIsLoading(true);
      const response = await authLoginJWT(data);
      if (response.status === 200) {
        setIsLoading(false);
        router.push("/dashboard");
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof axios.AxiosError) {
        if (error.response?.status === 401) {
          return toast({
            title: "Contraseña invalida",
            variant: "destructive",
          });
        }

        if (error.response?.status === 404) {
          return toast({
            title: "Usuario no encontrado",
            variant: "destructive",
          });
        }
      } else {
        return toast({
          title: "Error al conectar con el servidor",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section className='header-form flex items-baseline justify-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-4/5 box-border flex flex-col gap-2 items-center rounded-2xl max-w-[350px] custom-shadow'
      >
        <h3 className=' text-xl font-bold'>Log In</h3>

        <div className='flex flex-col gap-1 w-11/12 box-border'>
          <Inputs
            id='email'
            type='email'
            placeholder='Email'
            label='Email'
            register={register}
          />
          {errors.email && (
            <span className='text-[14px] text-red-600 font-bold'>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-1 w-11/12 box-border'>
          <Inputs
            id='password'
            type='password'
            placeholder='Password'
            label='Password'
            register={register}
          />
          {errors.password && (
            <span className='text-[14px] text-red-600 font-bold'>
              {errors.password.message}
            </span>
          )}
        </div>

        <div className='flex flex-col gap-1 w-11/12 box-border mt-2'>
          <Button
            disabled={isLoading}
            className='bg-black flex items-center gap-1 hover:bg-[var(--primary-orange)] active:bg-[var(--primary-orange)]'
          >
            {isLoading ? (
              <Send />
            ) : (
              <>
                Log In <IoIosSend className='text-2xl' />
              </>
            )}
          </Button>
        </div>
        <div className='line'></div>

        {/* Oauth buttons */}
        <OauthButtons />
      </form>
    </section>
  );
};

export default LoginForm;
