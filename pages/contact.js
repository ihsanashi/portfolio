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

  async function handleForm(e) {
    e.preventDefault();

    let formData = {};

    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    e.target.reset();
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>

      <Layout>
        <section className='py-20'>
          <div className='container'>
            <div className='max-w-lg mx-auto'>
              <div>
                <div className='text-center'>
                  <h6 className='text-xl uppercase text-primary-500 dark:text-primary-400'>
                    Contact
                  </h6>
                  <h1 className='pt-3 pb-5 font-serif text-5xl font-bold text-gray-900 dark:text-gray-100'>
                    Get in touch.
                  </h1>
                  <h6 className='text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-400'>
                    Connect with me through my socials or use the contact form
                    below. If you prefer writing emails, there's an option
                    underneath here too.
                  </h6>
                </div>
                <div className='mt-12'>
                  <div className='flex flex-row items-stretch justify-center'>
                    <input
                      className='inline w-auto px-5 py-3 overflow-hidden text-gray-900 bg-white border border-gray-200 dark:text-gray-100 dark:bg-gray-900 dark:border-gray-800 rounded-l-md focus:ring-0 focus:border-gray-200 dark:focus:border-gray-800'
                      type='text'
                      value='hello@ahmadihsan.com'
                      ref={emailRef}
                      readOnly
                    />
                    <button
                      className='inline-flex flex-row items-center px-5 py-3 text-white transition duration-500 ease-in-out bg-primary-400 dark:bg-primary-600 dark:hover:bg-primary-500 hover:bg-primary-600 rounded-r-md'
                      onClick={copyToClipboard}
                    >
                      <BiCopy size={16} />
                      <p className='ml-1 text-white'>Copy</p>
                    </button>
                  </div>
                </div>
                {isCopied && (
                  <p className='mt-7.5 max-w-max block mx-auto text-center text-sm bg-gray-200 dark:bg-gray-100 dark:text-gray-500 text-gray-600 p-1.5 rounded-md transition duration-300 ease-in-out'>
                    Copied to clipboard!
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className='py-20'>
          <div className='container'>
            <div className='w-32 mx-auto border-t-2 border-primary-100 dark:border-primary-700'></div>
          </div>
        </section>

        <section className='py-20'>
          <div className='container'>
            <div className='max-w-lg mx-auto'>
              <div className='text-center mb-14 md:mb-24'>
                <h3 className='font-serif text-3xl font-bold text-primary-500 dark:text-primary-400'>
                  Drop me a line
                </h3>
                <h6 className='mt-5 font-sans text-xl text-gray-700 dark:text-gray-400'>
                  I typically reply within 2 days. If it’s anything urgent, send
                  me a quick message on my socials!
                </h6>
              </div>
              <div>
                <form onSubmit={handleForm}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6'>
                    <div className='my-2.5 md:my-3.5'>
                      <label className='block' htmlFor='name'>
                        <span className='text-base font-medium text-gray-700 dark:text-gray-300'>
                          Full name
                        </span>
                        <input
                          type='text'
                          className='block w-full mt-1 text-gray-900 placeholder-gray-400 bg-gray-100 border-transparent rounded-md dark:text-gray-100 dark:bg-gray-800 focus:border-gray-500 dark:focus:border-gray-500 dark:focus:bg-black focus:bg-white focus:ring-0'
                          placeholder='Obi-Wan Kenobi'
                          id='name'
                          name='name'
                          required
                        />
                      </label>
                    </div>
                    <div className='my-2.5 md:my-3.5'>
                      <label className='block' htmlFor='email'>
                        <span className='text-base font-medium text-gray-700 dark:text-gray-300'>
                          Email address
                        </span>
                        <input
                          type='email'
                          className='block w-full mt-1 text-gray-900 placeholder-gray-400 bg-gray-100 border-transparent rounded-md dark:text-gray-100 dark:bg-gray-800 focus:border-gray-500 dark:focus:border-gray-500 dark:focus:bg-black focus:bg-white focus:ring-0'
                          placeholder='obi@therepublic.com'
                          id='email'
                          name='email'
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div className='grid grid-cols-1'>
                    <div className='my-2.5 md:my-3.5'>
                      <label className='block' htmlFor='subject'>
                        <span className='text-base font-medium text-gray-700 dark:text-gray-300'>
                          Subject
                        </span>
                        <input
                          type='text'
                          className='block w-full mt-1 text-gray-900 placeholder-gray-400 bg-gray-100 border-transparent rounded-md dark:text-gray-100 dark:bg-gray-800 focus:border-gray-500 dark:focus:border-gray-500 dark:focus:bg-black focus:bg-white focus:ring-0'
                          placeholder='The Death Star Initiative'
                          id='subject'
                          name='subject'
                          required
                        />
                      </label>
                    </div>
                  </div>
                  <div className='grid grid-cols-1'>
                    <div className='my-2.5 md:my-3.5'>
                      <label className='block' htmlFor='message'>
                        <div className='flex flex-row items-center justify-between'>
                          <span className='text-base font-medium text-gray-700 dark:text-gray-300'>
                            Message
                          </span>
                          <span className='text-sm font-light text-gray-500 dark:text-gray-400'>
                            Max. 500 characters
                          </span>
                        </div>
                        <textarea
                          className='block w-full mt-1 text-gray-900 placeholder-gray-400 bg-gray-100 border-transparent rounded-md dark:focus:bg-black dark:focus:border-gray-500 dark:text-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0 dark:bg-gray-800'
                          rows='3'
                          placeholder='Dear General Organa...'
                          id='message'
                          name='message'
                          required
                        ></textarea>
                      </label>
                    </div>
                  </div>
                  <div className='flex justify-end mt-12'>
                    <button className='px-6 py-3 transition duration-500 ease-in-out bg-white border rounded-md dark:bg-black dark:text-white dark:border-gray-700 dark:hover:bg-primary-400 text-primary-500 hover:text-white hover:bg-primary-500 border-primary-500'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
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
