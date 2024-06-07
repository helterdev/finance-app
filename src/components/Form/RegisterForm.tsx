"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { IoIosSend } from "react-icons/io";

import { toast } from "../ui/use-toast";
import { Button } from "../ui/button";
import { registerSchema } from "@/schema/formSchema";
import Inputs from "./Inputs/Inputs";
import { authRegisterJWT } from "@/api/app-api";
import Send from "./Send/Send";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import OauthButtons from "../OauthButtons/OauthButtons";

type FormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsLoading(true);
      const response = await authRegisterJWT(data);

      if (response.status === 201) {
        setIsLoading(false);
        toast({ title: "Registro Existoso" });
        router.push("/login");
      }
    } catch (error) {
      setIsLoading(false);
      if (error instanceof axios.AxiosError) {
        if (error.response?.status === 409) {
          return toast({
            title: "El correo ya se encuentra registrado",
            description: "Ingresa con otro correo o inicia sesión",
            variant: "destructive",
          });
        }

        if (error.response?.status === 500) {
          return toast({
            title: "Error al conectar con el servidor",
            variant: "destructive",
          });
        }
      } else {
        return toast({ title: "Error al conectar al servidor" });
      }
    }
  };

  return (
    <section className='header-form flex items-baseline justify-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-4/5 box-border flex flex-col gap-2 items-center rounded-2xl max-w-[350px] custom-shadow'
      >
        <h3 className=' text-xl font-bold'>Sing In</h3>

        <div className='flex flex-col gap-1 w-11/12 box-border'>
          <Inputs
            id='username'
            label='Username'
            placeholder='Username'
            type='text'
            register={register}
          />
        </div>

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
                Sing In <IoIosSend className='text-2xl' />
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

export default RegisterForm;
