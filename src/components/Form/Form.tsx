import { Button } from '../ui/button';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoApple } from 'react-icons/io';
import { IoIosSend } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';

type FormProps = {
  path: '/login' | '/register';
};

const Form = ({ path }: FormProps) => {
  return (
    <section className='header-form flex items-baseline justify-center'>
      <form className='w-4/5 box-border flex flex-col gap-2 items-center rounded-2xl max-w-[350px]'>
        <h3 className=' text-xl font-bold'>
          {path === '/register' ? 'Sing In' : 'Log In'}
        </h3>
        {path === '/register' ? (
          <div className='flex flex-col gap-1 w-11/12 box-border'>
            <label
              htmlFor='username'
              className='font-normal text-sm pl-1'
            ></label>
            <input
              className='border-none font-normal text-normal rounded px-2 py-1 w-full outline-none focus:ring-2 focus:ring-[var(--primary-orange)] focus:ring-opacity-50 text-black'
              type='text'
              placeholder='Username'
              id='username'
            />
          </div>
        ) : (
          <></>
        )}

        <div className='flex flex-col gap-1 w-11/12 box-border'>
          <label htmlFor='email' className='font-normal text-sm pl-1'></label>
          <input
            type='email'
            placeholder='Email'
            id='email'
            className='border-none font-normal text-normal rounded px-2 py-1 w-full outline-none focus:ring-2 focus:ring-[var(--primary-orange)] focus:ring-opacity-50 text-black'
          />
        </div>
        <div className='flex flex-col gap-1 w-11/12 box-border'>
          <label
            htmlFor='password '
            className='font-normal text-sm pl-1'
          ></label>
          <input
            type='password'
            placeholder='Password'
            id='password'
            className='border-none font-normal text-normal rounded px-2 py-1 w-full outline-none focus:ring-2 focus:ring-[var(--primary-orange)] focus:ring-opacity-50 text-black'
          />
        </div>
        <div className='flex flex-col gap-1 w-11/12 box-border mt-2'>
          <Button className='bg-black flex items-center gap-1 hover:bg-[var(--primary-orange)] active:bg-[var(--primary-orange)]'>
            Sing In <IoIosSend className='text-2xl' />
          </Button>
        </div>
        <div className='line'></div>
        <div className='flex flex-col gap-1 w-11/12 box-border '>
          <div className='w-full'>
            <Button className='w-full flex items-center gap-1 bg-black hover:bg-[#444648] active:bg-[#444648]'>
              Apple <IoLogoApple className=' text-xl' />
            </Button>
          </div>
          <div className='w-full'>
            <Button className='w-full flex items-center gap-1 bg-white hover:bg-[#e0e0e0] active:bg-[#e0e0e0] text-black'>
              Google <FcGoogle className='text-xl' />
            </Button>
          </div>
          <div className='w-full'>
            <Button className='w-full flex items-center gap-1 bg-black hover:bg-[#444648] active:bg-[#444648]'>
              Github <FaGithub className='text-xl' />
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
