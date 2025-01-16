import { cn } from '@/lib/utils';
import React from 'react';

export default function SignUpForm() {
  return (
    <form className='max-w-md mx-auto'>
      <button className='flex items-center justify-center gap-3 border border-gray-700 mb-4 text-gray-200 rounded-lg font-semibold px-12 w-full py-3 text-lg hover:bg-gray-900 transition-all duration-300'>
        <svg
          className='size-6'
          viewBox='0 0 25 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_10072_1518)'>
            <path
              d='M24.2663 12.2764C24.2663 11.4607 24.2001 10.6406 24.059 9.83807H12.7402V14.4591H19.222C18.953 15.9494 18.0888 17.2678 16.8233 18.1056V21.1039H20.6903C22.9611 19.0139 24.2663 15.9274 24.2663 12.2764Z'
              fill='#4285F4'
            />
            <path
              d='M12.7401 24.0008C15.9766 24.0008 18.7059 22.9382 20.6945 21.1039L16.8276 18.1055C15.7517 18.8375 14.3627 19.252 12.7445 19.252C9.61388 19.252 6.95946 17.1399 6.00705 14.3003H2.0166V17.3912C4.05371 21.4434 8.2029 24.0008 12.7401 24.0008Z'
              fill='#34A853'
            />
            <path
              d='M6.00277 14.3003C5.50011 12.8099 5.50011 11.1961 6.00277 9.70575V6.61481H2.01674C0.314734 10.0056 0.314734 14.0004 2.01674 17.3912L6.00277 14.3003Z'
              fill='#FBBC04'
            />
            <path
              d='M12.7401 4.74966C14.4509 4.7232 16.1044 5.36697 17.3434 6.54867L20.7695 3.12262C18.6001 1.0855 15.7208 -0.034466 12.7401 0.000808666C8.2029 0.000808666 4.05371 2.55822 2.0166 6.61481L6.00264 9.70575C6.95064 6.86173 9.60947 4.74966 12.7401 4.74966Z'
              fill='#EA4335'
            />
          </g>
          <defs>
            <clipPath id='clip0_10072_1518'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(0.5)'
              />
            </clipPath>
          </defs>
        </svg>
        Kontynuuj z Google
      </button>
      <div className='flex items-center gap-4 mb-4'>
        <span className='flex-1 bg-gray-800 h-[1px]'> </span>
        <p className='text-gray-200 text-sm text-center font-semibold'>LUB</p>
        <span className='flex-1 bg-gray-800 h-[1px]'> </span>
      </div>
      <div className='space-y-4 mb-8'>
        <div className='flex flex-col gap-1.5'>
          <label
            className='text-gray-200 text-sm'
            htmlFor='name'
          >
            Imie
          </label>
          <input
            className={cn(
              'text-gray-200 text-base bg-transparent border border-gray-700 py-2.5 px-4 rouned-lg placeholder:text-gray-500 placeholder:text-base',
            )}
            type='text'
            name='name'
            id='name'
            placeholder='Podaj swoje imię'
          />
        </div>
        <div className='flex flex-col gap-1.5'>
          <label
            className='text-gray-200 text-sm'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className={cn(
              'text-gray-200 text-base bg-transparent border border-gray-700 py-2.5 px-4 rouned-lg placeholder:text-gray-500 placeholder:text-base',
            )}
            type='email'
            name='email'
            id='email'
            placeholder='Podaj swój email'
          />
        </div>
        <div className='flex flex-col gap-1.5'>
          <label
            className='text-gray-200 text-sm'
            htmlFor='password'
          >
            Haslo
          </label>
          <input
            className={cn(
              'text-gray-200 text-base bg-transparent border border-gray-700 py-2.5 px-4 rouned-lg placeholder:text-gray-500 placeholder:text-base',
            )}
            type='password'
            name='password'
            id='password'
            placeholder='Podaj swoje hasło'
          />
        </div>
      </div>
    </form>
  );
}
