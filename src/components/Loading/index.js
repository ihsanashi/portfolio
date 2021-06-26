import { BiLoaderAlt } from 'react-icons/bi';

export default function Loading() {
  return (
    <main>
      <section className='h-screen'>
        <div className='container flex flex-col items-center justify-center h-full'>
          <BiLoaderAlt size={48} className='animate-spin text-primary-400' />
        </div>
      </section>
    </main>
  );
}
