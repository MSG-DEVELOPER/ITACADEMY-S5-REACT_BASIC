import "./App.css";
import NavbarHeader from "./components/molecules/NavbarHeader/NavbarHeader";
import Hero from "./components/organisms/Hero";
import NavbarTab from "./components/organisms/Navbar-tab/Navbar-tab";
function App() {

  const textHero="Our aim is to make it quick and easy for you to acces your favourite websites.Your bookmarks sync between your devices so you can acces them on the go."

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
        <section style={{marginTop:"2.5rem",display:"flex",alignItems:"center", justifyContent:"center",border:"solid 5px blue" , width:"100%"}}>
           
            <NavbarTab/>
        </section>
      </main>
    </div>
  );
}

export default App;
