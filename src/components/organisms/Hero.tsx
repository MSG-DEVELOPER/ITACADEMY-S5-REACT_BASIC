import css from './Hero.module.css'
import HeroIzq from "../molecules/HeroIzq/HeroIzq";

function Hero() {
  return (
    <div className={css.container}>
      <HeroIzq />

      <img src="/illustration-hero.svg" alt="esto es un alt" className={css.image}/>
    </div>
  );
}

export default Hero;
