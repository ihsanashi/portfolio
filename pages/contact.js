import Head from 'next/head';
import { useState } from 'react';
import { BiCopy } from 'react-icons/bi';

export default function ContactPage() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <>
      <Head>
        <title>Contact | Ahmad Ihsan</title>
        <meta name='description' content='Contact Ahmad Ihsan' />
      </Head>
      <section className='flex flex-col'>
        <div className='container'>
          <div className='max-w-lg mx-auto py-36 text-center'>
            <div>
              <h6 className='text-primary-500 text-xl uppercase'>Contact</h6>
              <h1 className='text-5xl font-bold pt-3 pb-5'>Get in touch.</h1>
              <h6 className='text-gray-800 text-xl'>
                Connect with me through my socials or use the contact form
                below. If you prefer writing emails, there's an option
                underneath here too.
              </h6>
            </div>
            <div className='mt-14 flex flex-row justify-center items-center'>
              <div className='border rounded-md flex flex-row'>
                <input
                  className='py-3 px-5'
                  type='text'
                  value='hello@ahmadihsan.com'
                  readOnly
                />
                <button className='bg-primary-500 text-white rounded-r-md flex flex-row items-center px-2 py-3'>
                  <BiCopy size={16} />
                  <p className='ml-1'>Copy</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
