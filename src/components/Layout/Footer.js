import Link from 'next/link';
import { Sitemap } from '../../Sitemap';
import { Socials } from '../../Socials';

export default function Footer() {
  return (
    <footer className='relative flex flex-col items-center justify-center py-16 md:py-24 lg:pt-32 lg:pb-20 bg-gray-50'>
      <div className='container divide-y divide-gray-200'>
        <section className='grid grid-cols-1 gap-5 pb-12 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col text-sm'>
            <h6 className='font-light tracking-widest text-gray-600 uppercase'>
              Sitemap
            </h6>
            <ul className='grid grid-cols-3 mt-2 mb-5 list-none'>
              {Sitemap.map((item) => (
                <li key={item.id} className='mb-2 mr-2'>
                  <Link href={item.link}>
                    <a className='inline-block font-normal text-gray-500 transition duration-500 ease-in-out transform hover:text-primary-500'>
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='text-sm'>
            <h6 className='font-light tracking-widest text-gray-600 uppercase'>
              Made with 🖤 and ☕
            </h6>
            <p className='mt-2 font-normal leading-relaxed text-gray-700'>
              This website was built with Next.js and React, the content is
              stored with Sanity.io, and the data is queried with Apollo and
              GraphQL.
            </p>
          </div>
          <div className='text-sm'>
            <h6 className='font-light tracking-widest text-gray-600 uppercase'>
              Socials
            </h6>
            <ul className='flex flex-row flex-wrap mt-2 list-none'>
              {Socials.map((item) => (
                <li key={item.id} className='mb-2 mr-2'>
                  <a
                    href={item.url}
                    target='_blank'
                    className='inline-flex flex-row items-center px-3 py-1.5 text-gray-600 transition duration-500 ease-in-out border border-gray-200 rounded-sm group hover:border-primary-500'
                  >
                    {item.icon}
                    <p className='ml-2 group-hover:text-primary-500'>
                      {item.title}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className='pt-10'>
          <small className='block font-sans text-xs font-light text-center text-gray-500 md:text-sm'>
            © Ahmad Ihsan, all rights reserved.
          </small>
        </section>
      </div>
    </footer>
  );
}
