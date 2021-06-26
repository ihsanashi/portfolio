import Head from 'next/head';
import Image from 'next/image';
import Custom404 from '../404';
import Loading from '../../src/components/Loading';
import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_PROJECT } from '../../lib/queries/singleProjectData';
import { BiLink, BiCaretRight } from 'react-icons/bi';
import moment from 'moment';
import PortableText from 'react-portable-text';

export default function SingleProjectPage() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_SINGLE_PROJECT, {
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

      {/* begin: Layout component */}
      <Layout>
        {/* begin: hero */}
        <section className='my-36'>
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
                      <li className='list-item list-none ml-1.5 text-gray-600 hover:text-primary-500'>
                        {item.title}
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
              <div className='relative'>
                <Image
                  src={project.image.asset.url}
                  layout='responsive'
                  objectFit='cover'
                  height={400}
                  width={710}
                />
              </div>
            </div>
          </div>
        </section>
        {/* end: hero */}

        {/* begin: content */}
        <section className='mt-36'>
          <div className='bg-gray-50'>
            <div className='container'>
              <div className='max-w-3xl mx-auto'>
                <div className='py-40'>
                  <PortableText
                    content={project.bodyRaw}
                    serializers={{
                      ul: (props) => (
                        <ul className='list-disc list-inside' {...props} />
                      ),
                      normal: (props) => (
                        <p
                          className='font-sans text-base font-normal text-gray-700'
                          {...props}
                        />
                      ),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end: content */}

        {/* begin: misc details */}
        <section className='mb-12'>
          <div className='px-12 py-24 bg-gray-900'>
            <div className='container'>
              <ul className='grid grid-cols-2 lg:grid-cols-4'>
                <li>
                  <p className='text-base text-gray-100 font-normal mb-2.5'>
                    Stack
                  </p>
                  <h6 className='text-lg font-normal text-white'>
                    {project.technologies.join(', ')}
                  </h6>
                </li>
                <li>
                  <p className='text-base text-gray-100 font-normal mb-2.5'>
                    Tags
                  </p>
                  <ul className='flex flex-row list-none'>
                    {project.tags.map((item, index) => (
                      <li key={index} className='mr-2'>
                        <p className='text-base text-white font-normal inline-block p-1.5 rounded-sm border border-gray-700'>
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <p className='text-base text-gray-100 font-normal mb-2.5'>
                    Duration
                  </p>
                  <h6 className='text-lg font-normal text-white'>
                    {project.completed
                      ? `${moment(project.startDate).format(
                          'Do MMM YYYY'
                        )} — ${moment(project.finishDate).format(
                          'Do MMM YYYY'
                        )}`
                      : 'Ongoing'}
                  </h6>
                </li>
                <li>
                  <p className='text-base text-gray-100 font-normal mb-2.5'>
                    Last updated
                  </p>
                  <h6 className='text-lg font-normal text-white'>
                    {`${moment(project._updatedAt).format('Do MMM YYYY')}`}
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* end: misc details */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
