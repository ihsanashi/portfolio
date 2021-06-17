import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | Ahmad Ihsan</title>
        <meta name='description' content='Learn more about Ahmad Ihsan' />
      </Head>
      <section className='flex flex-col'>
        <div className='container'>
          <div className='py-36'>
            <p>Default about page. Work in progress.</p>
          </div>
        </div>
      </section>
    </>
  );
}
