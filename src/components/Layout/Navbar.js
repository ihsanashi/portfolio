import { useState, useEffect } from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Sitemap } from '../../Sitemap';
import { BiMenuAltRight, BiX } from 'react-icons/bi';

export default function Navbar() {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (process.browser) {
      window.addEventListener('resize', updateWidth);
      if (isShow) {
        if (width > 768) {
          setIsShow(false);
        }
      }
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, [width]);

  return (
    <div className='sticky top-0 left-0 z-40 bg-white border-b border-gray-100 dark:bg-black dark:border-gray-900 bg-opacity-95'>
      <nav className='flex flex-none w-full py-4 mx-auto'>
        <div className='container'>
          <section className='flex items-center justify-between flex-none'>
            <div className='z-20 flex-none'>
              <Link href='/'>
                <img
                  className='h-7.5 w-7.5 md:h-12 md:w-12'
                  src='/ai-logo.svg'
                  alt='Ahmad Ihsan logo'
                />
              </Link>
            </div>
            <div className='flex-grow'></div>
            <div className='flex-grow'>
              <ul
                className={`${
                  isShow
                    ? 'flex flex-col items-start justify-center fixed right-0 top-0 w-full h-full z-10 py-4 px-12 bg-gray-50 dark:bg-primary-900'
                    : 'hidden md:flex flex-row items-center justify-between'
                }`}
              >
                {Sitemap.filter(
                  (item) => !item.title.toLowerCase().includes('contact')
                ).map((filtered) => (
                  <li
                    key={filtered.id}
                    className='w-full my-8 md:w-auto md:my-0'
                  >
                    <Link
                      className={`py-1 font-normal border-b border-transparent hover:text-primary-500 hover:border-primary-500 transition duration-500 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 block md:inline-block text-2xl md:text-base ${
                        router.pathname === filtered.link
                          ? 'text-primary-500 dark:text-primary-400'
                          : 'text-gray-500 md:dark:text-gray-400'
                      }`}
                      href={filtered.link}
                    >
                      {filtered.title}
                    </Link>
                  </li>
                ))}
                {Sitemap.filter((item) =>
                  item.title.toLowerCase().includes('contact')
                ).map((filtered) => (
                  <li
                    key={filtered.id}
                    className='w-full my-8 md:w-auto md:my-0'
                  >
                    <Link
                      className={`px-5 py-2 border rounded-md transition duration-500 ease-in-out text-center transform hover:-translate-y-0.5 hover:scale-105 block md:inline-block text-2xl md:text-base ${
                        router.pathname === filtered.link
                          ? 'bg-primary-500 text-primary-50 md:bg-transparent border-gray-300 dark:border-gray-700 md:dark:text-primary-400 md:text-primary-600'
                          : 'bg-white hover:text-white dark:bg-black hover:bg-primary-500 dark:hover:bg-primary-400 text-primary-500 border-primary-500'
                      }`}
                      href={filtered.link}
                    >
                      {filtered.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsShow(!isShow)}
                aria-label='Menu icon'
                className='absolute z-20 block text-3xl md:hidden top-4 right-6'
              >
                {isShow ? (
                  <BiX className='text-gray-400' />
                ) : (
                  <BiMenuAltRight className='text-primary-600 dark:text-primary-400' />
                )}
              </button>
            </div>
          </section>
        </div>
      </nav>
    </div>
  );
}
