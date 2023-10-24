import './globals.css';

export const metadata = {
  title: 'Unwanted crap',
  description: 'Selling unwanted crap to make money',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
