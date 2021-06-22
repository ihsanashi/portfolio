import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../src/components/Layout/index';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../lib/queries/allProjectsData';
import { BiRightArrowAlt } from 'react-icons/bi';

export default function Home() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Head>
        <title>Home | Ahmad Ihsan - Web Developer</title>
        <meta
          name='description'
          content='Welcome to the homepage of Ahmad Ihsan, a Frontend Web Developer from Kuala Lumpur, Malaysia. Have a look around the site where you can view my projects, learn more about me, or get in touch.'
        />
      </Head>

      {/* begin: Layout component */}
      <Layout>
        {/* begin: container */}
        <div className='container'>
          {/* begin: hero section */}
          <section className='my-36'>
            <div className='max-w-xl mx-auto font-sans'>
              <h5 className='mt-3 mb-5 text-2xl font-medium text-center text-gray-900'>
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
              <h5 className='inline-block pb-1 mb-10 text-lg font-normal tracking-widest text-gray-900 uppercase border-b-2 border-accent-400'>
                Projects
              </h5>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-16'>
                {data.allProject.map((project) => (
                  <article
                    key={project._id}
                    className='relative h-full bg-white border border-gray-100 rounded-md'
                  >
                    <Image
                      className='rounded-t-md'
                      src={project.image.asset.url}
                      alt={`Photo of the project ${project.title}`}
                      layout='responsive'
                      width={330}
                      height={200}
                    />
                    <div className='flex flex-col p-5'>
                      <h3 className='text-2xl font-semibold'>
                        {project.title}
                      </h3>
                      <p className='mt-2.5 mb-7.5 font-normal text-base text-gray-600 leading-normal'>
                        {project.summary}
                      </p>
                      {project.links.length <= 2 && (
                        <div className='flex flex-row'>
                          {project.links.map((item) => (
                            <a
                              key={item._key}
                              href={item.link}
                              target='_blank'
                              className={`px-4 py-2 rounded-md mr-3 ${
                                item.title.toLowerCase() === 'live site'
                                  ? 'bg-primary-50 hover:bg-primary-100 transition duration-500 ease-in-out transform hover:-translate-y-0.5'
                                  : 'bg-white hover:bg-gray-100 border border-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-0.5'
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
                      <div className='flex flex-row items-center justify-start mt-10 group'>
                        <Link href={`projects/${project.slug.current}`}>
                          <a className='inline-flex flex-row items-center text-sm font-medium tracking-wider transition duration-500 ease-in-out transform text-primary-600 hover:text-primary-300 hover:translate-x-1'>
                            Explore
                            <BiRightArrowAlt className='ml-1.5' size={18} />
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
            <div className='grid max-w-4xl grid-cols-2 mx-auto bg-accent-25'>
              <div className='py-24 pl-24 font-sans'>
                <h6 className='inline-block pb-1 mb-5 text-base font-normal tracking-widest text-gray-900 uppercase border-b-2 border-accent-400'>
                  About
                </h6>
                <h5 className='font-serif text-2xl font-medium text-gray-700'>
                  Hello there, I'm Ihsan
                </h5>
                <p className='leading-relaxed font-normal text-base text-gray-700 my-7.5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  perspiciatis aut officiis possimus nam aspernatur, maxime
                  deserunt asperiores, similique soluta totam. Fugit
                  necessitatibus itaque dolor sapiente, perferendis eos modi
                  voluptate?
                </p>
                <Link href='/about'>
                  <a className='inline-block font-medium transition duration-500 ease-in-out transform text-primary-600 hover:text-primary-300 hover:translate-x-1'>
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
            <div className='max-w-xl p-24 mx-auto rounded-md'>
              <div className='text-center'>
                <h3 className='font-serif text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-pink-500 to-red-500'>
                  Want to reach out?
                </h3>
                <h6 className='mt-2.5 mb-7.5 text-lg text-gray-800'>
                  I'm actively looking for a remote Frontend Developer role,
                  primarily focusing on React.
                </h6>
                <Link href='/contact'>
                  <a className='inline-block px-5 py-3 font-medium rounded-md bg-primary-50 hover:bg-primary-500 text-primary-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105'>
                    Let's connect
                  </a>
                </Link>
              </div>
            </div>
          </section>
          {/* end: contact cta */}
        </div>
        {/* end: container */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
