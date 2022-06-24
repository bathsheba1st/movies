import { CheckIcon } from '@heroicons/react/outline';
import { Product } from '@stripe/firestore-stripe-payments';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { loadCheckout } from '../lib/stripe';
import Loader from './Loader';
import Table from './Table';

interface Props {
  products: Product[];
}

const Plans = ({ products }: Props) => {
  const { logout, user } = useAuth();

  const [selectedPlan, setSelectedPlan] = useState<Product | null>(products[1]);

  const [billingLoading, setBillingLoading] = useState(false);

  const subscribeToPlan = () => {
    if (!user) return;

    loadCheckout(selectedPlan?.prices[0].id!);
    setBillingLoading(true);
  };

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
        <button
          onClick={logout}
          className='text-lg font-medium hover:underline'
        >
          Sign Out
        </button>
      </header>

      <main className='mx-auto max-w-5xl pt-28 px-28 pb-12 transition-all md:px-10'>
        <h1 className='mb-3 text-3xl font-medium'>Choose your plan</h1>
        <ul>
          <li className='flex items-center gap-x-2 text-lg'>
            <CheckIcon className='h-7 w-7 text-[#E50914]' /> Watch shows you
            love. Ad-free.
          </li>
          <li className='flex items-center gap-x-2 text-lg'>
            <CheckIcon className='h-7 w-7 text-[#E50914]' /> Recommendations
            just for you.
          </li>
          <li className='flex items-center gap-x-2 text-lg'>
            <CheckIcon className='h-7 w-7 text-[#E50914]' /> Cancel your plan
            anytime.
          </li>
        </ul>

        <div className='mt-4 flex flex-col space-y-4'>
          <div className='flex w-full items-center justify-end self-end md:w-3/5'>
            {products.map((product) => (
              <div
                className={`planBox ${
                  selectedPlan?.id === product.id ? 'opacity-100' : 'opacity-60'
                }`}
                onClick={() => setSelectedPlan(product)}
                key={product.id}
              >
                {product.name}
              </div>
            ))}
          </div>

          <Table products={products} selectedPlan={selectedPlan} />

          <button
            disabled={!selectedPlan || billingLoading}
            className={`mx-auto w-11/12 rounded bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px] ${
              billingLoading && 'opacity-60'
            }`}
            onClick={subscribeToPlan}
          >
            {billingLoading ? (
              <Loader color='dark:fill-gray-300' />
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Plans;
