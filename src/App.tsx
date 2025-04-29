import "./App.css";
import NavbarHeader from "./components/molecules/NavbarHeader/NavbarHeader";
import Hero from "./components/organisms/Hero";

function App() {

 
    

  return (
    <div>
      <header>
     
        {/* aqui va el navbarheader que se compone de un logo hardcodeado y una molecula de 3 atomos botones*/}
        <NavbarHeader />

       
      </header>
      <main>
        {/* contiene las seccinoes (sections) osea el cuerpo */}
        <section>
        {/* primera seccion , moleculaIzq(texto hardcodeado + atomoBoton + atomoBoton) + img hardcodeada */}
          <Hero/>
          {/* imagen hardecodeada */}
          
        </section>
       
      </main>
    </div>
  );
}

export default App;
