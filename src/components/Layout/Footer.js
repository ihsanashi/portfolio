import Link from 'next/link';
import Image from 'next/image';
import { Sitemap } from '../../Sitemap';
import { Socials } from '../../Socials';
import { TechLogos } from '../../TechLogos';

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
          <div className='order-3 text-sm md:col-span-2 lg:order-2 lg:col-span-1'>
            <p className='font-light tracking-widest text-gray-600 uppercase'>
              Built with
            </p>
            <ul className='grid grid-cols-4 mt-2 gap-y-5'>
              {TechLogos.map((item, index) => (
                <li key={index}>
                  <a href={item.href} target='_blank'>
                    <Image
                      layout='fixed'
                      objectFit='contain'
                      src={item.src}
                      alt={item.altText}
                      height={56}
                      width={56}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='order-2 text-sm md:order-2 lg:order-3'>
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
        <section className='pt-8 md:pt-10'>
          <div className='flex flex-col flex-wrap items-center justify-between font-sans text-xs font-light text-gray-500 md:flex-row md:text-sm'>
            <p>© Ahmad Ihsan, all rights reserved.</p>
            <p className='mt-4 md:mt-0'>Made with 🖤 and ☕</p>
          </div>
        </section>
      </div>
    </footer>
  );
}
