import Head from 'next/head';
import { useState, useRef } from 'react';
import { BiCopy } from 'react-icons/bi';
import Layout from '../src/components/Layout';

export default function ContactPage() {
  const [isCopied, setIsCopied] = useState(false);
  const emailRef = useRef(null);

  function copyToClipboard(e) {
    emailRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setIsCopied(true);
    console.log(emailRef);

    setTimeout((e) => {
      console.log(emailRef.current);
      setIsCopied(false);
    }, 2000);
  }

  return (
    <>
      <Head>
        <title>Contact | Ahmad Ihsan</title>
        <meta name='description' content='Contact Ahmad Ihsan' />
      </Head>
      <Layout>
        <section className='flex flex-col'>
          <div className='container'>
            {/* begin: hero */}
            <div className='max-w-lg mx-auto my-36 text-center'>
              <div>
                <h6 className='text-primary-500 text-xl uppercase'>Contact</h6>
                <h1 className='text-5xl font-sans font-bold pt-3 pb-5'>
                  Get in touch.
                </h1>
                <h6 className='text-gray-800 text-xl'>
                  Connect with me through my socials or use the contact form
                  below. If you prefer writing emails, there's an option
                  underneath here too.
                </h6>
              </div>
              <div className='mt-14 flex flex-row justify-center items-center'>
                <div className='border rounded-md overflow-hidden flex flex-row'>
                  <input
                    className='py-3 px-5'
                    type='text'
                    value='hello@ahmadihsan.com'
                    ref={emailRef}
                    readOnly
                  />
                  <button
                    className='bg-primary-500 text-white rounded-r-md flex flex-row items-center px-5 py-3'
                    onClick={copyToClipboard}
                  >
                    <BiCopy size={16} />
                    <p className='ml-1'>Copy</p>
                  </button>
                </div>
              </div>
              {isCopied && (
                <p className='ml-5 mt-5 inline-block text-sm bg-accent-200 text-accent-600 p-1.5 rounded-md'>
                  Copied to clipboard!
                </p>
              )}
            </div>
            {/* end: hero */}
            {/* begin: separator */}
            <div className='max-w-lg mx-auto my-36 text-center'>
              <div className='w-32 border-t-2 border-primary-100 mx-auto'></div>
            </div>
            {/* end: separator */}
            {/* begin: contact form */}
            <div className='max-w-lg mx-auto my-36'>
              <div className='text-center mb-24'>
                <h3 className='font-bold font-sans text-3xl text-primary-500'>
                  Drop me a line
                </h3>
                <h6 className='font-sans text-xl text-gray-700 mt-5'>
                  I typically reply within 2 days. If it’s anything urgent, send
                  me a quick message on my socials!
                </h6>
              </div>
              <div>
                <form>
                  <div className='grid grid-cols-2 gap-x-6 my-7'>
                    <div>
                      <label className='block'>
                        <span className='text-gray-700 font-medium text-base'>
                          Full name
                        </span>
                        <input
                          type='text'
                          className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
                          placeholder='Obi-Wan Kenobi'
                        />
                      </label>
                    </div>
                    <div>
                      <label className='block'>
                        <span className='text-gray-700 font-medium text-base'>
                          Email address
                        </span>
                        <input
                          type='email'
                          className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
                          placeholder='obi@therepublic.com'
                        />
                      </label>
                    </div>
                  </div>
                  <div className='grid grid-cols-1 my-7'>
                    <label className='block'>
                      <span className='text-gray-700 font-medium text-base'>
                        Subject
                      </span>
                      <input
                        type='text'
                        className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
                        placeholder='The Death Star Initiative'
                      />
                    </label>
                  </div>
                  <div className='grid grid-cols-1 my-7'>
                    <label className='block'>
                      <div className='flex flex-row justify-between items-center'>
                        <span className='text-gray-700 font-medium text-base'>
                          Message
                        </span>
                        <span className='text-gray-500 font-normal text-sm'>
                          Max. 500 characters
                        </span>
                      </div>
                      <textarea
                        className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
                        rows='3'
                        placeholder='Dear General Organa...'
                      ></textarea>
                    </label>
                  </div>
                  <div className='flex justify-end mt-12'>
                    <button className='text-white bg-blue-500 hover:bg-blue-600 rounded-md px-6 py-3'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* end: contact form */}
          </div>
        </section>
      </Layout>
    </>
  );
}
