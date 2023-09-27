import './globals.css';
import { metaConfig } from '@/../meta.config';
import { notoSans } from '@/fonts';
import Link from 'next/link';

// static metadata
// export const metadata = { ...metaConfig };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Font set up
    <html lang="ko" className={notoSans.className}>
      <head>
        {/* default meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Link href={'/'}>
          <h1 className="main-title">Study with Next v.13</h1>
        </Link>
        <div>{children}</div>
      </body>
    </html>
  );
}
