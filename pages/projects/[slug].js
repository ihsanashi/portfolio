import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { PROJECT_DATA } from '../../lib/queries/dynamicProjectData';
import BlockContent from '@sanity/block-content-to-react';

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
              <div className='max-w-3xl mx-auto'>
                <div className='flex flex-row justify-end items-end flex-nowrap'>
                  <div className='h-[360px] w-[780px] md:relative'>
                    <div>
                      <Image
                        src={project.image.asset.url}
                        layout='responsive'
                        height={360}
                        width={780}
                      />
                    </div>
                    <div className='z-10 md:absolute -bottom-14 -left-24'>
                      <div className='border border-gray-100 bg-white p-7.5'>
                        <h3 className='text-3xl font-serif font-medium text-gray-800'>
                          {project.title}
                        </h3>
                        <p className='mt-2.5 text-base font-sans font-normal text-gray-600'>
                          {project.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* end: hero */}
          {/* begin: links */}
          <section className='my-12'>
            <div className='container'>
              <div className='max-w-2xl mx-auto'>
                <div>
                  <h6 className='font-medium text-xl uppercase tracking-widest'>
                    Links
                  </h6>
                </div>
                <div className='mt-7.5 max-w-xs'>
                  <ul className='list-none grid grid-cols-2'>
                    {project.links.map((item) => (
                      <a
                        key={item._key}
                        href={item.link}
                        target='_blank'
                        className='text-center mx-4 px-5 py-3 bg-none hover:bg-gray-200 hover:cursor-pointer rounded-md'
                      >
                        <li>{item.title}</li>
                      </a>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* end: links */}
          {/* begin: content */}
          <section className='my-36'>
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
        </main>
        {/* end: main wrapper */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
