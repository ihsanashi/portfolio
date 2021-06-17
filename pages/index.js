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

      <Layout>
        <h1 className='text-center'>Homepage content here</h1>
      </Layout>
    </>
  );
}
