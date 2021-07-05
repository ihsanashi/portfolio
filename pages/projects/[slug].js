import Head from 'next/head';
import Image from 'next/image';
import Custom404 from '../404';
import Loading from '../../src/components/Loading';
import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_PROJECT_DATA } from '../../lib/queries/singleProjectData';
import { BiLink, BiCaretRight } from 'react-icons/bi';
import moment from 'moment';
import PortableText from 'react-portable-text';
import { initializeApollo } from '../../lib/apolloClient';
import { portableTextSerializer } from '../../src/PortableTextSerializer';

export default function SingleProjectPage() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_SINGLE_PROJECT_DATA, {
    variables: { slug: router.query.slug },
  });

  if (loading) return <Loading />;
  if (error) return <Custom404 />;

  const project = data.allProject.length !== 0 ? data.allProject[0] : null;

  if (project === null) return <Custom404 />;

  return (
    <>
      <Head>
        <title>{`${project.title} - Projects | Ahmad Ihsan`}</title>
        <meta name='description' content={project.description} />
      </Head>

      <Layout>
        <section className='my-20 md:my-36'>
          <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-7.5'>
              <div className='font-sans'>
                <h2 className='text-3xl font-medium text-gray-800 md:text-4xl lg:text-5xl'>
                  {project.title}
                </h2>
                <h4 className='mt-5 text-lg font-normal text-gray-600 md:text-xl lg:text-2xl'>
                  {project.summary}
                </h4>
                <div className='inline-flex flex-row items-center justify-start border-b border-accent-400 pb-4 mt-10 mb-7.5'>
                  <BiLink size={20} />
                  <h6 className='ml-2.5 font-medium text-xl uppercase tracking-widest'>
                    Links
                  </h6>
                </div>
                <ul className='flex flex-col'>
                  {project.links.map((item) => (
                    <a
                      key={item._key}
                      href={item.link}
                      target='_blank'
                      className='inline-flex flex-row items-center mb-5'
                    >
                      <BiCaretRight size={16} />
                      <li className='list-item list-none ml-1.5 text-gray-600 hover:text-primary-500 transition duration-500 ease-in-out transform hover:translate-x-1'>
                        {item.title}
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
              <div className='relative rounded-md'>
                <Image
                  className='rounded-md'
                  src={project.image.asset.url}
                  layout='responsive'
                  objectFit='contain'
                  width={750}
                  height={560}
                />
              </div>
            </div>
          </div>
        </section>

        <section className='mt-20 md:mt-28 lg:mt-36'>
          <div className='bg-gray-50'>
            <div className='container'>
              <div className='max-w-3xl mx-auto'>
                <div className='py-20 md:py-32 lg:py-40'>
                  <PortableText
                    content={project.bodyRaw}
                    serializers={portableTextSerializer}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='bg-gray-900 px-5 py-8 md:px-7.5 md:py-12 lg:px-12 lg:py-24'>
            <div className='container'>
              <ul className='grid grid-cols-2 gap-5 lg:grid-cols-4'>
                <li>
                  <p className='text-sm md:text-base text-gray-300 font-light mb-2.5'>
                    Technologies
                  </p>
                  <h6 className='text-base font-normal text-white lg:text-lg'>
                    {project.technologies && project.technologies.join(', ')}
                  </h6>
                </li>
                <li>
                  <p className='text-sm md:text-base text-gray-300 font-light mb-2.5'>
                    Tags
                  </p>
                  <ul className='flex flex-row flex-wrap list-none'>
                    {project.tags.map((item, index) => (
                      <li key={index} className='mb-2 mr-2'>
                        <p className='text-sm lg:text-base text-white font-normal inline-block p-1.5 rounded-sm border border-gray-700'>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <p className='text-sm md:text-base text-gray-300 font-light mb-2.5'>
                    Duration
                  </p>
                  <h6 className='text-base font-normal text-white lg:text-lg'>
                    {project.completed
                      ? `${moment(project.startDate).format(
                          'MMM YYYY'
                        )} — ${moment(project.finishDate).format('MMM YYYY')}`
                      : 'Ongoing'}
                  </h6>
                </li>
                <li>
                  <p className='text-sm md:text-base text-gray-300 font-light mb-2.5'>
                    Last updated
                  </p>
                  <h6 className='text-base font-normal text-white lg:text-lg'>
                    {`${moment(project._updatedAt).format('Do MMMM YYYY')}`}
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_SINGLE_PROJECT_DATA,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
