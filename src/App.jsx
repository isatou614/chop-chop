import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Popular from "./components/Popular.jsx";
import Areas from "./components/Areas.jsx";
import DownloadCTA from "./components/DownloadCTA.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Popular />
        <Areas />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
