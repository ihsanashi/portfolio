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
  if (data.allProject.length === 0) return "Error! Page doesn't exist";

  const project = data.allProject[0];
  console.log(project);

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
          <section className='my-36'>
            <div className='max-w-5xl mx-auto'>
              <h2>{project.title}</h2>
              <BlockContent blocks={project.bodyRaw} />
            </div>
          </section>
        </main>
        {/* end: main wrapper */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
