import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../src/components/Layout/index';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_DATA } from '../lib/queries/homepageData';
import { BiRightArrowAlt } from 'react-icons/bi';
import PortableText from 'react-portable-text';

export default function Home() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA);

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
                    className='relative h-full bg-white border border-gray-100 rounded-md group'
                  >
                    <div className='relative'>
                      <Link href={`projects/${project.slug.current}`}>
                        <a>
                          <Image
                            className='rounded-t-md'
                            src={project.image.asset.url}
                            alt={`Photo of the project ${project.title}`}
                            layout='responsive'
                            width={330}
                            height={200}
                          />
                        </a>
                      </Link>
                    </div>
                    <div className='flex flex-col p-5'>
                      <Link href={`projects/${project.slug.current}`}>
                        <a>
                          <h4 className='text-xl font-semibold text-gray-900 transition duration-300 ease-in-out md:text-2xl group-hover:text-primary-500'>
                            {project.title}
                          </h4>
                          <p className='text-sm leading-normal text-gray-600 md:text-base mt-2.5 mb-7.5'>
                            {project.summary}
                          </p>
                        </a>
                      </Link>
                      {project.links.length <= 2 && (
                        <ul className='flex flex-row'>
                          {project.links.map((item) => (
                            <li key={item._key}>
                              <a
                                href={item.link}
                                target='_blank'
                                className={`px-4 py-2 inline-block rounded-md mr-3 font-medium text-base text-center ${
                                  item.title.toLowerCase() !== 'source code'
                                    ? 'text-primary-600'
                                    : 'text-gray-800'
                                } ${
                                  item.title.toLowerCase() !== 'source code'
                                    ? 'bg-primary-50 hover:bg-primary-100 transition duration-500 ease-in-out transform hover:-translate-y-0.5'
                                    : 'bg-white hover:bg-gray-100 border border-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-0.5'
                                }`}
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
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
            <div className='grid max-w-4xl grid-cols-1 mx-auto lg:grid-cols-2 bg-accent-25'>
              <div className='order-2 px-12 py-12 font-sans lg:py-24 lg:pl-24 lg:order-1'>
                <h6 className='inline-block pb-1 mb-5 text-base font-normal tracking-widest text-gray-900 uppercase border-b-2 border-accent-400'>
                  About
                </h6>
                <h5 className='font-serif text-2xl font-medium text-gray-700 mb-7.5'>
                  Hello there, I'm Ihsan
                </h5>
                <PortableText
                  content={data.About.homeSummaryRaw}
                  serializers={{
                    normal: (props) => (
                      <p
                        className='text-base text-gray-800 md:text-lg'
                        {...props}
                      />
                    ),
                  }}
                />
                <Link href='/about'>
                  <a className='inline-block mt-7.5 font-medium transition duration-500 ease-in-out transform text-primary-600 hover:text-primary-300 hover:translate-x-1'>
                    Read more
                  </a>
                </Link>
              </div>
              <div className='static order-1 lg:relative lg:top-32 lg:left-24 lg:order-2'>
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
            <div className='max-w-xl p-8 mx-auto rounded-md lg:p-24'>
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
