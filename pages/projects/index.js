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
        <section className='my-36'></section>
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
