import Head from 'next/head';
import Layout from '../src/components/Layout';
import Custom404 from './404';
import Loading from '../src/components/Loading';
import moment from 'moment';
import { useQuery } from '@apollo/client';
import { GET_ABOUT_DATA } from '../lib/queries/aboutpageData';
import PortableText from 'react-portable-text';
import { BiCalendar, BiMap, BiBriefcase } from 'react-icons/bi';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { initializeApollo } from '../lib/apolloClient';

export default function AboutPage() {
  const workIconStyles =
    'inline-block mr-0.5 md:mr-1.5 text-gray-400 dark:text-gray-500';
  const workIconSize = 16;

  const workLeftFlexItemContainer =
    'flex flex-col md:flex-row items-end md:items-start md:items-center justify-end mb-2.5';
  const workLeftFlexChildText =
    'mt-1.5 md:mt-0 text-gray-600 dark:text-gray-400 md:ml-1 text-sm';

  const { loading, error, data } = useQuery(GET_ABOUT_DATA);

  if (loading) return <Loading />;
  if (error) return <Custom404 />;

  const {
    _updatedAt,
    title,
    description,
    excerptRaw,
    personalBodyRaw,
    workExperience,
    skills,
  } = data.About;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>

      <Layout>
        <section>
          <div className='py-20 md:py-36'>
            <div className='container'>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-8 lg:grid-cols-12'>
                <div className='pt-3 md:col-span-3 lg:col-span-5'>
                  <h6 className='mb-5 font-sans text-lg font-medium tracking-wider uppercase md:text-xl'>
                    About
                  </h6>
                  <h2 className='font-serif text-3xl font-bold text-transparent md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-br from-primary-700 via-primary-500 to-primary-300 dark:from-primary-300 dark:via-primary-500 dark:to-primary-700'>
                    Ahmad Ihsan
                  </h2>
                </div>
                <div className='md:col-span-5 lg:col-span-7'>
                  <PortableText
                    content={excerptRaw}
                    serializers={{
                      h5: (props) => (
                        <h5
                          className='font-sans text-xl leading-10 text-gray-800 dark:text-gray-200 md:text-2xl'
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

        <section>
          <div className='py-24 bg-gray-800 md:py-36 dark:bg-primary-800'>
            <div className='container max-w-2xl mx-auto'>
              <h6 className='inline-block pb-1 mb-5 text-base font-normal tracking-widest text-gray-200 uppercase border-b-2 border-accent-400'>
                Personal
              </h6>
              <PortableText
                content={personalBodyRaw}
                serializers={{
                  normal: (props) => (
                    <p
                      className='text-base leading-7 text-gray-300 md:leading-8'
                      {...props}
                    />
                  ),
                  strong: (props) => (
                    <strong
                      className='font-sans font-semibold text-white'
                      {...props}
                    />
                  ),
                  ul: (props) => (
                    <ul className='list-disc list-inside' {...props} />
                  ),
                  li: (props) => (
                    <li
                      className='text-base leading-7 text-gray-300 md:leading-8'
                      {...props}
                    />
                  ),
                  blockquote: (props) => (
                    <blockquote
                      className='py-8 pl-5 text-base border-l md:text-lg border-accent-400 text-accent-400'
                      {...props}
                    />
                  ),
                }}
              />
            </div>
          </div>
        </section>

        <section>
          <div className='py-24 bg-gray-50 md:py-36 dark:bg-gray-900'>
            <div className='container max-w-2xl mx-auto'>
              <h6 className='inline-block pb-1 text-base font-normal tracking-widest text-gray-700 dark:text-gray-300 uppercase border-b-2 border-accent-400 mb-7.5'>
                Work Experience
              </h6>
              <Timeline>
                {workExperience.map((stint) => (
                  <TimelineItem key={stint._key}>
                    <TimelineOppositeContent>
                      <div>
                        <div className={workLeftFlexItemContainer}>
                          <BiCalendar
                            className={workIconStyles}
                            size={workIconSize}
                          />
                          <p className={workLeftFlexChildText}>{`${moment(
                            stint.startDate
                          ).format('MMM YYYY')} - ${
                            stint.isCurrentJob
                              ? 'Present'
                              : moment(stint.finishDate).format('MMM YYYY')
                          }`}</p>
                        </div>
                        <div className={workLeftFlexItemContainer}>
                          <BiMap
                            className={workIconStyles}
                            size={workIconSize}
                          />
                          <p className={workLeftFlexChildText}>
                            {stint.location}
                          </p>
                        </div>
                        <div className={workLeftFlexItemContainer}>
                          <BiBriefcase
                            className={workIconStyles}
                            size={workIconSize}
                          />
                          <p className={workLeftFlexChildText}>
                            {stint.employmentType}
                          </p>
                        </div>
                      </div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot
                        color={stint.isCurrentJob ? 'primary' : 'grey'}
                      />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div className='mb-1.5 md:mb-2.5'>
                        <span className='font-sans text-lg font-medium text-gray-900 dark:text-gray-100'>
                          {stint.jobTitle}
                        </span>
                        {' - '}
                        <span className='font-sans text-base font-light text-gray-700 dark:text-gray-200'>
                          {stint.employer}
                        </span>
                      </div>
                      <p className='text-sm leading-relaxed text-gray-800 md:text-base dark:text-gray-300'>
                        {stint.description}
                      </p>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>
        </section>

        <section>
          <div className='py-24 bg-white md:py-36 dark:bg-black'>
            <div className='container max-w-2xl mx-auto'>
              <h6 className='inline-block pb-1 text-base font-normal tracking-widest text-gray-800 dark:text-gray-200 uppercase border-b-2 border-accent-400 mb-7.5'>
                Skills
              </h6>
              <ul className='flex flex-row flex-wrap'>
                {skills.map((item) => (
                  <li
                    key={item._key}
                    className='mr-2.5 mb-2 px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-sm md:text-base'
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
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
    query: GET_ABOUT_DATA,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
