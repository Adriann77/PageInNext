'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { verifyEmailSchema } from '@/lib/zod';
import { TVerifyEmailForm } from '@/lib/types';
import { signupAction } from '@/actions/auth-actions';

export default function VerifyEmailForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<TVerifyEmailForm>({
    resolver: zodResolver(verifyEmailSchema),
  });

  async function onSubmit(data: TVerifyEmailForm) {
    const response = await signupAction(data);

    if (response?.succes === false) {
      if (
        typeof response.errors === 'object' &&
        response.errors?.code?.length
      ) {
        setError('code', {
          type: 'server',
          message: response.errors.code[0],
        });
      }
    }
    if (response.message) {
      setError('root', {
        type: 'server',
        message: response.message[0],
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-md mx-auto'
    >
      <div className='space-y-4 mb-8'>
        <div className='flex flex-col gap-1.5'>
          <label
            className='text-gray-200 text-sm'
            htmlFor='code'
          >
            Kod weryfikacyjny
          </label>
          <input
            className={cn(
              'text-gray-200 text-base bg-transparent border border-gray-700 py-2.5 px-4 rounded-lg placeholder:text-gray-500 placeholder:text-base',
              errors.code && 'border-red-400',
            )}
            type='text'
            id='code'
            placeholder='Wprowadź kod weryfikacyjny'
            {...register('code')}
          />
          {errors.code && (
            <p className='text-red-400 text-sm mt-1'>{errors.code.message}</p>
          )}
          {errors.root && (
            <>
              <p className='text-red-400 text-sm mt-1'>{errors.root.message}</p>
            </>
          )}
        </div>
      </div>
      <button
        type='submit'
        // disabled
        className='bg-blue-600 mb-8 shadow-lg shadow-blue-600/40 w-full text-white rounded-lg font-semibold py-3 text-lg hover:bg-blue-700 trasition-all duration-300 disabled:bg-blue-600/40'
      >
        Stwórz konto{' '}
      </button>
    </form>
  );
}
