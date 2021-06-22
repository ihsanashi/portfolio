import Head from 'next/head';
import Layout from '../src/components/Layout';

export default function AboutPage() {
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
          <section className='my-36 grid grid-cols-12 gap-5'>
            <div className='col-span-5 pt-3'>
              <h6 className='text-xl uppercase font-medium font-sans mb-5 tracking-wider'>
                About
              </h6>
              <h2 className='font-serif font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-primary-700 via-primary-500 to-primary-300'>
                Ahmad Ihsan
              </h2>
            </div>
            <div className='col-span-7'>
              <h5 className='text-2xl text-gray-800 font-sans leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                sunt magni nam libero deleniti corrupti, porro, doloremque
                tempore, a aliquid quam cum iure sequi itaque repellat quibusdam
                voluptas iste facilis.
              </h5>
              <h5 className='text-2xl text-gray-800 font-sans leading-relaxed mt-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci voluptate sint soluta error dolor a ipsam ipsa,
                quibusdam dicta necessitatibus veritatis sequi inventore
                dolores, explicabo, quia cumque eius voluptatibus libero placeat
                repellendus laborum? Alias, ratione architecto.
              </h5>
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
            <div className='relative top-12 z-10 h-24 bg-white border border-gray-200 rounded-md shadow-md flex items-center'>
              <div className='grid grid-cols-3 divide-x divide-gray-200 place-items-stretch flex-1'>
                <div className='flex items-center justify-center'>
                  <h6 className='capitalize text-center text-xl'>Personal</h6>
                </div>
                <div className='flex items-center justify-center'>
                  <h6 className='capitalize text-center text-xl'>
                    Work Experience
                  </h6>
                </div>
                <div className='flex items-center justify-center'>
                  <h6 className='capitalize text-center text-xl'>Skills</h6>
                </div>
              </div>
            </div>
            {/* end: tab group */}
          </div>
          {/* end: container */}
          {/* end: tabbar */}
          {/* begin: content */}
          <div className='bg-primary-800 h-96 flex flex-col justify-center items-center'>
            {/* begin: container */}
            <div className='container'>
              <h1 className='text-4xl text-white text-center'>
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
