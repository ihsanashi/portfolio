import Head from 'next/head';
import Layout from '../../src/components/Layout';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Ahmad Ihsan</title>
        <meta
          name='description'
          content="Ahmad Ihsan's blog, currently in the works. Stay tuned!"
        />
      </Head>

      {/* begin: Layout component */}
      <Layout>
        <section className='my-36'>
          <div className='max-w-xl mx-auto'>
            <div className='container'>
              <div>
                <h5 className='font-serif text-xl md:text-2xl font-medium mb-2.5'>
                  Currently under maintenance 🚧
                </h5>
                <p className='font-sans text-base font-normal'>
                  Hope to have this up and running soon
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
