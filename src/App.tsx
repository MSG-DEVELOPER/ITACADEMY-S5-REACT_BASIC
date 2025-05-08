import "./App.css";
import NavbarHeader from "./components/molecules/NavbarHeader/NavbarHeader";
import Hero from "./components/organisms/Hero";
import NavbarTab from "./components/organisms/Navbar-tab/Navbar-tab";
import DownloadZone from "./components/organisms/DownloadZone/DownloadZone";

function App() {
  const textHero =
    "Our aim is to make it quick and easy for you to acces your favourite websites.Your bookmarks sync between your devices so you can acces them on the go.";
  const textDownload =
    "We've got more browsers in the pipeline.Please do let us know if you've got a favourite you'd like us to prioritize ";

  return (
    <div>
      <header>
        <NavbarHeader />
      </header>
      <main>
        <section>
          <Hero />
        </section>
        <section className="section_textFeatures">
          <h2>Features</h2>
          <p className="p-textFeatures">{textHero}</p>
        </section>
        <section className="section_Features">
          <NavbarTab />
        </section>
        <section className="section_textDownload">
          <h2>Download the extension</h2>
          <p className="p-textDownload">{textDownload}</p>
        </section>
        <section className="section_Download">
          <DownloadZone />
        </section>
      </main>
    </div>
  );
}

export default App;
