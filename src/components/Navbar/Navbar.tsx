import Menu from './Menu/Menu';
import MobileMenu from './MobileMenu/MobileMenu';

const Navbar = () => {
  return (
    <header>
      <nav className='w-4/5 flex justify-between items-center m-auto py-8 max-w-screen-2xl'>
        <h2>Cash</h2>
        <div className='hidden md:block'>
          <Menu />
        </div>
        <div className='md:hidden'>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
