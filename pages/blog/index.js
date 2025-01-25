import Head from 'next/head';
import Image from "next/legacy/image";
import Link from 'next/link';
import Custom404 from '../404';
import Loading from '../../src/components/Loading';
import Layout from '../../src/components/Layout';
import { useQuery } from '@apollo/client';
import { GET_POSTS_DATA } from '../../lib/queries/allPostsData';
import moment from 'moment';
import { BiFolderOpen, BiRightArrowAlt } from 'react-icons/bi';
import { initializeApollo } from '../../lib/apolloClient';

export default function BlogPage() {
  const { loading, error, data } = useQuery(GET_POSTS_DATA);

  if (loading) return <Loading />;
  if (error) return <Custom404 />;

  return (
    <>
      <Head>
        <title>Blog | Ahmad Ihsan</title>
        <meta
          name='description'
          content="Ahmad Ihsan's writings, mainly focusing on tech, personal or even random topics. Content coming in from Sanity.io."
        />
      </Head>

      <Layout>
        <section className='py-20 md:py-36'>
          <div className='container'>
            <h6 className='pb-10 text-lg font-bold text-center text-gray-800 uppercase dark:text-gray-200 md:hidden'>
              Blog Posts
            </h6>
            <ul className='grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3'>
              {data.allPost.map((post) => (
                <li key={post._id}>
                  <article className='flex flex-col group'>
                    <div className='relative'>
                      <Link href={`/blog/${post.slug.current}`}>
                        <Image
                          className='rounded-md'
                          src={post.cover.asset.url}
                          alt={post.cover.asset.altText}
                          layout='responsive'
                          width={330}
                          height={200}
                        />
                      </Link>
                    </div>
                    <div className='flex flex-row flex-wrap items-center my-2.5 font-sans group text-sm'>
                      <BiFolderOpen
                        className='text-gray-500 dark:text-gray-400'
                        size={16}
                      />
                      <p className='text-gray-600 dark:text-gray-400 font-normal ml-1.5'>
                        {post.category.title}
                      </p>
                      <p className='text-gray-300 dark:text-gray-500 font-light mx-1.5'>{` • `}</p>
                      <p className='font-normal text-gray-600 dark:text-gray-400'>
                        {moment(post.publishedAt).format('D MMM YYYY, h:mm a')}
                      </p>
                    </div>
                    <div>
                      <Link href={`/blog/${post.slug.current}`}>
                        <h4 className='text-xl font-semibold text-gray-900 transition duration-300 ease-in-out md:text-2xl dark:text-gray-100 dark:hover:text-primary-400 group-hover:text-primary-500'>
                          {post.title}
                        </h4>
                        <div className='flex flex-row flex-wrap items-center group mt-2.5'>
                          <p className='text-sm font-normal leading-normal text-gray-600 dark:text-gray-400 md:text-base'>
                            {post.description}
                          </p>
                          <BiRightArrowAlt
                            className='text-gray-400 border border-transparent rounded-full dark:group-hover:border-primary-400 group-hover:border-primary-500 dark:group-hover:text-primary-400 group-hover:text-primary-500 ml-1.5 transition duration-300 ease-in-out'
                            size={20}
                          />
                        </div>
                      </Link>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_POSTS_DATA,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
