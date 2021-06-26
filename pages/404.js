import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found | Ahmad Ihsan</title>
        <meta
          name='description'
          content="The page you were looking for doesn't exist. Have you discovered Narnia?"
        />
      </Head>
      <main>
        <section className='h-screen'>
          <div className='container flex flex-col justify-center h-full'>
            <div className='flex flex-row items-baseline'>
              <h1 className='font-serif text-4xl font-semibold text-black lg:text-5xl'>
                404 |
              </h1>
              <h4 className='font-sans ml-2.5 text-2xl font-medium text-gray-700'>
                Page Not Found
              </h4>
            </div>
            <h6 className='mt-8 font-sans text-lg font-light text-gray-700'>
              Go back to{' '}
              <Link href='/'>
                <a className='font-medium text-gray-500 no-underline transition duration-300 ease-in-out delay-100 hover:text-primary-500 hover:underline'>
                  home
                </a>
              </Link>
            </h6>
          </div>
        </section>
      </main>
    </>
  );
}
