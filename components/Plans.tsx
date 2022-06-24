import { CheckIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';
import useAuth from '../hooks/useAuth';

const Plans = () => {

  const {logout} = useAuth()

  return (
    <div>
      <Head>
        <title>Movies</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='border-b border-white/10 bg-[#141414]'>
        <Link href='/'>
        <img
          src='https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8='
          alt=''
          width={80}
          height={80}
          className='cursor-pointer object-contain'
        />
        </Link>
        <button onClick={logout} className='text-lg font-medium hover:underline'>Sign Out</button>
      </header>

      <main className='pt-28 max-w-5xl px-28 pb-12 transition-all md:px-10'>
        <h1 className='mb-3 text-3xl font-medium'>Choose your plan</h1>
        <ul>
        <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Watch shows you love.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="h-7 w-7 text-[#E50914]" /> Cancel
            your plan anytime.
          </li>
        </ul>

        <div className='mt-4 flex flex-col space-y-4'>
          <div className='flex w-full items-center justify-end self-end md:w-3/5'>
            {/* Plan */}
            <div className='planBox'>
              Standard
            </div>
            {/* Plan */}
            {/* Plan */}
          </div>

          {/* <Table /> */}

          <button>Subscribe</button>
        </div>
      </main>
    </div>
  );
};

export default Plans;
