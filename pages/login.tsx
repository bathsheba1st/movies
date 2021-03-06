import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
      <Head>
        <title>Movies</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Image
        src='https://rb.gy/p2hphi'
        layout='fill'
        className='-z-10 !hidden opacity-60 sm:!inline'
        objectFit='cover'
      />
      <img
        src='https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8='
        alt=''
        width={100}
        height={100}
        className='absolute left-4 cursor-pointer object-contain md:left-10 md:top-6'
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'
      >
        <h1 className='text-4xl font-semibold'>Log In</h1>
        <div className='space-y-4'>
          <label className='inline-block w-full'>
            <input
              type='email'
              placeholder='Email'
              className='input'
              {...register('email', { required: true })}
            />
            {errors.email && <p>A valid email is required</p>}
          </label>
          <label className='inline-block w-full'>
            <input
              type='password'
              placeholder='Password'
              className='input'
              {...register('password', { required: true })}
            />
            {errors.password && <p>Password must be at least 6 characters</p>}
          </label>
        </div>

        <button
          className='w-full rounded bg-[#d2545a] py-3 font-semibold'
          onClick={() => setLogin(true)}
        >
          Log In
        </button>

        <div className='text-[gray]'>
          New User?{' '}
          <button
            type='submit'
            className='text-white hover:underline'
            onClick={() => setLogin(false)}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
