import Head from 'next/head';
import Layout from '../src/components/Layout';
import Custom404 from './404';
import Loading from '../src/components/Loading';
import moment from 'moment';
import { useQuery } from '@apollo/client';
import { GET_ABOUT } from '../lib/queries/aboutpageData';
import PortableText from 'react-portable-text';
import { BiCalendar, BiMap, BiBriefcase } from 'react-icons/bi';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

export default function AboutPage() {
  const workIconStyles = 'inline-block mr-0.5 md:mr-1.5 text-gray-400';
  const workIconSize = 16;

  const workLeftFlexItemContainer =
    'flex flex-row items-start md:items-center justify-end mb-2.5';

  const { loading, error, data } = useQuery(GET_ABOUT);

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
      {/* begin: Layout component */}
      <Layout>
        <section className='my-20 md:my-36'>
          <div className='container'>
            {/* begin: hero */}
            <div className='grid grid-cols-1 gap-5 md:grid-cols-8 lg:grid-cols-12'>
              <div className='pt-3 md:col-span-3 lg:col-span-5'>
                <h6 className='mb-5 font-sans text-lg font-medium tracking-wider uppercase md:text-xl'>
                  About
                </h6>
                <h2 className='font-serif text-3xl font-bold text-transparent md:text-4xl lg:text-5xl bg-clip-text bg-gradient-to-br from-primary-700 via-primary-500 to-primary-300'>
                  Ahmad Ihsan
                </h2>
              </div>
              <div className='md:col-span-5 lg:col-span-7'>
                <PortableText
                  content={excerptRaw}
                  serializers={{
                    h5: (props) => (
                      <h5
                        className='font-sans text-xl leading-relaxed text-gray-800 md:text-2xl'
                        {...props}
                      />
                    ),
                  }}
                />
              </div>
            </div>
            {/* end: hero */}
          </div>
        </section>

        {/* begin: personal content */}
        <section className='md:mt-20 lg:mt-36'>
          <div className='py-24 bg-primary-800'>
            <div className='container'>
              <div className='max-w-xl mx-auto'>
                <h6 className='inline-block pb-1 mb-5 text-base font-normal tracking-widest text-gray-200 uppercase border-b-2 border-accent-400'>
                  Personal
                </h6>
                <PortableText
                  content={personalBodyRaw}
                  serializers={{
                    normal: (props) => (
                      <p
                        className='text-base text-gray-200 md:text-lg'
                        {...props}
                      />
                    ),
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* end: personal content */}
        {/* begin: work experience content */}
        <section>
          <div className='py-24 bg-gray-100'>
            <div className='container'>
              <h6 className='inline-block pb-1 text-base font-normal tracking-widest text-gray-700 uppercase border-b-2 border-accent-400 mb-7.5'>
                Work Experience
              </h6>
              <div className='max-w-full mx-auto md:max-w-2xl'>
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
                            <p className='text-xs text-gray-600 md:text-sm'>{`${moment(
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
                            <p className='text-xs text-gray-600 md:text-sm'>
                              {stint.location}
                            </p>
                          </div>
                          <div className={workLeftFlexItemContainer}>
                            <BiBriefcase
                              className={workIconStyles}
                              size={workIconSize}
                            />
                            <p className='text-xs text-gray-600 md:text-sm'>
                              {stint.employmentType}
                            </p>
                          </div>
                        </div>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <div className='mb-2.5'>
                          <span className='font-sans text-lg font-medium text-gray-900'>
                            {stint.jobTitle}
                          </span>
                          {' - '}
                          <span className='font-sans text-base font-light text-gray-700'>
                            {stint.employer}
                          </span>
                        </div>
                        <p className='text-sm leading-relaxed text-gray-800 md:text-base'>
                          {stint.description}
                        </p>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
            </div>
          </div>
        </section>
        {/* end: work experience content */}
        {/* begin: skills content */}
        <section>
          <div className='py-24 bg-white'>
            <div className='container'>
              <h6 className='inline-block pb-1 text-base font-normal tracking-widest text-gray-800 uppercase border-b-2 border-accent-400 mb-7.5'>
                Skills
              </h6>
              <div className='max-w-lg'>
                <ul className='flex flex-row flex-wrap'>
                  {skills.map((item) => (
                    <li
                      key={item._key}
                      className='mr-2.5 mb-2 px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded-md'
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* end: skills content */}
      </Layout>
      {/* end: Layout component */}
    </>
  );
}
