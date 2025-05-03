import css from "./Searching.module.css";
import Button from "../../../atoms/Button/Button";

function Searching() {
  const paragraf =
    "Organize your bookmarks however you like.Our simple drag-and-drop interface gives you complete control over how you manage yor favourites sites.";
  return (
    <div className={css.container}>
      <div>
        <img
          src="/illustration-features-tab-2.svg"
          alt="pantalla de pc"
         className={css.image}
        />
      </div>
      <div
       className={css.featuresContent}
      >
        <h2>Search like ligth </h2>
        <p>{paragraf}</p>
        <Button>More Info</Button>
      </div>
    </div>
  );
}

export default Searching;
