'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/button';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io';
import { IoIosSend } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { registerSchema } from '@/schema/formSchema';
import Inputs from './Inputs/Inputs';

type FormProps = {
  path: '/login' | '/register';
};

type FormData = z.infer<typeof registerSchema>;

const Form = ({ path }: FormProps) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <section className='header-form flex items-baseline justify-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-4/5 box-border flex flex-col gap-2 items-center rounded-2xl max-w-[350px] custom-shadow'
      >
        <h3 className=' text-xl font-bold'>
          {path === '/register' ? 'Sing In' : 'Log In'}
        </h3>

        <div className='flex flex-col gap-1 w-11/12 box-border'>
          {path === '/register' ? (
            <Inputs
              id='username'
              label='Username'
              placeholder='Username'
              type='text'
              register={register}
            />
          ) : null}
          {path === '/register'
            ? errors.username && (
                <span className='text-[14px] text-red-600 font-bold'>
                  {errors.username.message}
                </span>
              )
            : null}
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
          {path === '/register' ? (
            <Button className='bg-black flex items-center gap-1 hover:bg-[var(--primary-orange)] active:bg-[var(--primary-orange)]'>
              Sing In <IoIosSend className='text-2xl' />
            </Button>
          ) : (
            <Button className='bg-black flex items-center gap-1 hover:bg-[var(--primary-orange)] active:bg-[var(--primary-orange)]'>
              Log In <IoIosSend className='text-2xl' />
            </Button>
          )}
        </div>
        <div className='line'></div>

        {/* Oauth buttons */}

        <div className='flex flex-col gap-1 w-11/12 box-border'>
          <div className='w-full'>
            <Button
              className='w-full flex items-center gap-1 bg-black hover:bg-[#444648] active:bg-[#444648]'
              type='button'
            >
              Apple <IoLogoApple className=' text-xl' />
            </Button>
          </div>
          <div className='w-full'>
            <Button
              className='w-full flex items-center gap-1 bg-white hover:bg-[#e0e0e0] active:bg-[#e0e0e0] text-black'
              type='button'
            >
              Google <FcGoogle className='text-xl' />
            </Button>
          </div>
          <div className='w-full'>
            <Button
              className='w-full flex items-center gap-1 bg-black hover:bg-[#444648] active:bg-[#444648]'
              type='button'
            >
              Github <FaGithub className='text-xl' />
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
