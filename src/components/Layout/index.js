import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='bg-white dark:bg-primary-900'>{children}</main>
      <Footer />
    </>
  );
}
