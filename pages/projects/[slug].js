import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { PROJECT_DATA } from '../../lib/queries/dynamicProjectData';
import BlockContent from '@sanity/block-content-to-react';
import { BiLink, BiCaretRight } from 'react-icons/bi';
import moment from 'moment';

export default function DynamicProjectPage() {
  const router = useRouter();

  const { loading, error, data } = useQuery(PROJECT_DATA, {
    variables: { slug: router.query.slug },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const project = data.allProject.length !== 0 ? data.allProject[0] : null;

  if (project === null) return "Error! Page doesn't exist";

  return (
    <>
      <Head>
        <title>{`${project.title} | Ahmad Ihsan`}</title>
        <meta name='description' content='Project description here' />
      </Head>

      {/* begin: Layout component */}
      <Layout>
        {/* begin: main wrapper */}
        <main className='flex flex-col'>
          {/* begin: hero */}
          <section className='my-36'>
            <div className='container'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-7.5'>
                <div className='font-sans'>
                  <h2 className='text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800'>
                    {project.title}
                  </h2>
                  <h4 className='mt-5 text-lg md:text-xl lg:text-2xl font-normal text-gray-600'>
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
                        className='mb-5 inline-flex flex-row items-center'
                      >
                        <BiCaretRight size={16} />
                        <li className='list-item list-none ml-1.5'>
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
                    <BlockContent blocks={project.bodyRaw} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end: content */}

          {/* begin: misc details */}
          <section className='mb-12'>
            <div className='bg-gray-900 px-12 py-24'>
              <div className='container'>
                <h4 className='text-xl lg:text-2xl text-gray-200 font-medium mb-7.5'>
                  Miscellaneous details
                </h4>
                <ul className='grid grid-cols-2 lg:grid-cols-4'>
                  <li>
                    <p className='text-base text-gray-100 font-normal mb-2.5'>
                      Stack
                    </p>
                    <h6 className='text-lg text-white font-normal'>
                      {project.technologies.join(', ')}
                    </h6>
                  </li>
                  <li>
                    <p className='text-base text-gray-100 font-normal mb-2.5'>
                      Tags
                    </p>
                    <h6 className='text-lg text-white font-normal'>
                      {project.tags.join(', ')}
                    </h6>
                  </li>
                  <li>
                    <p className='text-base text-gray-100 font-normal mb-2.5'>
                      Duration
                    </p>
                    <h6 className='text-lg text-white font-normal'>
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
                    <h6 className='text-lg text-white font-normal'>
                      {`${moment(project._updatedAt).format('Do MMM YYYY')}`}
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* end: misc details */}
        </main>
        {/* end: main wrapper */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
