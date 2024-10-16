import Footer from "@components/Footer/Footer";
import Nav from "@components/Nav/Nav";
import Provider from "@components/Provider/Provider";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>
          <main className='app'>
            <Nav />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
