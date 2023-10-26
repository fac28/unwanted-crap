import { BasketContextProvider } from '../context/basket.context';
import './globals.css';

export const metadata = {
  title: 'Unwanted crap',
  description: 'Selling unwanted crap to make money',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;500;900&family=Manrope:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BasketContextProvider>{children}</BasketContextProvider>
      </body>
    </html>
  );
}
