import Link from 'next/link';
import { Sitemap } from '../../Sitemap';
import { Socials } from '../../Socials';

export default function Footer() {
  return (
    <footer className='relative flex flex-col items-center justify-center py-16 md:py-24 lg:py-32 bg-gray-50'>
      <div className='container'>
        <section className='grid grid-cols-2 gap-5 md:grid-cols-3'>
          <div className='flex flex-col'>
            <h6 className='text-base font-light text-gray-600'>Sitemap</h6>
            <ul className='flex flex-row mt-2 mb-5 list-none'>
              {Sitemap.map((item) => (
                <li key={item.id} className='mr-2'>
                  <Link href={item.link}>
                    <a className='inline-block font-normal text-gray-500 transition duration-500 ease-in-out transform hover:text-primary-500 hover:scale-95'>
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <small className='font-sans text-sm font-light text-gray-700'>
              © Ahmad Ihsan, all rights reserved.
            </small>
          </div>
          <p className='text-sm text-center text-gray-700'>
            This website was built with Next.js and React, the content is stored
            with Sanity.io, and the data is queried with Apollo and GraphQL.
          </p>
          <div>
            <h6 className='text-base font-light text-gray-600'>Socials</h6>
            <ul className='flex flex-col mt-2 list-none'>
              {Socials.map((item) => (
                <li key={item.id} className='mb-1.5'>
                  <a
                    href={item.url}
                    target='_blank'
                    className='inline-flex flex-row items-center text-gray-600 group'
                  >
                    {item.icon}
                    <p className='ml-2 text-sm group-hover:text-primary-500'>
                      {item.title}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
}
