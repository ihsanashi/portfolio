import Head from 'next/head';
import Image from 'next/image';
import Custom404 from '../404';
import Loading from '../../src/components/Loading';
import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_POST } from '../../lib/queries/singlePostData';
import moment from 'moment';
import PortableText from 'react-portable-text';
import { BiFolderOpen, BiCalendarEdit, BiHash } from 'react-icons/bi';

export default function SinglePostPage() {
  const router = useRouter();

  const { loading, error, data } = useQuery(GET_SINGLE_POST, {
    variables: { slug: router.query.slug },
  });

  if (loading) return <Loading />;
  if (error) return <Custom404 />;

  const post = data.allPost.length !== 0 ? data.allPost[0] : null;

  if (post === null) return <Custom404 />;

  return (
    <>
      <Head>
        <title>{`${post.title} - Blog | Ahmad Ihsan`}</title>
        <meta name='description' content={post.description} />
      </Head>

      {/* begin: Layout component */}
      <Layout>
        {/* begin: post content */}
        <section className='my-20 md:my-36'>
          <div className='container'>
            <div className='max-w-xl mx-auto'>
              <p className='font-sans text-base font-light text-center text-gray-500'>{`Posted ${moment(
                post.publishedAt
              ).format('MMMM D, YYYY - h:mm a')}`}</p>
              <h1 className='font-serif text-4xl font-bold text-center md:text-5xl lg:text-5xl mt-2.5 mb-4'>
                {post.title}
              </h1>
              <h6 className='font-sans text-lg font-normal text-center text-gray-700 md:text-xl'>
                {post.description}
              </h6>
            </div>
          </div>
          <div className='relative w-full max-w-4xl py-10 mx-auto'>
            <Image
              src={post.cover.asset.url}
              alt={post.cover.asset.altText}
              layout='responsive'
              width={960}
              height={540}
              objectFit='cover'
              className='rounded-none lg:rounded-md'
            />
          </div>
          <div className='container'>
            <div className='w-full max-w-5xl mx-auto'>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-6 lg:grid-cols-12'>
                <div className='order-2 col-span-1 md:order-1 lg:col-span-3'>
                  <div className='flex flex-row flex-wrap items-center font-sans text-sm text-gray-600 mb-2.5'>
                    <BiFolderOpen size={16} />
                    <p className='font-medium ml-1.5'>{post.category.title}</p>
                  </div>
                  <div className='flex flex-row flex-wrap items-center font-sans font-light text-sm text-gray-600 mb-2.5'>
                    <BiCalendarEdit size={16} />
                    <p className='ml-1.5'>
                      {`Updated ${moment(post._updatedAt).format(
                        'D MMM YYYY, h:mm a'
                      )}`}
                    </p>
                  </div>
                  <div className='flex flex-row flex-wrap items-center font-sans font-light text-sm text-gray-600 mb-2.5'>
                    <BiHash size={16} />
                    <ul className='flex flex-row flex-wrap ml-1.5'>
                      {post.tags.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='order-1 col-span-1 lg:col-start-4 lg:col-span-full md:order-2'>
                  <PortableText content={post.bodyRaw} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end: post content */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
