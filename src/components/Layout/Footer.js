import Link from 'next/link';
import Image from 'next/image';
import { Sitemap } from '../../Sitemap';
import { Socials } from '../../Socials';
import { TechStack } from '../../Tech';

export default function Footer() {
  return (
    <footer className='relative flex flex-col items-center justify-center py-16 border-t border-gray-200 md:py-24 lg:pt-32 lg:pb-20 bg-gray-50'>
      <div className='container'>
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col text-sm'>
            <p className='text-sm font-medium tracking-wide text-gray-600 uppercase'>
              Sitemap
            </p>
            <ul className='grid grid-cols-3 mt-2 mb-5 list-none'>
              {Sitemap.map((item) => (
                <li key={item.id} className='mb-2 mr-2'>
                  <Link href={item.link}>
                    <a className='inline-block text-base font-light text-gray-500 transition duration-500 ease-in-out transform hover:text-primary-500'>
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='order-3 text-sm md:col-span-2 lg:order-2 lg:col-span-1'>
            <p className='text-sm font-medium tracking-wide text-gray-600 uppercase'>
              Built with
            </p>
            <ul className='grid grid-cols-3 mt-2 md:grid-cols-5'>
              {TechStack.map((item, index) => (
                <li key={index} className='mb-2 mr-2'>
                  <a
                    href={item.href}
                    target='_blank'
                    className='inline-block font-light text-gray-500 transition duration-500 ease-in-out transform hover:text-primary-500'
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='order-2 text-sm md:order-2 lg:order-3'>
            <p className='text-sm font-medium tracking-wide text-gray-600 uppercase'>
              Socials
            </p>
            <ul className='flex flex-row flex-wrap mt-2 list-none'>
              {Socials.map((item) => (
                <li key={item.id} className='mb-2 mr-2'>
                  <a
                    href={item.url}
                    target='_blank'
                    className='inline-flex flex-row items-center px-3 py-1.5 text-gray-600 transition duration-500 ease-in-out border border-gray-200 rounded-sm group hover:border-primary-500'
                  >
                    {item.icon}
                    <p className='ml-2 text-gray-500 group-hover:text-primary-500'>
                      {item.title}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className='pt-8 md:pt-10'>
          <div className='flex flex-row flex-wrap items-start justify-start'>
            <img
              className='w-5 h-5 md:h-8 md:w-8'
              src='/ai-logo.svg'
              alt='Ahmad Ihsan logo'
            />
            <div className='ml-2.5'>
              <p className='text-sm font-light text-gray-500 pb-1.5'>
                © Ahmad Ihsan, all rights reserved.
              </p>
              <p className='text-xs text-gray-500 font-extralight'>
                Made with 🖤 and ☕
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
