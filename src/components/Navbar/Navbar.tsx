import Link from 'next/link';
import { FaCircleDollarToSlot } from 'react-icons/fa6';
import MobileMenu from './MobileMenu/MobileMenu';

const Navbar = () => {
  return (
    <header>
      <nav className='w-4/5 flex justify-between items-center m-auto py-8 max-w-screen-2xl'>
        <Link
          href={'/'}
          className='text-[1.5rem] font-bold text-[var(--secundary-orange)]'
        >
          <FaCircleDollarToSlot />
        </Link>
        <div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
