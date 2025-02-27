'use client';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Caveat, Asap_Condensed } from 'next/font/google';
import Header from './components/layout/Header';
import { ContactFormProvider } from './components/providers/ContactFormProvider';
import { ToastContainer } from 'react-toastify';
import { useSectionScroll } from './hooks/useSectionScroll';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
});

const asapCondensed = Asap_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-asap-condensed',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useSectionScroll();
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${asapCondensed.variable} antialiased relative`}>
        <ContactFormProvider>
          <Header />
          <div className="relative">
            <main>{children}</main>
          </div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </ContactFormProvider>
      </body>
    </html>
  );
}
