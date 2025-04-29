import Button from "../../atoms/Button/Button";
import style from "./HeroIzq.module.css"

function HeroIzq() {
  return (
    <div className={style.box}>
      <h1 className={style.title}>
        A Simple Bookmark <br />Manager
      </h1>

      <p className={style.p}>
        {`A clean and simple interface to organize your favourite websites.Open a
        new browser tab and see your sites load instantly.Try it for free.`}
      </p>
      <div className={style.heroCallToAction}>
        <Button>Get it on Chrome </Button>
        <Button class="navbar" >Get it on Firefox </Button>
      </div>
    </div>
  );
}

export default HeroIzq;
