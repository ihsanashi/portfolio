import Head from 'next/head';
import Custom404 from './404';
import Loading from '../src/components/Loading';
import { useState, useRef } from 'react';
import { BiCopy } from 'react-icons/bi';
import Layout from '../src/components/Layout';
import { useQuery } from '@apollo/client';
import { GET_CONTACT_DATA } from '../lib/queries/contactData';
import { initializeApollo } from '../lib/apolloClient';

export default function ContactPage() {
  const { loading, error, data } = useQuery(GET_CONTACT_DATA);
  const [isCopied, setIsCopied] = useState(false);
  const emailRef = useRef(null);

  if (loading) return <Loading />;
  if (error) return <Custom404 />;

  const { description, title } = data.Contact;

  function copyToClipboard(e) {
    emailRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setIsCopied(true);

    setTimeout((e) => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      {/* begin: Layout component */}
      <Layout>
        <section className='my-20 md:my-36'>
          <div className='container'>
            {/* begin: hero */}
            <div className='max-w-lg mx-auto'>
              <div>
                <div className='text-center'>
                  <h6 className='text-xl uppercase text-primary-500'>
                    Contact
                  </h6>
                  <h1 className='pt-3 pb-5 font-serif text-5xl font-bold'>
                    Get in touch.
                  </h1>
                  <h6 className='text-xl leading-relaxed text-gray-800'>
                    Connect with me through my socials or use the contact form
                    below. If you prefer writing emails, there's an option
                    underneath here too.
                  </h6>
                </div>
                <div className='mt-12'>
                  <div className='flex flex-row justify-center'>
                    <input
                      className='px-5 py-3 overflow-hidden border border-gray-200 rounded-l-md'
                      type='text'
                      value='hello@ahmadihsan.com'
                      ref={emailRef}
                      readOnly
                    />
                    <button
                      className='flex flex-row items-center px-5 py-3 text-white transition duration-500 ease-in-out bg-primary-400 hover:bg-primary-600 rounded-r-md'
                      onClick={copyToClipboard}
                    >
                      <BiCopy size={16} />
                      <p className='ml-1 text-white'>Copy</p>
                    </button>
                  </div>
                </div>
                {isCopied && (
                  <p className='ml-5 mt-5 inline-block text-sm bg-accent-200 text-accent-600 p-1.5 rounded-md transition duration-300 ease-in-out'>
                    Copied to clipboard!
                  </p>
                )}
              </div>
            </div>
            {/* end: hero */}
          </div>
        </section>
        {/* begin: separator */}
        <section className='my-20 md:my-36'>
          <div className='container'>
            <div className='w-32 mx-auto border-t-2 border-primary-100'></div>
          </div>
        </section>
        {/* end: separator */}
        {/* begin: contact form */}
        <section className='my-20 md:my-36'>
          <div className='container'>
            <div className='max-w-lg mx-auto'>
              <div className='text-center mb-14 md:mb-24'>
                <h3 className='font-serif text-3xl font-bold text-primary-500'>
                  Drop me a line
                </h3>
                <h6 className='mt-5 font-sans text-xl text-gray-700'>
                  I typically reply within 2 days. If it’s anything urgent, send
                  me a quick message on my socials!
                </h6>
              </div>
              <div>
                <form>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6'>
                    <div className='my-2.5 md:my-3.5'>
                      <label className='block'>
                        <span className='text-base font-medium text-gray-700'>
                          Full name
                        </span>
                        <input
                          type='text'
                          className='block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0'
                          placeholder='Obi-Wan Kenobi'
                        />
                      </label>
                    </div>
                    <div className='my-2.5 md:my-3.5'>
                      <label className='block'>
                        <span className='text-base font-medium text-gray-700'>
                          Email address
                        </span>
                        <input
                          type='email'
                          className='block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0'
                          placeholder='obi@therepublic.com'
                        />
                      </label>
                    </div>
                  </div>
                  <div className='grid grid-cols-1'>
                    <div className='my-2.5 md:my-3.5'>
                      <label className='block'>
                        <span className='text-base font-medium text-gray-700'>
                          Subject
                        </span>
                        <input
                          type='text'
                          className='block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0'
                          placeholder='The Death Star Initiative'
                        />
                      </label>
                    </div>
                  </div>
                  <div className='grid grid-cols-1'>
                    <div className='my-2.5 md:my-3.5'>
                      <label className='block'>
                        <div className='flex flex-row items-center justify-between'>
                          <span className='text-base font-medium text-gray-700'>
                            Message
                          </span>
                          <span className='text-sm font-normal text-gray-500'>
                            Max. 500 characters
                          </span>
                        </div>
                        <textarea
                          className='block w-full mt-1 bg-gray-100 border-transparent rounded-md focus:border-gray-500 focus:bg-white focus:ring-0'
                          rows='3'
                          placeholder='Dear General Organa...'
                        ></textarea>
                      </label>
                    </div>
                  </div>
                  <div className='flex justify-end mt-12'>
                    <button className='px-6 py-3 transition duration-500 ease-in-out bg-white border rounded-md text-primary-500 hover:text-white hover:bg-primary-500 border-primary-500'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* end: contact form */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_CONTACT_DATA,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
