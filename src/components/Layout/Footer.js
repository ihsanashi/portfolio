import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Sitemap } from '../../Sitemap';
import { Socials } from '../../Socials';
import { useTheme } from 'next-themes';
import { BiSun, BiMoon } from 'react-icons/bi';

const themes = [
  { value: 'light', label: 'Light', icon: BiSun },
  { value: 'dark', label: 'Dark', icon: BiMoon },
];

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <footer className='relative flex flex-col items-center justify-center py-16 border-t border-gray-200 dark:border-gray-700 md:py-24 lg:pt-32 lg:pb-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container max-w-5xl mx-auto'>
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <div className='flex flex-col flex-wrap items-start justify-start'>
            <img
              className='w-6 h-6 md:h-8 md:w-8 lg:h-10 lg:w-10'
              src='/ai-logo.svg'
              alt='Ahmad Ihsan logo'
            />
            <div className='mt-3.5 font-light text-gray-400 dark:text-gray-300'>
              <p className='text-sm'>Copyright © Ahmad Ihsan.</p>
              <p className='text-sm my-1.5'>All rights reserved.</p>
              <p className='text-xs'>Made with 💙 and ☕</p>
            </div>
          </div>
          <div className='flex flex-col text-sm'>
            <p className='text-sm font-normal tracking-normal text-gray-600 dark:text-gray-300'>
              Sitemap
            </p>
            <ul className='mt-2 mb-5 list-none'>
              {Sitemap.map((item) => (
                <li key={item.id} className='mb-2'>
                  <Link href={item.link}>
                    <a className='inline-block text-base font-normal text-gray-400 transition duration-500 ease-in-out transform dark:text-gray-300 dark:hover:text-primary-400 hover:text-primary-500'>
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='divide-y divide-gray-200 dark:divide-gray-800'>
            <div className='pb-5'>
              <p className='text-sm font-normal tracking-normal text-gray-600 dark:text-gray-300'>
                Socials
              </p>
              <ul className='flex flex-row flex-wrap mt-2 list-none'>
                {Socials.map((item) => (
                  <li key={item.id} className='inline-flex'>
                    <a
                      href={item.url}
                      target='_blank'
                      className='inline-flex flex-row items-center px-3 py-1.5 transition duration-500 ease-in-out rounded-sm group'
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='pt-5'>
              <label aria-label='theme-toggle'>
                <select
                  name='theme'
                  id='theme-select'
                  aria-label='Change colour theme'
                  value={theme}
                  onChange={(e) => setTheme(e.currentTarget.value)}
                  className='inline mt-1 text-gray-800 bg-gray-100 border-gray-200 rounded-md appearance-none dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50'
                >
                  {themes.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
