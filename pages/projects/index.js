import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Custom404 from '../404';
import Loading from '../../src/components/Loading';
import Layout from '../../src/components/Layout';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS_DATA } from '../../lib/queries/allProjectsData';
import { BiRightArrowAlt } from 'react-icons/bi';
import { initializeApollo } from '../../lib/apolloClient';

export default function ProjectsPage() {
  const { loading, error, data } = useQuery(GET_PROJECTS_DATA);

  if (loading) return <Loading />;
  if (error) return <Custom404 />;

  return (
    <>
      <Head>
        <title>Projects | Ahmad Ihsan</title>
        <meta
          name='description'
          content='View projects that I have built here, with content fetched from Sanity, the headless CMS, and queried with GraphQL and Apollo'
        />
      </Head>

      <Layout>
        <section className='py-20 md:py-36'>
          <div className='container'>
            <h6 className='pb-10 text-lg font-bold text-center text-gray-900 uppercase md:hidden dark:text-gray-100'>
              Projects
            </h6>
            <div className='grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3'>
              {data.allProject.map((project) => (
                <article
                  key={project._id}
                  className='relative h-full bg-white border border-gray-100 rounded-md dark:border-gray-900 dark:bg-black group'
                >
                  <div className='relative'>
                    <Link href={`/projects/${project.slug.current}`}>
                      <a>
                        <Image
                          className='rounded-t-md'
                          src={project.image.asset.url}
                          alt={`Photo of the project ${project.title}`}
                          layout='responsive'
                          objectFit='cover'
                          width={330}
                          height={200}
                        />
                      </a>
                    </Link>
                  </div>
                  <div className='flex flex-col p-5'>
                    <Link href={`/projects/${project.slug.current}`}>
                      <a>
                        <h4 className='text-xl font-medium text-gray-900 transition duration-300 ease-in-out md:text-2xl group-hover:text-primary-500 dark:text-gray-100 dark:group-hover:text-primary-400'>
                          {project.title}
                        </h4>
                        <p className='text-sm leading-normal text-gray-600 dark:text-gray-400 md:text-base mt-2.5 mb-7.5'>
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
                              className={`px-2.5 py-2 inline-block rounded-md mr-3 font-normal text-base text-center ${
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
                      <Link href={`/projects/${project.slug.current}`}>
                        <a className='inline-flex flex-row items-center text-sm font-medium tracking-wider transition duration-500 ease-in-out transform text-primary-600 dark:text-primary-400 dark:hover:text-primary-200 hover:text-primary-300 hover:translate-x-1'>
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
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_PROJECTS_DATA,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
