import Image from 'next/image';
import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/outline';
import Currency from 'react-currency-formatter';
const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = ({ id, title, description, category, image, price }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasPrime] = useState(Math.floor(Math.random() < 0.5));
  return (
    <div className='relative flex flex-col m-5 z-30 bg-white p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400 '>
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit='contain' />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className='h-5 text-yellow-500' />
          ))}
      </div>
      <p className='text-xm my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>
        <Currency quantity={price} currency='PKR' />
      </div>
      <div>
        {hasPrime && (
          <div className='flex items-center space-x-2 -mt-2'>
            <img
              className='w-12'
              src='https://links.papareact.com/fdw'
              alt=''
            />
            <p className='text-xs -mt-2'>Free Next-day Delivery</p>
          </div>
        )}
      </div>
      <button className='mt-auto button'>Add to Basket</button>
    </div>
  );
};

export default Product;
