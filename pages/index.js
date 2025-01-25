import Head from 'next/head';
import Image from "next/legacy/image";
import Link from 'next/link';
import Custom404 from './404';
import Loading from '../src/components/Loading';
import Layout from '../src/components/Layout/index';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_DATA } from '../lib/queries/homepageData';
import { BiRightArrowAlt } from 'react-icons/bi';
import PortableText from 'react-portable-text';
import { initializeApollo } from '../lib/apolloClient';

export default function Home() {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA);

  if (loading) return <Loading />;
  if (error) return <Custom404 />;

  return (
    <>
      <Head>
        <title>Home | Ahmad Ihsan - Web Developer</title>
        <meta name='description' content={data.Home.description} />
      </Head>

      <Layout>
        <div className='container'>
          <section className='py-12 md:py-24'>
            <div className='max-w-xl mx-auto font-sans'>
              <h5 className='mt-3 mb-5 text-2xl font-medium text-center text-gray-900 dark:text-gray-200'>
                Ahmad Ihsan is a Software Developer from Kuala Lumpur, Malaysia.
              </h5>
            </div>
          </section>

          <section className='py-10 md:py-16'>
            <h5 className='inline-block pb-1 mb-10 text-lg font-normal tracking-widest text-gray-900 uppercase border-b-2 border-accent-400 dark:text-gray-100'>
              Projects
            </h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12'>
              {data.allProject.map((project) => (
                <article
                  key={project._id}
                  className='relative h-full bg-white border border-gray-100 rounded-md dark:border-gray-900 dark:bg-black group'
                >
                  <div className='relative'>
                    <Link href={`/projects/${project.slug.current}`}>
                      <Image
                        className='rounded-t-md'
                        src={project.image.asset.url}
                        alt={`Photo of the project ${project.title}`}
                        layout='responsive'
                        objectFit='cover'
                        width={330}
                        height={200}
                      />
                    </Link>
                  </div>
                  <div className='flex flex-col p-5'>
                    <Link href={`/projects/${project.slug.current}`}>
                      <h4 className='text-xl font-medium text-gray-900 transition duration-300 ease-in-out md:text-2xl group-hover:text-primary-500 dark:text-gray-100 dark:group-hover:text-primary-400'>
                        {project.title}
                      </h4>
                      <p className='text-sm leading-normal text-gray-600 dark:text-gray-400 md:text-base mt-2.5 mb-7.5'>
                        {project.summary}
                      </p>
                    </Link>
                    {project.links.length <= 2 && (
                      <ul className='flex flex-row'>
                        {project.links.map((item) => (
                          <li key={item._key}>
                            <a
                              href={item.link}
                              target='_blank'
                              className={`px-2.5 py-2 inline-block rounded-md mr-3 font-normal text-sm lg:text-base text-center ${
                                item.title.toLowerCase() !== 'source code'
                                  ? 'text-primary-600 bg-primary-50 dark:bg-white dark:text-primary-500 dark:hover:bg-primary-600 dark:hover:text-white hover:bg-primary-100 transition duration-500 ease-in-out transform hover:-translate-y-0.5'
                                  : 'text-gray-800 bg-white dark:bg-transparent dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-300 dark:hover:text-white hover:bg-gray-100 border border-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-0.5'
                              }`}
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className='flex flex-row items-center justify-start mt-10 group'>
                      <Link
                        className='inline-flex flex-row items-center text-sm font-medium tracking-wider transition duration-500 ease-in-out transform text-primary-600 dark:text-primary-400 dark:hover:text-primary-200 hover:text-primary-300 hover:translate-x-1'
                        href={`/projects/${project.slug.current}`}
                      >
                        Explore
                        <BiRightArrowAlt className='ml-1.5' size={18} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className='py-14 md:py-20'>
            <div className='grid max-w-4xl grid-cols-1 mx-auto rounded-lg md:grid-cols-2 bg-accent-25 dark:bg-primary-800'>
              <div className='order-2 px-7.5 pb-7.5 font-sans md:p-12 lg:py-24 lg:pl-24 md:order-1'>
                <h6 className='inline-block pb-1 text-base font-normal tracking-widest text-gray-900 uppercase border-b-2 border-accent-400 dark:text-gray-100'>
                  About
                </h6>
                <h5 className='my-5 font-serif text-2xl font-medium text-gray-700 dark:text-gray-300'>
                  Hello there, I'm Ihsan
                </h5>
                <PortableText
                  content={data.About.homeSummaryRaw}
                  serializers={{
                    normal: (props) => (
                      <p
                        className='text-sm text-gray-800 dark:text-gray-200 md:text-base'
                        {...props}
                      />
                    ),
                  }}
                />
                <Link
                  className='inline-block mt-7.5 font-medium transition duration-500 ease-in-out transform text-primary-600 dark:text-primary-300 dark:hover:text-primary-200 hover:text-primary-300 hover:translate-x-1'
                  href='/about'
                >
                  Read more
                </Link>
              </div>
              <div className='relative order-1 px-10 pb-2.5 -top-8 md:p-5 lg:p-4 md:top-32 md:left-8 lg:left-16 xl:left-24 md:order-2'>
                <img
                  src='./home-about.jpg'
                  alt='Placeholder image'
                  height='478px'
                  width='auto'
                  className='rounded-md shadow-lg'
                />
              </div>
            </div>
          </section>

          <section className='py-10 md:py-18'>
            <div className='max-w-xl p-8 mx-auto rounded-md lg:p-24'>
              <div className='text-center'>
                <h3 className='font-serif text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-pink-500 to-red-500 dark:from-primary-300 dark:via-pink-400 dark:to-red-400'>
                  Want to reach out?
                </h3>
                <h6 className='mt-2.5 mb-7.5 text-lg text-gray-800 dark:text-gray-300'>
                  I'm actively looking for a remote Frontend Developer role.
                </h6>
                <Link
                  className='inline-block px-5 py-3 font-medium rounded-md bg-primary-50 dark:bg-primary-700 hover:bg-primary-500 text-primary-500 dark:text-primary-300 dark:hover:bg-primary-600 dark:hover:text-white hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105'
                  href='/contact'
                >
                  Let's connect
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_HOMEPAGE_DATA,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
