import Head from 'next/head';
import Layout from '../src/components/Layout';
import { useQuery } from '@apollo/client';
import { GET_ABOUT } from '../lib/queries/aboutpageData';
import BlockContent from '@sanity/block-content-to-react';
import { BlockRenderer } from '../src/BlockRenderer';

export default function AboutPage() {
  const { loading, error, data } = useQuery(GET_ABOUT);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Head>
        <title>About | Ahmad Ihsan</title>
        <meta name='description' content='Learn more about Ahmad Ihsan' />
      </Head>
      {/* begin: Layout component */}
      <Layout>
        {/* begin: container */}
        <div className='container'>
          {/* begin: hero */}
          <section className='grid grid-cols-12 gap-5 my-36'>
            <div className='col-span-5 pt-3'>
              <h6 className='mb-5 font-sans text-xl font-medium tracking-wider uppercase'>
                About
              </h6>
              <h2 className='font-serif text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary-700 via-primary-500 to-primary-300'>
                Ahmad Ihsan
              </h2>
            </div>
            <div className='col-span-7'>
              <BlockContent
                blocks={data.About.excerptRaw}
                serializers={{ types: { block: BlockRenderer } }}
              />
            </div>
          </section>
          {/* end: hero */}
        </div>
        {/* end: container */}
        {/* begin: content with tabs */}
        <section className='my-24'>
          {/* begin: tabbar */}
          {/* begin: container */}
          <div className='container'>
            {/* begin: tab group */}
            <div className='relative z-10 flex items-center h-24 bg-white border border-gray-200 rounded-md shadow-md top-12'>
              <div className='grid flex-1 grid-cols-3 divide-x divide-gray-200 place-items-stretch'>
                <div className='flex items-center justify-center'>
                  <h6 className='text-xl text-center capitalize'>Personal</h6>
                </div>
                <div className='flex items-center justify-center'>
                  <h6 className='text-xl text-center capitalize'>
                    Work Experience
                  </h6>
                </div>
                <div className='flex items-center justify-center'>
                  <h6 className='text-xl text-center capitalize'>Skills</h6>
                </div>
              </div>
            </div>
            {/* end: tab group */}
          </div>
          {/* end: container */}
          {/* end: tabbar */}
          {/* begin: content */}
          <div className='flex flex-col items-center justify-center bg-primary-800 h-96'>
            {/* begin: container */}
            <div className='container'>
              <h1 className='text-4xl text-center text-white'>
                Sanity content here
              </h1>
            </div>
            {/* end: container */}
          </div>
          {/* end: content */}
        </section>
        {/* end: content with tabs */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
