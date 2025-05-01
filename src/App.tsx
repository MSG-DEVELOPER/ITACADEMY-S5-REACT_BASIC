import "./App.css";
import NavbarHeader from "./components/molecules/NavbarHeader/NavbarHeader";
import Hero from "./components/organisms/Hero";

function App() {

  const textHero="Our aim is to make it quick and easy for you to acces your favourite websites.Your bookmarks sync between your devices so you can acces them on the go."

  return (
    <div>
      <header>
        <NavbarHeader />
      </header>
      <main>
        {/* contiene las seccinoes (sections) osea el cuerpo */}
        <section>
          {/* primera seccion , moleculaIzq(texto hardcodeado + atomoBoton + atomoBoton) + img hardcodeada */}
          <Hero />
          {/* imagen hardecodeada */}
        </section>
        <section className="section_textFeatures">
          <h2>Features</h2>
          <p className="p-textFeatures">{textHero}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
