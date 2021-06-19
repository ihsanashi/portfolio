import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../src/components/Layout/index';
import { useQuery } from '@apollo/client';
import { GET_HOME_DATA } from '../lib/queries/homepageData';
import sanityClient from '@sanity/client';
import { useNextSanityImage } from 'next-sanity-image';

const configuredSanityClient = sanityClient({
  projectId: 'd4bje89x',
  dataset: 'production',
  useCdn: true,
});

export default function Home() {
  const { loading, error, data } = useQuery(GET_HOME_DATA);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);

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
                  {data.Home.subtitle}
                </h6>
                <h2 className='text-4xl lg:text-5xl font-bold text-primary-500 mt-3 mb-5'>
                  Ahmad Ihsan
                </h2>
                <h5 className='text-2xl font-normal text-gray-700'>
                  {data.Home.title}
                </h5>
              </div>
            </section>
            {/* end: hero section */}
            {/* begin: project carousel */}
            <section className='my-36'>
              {/* begin: scroll container */}
              <div className='flex flex-nowrap overflow-x-auto no-scrollbar p-4'>
                {data.allProject.map((project) => (
                  <article
                    key={project._id}
                    className='grid grid-cols-2 rounded-md shadow-md bg-white mr-[30px] flex-0-0-auto w-[690px] h-[330px]'
                  >
                    <div className='flex flex-col justify-center p-10 font-sans'>
                      <h6 className='font-medium text-sm text-gray-700'>
                        {project.subtitle}
                      </h6>
                      <h3 className='font-bold text-3xl text-gray-900 mt-[10px] mb-5'>
                        {project.title}
                      </h3>
                      <p className='font-normal text-base text-gray-800 leading-normal mb-[30px]'>
                        {project.summary}
                      </p>
                      {project.links.length <= 2 && (
                        <div className='flex flex-row'>
                          {project.links.map((item, index) => (
                            <a
                              key={item._key}
                              href={item.link}
                              target='_blank'
                              className={`px-4 py-2 rounded-md mr-3 ${
                                item.title.toLowerCase() === 'live site'
                                  ? 'bg-primary-50 hover:bg-primary-100'
                                  : 'bg-white hover:bg-gray-100 border border-gray-200'
                              }`}
                            >
                              <p
                                className={`font-medium text-base text-center capitalize ${
                                  item.title.toLowerCase() === 'live site'
                                    ? 'text-primary-600'
                                    : 'text-gray-800'
                                }`}
                              >
                                {item.title}
                              </p>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                    <Image
                      className='rounded-r-md w-[330px] h-[330px]'
                      src={project.image.asset.url}
                      alt={`Photo of the project ${project.title}`}
                      layout='intrinsic'
                      width={330}
                      height={330}
                    />
                  </article>
                ))}
              </div>
              {/* end: scroll container */}
            </section>
            {/* end: project carousel */}
            {/* begin: about summary */}
            <section className='my-36'>
              {/* begin: grid container */}
              <div className='grid grid-cols-2 max-w-4xl mx-auto bg-[#FFFCEB]'>
                <div className='py-24 pl-24 font-sans'>
                  <h5 className='font-medium text-2xl text-gray-700'>
                    A little about me
                  </h5>
                  <p className='leading-relaxed font-normal text-base text-gray-700 my-[30px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga perspiciatis aut officiis possimus nam aspernatur,
                    maxime deserunt asperiores, similique soluta totam. Fugit
                    necessitatibus itaque dolor sapiente, perferendis eos modi
                    voluptate?
                  </p>
                  <Link href='/about'>
                    <a className='font-medium text-primary-600'>Read more</a>
                  </Link>
                </div>
                <div className='relative top-32 left-24'>
                  <img
                    src='https://images.unsplash.com/photo-1517920366573-9d35a519b7c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                    alt='Placeholder image'
                    height='400px'
                    width='400px'
                    className='rounded-md shadow-lg'
                  />
                </div>
              </div>
              {/* end: grid container */}
            </section>
            {/* end: about summary */}
          </div>
          {/* end: container */}
          {/* begin: contact cta */}
          <section className='my-36 py-[100px] bg-primary-50'>
            <div className='container'>
              <div className='flex flex-row justify-between items-center'>
                <div className='text-[32px]'>
                  <h4 className='mb-[10px] font-medium text-gray-700'>
                    Want to get in touch?
                  </h4>
                  <h4 className='font-bold text-primary-500'>Contact me</h4>
                </div>
                <div>
                  <Link href='/contact'>
                    <a className='bg-primary-500 hover:bg-primary-600 text-white font-medium px-5 py-3 rounded-md'>
                      Let's connect
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {/* end: contact cta */}
        </main>
        {/* end: main wrapper */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
