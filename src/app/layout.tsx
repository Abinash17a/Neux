import Header from '../app/components/Header';
import Footer from '../app/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <body className="bg-black text-white">
              <Header />
              <main>{children}</main>
              <Footer />
          </body>
      </html>
  );
}
