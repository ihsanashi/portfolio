import Image from 'next/image';
import Link from 'next/link';
import { Sitemap } from '../../Sitemap';

export default function Navbar() {
  return (
    <div className='sticky top-0 left-0 z-40 flex flex-none w-full py-4 mx-auto bg-white shadow-sm'>
      <div className='container'>
        <nav className='flex items-center flex-none'>
          <div className='flex-none'>
            <Link href='/'>
              <a>
                <Image
                  src='/ai-logo.svg'
                  layout='fixed'
                  height={48}
                  width={48}
                />
              </a>
            </Link>
          </div>
          <div className='flex flex-row items-center flex-auto justify-evenly'>
            {Sitemap.filter(
              (item) => !item.title.toLowerCase().includes('contact')
            ).map((filtered) => (
              <Link href={filtered.link} key={filtered.id}>
                <a className='pb-1 font-normal text-gray-700 border-b border-transparent hover:text-primary-500 hover:border-primary-500'>
                  {filtered.title}
                </a>
              </Link>
            ))}
          </div>
          <div className='flex-none'>
            {Sitemap.filter((item) =>
              item.title.toLowerCase().includes('contact')
            ).map((filtered) => (
              <Link href={filtered.link} key={filtered.id}>
                <a className='px-5 py-2 bg-white border rounded-md text-primary-500 hover:text-white hover:bg-primary-500 border-primary-500'>
                  {filtered.title}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
