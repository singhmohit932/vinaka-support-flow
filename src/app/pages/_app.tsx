import type { AppProps } from 'next/app';
import { ContactFormProvider } from '@/context/ContactFormContext';
import ContactForm from '@/components/ContactForm';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContactFormProvider>
      <Component {...pageProps} />
      <ContactForm />
    </ContactFormProvider>
  );
}
