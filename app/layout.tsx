'use client';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Caveat } from 'next/font/google';
import Header from './components/layout/Header';
import { ContactFormProvider } from './components/providers/ContactFormProvider';
import { ToastContainer } from 'react-toastify';

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={caveat.variable}>
        <ContactFormProvider>
          <Header />
          <main>{children}</main>
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
