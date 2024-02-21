import * as React from "react";
// import NextAppDirEmotionCacheProvider from "tss-react/next/appDir";

import "./globals.css";

// load css
import "simplebar-react/dist/simplebar.min.css";
import "react-quill/dist/quill.snow.css";

export const dynamic = "force-dynamic";

interface IProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/favicon.svg" />
        <link
          rel="apple-touch-icon"
          href="/assets/icons/apple-touch-icon.png"
        />
        <link
          rel="manifest"
          crossOrigin="use-credentials"
          href="/assets/manifest.json"
        />
        {/* fonts */}
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        /> */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        /> */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&display=swap"
          rel="stylesheet"
        /> */}
        {/* vendors */}
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}
      </head>
      <body>
        <div id="oneTap" className="fixed top-0 right-0" />

        {children}

        <script async defer src="https://accounts.google.com/gsi/client" />
      </body>
    </html>
  );
}
