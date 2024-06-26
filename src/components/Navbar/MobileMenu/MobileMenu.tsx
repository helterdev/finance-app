'use client';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { IoIosArrowDropright } from 'react-icons/io';
import { useState } from 'react';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <CiMenuFries className='text-xl text-[var(--primary-orange)] stroke-[var(--primary-orange)] w-6 h-6 cursor-pointer relative z-10' />
        </SheetTrigger>
        <SheetContent className='bg-[var(--primary-black)] text-[var(--primary-white)] border-none rounded-[8px]'>
          <SheetHeader>
            <SheetTitle className='text-[var(--primary-white) text-lg font-semibold] pt-8'>
              Welcome to App
            </SheetTitle>
            <SheetDescription className='text-[var(--secundary-white)]'>
              Manage your money efficiently in just one step!
            </SheetDescription>
          </SheetHeader>
          <section className='py-8'>
            <Link
              href={'/login'}
              className=' py-4 flex items-center justify-between border-b border-b-[var(--primary-white)] font-light text-sm hover:border-b-[var(--secundary-orange)] hover:text-[var(--secundary-orange)] transition-all duration-500'
              onClick={() => setOpen(true)}
            >
              Log In
              <IoIosArrowDropright className=' w-4 h-4' />
            </Link>
            <Link
              href={'/register'}
              className=' py-4 flex items-center justify-between border-b border-b-[var(--primary-white)] font-light text-sm hover:border-b-[var(--secundary-orange)] hover:text-[var(--secundary-orange)] transition-all duration-500'
              onClick={() => setOpen(true)}
            >
              Sing In
              <IoIosArrowDropright className='w-4 h-4' />
            </Link>
          </section>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
