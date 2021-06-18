import Head from 'next/head';
import Layout from '../src/components/Layout/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ahmad Ihsan - Software Developer</title>
        <meta
          name='description'
          content='Ahmad Ihsan is a self taught Developer based in Kuala Lumpur, Malaysia. He focuses on front-end technologies such as Javascript, React and Next.js. He is also very into headless CMS and the JAMstack.'
        />
      </Head>

      {/* begin: Layout component */}
      <Layout>
        {/* begin: main wrapper */}
        <main className='flex flex-col'>
          {/* begin: container */}
          <div className='container'>
            {/* begin: hero section */}
            <section className='my-36'>
              <div className='max-w-xl mx-auto text-center font-sans'>
                <h6 className='text-xl font-normal text-gray-600'>
                  Hello there, my name is
                </h6>
                <h2 className='text-4xl lg:text-5xl font-bold text-primary-500 mt-3 mb-5'>
                  Ahmad Ihsan
                </h2>
                <h5 className='text-2xl font-normal text-gray-700'>
                  I'm a Web Developer and UX/UI Designer from Kuala Lumpur,
                  Malaysia
                </h5>
              </div>
            </section>
            {/* end: hero section */}
            {/* begin: project carousel */}
            <section className='my-36'>
              {/* begin: scroll container */}
              <div className=''>
                <div className='flex flex-row overscroll-x-contain'>
                  <article className='w-96'>Hello</article>
                  <article className='w-96'>there</article>
                  <article className='w-96'>there</article>
                </div>
              </div>
              {/* end: scroll container */}
            </section>
            {/* end: project carousel */}
          </div>
          {/* end: container */}
        </main>
        {/* end: main wrapper */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
