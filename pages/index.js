import Head from 'next/head';
import Layout from '../src/components/Layout/index';
import Slider from '../src/components/ProjectSlider/Slider';
import { useQuery } from '@apollo/client';
import { GET_HOME_DATA } from '../lib/queries/homepageData';

export default function Home() {
  const { loading, error, data } = useQuery(GET_HOME_DATA);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Head>
        <title>Home | Ahmad Ihsan - Software Developer</title>
        <meta name='description' content={data.Home.description} />
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
              <div className='flex flex-nowrap overflow-x-auto no-scrollbar'>
                <Slider />
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
