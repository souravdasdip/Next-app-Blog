import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

//site meta data
export const metaData = {
  title: "AIPedia",
  description: "Discover & Share the AI blogs.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
