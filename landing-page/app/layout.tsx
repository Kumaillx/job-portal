import '../styles/globals.css';

export const metadata = {
  title: 'Job Portal',
  description: 'Find your dream job easily.',
};

export default function RootLayout({children} : Readonly<{children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
