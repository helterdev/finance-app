export default function Title() {
  return (
    <section className=' flex h-52 items-center justify-center '>
      <div className='w-max hidden lg:flex'>
        <h1 className='animate-typing whitespace-nowrap overflow-hidden border-r-4 border-r-white  text-4xl lg:text-5xl text-white font-extrabold tracking-tight'>
          Your Money In Control Of Your Hands.
        </h1>
      </div>

      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center w-4/5 lg:hidden'>
        Your Money In Control Of Your Hands.
      </h1>
    </section>
  );
}
