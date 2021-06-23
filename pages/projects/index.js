import Head from 'next/head';
import Layout from '../../src/components/Layout';

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Ahmad Ihsan</title>
        <meta
          name='description'
          content='View projects that I have built here, with content fetched from Sanity, the headless CMS, and queried with GraphQL and Apollo'
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
                  Will be up shortly
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
