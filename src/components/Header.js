import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
const Header = () => {
  return (
    <header>
      <div className='flex items-center bg-amazon_blue p-1 py-2 flex-grow'>
        {/* top nav */}
        <div className='flex items-center flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        {/* top Search */}
        <div className='hidden items-center  sm:flex bg-yellow-400 hover:bg-yellow-500 h-10 md:rounded flex-grow cursor-pointer'>
          <input
            className='p-2 flex flex-grow h-full flex-shrink rounded-l-md focus:outline-none'
            type='text'
          />
          <SearchIcon classNam className='h-12 p-4' />
        </div>
        {/* Right */}
        <div className='text-white flex items-center text-xs space-x-6 whitespace-nowrap'>
          <div className='link  '>
            <p>Hello Ali Raza</p>
            <p className='font-extrabold md:text-sm'>Account & List</p>
          </div>
          <div className='link  '>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='link flex items-center relative'>
            <span className='absolute top-0 right-0 md:right-10 w-4 h-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
              0
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm  mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* buttom nav */}
      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
        <p className=' link flex items-center'>
          <MenuIcon className="h-6 mr-1"/>
          All
        </p >
        <p className='link '>Prime Video</p>
        <p className='link '>Amazon Bussiness</p>
        <p className='link '>Today's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime </p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shapper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
