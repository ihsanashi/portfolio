import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../src/components/Layout/index';
import { useQuery } from '@apollo/client';
import { GET_HOME_DATA } from '../lib/queries/homepageData';
import { BiRightArrowAlt } from 'react-icons/bi';

export default function Home() {
  const { loading, error, data } = useQuery(GET_HOME_DATA);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data);

  return (
    <>
      <Head>
        <title>Home | Ahmad Ihsan - Web Developer</title>
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
              <div className='max-w-xl mx-auto font-sans'>
                <h5 className='text-2xl text-center font-medium text-gray-900 mt-3 mb-5'>
                  <span className='font-serif text-transparent bg-clip-text bg-gradient-to-br from-primary-700 via-primary-500 to-primary-300'>
                    Ahmad Ihsan
                  </span>{' '}
                  is a Frontend Developer and UX/UI Designer from Kuala Lumpur,
                  Malaysia.
                </h5>
              </div>
            </section>
            {/* end: hero section */}
            {/* begin: new project section */}
            <section className='my-36'>
              <div className='max-w-4xl mx-auto'>
                <h5 className='inline-block pb-1 text-lg text-gray-900 border-b-2 border-accent-400 font-normal uppercase mb-10 tracking-widest'>
                  Projects
                </h5>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-16'>
                  {data.allProject.map((project) => (
                    <article
                      key={project._id}
                      className='relative h-full border border-gray-100 bg-white rounded-md'
                    >
                      <Image
                        className='rounded-t-md'
                        src={project.image.asset.url}
                        alt={`Photo of the project ${project.title}`}
                        layout='responsive'
                        width={330}
                        height={200}
                      />
                      <div className='p-5 flex flex-col'>
                        <h3 className='text-2xl font-semibold'>
                          {project.title}
                        </h3>
                        <p className='mt-[10px] mb-[30px] font-normal text-base text-gray-600 leading-normal'>
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
                                  className={`font-medium text-base text-center ${
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
                        <div className='flex flex-row justify-start items-center mt-10 group'>
                          <Link href={`projects/${project.slug.current}`}>
                            <a className='inline-block font-medium text-primary-600 hover:text-primary-300 text-sm tracking-wider'>
                              Explore
                            </a>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
            {/* end: new project section */}

            {/* begin: about summary */}
            <section className='my-36'>
              {/* begin: grid container */}
              <div className='grid grid-cols-2 max-w-4xl mx-auto bg-accent-25'>
                <div className='py-24 pl-24 font-sans'>
                  <h6 className='inline-block pb-1 text-base text-gray-900 border-b-2 border-accent-400 font-normal uppercase mb-5 tracking-widest'>
                    About
                  </h6>
                  <h5 className='font-medium font-serif text-2xl text-gray-700'>
                    Hello there, I'm Ihsan
                  </h5>
                  <p className='leading-relaxed font-normal text-base text-gray-700 my-7.5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga perspiciatis aut officiis possimus nam aspernatur,
                    maxime deserunt asperiores, similique soluta totam. Fugit
                    necessitatibus itaque dolor sapiente, perferendis eos modi
                    voluptate?
                  </p>
                  <Link href='/about'>
                    <a className='font-medium text-primary-600 hover:text-primary-300'>
                      Read more
                    </a>
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

            {/* begin: contact cta */}
            <section className='my-36'>
              <div className='max-w-xl mx-auto p-24 rounded-md'>
                <div className='text-center'>
                  <h3 className='text-3xl font-medium font-serif text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-pink-500 to-red-500'>
                    Want to reach out?
                  </h3>
                  <h6 className='mt-2.5 mb-7.5 text-lg text-gray-800'>
                    I'm actively looking for a remote Frontend Developer role,
                    primarily focusing on React.
                  </h6>
                  <Link href='/contact'>
                    <a className='inline-block bg-primary-50 hover:bg-primary-500 text-primary-500 hover:text-white font-medium px-5 py-3 rounded-md'>
                      Let's connect
                    </a>
                  </Link>
                </div>
              </div>
            </section>
            {/* end: contact cta */}
          </div>
          {/* end: container */}
        </main>
        {/* end: main wrapper */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
